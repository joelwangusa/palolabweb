import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "CTO, Tech Innovators Inc.",
    content:
      "Palo Labs has revolutionized our AI capabilities. Their custom solutions have significantly improved our efficiency and decision-making processes.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "CEO, Future Systems",
    content:
      "Working with Palo Labs was a game-changer for our company. Their expertise in AI and machine learning helped us stay ahead of the competition.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Head of Innovation, Global Solutions",
    content:
      "The team at Palo Labs is exceptional. Their innovative approach to problem-solving and cutting-edge technology have greatly enhanced our product offerings.",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Our Clients Say</p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-900/5 rounded-lg"
              >
                <div>
                  <div className="flex items-center gap-x-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="h-5 w-5 fill-gray-200 stroke-gray-200" />
                    ))}
                  </div>
                  <div className="mt-6 text-lg leading-8 text-gray-600">"{testimonial.content}"</div>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

