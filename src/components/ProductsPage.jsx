
// src/components/ProductsPage.jsx
import React from "react";

export default function ProductsPage() {
  return (
    <div className="w-full bg-gray-100">
      {/* Top Product Navigation */}
      <section className="w-full bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto flex justify-around items-center px-4">
          {[
            { name: "TORNA", img: "/3d_500-removebg-preview.png" },
            { name: "SHOURYA", img: "/shourya-removebg-preview.png" },
            { name: "AGRICULTURE", img: "/icons/kisan-drone.png" },
            { name: "ANANT", img: "/anant.png" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto h-20 object-contain"
              />
              <p className="mt-2 text-sm font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Large Banner ANANT */}
      <section
        className="relative w-full h-[400px] flex items-center justify-between px-8"
        style={{
          backgroundImage: "url('/banner-anant.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Foreground Drone Image */}
        <div className="flex-shrink-0 ml-8">
          <img
            src="/drone-anant.png"
            alt="Anant Drone"
            className="h-72 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="text-right text-[#0a0a23] max-w-md mr-16">
          <h2 className="text-4xl font-bold">ANANT</h2>
          <p className="mt-2 text-lg">MADE FOR SURVEILLANCE & MAPPING</p>
          <button className="mt-4 px-6 py-2 border border-[#0a0a23] rounded-full hover:bg-[#0a0a23] hover:text-white transition">
            LEARN MORE &gt;
          </button>
        </div>
      </section>

      {/* Two Columns AGRICULTURE / TORNA */}
      <section className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 mt-4">
        {/* Agriculture */}
        <div className="relative">
          <img
            src="/agriculture-banner.jpg"
            alt="Agriculture Drone"
            className="w-full h-[400px] object-cover"
          />

          {/* Top text */}
          <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-center text-black">
            <h2 className="text-3xl font-bold">AGRICULTURE</h2>
            <p className="mt-1">FARMERS TRUE FRIEND</p>
          </div>

          {/* Button below drone */}
          <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2">
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              LEARN MORE &gt;
            </button>
          </div>
        </div>

        {/* Torna */}
        <div className="relative">
          <img
            src="/torna-banner.jpg"
            alt="Torna Drone"
            className="w-full h-[400px] object-cover"
          />

          {/* Top text */}
          <div className="absolute top-[5%] left-1/2 -translate-x-1/2 text-center text-black">
            <h2 className="text-3xl font-bold">TORNA</h2>
            <p className="mt-1">MULTIPLE PAYLOAD COMPATIBLE</p>
          </div>

          {/* Button below drone */}
          <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2">
            <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
              LEARN MORE &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Large Banner SHOURYA */}
      {/* <section
        className="relative w-full h-[400px] flex items-center justify-between px-8 mt-4"
        style={{
          backgroundImage: "url('/banner-shourya.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-shrink-0 ml-8">
          <img
            src="/shourya-removebg-preview.png"
            alt="Shourya Drone"
            className="h-72 object-contain"
          />
        </div>

        <div className="text-right text-[#0a0a23] max-w-md mr-16">
          <h2 className="text-4xl font-bold">SHOURYA</h2>
          <p className="mt-2 text-lg">HIGH PERFORMANCE LONG RANGE DRONE</p>
          <button className="mt-4 px-6 py-2 border border-[#0a0a23] rounded-full hover:bg-[#0a0a23] hover:text-white transition">
            LEARN MORE &gt;
          </button>
        </div>
      </section> */}
    </div>
  );
}
