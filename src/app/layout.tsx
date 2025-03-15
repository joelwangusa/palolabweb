import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from 'next/image'
import Link from "next/link"
import "./globals.css"
//import { Cpu } from "lucide-react"
import { Linkedin, Github } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

// Custom X (formerly Twitter) icon component
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  );
}

function PaloLabLogo() {
  return (
      <Image
        src='/placeholder-logo.png'
        alt="Palo Lab"
        width={24} 
        height={24} 
      />
  );
}

export const metadata: Metadata = {
  title: "Palo Lab AI | Full-Service AI Consulting & Development",
  description: "Empowering Innovation, Accelerating Growth",
  icons: {
    icon: [
      { url: '/placeholder-logo.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: { url: '/placeholder-logo.svg' },
    other: {
       rel: 'mask-icon',
       url: '/placeholder-logo.svg',
       color: '#0055a0',
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center">
                {/* <Cpu className="h-8 w-8 text-gray-900" /> */}
                <PaloLabLogo /> 
                <span className="ml-2 text-xl font-bold text-gray-900">Palo Labs.ai</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                {/*
                <Link href="/about" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/services" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Services
                </Link>
                */}
                <Link href="/portfolio" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Portfolio
                </Link>
                <Link href="/team" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Team
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full px-4 py-2 text-base font-medium text-white bg-gray-900 hover:bg-gray-800"
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <Link href="/" className="flex items-center">
                  {/* <Cpu className="h-8 w-8 text-gray-900" /> */}
                  <PaloLabLogo /> 
                  <span className="ml-2 text-xl font-bold text-gray-900">Palo Labs.ai</span>
                </Link>
                <p className="mt-4 text-base text-gray-600">Empowering Innovation, Accelerating Growth</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/team" className="text-base text-gray-600 hover:text-gray-900">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-base text-gray-600 hover:text-gray-900">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-gray-600 hover:text-gray-900">
                      Get in Touch
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:contact@palolabs.ai" className="text-base text-gray-600 hover:text-gray-900">
                      contact@palolabs.ai
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                      +1 (650)-444-1303
                    </a>
                  </li>                
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              {/* Social Media Links */}
              <div className="flex justify-center space-x-6 mb-6">
                <a 
                  href="https://linkedin.com/company/palolabai"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/palolabai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">X (formerly Twitter)</span>
                  <XIcon className="h-6 w-6" />
                </a>                
                <a 
                  href="https://github.com/palolabai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </div>
              <p className="text-base text-gray-400 text-center">
                © {new Date().getFullYear()} Palo Labs Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}