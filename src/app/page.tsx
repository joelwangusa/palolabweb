import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import AiAnalysisImage from "../../public/home_ai_analysis.png";
import RealTimeProcessingImage from "../../public/home_real_time_processing.png";
import AutomatedWorkflowImage from "../../public/home_automated_workflows.png";

export default async function Home() {
  // You can fetch data here using Next.js 15's async components
  // const data = await fetchSomeData()

  return (
    <div className="min-h-screen bg-white">
      {/*
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-700">Palo Labs secures $25M Series A funding for AI innovation" to "Polo Alto has partnered with xxx, Inc, which has over 10 million users, to deliver innovative solutions aimed at enhancing scalability and user experience.</p>
          <Link href="/about" className="text-blue-600 hover:text-blue-700 flex items-center">
            Read more here
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div> */}
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -right-4 top-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 mb-8">
              Empowering Innovation, Accelerating Growth
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Full-Service AI Consulting & Development
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-1xl mx-auto">
            At Palo Lab AI, we provide comprehensive AI consulting tailored precisely to your business needs. Whether you require full-service AI development, seamless collaboration with your internal teams, or rapid MVP creation, our dedicated experts deliver solutions quickly, reliably, and effectively.
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
              <Link
                href="/contact"
                className="rounded-full px-8 py-4 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-all"
              >
                GET IN TOUCH
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full px-8 py-4 text-base font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="mt-32 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={ AiAnalysisImage }
                alt="AI Analysis"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Illustration of quick product launch or agile prototyping</h3>
            <p className="mt-4 text-gray-600">
              Turn your vision into reality quickly with agile prototyping and rapid MVP development. We deliver scalable, market-ready products to validate your ideas fast.
            </p>
          </div>
          <div className="relative">
            <div className="h-[300px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={ RealTimeProcessingImage }
                alt="Real-time Processing"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Qualified AI Engineering Teams</h3>
            <p className="mt-4 text-gray-600">
              Extend your team seamlessly with experienced AI developers specializing in large language models (LLMs) and machine learning, enabling your in-house teams to focus on strategic innovation.
            </p>
          </div>
          <div className="relative">
            <div className="h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={ AutomatedWorkflowImage }
                alt="Automated Workflows"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-gray-900">Enterprise-grade, Scalable Solutions</h3>
            <p className="mt-4 text-gray-600">
              Build robust, scalable AI and technology solutions trusted by platforms with millions of users, luxury e-commerce brands, and large-scale applications.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gray-50 px-6 py-16 sm:px-12 sm:py-24">
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enhance Your Team with AI Expertise
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Palo Lab AI provides specialized, experienced AI developers who seamlessly integrate with your team, allowing you to focus on driving your core business forward.
          </p>
          <div className="mt-10">
            <Link
          href="/contact"
          className="rounded-full px-8 py-4 text-base font-semibold text-white bg-gray-900 transition-all"
            >
          Start Your Project
            </Link>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

