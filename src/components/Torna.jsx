// src/components/Torna.jsx
import React from "react";

export default function Torna() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full bg-[url('/bg1.jpg')] bg-cover bg-center pt-8">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-6xl font-extrabold text-[#0a0a23]">TORNA</h1>
          <p className="mt-2 text-lg font-medium">By SARUS AEROSPACE PVT LTD</p>
          <div className="mt-8">
            <img
              src="/3d_500-removebg-preview.png"
              alt="Main Drone"
              className="mx-auto w-full max-w-4xl"
            />
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-center">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          <strong>TORNA</strong> is a next generation, indigenous drone designed
          for <strong>surveillance, mapping, and inspection</strong> Ready for
          Type Certification!. Engineered for versatility and built to perform
          in demanding environments, it combines advanced capabilities with a
          compact, foldable design offering an efficient, reliable, and
          affordable aerial solution for modern operations.
        </p>
      </section>

      {/* Stats */}
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
            src="camera1.PNG"
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

      {/* Drone Side Image */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-center">
        <img
          src="/drone-side.png"
          alt="Drone Side View"
          className="mx-auto w-full"
        />
        <p className="mt-2 text-sm font-medium">
          MULTIPLE ANTENNA POSITIONS FOR LONG RANGE COMMUNICATION
        </p>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-12">
        <div className="text-center">
          <img src="/battery.png" alt="Swappable Battery" className="mx-auto" />
          <h4 className="mt-2 text-sm font-medium">SWAPPABLE BATTERY</h4>
        </div>
        <div className="text-center">
          <img
            src="/camera1.PNG"
            alt="Multi Payload Support"
            className="mx-auto"
          />
          <h4 className="mt-2 text-sm font-medium">MULTI PAYLOAD SUPPORT</h4>
        </div>
        <div className="text-center">
          <img
            src="/1.png"
            alt="Easy Foldable Mechanism"
            className="mx-auto"
          />
          <h4 className="mt-2 text-sm font-medium">EASY FOLDABLE MECHANISM</h4>
        </div>
        <div className="text-center">
          <img src="/ppk-rtk.png" alt="PPK & RTK Enabled" className="mx-auto" />
          <h4 className="mt-2 text-sm font-medium">PPK & RTK ENABLED</h4>
        </div>
      </section>

      {/* Payload */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-center text-lg font-bold mb-8">PAYLOAD</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="/payload1.png" alt="LR1 Camera" className="mx-auto" />
            <p className="mt-2 text-xs">
              LR1 is a 61MP full-frame industrial camera with E-mount lens
              support and full remote operation for high precision imaging
              applications.
            </p>
          </div>
          <div>
            <img src="/payload2.png" alt="A8 Mini Camera" className="mx-auto" />
            <p className="mt-2 text-xs">
              A8 Mini is a lightweight 4K Ultra HD gimbal camera with 6X zoom,
              night vision, 3-axis stabilization.
            </p>
          </div>
          <div>
            <img src="/payload3.png" alt="ZT6 Mini" className="mx-auto" />
            <p className="mt-2 text-xs">
              ZT6 Mini is a dual-sensor gimbal payload featuring 4K 8MP optical
              zoom, 640×512 thermal imaging, temperature measurement, and 540°
              yaw rotation.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "MINING",
            "RENEWABLE ENERGY",
            "AGRICULTURE",
            "INSPECTION & SURVEY",
            "CONSTRUCTION",
            "DEFENCE",
          ].map((title, i) => (
            <div key={i} className="text-center">
              <img
                src={`/industry-${i + 1}.png`}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <h4 className="mt-2 text-sm font-medium">{title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
