import React from 'react'

const InnovationSection = () => {
  const services = [
    {
      title: "MODERN FARMING",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "SURVEILLANCE",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "LONG RANGE HIGH PERFORMANCE",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center"
    }
  ]

  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-navy mb-4">Redefining Innovation in the Skies</h2>
        <h3 className="text-2xl font-semibold text-navy mb-8">SARUS AEROSPACE</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Driven by discovery, we transform new technology into real world breakthroughs, 
          shaping the future with every innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-navy/20"></div>
              </div>
              <h4 className="text-lg font-semibold text-navy">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InnovationSection
