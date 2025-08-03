import React from 'react'
import { MapPin, Headphones, FileText } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "OFFICE LOCATION",
      description: "Find our offices"
    },
    {
      icon: Headphones,
      title: "SUPPORT",
      description: "Get help and support"
    },
    {
      icon: FileText,
      title: "SAFETY INSTRUCTIONS",
      description: "Safety guidelines"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group cursor-pointer">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-navy transition-colors">
                    <Icon className="h-8 w-8 text-navy group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
