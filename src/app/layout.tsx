import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
//import { Cpu } from "lucide-react"
import Image from 'next/image';
import PaloLabLogoSVG from '../../public/placeholder-logo.svg';

const inter = Inter({ subsets: ["latin"] })

function PaloLabLogo() {
  return (
    <Image
      src={PaloLabLogoSVG}
      alt="Palo Lab"
      width={24} 
      height={24} 
    />
  );
}

export const metadata: Metadata = {
  title: "Palo Labs Inc",
  description: "Innovative AI Solutions for the Future",
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
                <PaloLabLogo className="h-8 w-8 text-gray-900" /> 
                <span className="ml-2 text-xl font-bold text-gray-900">Palo Labs Inc</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/services" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Services
                </Link>
                <Link href="/team" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Team
                </Link>
                <Link href="/portfolio" className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full px-4 py-2 text-base font-medium text-white bg-gray-900 hover:bg-gray-800"
                >
                  Contact Us
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
                  <PaloLabLogo className="h-8 w-8 text-gray-900" /> 
                  <span className="ml-2 text-xl font-bold text-gray-900">Palo Labs Inc</span>
                </Link>
                <p className="mt-4 text-base text-gray-600">Transforming businesses with innovative AI solutions.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-600 hover:text-gray-900">
                      About
                    </Link>
                  </li>
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
                    <a href="mailto:info@palolabs.ai" className="text-base text-gray-600 hover:text-gray-900">
                      info@palolabs.ai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
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



import './globals.css'