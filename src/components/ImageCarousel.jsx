import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex space-x-4 overflow-hidden">
            <div className="flex-shrink-0 w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center" 
                alt="Drone in field"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex-shrink-0 w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center" 
                alt="Mountain landscape"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex-shrink-0 w-1/4">
              <img 
                src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=300&h=400&fit=crop&crop=center" 
                alt="Drone on beach"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ImageCarousel
