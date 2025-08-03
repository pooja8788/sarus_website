import React from 'react'

const ProductGrid = () => {
  const products = [
    {
      category: "MULTIPLE PAYLOAD COMPATIBLE VTOL",
      name: "SHOURYA",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop&crop=center"
    },
    {
      category: "MULTIPLE PAYLOAD COMPATIBLE",
      name: "TORNA",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop&crop=center"
    },
    {
      category: "MODERN AGRICULTURE SOLUTION",
      name: "KISAN DRONE",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
    },
    {
      category: "MADE FOR SURVEILLANCE & MAPPING",
      name: "ANANT",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&h=300&fit=crop&crop=center"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              <div className="bg-navy-light rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-navy/60"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                    LEARN MORE
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs mb-1">{product.category}</p>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
