import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Courses from './components/Courses'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Courses />
      <Features />
      <LeadForm />
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kazify.ai • Learn and build with AI</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
