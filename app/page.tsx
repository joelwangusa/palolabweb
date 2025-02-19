import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-700">Palo Labs secures $25M Series A funding for AI innovation</p>
          <Link href="/about" className="text-blue-600 hover:text-blue-700 flex items-center">
            Read more here
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
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 mb-8">
              Transforming businesses with AI
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              The only AI platform that works
              <span className="block mt-2">your whole project with you</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
              Palo Labs works with you through the full project lifecycle, taking care of complex AI tasks so you can
              operate at your highest potential.
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
              <Link
                href="/contact"
                className="rounded-full px-8 py-4 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all"
              >
                Schedule a call
              </Link>
              <Link
                href="/services"
                className="rounded-full px-8 py-4 text-base font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="mt-32 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://sjc.microlink.io/KcdWKX6Ee7gjMeOFT_H0-V5xTCLOr3bo-Hx2GFAUqnkPAiAVudqmcEAMeA1x4OKBeL4idLwUq9Jo9MvMD2XVOw.jpeg"
                alt="AI Analysis"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Advanced AI Analysis</h3>
            <p className="mt-4 text-gray-600">
              Our AI systems analyze complex data patterns to provide actionable insights for your business.
            </p>
          </div>
          <div className="relative">
            <div className="h-[300px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="https://sjc.microlink.io/KcdWKX6Ee7gjMeOFT_H0-V5xTCLOr3bo-Hx2GFAUqnkPAiAVudqmcEAMeA1x4OKBeL4idLwUq9Jo9MvMD2XVOw.jpeg"
                alt="Real-time Processing"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Real-time Processing</h3>
            <p className="mt-4 text-gray-600">
              Process and analyze data in real-time with our advanced AI infrastructure.
            </p>
          </div>
          <div className="relative">
            <div className="h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="https://sjc.microlink.io/KcdWKX6Ee7gjMeOFT_H0-V5xTCLOr3bo-Hx2GFAUqnkPAiAVudqmcEAMeA1x4OKBeL4idLwUq9Jo9MvMD2XVOw.jpeg"
                alt="Automated Workflows"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Automated Workflows</h3>
            <p className="mt-4 text-gray-600">
              Streamline your operations with intelligent automation powered by our AI.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gray-900 px-6 py-16 sm:px-12 sm:py-24">
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your business with AI?
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Join the leading companies already using Palo Labs to drive innovation.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-full px-8 py-4 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

