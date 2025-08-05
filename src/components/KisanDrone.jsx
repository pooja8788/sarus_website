// src/pages/KisanDrone.jsx
import React from "react";

const KisanDrone = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="text-center px-4 bg-[url('/icons/bg.png')] bg-cover bg-center text-[#1e1e2f] min-h-screen pb-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0c1958] mt-6">
          KISAN DRONE
        </h1>
        <p className="text-lg md:text-xl text-[#0c1958] font-medium mt-1">
          By SARUS AEROSPACE PVT LTD
        </p>
        <div className="flex justify-center mt-2 mb-4">
          <img
            src="/icons/kisan-drone.png"
            alt="Kisan Drone"
            className="max-w-[500px] w-full drop-shadow-2xl"
          />
        </div>
        <div className="inline-block bg-[#0c1958] text-white px-4 py-1 text-sm font-semibold rounded-full -mt-4 mb-6">
          DGCA CERTIFIED
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 text-justify text-base leading-relaxed py-6">
        <p>
          10L agriculture drone sprays up to 8 acres/hour with 4 nozzles,
          autonomous/manual modes, and a 2–3.5m spray width perfect for fast,
          efficient farm coverage. Lightweight, foldable, and equipped with a
          brushless pump, flow meter, smart controller, and high-capacity
          battery for precision spraying and ease of use.
        </p>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          {
            label: "28.2 KG",
            icon: "weight.jpeg",
            desc: "MAX TAKE-OFF WEIGHT",
          },
          {
            label: "15 min",
            icon: "flight-time.jpeg",
            desc: "MAX FLIGHT TIME",
          },
          {
            label: "TOOL LESS",
            icon: "folding.png",
            desc: "FOLDING DESIGN / FIXED ARMS",
          },
          { label: "8 Acre/Hour", icon: "field.jpg", desc: "FIELD COVERAGE" },
          {
            label: "98.43 ft",
            icon: "altitude.jpg",
            desc: "OPERATING ALTITUDE",
          },
          { label: "10 LITER", icon: "tank.jpg", desc: "TANK CAPACITY" },
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className="font-bold text-base md:text-lg mb-2">
              {feature.label}
            </h3>
            <img
              src={`/icons/${feature.icon}`}
              alt={feature.desc}
              className="w-12 mb-2"
            />
            <p className="text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Use Cases Grid */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          {
            title: "PRECISION SPRAYING",
            image: "/icons/precision-spraying.png",
          },
          {
            title: "FERTILIZER SPREADING",
            image: "/icons/fertilizer-spreading.jpg",
          },
          {
            title: "FLOWER DROPING",
            image: "/icons/flower-droping.webp", // If it's a typo, correct it in the filename too
          },
          {
            title: "DELIVERING",
            image: "/icons/delivering.jpg",
          },
          {
            title: "WINDMILL CLEANING",
            image: "/icons/windmill-cleaning.avif",
          },
          {
            title: "SEED DROPPING",
            image: "/icons/seed-dropping.jpg",
          },
        ].map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[180px] object-cover rounded-lg shadow-md"
            />
            <h4 className="mt-2 font-semibold text-sm md:text-base">
              {item.title}
            </h4>
          </div>
        ))}
      </section>
    </div>
  );
};

export default KisanDrone;
