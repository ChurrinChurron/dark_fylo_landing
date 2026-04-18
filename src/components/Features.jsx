import FeaturesCard from './FeaturesCard'
import iconAnywhere from '../assets/icon-access-anywhere.svg'
import iconSecurity from '../assets/icon-security.svg'
import iconCollaboration from '../assets/icon-collaboration.svg'
import iconAnyFile from '../assets/icon-any-file.svg'

const features = [
  {
    icon: iconAnywhere,
    title: 'Access your files, anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    icon: iconSecurity,
    title: 'Security you can trust',
    description:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    icon: iconCollaboration,
    title: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    icon: iconAnyFile,
    title: 'Store any type of file',
    description:
      'Whether you’re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.',
  },
]

const Features = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((feature) => (
          <FeaturesCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Features