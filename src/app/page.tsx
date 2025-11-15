import { Container } from '@/components/layout/Container'
import Newsletter from '@/components/home/Newsletter'
import Feed from '@/components/home/Feed'
import Career from '@/components/home/Career'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import { BlogCard } from '@/components/home/BlogCard'
import { getAllBlogs, type BlogType } from '@/lib/blogs'
import { ProjectCard } from '@/components/project/ProjectCard'
import { GithubProjectCard } from '@/components/project/GithubProjectCard'
import {
  projectHeadLine,
  projectIntro,
  projects,
  githubProjects,
  blogHeadLine,
  blogIntro,
  techIcons,
} from '@/config/infoConfig'
import GithubContributions from '@/components/home/GithubCalendar'
import { CustomIcon } from '@/components/shared/CustomIcon'
import IconCloud from '@/components/ui/icon-cloud'
import { Button } from '@/components/Button'

export default async function Home() {
  let blogList = (await getAllBlogs()).slice(0, 4)
  // console.log('blogList: ', blogList)

  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="md:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight opacity-80 sm:text-3xl">
              {headline}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {introduction}
            </p>
            <p className="mt-24 text-base text-muted-foreground"> 社交媒体：</p>
            <SocialLinks className="md:mt-6" />
          </div>
          <div className="relative ml-auto flex size-full w-full items-center justify-center overflow-hidden px-20 md:mr-8 md:w-2/3 md:px-0">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          <GithubContributions />
        </div>
        {/* blogs */}
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {blogHeadLine}
          </h2>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground">
            {blogIntro}
          </p>
          {blogList.map((blog: BlogType) => (
            <BlogCard key={blog.slug} blog={blog} titleAs="h3" />
          ))}
          <div>
            <Button href="/blogs" variant="primary">
              View all posts
              <svg
                className="ml-1 h-4 w-4 stroke-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          {/* <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <CustomIcon name='github' size={28}/>
            Open Source
          </h2> */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {githubProjects.map((project) => (
              <GithubProjectCard
                key={project.name}
                project={project}
                titleAs="h3"
              />
            ))}
          </ul>
        </div>
        <div className="mx-auto my-8 flex max-w-xl flex-col gap-6 border-t border-muted py-8 lg:max-w-none">
          <h2 className="text-3xl font-semibold tracking-tight opacity-80 md:text-5xl">
            {projectHeadLine}
          </h2>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground">
            {projectIntro}
          </p>
        </div>
        {/* projects */}
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          {/* left column */}
          {/* blog */}
          <div className="flex flex-col gap-16">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-1 md:grid-cols-2"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  titleAs="h3"
                />
              ))}
            </ul>
          </div>

          {/* right column */}
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Career />
            <Education />

            {/* <Newsletter /> */}
            <Feed />
          </div>
        </div>
      </Container>
    </>
  )
}
