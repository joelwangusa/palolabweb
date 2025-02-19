import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    expertise: "AI Strategy, Business Development",
  },
  { name: "John Smith", role: "CTO", image: "/placeholder.svg", expertise: "Machine Learning, Cloud Architecture" },
  {
    name: "Alice Johnson",
    role: "Lead AI Researcher",
    image: "/placeholder.svg",
    expertise: "Natural Language Processing, Computer Vision",
  },
  {
    name: "Peter Chen",
    role: "Senior Full-Stack Developer",
    image: "/placeholder.svg",
    expertise: "React, Node.js, Python, DevOps",
  },
  {
    name: "Marco Rossi",
    role: "Data Scientist",
    image: "/placeholder.svg",
    expertise: "Big Data Analytics, Statistical Modeling",
  },
  {
    name: "Emily Taylor",
    role: "UX/UI Designer",
    image: "/placeholder.svg",
    expertise: "User-Centered Design, Prototyping",
  },
  {
    name: "Larry Zhang",
    role: "Backend Architect",
    image: "/placeholder.svg",
    expertise: "Microservices, Database Design, API Development",
  },
]

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-700">Meet the experts behind our innovative solutions</p>
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 flex items-center">
            Join our team
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
              Our Team
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Meet the Innovators Behind Palo Labs
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts covers all aspects of full-stack development and AI technologies, driving
              innovation and excellence in every project.
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

        {/* CTA Section */}
        <div className="mt-32">
          <div className="relative rounded-2xl bg-gray-900 px-6 py-16 sm:px-12 sm:py-24">
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Team of Innovators</h2>
              <p className="mt-6 text-lg text-gray-300">
                We&apos;re always looking for talented individuals to help us push the boundaries of AI technology.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-full px-8 py-4 text-base font-semibold text-gray-900 bg-white hover:bg-gray-100 transition-all"
                >
                  Explore Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

