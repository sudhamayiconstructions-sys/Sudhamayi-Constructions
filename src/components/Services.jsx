import {
  Home,
  Building2,
  Hammer,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import FadeInSection from "../animations/FadeInSection";
import SlideRight from "../animations/SlideRight";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description:
      "We build premium independent homes with superior craftsmanship, modern construction techniques, and durable materials for comfortable family living.",
  },
  {
    icon: Building2,
    title: "Apartment Construction",
    description:
      "We specialize in constructing high-quality apartment projects with structural excellence, modern design, and timely project completion.",
  },
  {
    icon: Hammer,
    title: "Contract Construction",
    description:
      "Own a plot? We construct your dream home according to your approved plans, budget, and specifications from foundation to final handover.",
  },
];

function Services() {
  return (
    <section id="services"
      id="services"
      className="relative overflow-hidden bg-black text-white pt-28 pb-24 px-6"
    >

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-400/5 blur-[180px]"></div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}

        <FadeInSection>

          <div className="text-center mb-16">

            <div className="flex items-center justify-center gap-8">

              <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>

              <p className="uppercase tracking-[10px] text-amber-400 text-sm font-semibold whitespace-nowrap">
                OUR SERVICES
              </p>

              <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>

            </div>

            <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">

              Building Excellence,

              <br />

              <span className="text-white">
                One Project at a Time
              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-400">

              From independent homes to apartment projects, we provide reliable
              construction solutions backed by quality workmanship,
              transparency, and complete customer satisfaction.

            </p>

          </div>

        </FadeInSection>

        {/* Cards */}

        <div className="mt-6 grid lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

  const Icon = service.icon;

  return (

    <SlideRight
      key={index}
      delay={index * 0.12}
    >

      <motion.div

        whileHover={{
          y: -16,
          scale: 1.03,
        }}

        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}

        className="group relative min-h-[560px] h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"

      >

        {/* Amber Glow */}

        <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">

          <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/12 blur-[120px]"></div>

        </div>

        {/* Border */}

        <div className="absolute inset-0 rounded-[32px] border border-transparent transition-all duration-500 group-hover:border-amber-400/40"></div>

        <div className="absolute left-0 bottom-0 h-px w-0 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-500 group-hover:w-full"></div>
        <div className="relative z-10 flex h-full flex-col p-10">

          {/* Icon */}

          <motion.div

            whileHover={{
              rotate: 10,
              scale: 1.12,
            }}

            transition={{
              duration: 0.30,
            }}

            className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-amber-400/70 group-hover:shadow-[0_0_70px_rgba(251,191,36,0.28)]"

          >

            <Icon
              size={30}
              className="text-amber-400"
            />

          </motion.div>

          {/* Title */}

          <h3 className="text-3xl font-semibold leading-snug text-white">

            {service.title}

          </h3>

          {/* Divider */}

          <div className="my-8 h-px w-24 mx-auto lg:mx-0 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent transition-all duration-500 group-hover:w-56"></div>

          {/* Description */}

          <p className="flex-grow text-center leading-8 text-gray-400">

            {service.description}

          </p>

          {/* Learn More */}

          <button

            className="group/button mt-8 mx-auto inline-flex w-fit items-center gap-3 text-white transition-all duration-300 hover:text-amber-400"

          >

            <span className="font-semibold">

              Learn More

            </span>

            <ArrowRight

              size={18}

              className="transition-transform duration-300 group-hover/button:translate-x-2"

            />

          </button>

        </div>

      </motion.div>

    </SlideRight>

  );

})}

                </div>

        {/* Bottom Divider */}

        <div className="mt-20 flex justify-center">

          <div className="h-px w-[420px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"></div>

        </div>

      </div>

    </section>
  );
}

export default Services;