"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    try {
      const response = await fetch("https://formspree.io/f/mjkgpjeb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("There was an error submitting the form", error)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Thank You!
          </h1>
          <p className="text-center text-gray-300">We have received your message and will get back to you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Contact Us
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300">
            Get in touch with us for any inquiries or collaboration opportunities.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  className="py-3 px-4 block w-full shadow-sm bg-gray-700 border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="py-3 px-4 block w-full shadow-sm bg-gray-700 border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="py-3 px-4 block w-full shadow-sm bg-gray-700 border-gray-600 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
                <Send className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

