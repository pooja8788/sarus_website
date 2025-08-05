import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#d1d1db] font-[Montserrat] text-[#22253a]">
      {/* Hero Section with Logo and Heading */}
      <div className="bg-gradient-to-br from-[#221f22] to-[#c6bfc1] py-12 flex flex-col items-center">
        <img
          src="/SARUS_LOGO-removebg-preview.png"
          alt="Crane Icon"
          className="w-[180px] md:w-[220px] mb-2"
        />
        <h1 className="text-white text-[48px] md:text-[74px] font-bold tracking-widest">
          SARUS AEROSPACE
        </h1>
      </div>

      {/* About Section */}
      <main className="pt-10">
        <section className="max-w-5xl mx-auto px-4 text-justify text-lg leading-relaxed">
          <h2 className="text-[#1c2341] text-xl md:text-2xl font-bold mb-3 text-center">About us</h2>
          <p className="mb-6">
            Sarus Aerospace Pvt. Ltd., founded in 2022 in Belgaum, Karnataka, is redefining drone innovation through
            indigenous, real world UAV solutions. With over 22 drone applications deployed across defense, agriculture,
            logistics, and inspection, we build drones that deliver results. From 250g to 90kg payloads, our systems are
            tested, trusted, and built for India’s toughest environments. We offer modular UAVs for OEMs and
            integrators, enabling faster certification, lower R&D, and scalable deployment. Whether plug and play or
            purpose built, Sarus makes advanced drone tech more accessible to every industry.
          </p>

          <h2 className="text-[#1c2341] text-xl md:text-2xl font-bold mt-10 mb-3 text-center">Mission</h2>
          <p className="mb-6">
            Build 100% indigenous, high performance UAVs that solve real world challenges across sectors. We aim to
            empower industries with drones that are smart, safe, and ready for action.
          </p>

          <h2 className="text-[#1c2341] text-xl md:text-2xl font-bold mt-10 mb-3 text-center">Vision</h2>
          <p className="mb-6">
            Lead the global UAV market with drones that set new standards in reliability, endurance, and innovation. We
            envision drones as everyday tools — autonomous, intelligent, and seamlessly integrated into modern life.
          </p>
        </section>

        <section className="text-center my-8">
          <img
            src="/drone.png"
            alt="Drone Image"
            className="w-[550px] max-w-[96vw] mx-auto drop-shadow-[3px_18px_36px_#b0b0c2]"
          />
        </section>

        <section className="text-center mb-10">
          <h2 className="text-xl font-bold text-[#22253a] mb-4">Career at Sarus Aerospace Pvt Ltd</h2>
          <h2 className="text-xl font-bold text-[#22253a]">Contact us</h2>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
