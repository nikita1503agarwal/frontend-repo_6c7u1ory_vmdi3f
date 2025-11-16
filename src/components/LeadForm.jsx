import React, { useState } from 'react'

export default function LeadForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, interest, source: 'landing' })
      })
      const data = await res.json()
      if (data.status === 'ok' || data.status === 'queued') {
        setStatus('Thanks! We\'ll be in touch soon.')
        setName(''); setEmail(''); setInterest('')
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (e) {
      setStatus('Unable to submit right now. Please try later.')
    }
  }

  return (
    <section id="lead" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Join the waitlist</h3>
          <p className="mt-2 text-gray-600">Get early access to courses, live workshops, and community.</p>
          <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-3">
            <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"/>
            <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"/>
            <input value={interest} onChange={(e)=>setInterest(e.target.value)} placeholder="What do you want to learn?" className="sm:col-span-2 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"/>
            <button type="submit" className="sm:col-span-2 inline-flex justify-center items-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Join Free</button>
          </form>
          {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
        </div>
      </div>
    </section>
  )
}
