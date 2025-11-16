import React, { useEffect, useState } from 'react'

export default function Courses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/courses?featured=true&limit=6`)
        const data = await res.json()
        setCourses(data.courses || [])
      } catch (e) {
        setCourses([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <a href="#lead" className="text-indigo-600 hover:text-indigo-700">See all →</a>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : courses.length === 0 ? (
          <div className="p-6 rounded-xl border border-dashed text-gray-600">
            No courses yet. Join the waitlist and we’ll notify you when they drop.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <article key={c.id} className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-md transition-shadow">
                {c.cover_image && (
                  <img src={c.cover_image} alt={c.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-4">
                  <div className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">{c.level} • {c.category}</div>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">{c.title}</h3>
                  <p className="mt-1 text-gray-600 line-clamp-2">{c.subtitle || c.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
