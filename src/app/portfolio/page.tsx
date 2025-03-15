import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    title: "Medium social media in USA",
    description: "A medium-sized social media platform with advanced AI-driven content recommendation.",
    image: "/portfolio_social_media.png",
    technologies: ["React", "Node.js", "OpenAI", "AWS"],
  },
  {
    title: "Luxury e-commerce in Italy",
    description:
      "High-end e-commerce website with personalized shopping experiences and AI-powered inventory management.",
    image: "/portfolio_e_commerce.png",
    technologies: ["Next.js", "Java", "Shopify", "AI/ML", "GCP"],
  },
  // {
  //   title: "DataVirPro",
  //   description: "Enterprise-level data visualization tool with real-time analytics and machine learning insights.",
  //   image: "/portfolio_data.png",
  //   technologies: ["BigQuery", "Power BI", "Grafana"],
  // },
  {
    title: "Multi-Cloud Solutions in USA",
    description: "A multi-cloud expert designs, implements, and manages containerized solutions with AIOps across multiple cloud platforms.",
    image: "/portfolio_multi_cloud_solutions.png",
    technologies: ["AWS", "GCP", "VPN", "Kubernetes", "AIOps"],
  },
  //, optimizing performance, security, and cost-efficiency
  // {
  //   title: "Multi-Cloud Solutions",
  //   description: "Enterprise-level data visualization tool with real-time analytics and machine learning insights.",
  //   image: "/portfolio_multi_cloud_solutions.png",
  //   technologies: ["Vue.js", "Django", "D3.js", "Azure"],
  // },
  // {
  //   title: "Multi-Cloud Solutions",
  //   description: "Enterprise-level data visualization tool with real-time analytics and machine learning insights.",
  //   image: "/portfolio_multi_cloud_solutions.png",
  //   technologies: ["Vue.js", "Django", "D3.js", "Azure"],
  // },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      {/*      <div className="bg-gray-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <p className="text-gray-700">Discover our innovative AI solutions in action</p>
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 flex items-center">
            Start your project
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
              Our Portfolio
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transforming Businesses with AI
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped businesses transform with cutting-edge AI solutions. Our portfolio showcases the
              power of innovation in action.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-32 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
                <p className="mt-4 text-gray-600">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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

