// src/components/ContactForm.jsx
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
      _subject: 'New message from your portfolio',
    }

    try {
      const res = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="md:col-span-2 rounded-lg border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Your message has been sent. I’ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form className="md:col-span-2 grid gap-3" onSubmit={onSubmit}>
      <div className="grid md:grid-cols-2 gap-3">
        <input
          name="name"
          className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
          placeholder="Your name"
          required
        />
        <input
          type="email"
          name="email"
          className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
          placeholder="Your email"
          required
        />
      </div>
      <input
        name="subject"
        className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
        placeholder="Subject"
        required
      />
      <textarea
        name="message"
        rows={6}
        className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
        placeholder="Your message"
        required
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status==='loading'}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 disabled:opacity-60"
        >
          {status==='loading' ? 'Sending…' : <>Send <ArrowRight className="h-4 w-4"/></>}
        </button>
        {status === 'error' && <span className="text-red-600 text-sm">Something went wrong. Try again.</span>}
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">Your message will be delivered to my email.</p>
    </form>
  )
}