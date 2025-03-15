import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Joe W.",
    role: "CEO & Founder",
    image: "/team_joe.png",
    expertise: "Tech Lead & Machine Learning Engineer",
  },
  {
    name: "Peter Z.",
    role: "Senior App & Fullstack Engineer",
    image: "/team_peter.png",
    expertise: "Flutter, React, Node.js, Python, WebRTC",
  },
  {
    name: "Marco L.",
    role: "Machine Learning & Fullstack Engineer",
    image: "/team_marco.png",
    expertise: "LLMs, DevOps, Kafka, RAG, VectorDB, WebRTC",
  },
  {
    name: "Emily Z",
    role: "Senior Product Manager",
    image: "/team_emily.png",
    expertise: "Product Design, Data Analysis, Python",
  },
  {
    name: "Larry Y.",
    role: "Senior Machine Learning Engineer",
    image: "/team_larry.png",
    expertise: "Machine Learning, LLMs, RAG, Python, Java",
  },
  {
    name: "Andy S.",
    role: "Senior Web Engineer",
    image: "/team_larry.png",
    expertise: "LLMs, NextJS/React, TailwindCSS, TypeScript",
  },
]

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      {/*
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-700">Palo Labs secures $25M Series A funding for AI innovation" to "Polo Alto has partnered with GETTR USA, Inc, which has over 10 million users, to deliver innovative solutions aimed at enhancing scalability and user experience</p>
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 flex items-center">
            Join our team
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
      */}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -right-4 top-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          <div className="relative max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 mb-8">
              Our Team
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Trusted Colleagues in AI
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
              At Palo Lab AI, our expert team seamlessly integrates with yours, managing your AI initiatives so you can focus on strategic growth.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-32 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <Image
                className="w-full h-64 object-cover"
                src={person.image || "/placeholder.svg"}
                alt={person.name}
                width={300}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-blue-600">{person.role}</p>
                <p className="mt-4 text-gray-600">{person.expertise}</p>
              </div>
            </div>
          ))}
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
    </div>
  )
}

