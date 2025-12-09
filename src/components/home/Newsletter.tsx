'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { EnvelopeSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import { trackFormSubmit, trackError } from '@/lib/posthog-utils'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        trackFormSubmit('newsletter', {
          success: true,
        })
        setMessage('订阅成功！感谢你的订阅。')
        setEmail('')
      } else {
        throw new Error('订阅失败')
      }
    } catch (error) {
      trackError('newsletter_subscription_failed', {
        error_message: error instanceof Error ? error.message : 'Unknown error',
      })
      setMessage('订阅失败，请稍后再试。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-muted p-6"
    >
      <h2 className="flex text-sm font-semibold ">
        <EnvelopeSimple size={26} weight="duotone" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <Input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          className="min-w-0 flex-auto appearance-none rounded-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 sm:text-sm"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="ml-4 flex-none bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary"
        >
          {isSubmitting ? 'Joining...' : 'Join'}
        </Button>
      </div>
      {message && (
        <p className="mt-2 text-sm text-muted-foreground">{message}</p>
      )}
    </form>
  )
}
