import React from 'react'

const features = [
  {
    title: 'Hands-on Projects',
    desc: 'Learn by building real tools: chatbots, automations, and data agents.',
  },
  {
    title: 'AI Model Training',
    desc: 'Guided labs to fine-tune small models and evaluate them properly.',
  },
  {
    title: 'Career Paths',
    desc: 'Structured tracks for creators, analysts, marketers, and engineers.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
