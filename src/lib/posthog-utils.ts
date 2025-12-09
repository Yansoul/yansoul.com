/**
 * PostHog 工具函数
 * 提供常用的 PostHog 操作封装
 */

import posthog from 'posthog-js'

/**
 * 追踪自定义事件
 * @param eventName 事件名称
 * @param properties 事件属性
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>,
) {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.capture(eventName, properties)
  }
}

/**
 * 追踪外部链接点击
 * @param url 外部链接 URL
 * @param linkText 链接文本
 */
export function trackExternalLink(url: string, linkText?: string) {
  trackEvent('external_link_clicked', {
    url,
    link_text: linkText,
  })
}

/**
 * 追踪表单提交
 * @param formName 表单名称
 * @param formData 表单数据（不要包含敏感信息）
 */
export function trackFormSubmit(
  formName: string,
  formData?: Record<string, any>,
) {
  trackEvent('form_submitted', {
    form_name: formName,
    ...formData,
  })
}

/**
 * 追踪错误
 * @param errorMessage 错误信息
 * @param errorContext 错误上下文
 */
export function trackError(
  errorMessage: string,
  errorContext?: Record<string, any>,
) {
  trackEvent('error_occurred', {
    error_message: errorMessage,
    ...errorContext,
  })
}
