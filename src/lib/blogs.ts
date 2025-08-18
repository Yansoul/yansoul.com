import glob from 'fast-glob'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogType = {
  title: string
  description: string
  author: string
  date: string
  slug: string
}

async function importBlog(
  blogFilename: string,
): Promise<BlogType> {
  const source = await fs.readFile(
    path.join(process.cwd(), 'src/content/blog', blogFilename),
    'utf-8'
  )
  
  const { data, content } = matter(source)
  
  // 从内容中提取前100个字符作为描述
  // 移除markdown语法和多余的空白字符
  const cleanContent = content
    .replace(/^#+\s+.*$/gm, '') // 移除标题
    .replace(/^\s*[-*+]\s+/gm, '') // 移除列表符号
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体语法
    .replace(/\*(.*?)\*/g, '$1') // 移除斜体语法
    .replace(/`(.*?)`/g, '$1') // 移除行内代码语法
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接，保留文本
    .replace(/\n\s*\n/g, ' ') // 将多个换行替换为空格
    .replace(/\s+/g, ' ') // 将多个空格替换为单个空格
    .trim()
  
  // 提取前100个字符
  const autoDescription = cleanContent.length > 100 
    ? cleanContent.substring(0, 100) + '...'
    : cleanContent
  
  // @ts-expect-error
  return {
    slug: blogFilename.replace(/\.mdx$/, ''),
    ...data,
    description: data.description || autoDescription, // 如果frontmatter中有description则使用，否则使用自动生成的
  }
}

export async function getAllBlogs() {
  let blogFileNames = await glob('*.mdx', {
    cwd: './src/content/blog',
  })

  let blogs = await Promise.all(blogFileNames.map(importBlog))

  return blogs.sort((a, z) => {
    const aDate = a.date ? +new Date(a.date) : 0;
    const zDate = z.date ? +new Date(z.date) : 0;
    return zDate - aDate;
  })
}

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  try {
    // 移除可能存在的 .mdx 扩展名
    const cleanSlug = slug.replace(/\.mdx$/, '')
    return await importBlog(`${cleanSlug}.mdx`)
  } catch (error) {
    console.error(`Failed to load blog with slug: ${slug}`, error)
    return null
  }
}