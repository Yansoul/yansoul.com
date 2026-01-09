'use client'

import { useEffect, Suspense } from 'react'
import posthog from 'posthog-js'
import { usePathname, useSearchParams } from 'next/navigation'

function PostHogAnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 初始化 PostHog
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // 禁用自动页面浏览捕获，我们手动处理
        capture_pageleave: true, // 启用页面离开事件
      })
    }
  }, [])

  useEffect(() => {
    // 手动捕获页面浏览事件
    if (pathname && posthog.__loaded) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogAnalytics() {
  return (
    <Suspense fallback={null}>
      <PostHogAnalyticsInner />
    </Suspense>
  )
}
