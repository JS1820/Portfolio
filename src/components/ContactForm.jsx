// src/components/ContactForm.jsx
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="md:col-span-2 rounded-lg border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
        <h3 className="text-lg font-semibold mb-2">Thank you!</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Your message has been sent successfully. I’ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xjknqdyd"
      method="POST"
      className="md:col-span-2 grid gap-3"
      onSubmit={() => setSubmitted(true)}
    >
      <div className="grid md:grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Your message"
        required
        className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
      />

      {/* Hidden fields used by Formspree */}
      <input type="hidden" name="_subject" value="New message from portfolio" />
      <input type="hidden" name="_replyto" />

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
      >
        Send <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Messages will be delivered to <strong>jeevansatish89@gmail.com</strong>
      </p>
    </form>
  );
}