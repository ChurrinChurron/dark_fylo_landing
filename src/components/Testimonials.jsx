import TestimonialsCard from './TestimonialsCard'
import quotes from '../assets/bg-quotes.png'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'

const testimonials = [
  {
    quote:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Satish Patel',
    role: 'Founder & CEO, Huddle',
    avatar: profile1,
  },
  {
    quote:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Bruce McKenzie',
    role: 'Founder & CEO, Huddle',
    avatar: profile2,
  },
  {
    quote:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Iva Boyd',
    role: 'Founder & CEO, Huddle',
    avatar: profile3,
  },
]

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-[86rem] px-6 py-16 md:px-12 md:pt-40 lg:pb-80 relative">
      <img
        src={quotes}
        alt="quotes decorative"
        className="absolute left-7 top-7 h-9 w-10 md:left-12 md:top-23 md:h-16 md:w-18"
      />
      <div className="grid gap-8 lg:grid-cols-3 lg:justify-items-center relative z-10">
        {testimonials.map((item) => (
          <TestimonialsCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials