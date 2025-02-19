import { ArrowRight, Code, Cpu, Globe, BarChart, Shield, Cloud } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "We develop tailored software solutions to meet your specific business needs.",
    color: "blue",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Leverage the power of AI to gain insights and automate processes.",
    color: "purple",
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your applications.",
    color: "pink",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security solutions.",
    color: "green",
  },
  {
    icon: Cloud,
    title: "IoT Solutions",
    description: "Connect and manage your devices with our IoT platforms.",
    color: "indigo",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-700">Explore our comprehensive range of services</p>
          <Link href="/portfolio" className="text-blue-600 hover:text-blue-700 flex items-center">
            View our portfolio
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
              Our Services
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Comprehensive AI Solutions for Your Business
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a range of AI-powered solutions to help businesses innovate and grow in the digital age.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-32 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className={`flex items-center justify-center h-24 w-24 rounded-full bg-${service.color}-50`}>
                <service.icon className={`h-12 w-12 text-${service.color}-600`} />
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32">
          <div className="relative rounded-2xl bg-gray-900 px-6 py-16 sm:px-12 sm:py-24">
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="mt-6 text-lg text-gray-300">
                Let&apos;s discuss how our AI solutions can help you achieve your goals.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-full px-8 py-4 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

