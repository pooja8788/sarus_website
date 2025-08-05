// src/pages/Anant.jsx
import React from "react";

const Anant = () => {
  return (
    <div className="bg-white font-poppins text-[#1e1e2f]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-200 to-white text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-md tracking-wide mt-2 mb-0 leading-none">
            ANANT
          </h1>
          <p className="text-lg md:text-xl text-white font-medium mt-0 mb-2 leading-tight">
            By SARUS AEROSPACE PVT LTD
          </p>
          <div className="flex justify-center">
            <img
              src="icons\DISPLAY_1__2_-removebg-preview.png"
              alt="Anant Drone"
              className="max-w-[450px] w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-5xl mx-auto px-4 text-justify text-lg leading-relaxed py-8">
        <p>
          Versatile, Modular, and <strong>Ready for Type Certification!</strong>{" "}
          We at Sarus Aerospace are thrilled to introduce our Drone Frame,
          designed for manufacturers looking for a robust, adaptable, and market
          ready platform. This innovative frame provides the{" "}
          <strong>
            ideal foundation for type certification, customization,
          </strong>{" "}
          and market readiness. Drone solutions tailored for diverse
          applications, including defence, agriculture, surveillance, and
          logistics.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        <div>
          <img
            src="/icons/weight.jpeg"
            alt="Weight"
            className="mx-auto w-20 mb-4"
          />
          <h3 className="font-bold">5 KG</h3>
          <p className="text-sm">MAX TAKE-OFF WEIGHT</p>
        </div>
        <div>
          <img
            src="/icons/flight-time.jpeg"
            alt="Flight Time"
            className="mx-auto w-20 mb-4"
          />
          <h3 className="font-bold">45 min</h3>
          <p className="text-sm">MAX FLIGHT TIME WITH 1KG PAYLOAD</p>
        </div>
        <div>
          <img
            src="/icons/folding.png"
            alt="Toolless"
            className="mx-auto w-20 mb-4"
          />
          <h3 className="font-bold">TOOL LESS</h3>
          <p className="text-sm">FOLDING DESIGN / FIXED ARMS</p>
        </div>
        <div>
          <img
            src="/icons/sqkm.jpeg"
            alt="Coverage"
            className="mx-auto w-20 mb-4"
          />
          <h3 className="font-bold">1 SQ KM</h3>
          <p className="text-sm">IN ONE FLIGHT</p>
        </div>
        <div>
          <img
            src="/icons/camera.png"
            alt="Payload"
            className="mx-auto w-20 mb-4"
          />
          <h3 className="font-bold">MULTIPLE PAYLOAD</h3>
          <p className="text-sm">COMPATIBILITY</p>
        </div>
        <div>
          <img
            src="/icons/wind.jpeg"
            alt="Wind Speed"
            className="mx-auto w-20 mb-4"
          />
          <h3 className="font-bold">10m/s</h3>
          <p className="text-sm">MAX WIND SPEED RESISTANCE</p>
        </div>
      </section>

      {/* Application Images Grid */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          { title: "MINING", image: "/icons/mining.webp" },
          { title: "RENEWABLE ENERGY", image: "icons/renewable.jpg" },
          { title: "AGRICULTURE", image: "/icons/agriculture.webp" },
          { title: "INSPECTION & SURVEY", image: "/icons/survey.png" },
          { title: "CONSTRUCTION", image: "/icons/construction.webp" },
          { title: "DEFENCE", image: "/icons/defence.avif" },
        ].map(({ title, image }, index) => (
          <div key={index}>
            <img
              src={image}
              alt={title}
              className="w-full h-[180px] object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 font-semibold text-sm md:text-base">{title}</h4>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Anant;
