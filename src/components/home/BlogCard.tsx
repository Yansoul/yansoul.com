'use client'

import { Card } from '@/components/shared/Card'
import { formatDate } from '@/lib/formatDate'
import { type BlogType } from '@/lib/blogs'
import { trackEvent } from '@/lib/posthog-utils'

export function BlogCard({
  blog,
  titleAs,
}: {
  blog: BlogType
  titleAs?: keyof JSX.IntrinsicElements
}) {
  const as = titleAs ?? 'h2'

  const handleClick = () => {
    trackEvent('blog_card_clicked', {
      article_slug: blog.slug,
      article_title: blog.title,
      article_date: blog.date,
    })
  }

  return (
    <Card as="article" onClick={handleClick}>
      <Card.Title as={as} href={`/blogs/${blog.slug}`}>
        {blog.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  )
}
