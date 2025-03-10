import { ArrowRight, Lightbulb, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-700">Palo Labs secures $25M Series A funding for AI innovation" to "Polo Alto has partnered with GETTR USA, Inc, which has over 10 million users, to deliver innovative solutions aimed at enhancing scalability and user experience.</p>
          <Link href="/team" className="text-blue-600 hover:text-blue-700 flex items-center">
            Meet our team
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -right-4 top-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 mb-8">
              About Palo Labs
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pioneering Growth with AI Innovation
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Palo Labs Inc., based in San Mateo, CA, specializes in rapidly developing AI applications, including mobile solutions and Minimum Viable Products (MVPs). We harness AI to enhance efficiency, drive innovation, and accelerate business growth.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-32 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-50">
              <Lightbulb className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Innovation</h3>
            <p className="mt-4 text-gray-600">
              We constantly push the boundaries of what's possible in AI and machine learning.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-purple-50">
              <Target className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Precision</h3>
            <p className="mt-4 text-gray-600">
              Our solutions are tailored to meet the specific needs of each client and industry.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-pink-50">
              <Zap className="h-12 w-12 text-pink-600" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Impact</h3>
            <p className="mt-4 text-gray-600">We create solutions that drive real-world change and business growth.</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-32">
          <div className="relative rounded-2xl bg-gray-900 px-6 py-16 sm:px-12 sm:py-24">
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Mission</h2>
              <p className="mt-6 text-lg text-gray-300">
                We believe in the power of technology to transform industries and improve lives. Our team of expert
                engineers and researchers work tirelessly to develop AI-powered solutions that solve complex problems
                and drive business growth.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-full px-8 py-4 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all"
                >
                  Join Our Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

