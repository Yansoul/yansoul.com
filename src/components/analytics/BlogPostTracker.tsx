'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/posthog-utils'

interface BlogPostTrackerProps {
  slug: string
  title: string
}

export function BlogPostTracker({ slug, title }: BlogPostTrackerProps) {
  useEffect(() => {
    // 追踪文章浏览
    trackEvent('blog_post_viewed', {
      slug,
      title,
    })

    // 追踪阅读时长
    const startTime = Date.now()

    return () => {
      const readTime = Math.floor((Date.now() - startTime) / 1000)
      trackEvent('blog_post_read_time', {
        slug,
        title,
        read_time_seconds: readTime,
      })
    }
  }, [slug, title])

  return null
}
