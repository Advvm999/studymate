import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to StudyMate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your intelligent study companion with AI-powered tools, available in Arabic and English
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Learning Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Study Assistant */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700">
              <h3 className="text-xl font-semibold mb-3">AI Study Assistant</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant answers and explanations for your academic questions
              </p>
            </div>

            {/* Summarizer Tool */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700">
              <h3 className="text-xl font-semibold mb-3">Smart Summarizer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Convert long texts and lectures into concise, easy-to-understand summaries
              </p>
            </div>

            {/* Study Planner */}
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700">
              <h3 className="text-xl font-semibold mb-3">Study Planner</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create personalized study schedules and track your progress
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 