import React, { useState } from 'react'

const CTA = ({ overlay = false }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const getEmailError = (value) => {
    const trimmedValue = value.trim()

    if (!trimmedValue) return 'Please enter your email address'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return 'Please enter a valid email address'
    }

    return ''
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const emailError = getEmailError(email)
    setError(emailError)

    if (emailError) return

    console.log('Email válido:', email.trim())
  }

  const containerClass = overlay
    ? 'mx-auto max-w-6xl px-6'
    : 'mx-auto max-w-6xl px-6 py-16 md:px-12'

  const cardClass = overlay
    ? 'rounded-2xl bg-[var(--color-primary-800)]/80 py-8 px-8 text-center shadow-2xl shadow-[var(--color-primary-950)]/40'
    : 'rounded-2xl bg-[var(--color-primary-800)]/80 py-14 px-10 text-center shadow-2xl shadow-[var(--color-primary-950)]/40 md:p-14'

  const titleClass = overlay
    ? 'text-xl font-semibold text-white sm:text-3xl'
    : 'text-2xl font-semibold text-white sm:text-5xl'

  return (
    <section className={containerClass}>
      <div className={cardClass}>
        <h2 className={titleClass}>Get early access today</h2>
        <p className="mx-auto mt-4 max-w-2xl text-md leading-7 text-white sm:text-base">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-center"
          noValidate
        >
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (error) setError('')
            }}
            placeholder="email@example.com"
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby="email-error"
            required
            className="min-w-0 flex-1 rounded-full border border-white/10 bg-white px-9 py-5 text-slate-950 outline-none placeholder:text-gray-300 focus:border-[var(--color-accent-500)] focus:ring-4 focus:ring-[var(--color-accent-500)]/20"
          />

          <button
            type="submit"
            className="rounded-full bg-[var(--color-accent-200)] px-8 py-4 text-sm text-white cursor-pointer transition hover:opacity-90"
          >
            Get Started For Free
          </button>
        </form>

        {error ? (
          <p id="email-error" className="mt-3 text-sm text-[var(--color-error)] md:text-[1rem]">
            {error}
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default CTA