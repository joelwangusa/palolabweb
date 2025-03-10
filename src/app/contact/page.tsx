import { Send } from "lucide-react"

// Server Action for form submission
async function submitForm(formData: FormData) {
  // "use server"
  "use client"

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send this data to your backend or API
  console.log("Form submitted:", { name, email, message })

  // For demonstration, we're just returning a success message
  return { success: true, message: "Form submitted successfully!" }
}

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get in touch with us for any inquiries or collaboration opportunities.
            </p>
            <div className="mt-10">
              <form id="contact-form" action="https://formspree.io/f/mjkgpjeb" method="POST" className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Message"
                    className="block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

