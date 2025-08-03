// import React from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const HeroSection = () => {
//   return (
//     <section className="hero-gradient grid-pattern relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <p className="text-sm text-gray-600 mb-2">MULTIPLE PAYLOAD COMPATIBLE</p>
//           <h1 className="text-5xl font-bold text-navy mb-4">TORNA</h1>
//           <p className="text-lg text-gray-700 mb-2">SOLUTION FOR</p>
//           <p className="text-lg text-gray-700 mb-6">MAPPING, SURVEILLANCE & INSPECTION</p>
//           <button className="bg-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-navy-light transition-colors">
//             LEARN MORE
//           </button>
//         </div>

//         <div className="relative flex items-center justify-center">
//           <button className="absolute left-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
//             <ChevronLeft className="h-6 w-6 text-gray-600" />
//           </button>

//           <div className="max-w-2xl mx-auto">
//             <img
//               src="3d_500-removebg-preview.png"
//               alt="Torna Drone"
//               className="w-full h-auto"
//             />
//           </div>

//           <button className="absolute right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
//             <ChevronRight className="h-6 w-6 text-gray-600" />
//           </button>
//         </div>

//         <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
//           <div className="text-left">
//             <div className="flex items-center mb-2">
//               <div className="w-6 h-6 bg-navy rounded-full flex items-center justify-center mr-2">
//                 <span className="text-white text-xs">S</span>
//               </div>
//               <span className="text-sm text-gray-600">SHOURYA</span>
//             </div>
//             <p className="text-lg font-semibold text-navy">TORNA</p>
//             <p className="text-sm text-gray-600">AGRICULTURE</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

//   import React from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const HeroSection = () => {
//   return (
//     <section className="hero-gradient grid-pattern relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-12">
//           <p className="text-sm text-gray-600 mb-2">MULTIPLE PAYLOAD COMPATIBLE</p>
//           <h1 className="text-5xl font-bold text-navy mb-4">TORNA</h1>
//           <p className="text-lg text-gray-700 mb-2">SOLUTION FOR</p>
//           <p className="text-lg text-gray-700 mb-6">MAPPING, SURVEILLANCE & INSPECTION</p>
//           <button className="bg-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-navy-light transition-colors">
//             LEARN MORE
//           </button>
//         </div>

//         {/* Main content area */}
//         <div className="relative flex items-center justify-center">
//           {/* Left Arrow */}
//           <button className="absolute left-6 bottom-24 z-10 p-3 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md">
//             <ChevronLeft className="h-6 w-6 text-gray-700" />
//           </button>

//           {/* Drone Image */}
//           <div className="max-w-2xl mx-auto">
//             <img
//               src="3d_500-removebg-preview.png"
//               alt="Torna Drone"
//               className="w-full h-auto"
//             />
//           </div>

//           {/* Right Arrow */}
//           <button className="absolute right-6 bottom-24 z-10 p-3 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md">
//             <ChevronRight className="h-6 w-6 text-gray-700" />
//           </button>

//           {/* Side content below left arrow */}
//           <div className="absolute left-8 bottom-10 text-left">
//             <div className="flex items-center mb-2">
//               <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center mr-2 bg-navy">
//                 <img
//                   src="/77dd7a03-9ac5-494a-8a40-b1735ce0c5cf.png"
//                   alt="S icon"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="text-sm text-gray-600">SHOURYA</span>
//             </div>
//             <p className="text-lg font-semibold text-navy">TORNA</p>
//             <p className="text-sm text-gray-600">AGRICULTURE</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const drones = [
  {
    id: "shourya",
    name: "SHOURYA",
    image: "down_side_view-removebg-preview.png",
  },
  {
    id: "torna",
    name: "TORNA",
    image: "/3d_500-removebg-preview.png",
  },
  {
    id: "agriculture",
    name: "AGRICULTURE",
    image: "/3d_500-removebg-preview.png",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // default to TORNA
  const currentDrone = drones[currentIndex];

  const handleArrow = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "left"
        ? (prevIndex - 1 + drones.length) % drones.length
        : (prevIndex + 1) % drones.length
    );
  };

  const selectDroneById = (id) => {
    const index = drones.findIndex((drone) => drone.id === id);
    if (index !== -1) setCurrentIndex(index);
  };

  return (
    <section className="hero-gradient grid-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2">
            MULTIPLE PAYLOAD COMPATIBLE
          </p>
          <h1 className="text-5xl font-bold text-navy mb-4">
            {currentDrone.title}
          </h1>
          <p className="text-lg text-gray-700 mb-2">SOLUTION FOR</p>
          <p className="text-lg text-gray-700 mb-6">
            MAPPING, SURVEILLANCE & INSPECTION
          </p>
          <button className="bg-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-navy-light transition-colors">
            LEARN MORE
          </button>
        </div>

        {/* Main content area */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => handleArrow("left")}
            className="absolute left-6 bottom-24 z-10 p-3 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Drone Image */}
          <div className="max-w-2xl mx-auto">
            <img
              src={currentDrone.image}
              alt={currentDrone.name}
              className="w-full h-auto"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrow("right")}
            className="absolute right-6 bottom-24 z-10 p-3 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Bottom-left Text Area */}
          <div className="absolute left-8 bottom-10 text-left">
            <div className="flex flex-col items-start gap-2 mb-2">
              {drones.map((drone, index) => (
                <span
                  key={drone.id}
                  onClick={() => selectDroneById(drone.id)}
                  className={`cursor-pointer ${
                    index === currentIndex
                      ? "font-bold text-navy"
                      : "text-gray-600"
                  }`}
                >
                  {drone.name}
                </span>
              ))}
            </div>

            <p className="text-lg font-semibold text-navy">
              {currentDrone.title}
            </p>
            <p className="text-sm text-gray-600">{currentDrone.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
