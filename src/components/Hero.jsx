import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-white"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Learn. Build. Earn with AI.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Kazify.ai is your home to learn practical AI skills, train custom models, and master the tools used by top creators and teams.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#lead" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">
                Start Free
              </a>
              <a href="#courses" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800">
                Explore Courses
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">100% project-based • Beginner friendly • New lessons weekly</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-200/40 to-sky-200/40 blur-2xl rounded-3xl"/>
            <div className="relative bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-4">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center text-white">
                <div className="text-center p-6">
                  <p className="text-sm uppercase tracking-widest text-gray-300">Mini Demo</p>
                  <p className="mt-2 text-2xl font-bold">Train an AI classifier in minutes</p>
                  <p className="mt-2 text-gray-300">No code needed. Guided notebooks and templates included.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-600">
                <div className="p-3 rounded-lg bg-gray-50">ChatGPT & Prompting</div>
                <div className="p-3 rounded-lg bg-gray-50">Automation with AI</div>
                <div className="p-3 rounded-lg bg-gray-50">Build AI Apps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
