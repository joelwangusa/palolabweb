import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Team member type definition
type TeamMember = {
  id: string
  name: string
  role: string
  department: string
  bio: string
}

const teamMembers = [
  {
    "id": "1",
    "name": "Joel Wong",
    "role": "Founder",
    "department": "Executive",
    "bio": "Joel is an experienced tech leader specializing in deep learning, LLM, blokchain and large-scale system."
  },
  {
    "id": "2",
    "name": "Peter Lee",
    "role": "Senior App & Fullstack Engineer",
    "department": "Engineering",
    "bio": "Peter excels in mobile and web app development, leveraging Flutter, React, Node.js, Java, Python, and WebRTC."
  },
  {
    "id": "3",
    "name": "Pax Leung",
    "role": "Machine Learning & Fullstack Engineer",
    "department": "Engineering",
    "bio": "Pax specializes in large language models (LLMs), DevOps, Kafka, retrieval-augmented generation (RAG), VectorDB, and WebRTC."
  },
  {
    "id": "4",
    "name": "Emily Zhang",
    "role": "Senior Product Manager",
    "department": "Engineering",
    "bio": "Emily combines expertise in product design and data analysis to guide innovative AI-driven products."
  },
  {
    "id": "5",
    "name": "Larry Yang",
    "role": "Senior Machine Learning Engineer",
    "department": "Engineering",
    "bio": "Larry utilizes advanced machine learning techniques to enhance data-driven marketing strategies."
  },
  {
    "id": "6",
    "name": "Andy Sun",
    "role": "Senior Web Engineer",
    "department": "Engineering",
    "bio": "Andy is skilled in developing web applications using LLM integrations, NextJS/React, TailwindCSS, and TypeScript."
  }
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
              Palo Lab Core Team
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
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {member.department}
                  </Badge>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
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
    </div>
  )
}

