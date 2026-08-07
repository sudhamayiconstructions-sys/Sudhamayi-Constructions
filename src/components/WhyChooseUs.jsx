import {
  BadgeCheck,
  HardHat,
  Clock3,
  Hammer,
  Handshake,
  House,
} from "lucide-react";

import { motion } from "framer-motion";

import FadeInSection from "../animations/FadeInSection";
import SlideRight from "../animations/SlideRight";

const features = [
  {
    icon: BadgeCheck,
    title: "Quality Craftsmanship",
    description:
      "Every project is built with precision, attention to detail, and superior workmanship.",
  },
  {
    icon: HardHat,
    title: "Experienced Team",
    description:
      "Skilled professionals with years of construction expertise delivering excellence.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "We complete projects efficiently while maintaining the highest quality standards.",
  },
  {
    icon: Hammer,
    title: "Premium Materials",
    description:
      "Only high-quality construction materials are used to ensure durability and strength.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description:
      "Honest communication, clear pricing, and complete trust throughout every project.",
  },
  {
    icon: House,
    title: "Customer Satisfaction",
    description:
      "Building homes and long-lasting relationships through dedication and commitment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="relative overflow-hidden bg-black py-28"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05),transparent_65%)]"></div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      <FadeInSection>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}

          <SlideRight>

            <div className="mb-20 text-center">

              <div className="mb-8 flex items-center justify-center gap-8">

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

                <span className="text-xs uppercase tracking-[10px] text-amber-400 font-semibold">
                  WHY CHOOSE US
                </span>

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">

                Building Trust,
                <br />

                Delivering Excellence

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

                Since 2016, Sudhamayi Constructions has earned the trust of
                homeowners through quality workmanship, premium construction,
                transparent communication, and timely project delivery.

              </p>

            </div>

          </SlideRight>

          {/* Cards start here */}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {

  const Icon = feature.icon;

  return (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group"
    >

      <motion.div
        whileHover={{
          y: -12,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-8
          transition-all
          duration-500
          hover:border-amber-400/60
          hover:shadow-[0_20px_60px_rgba(251,191,36,0.15)]
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_65%)]
          "
        />

        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: 8,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            relative
            z-10
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-amber-400/20
            bg-gradient-to-br
            from-amber-400/10
            to-transparent
            mb-8
          "
        >

          <Icon
            size={30}
            className="text-amber-400"
          />

        </motion.div>

        {/* Title */}

        <h3 className="relative z-10 text-2xl font-bold text-white">

          {feature.title}

        </h3>

        {/* Divider */}

        <div
          className="
            mt-5
            h-[2px]
            w-16
            bg-gradient-to-r
            from-amber-400
            to-transparent
            transition-all
            duration-500
            ease-out
            group-hover:w-40
          "
        />

        {/* Description */}

        <p
          className="
            relative
            z-10
            mt-6
            leading-8
            text-gray-400
          "
        >

          {feature.description}

        </p>

      </motion.div>

    </motion.div>

  );

})}
          </div>

          {/* Bottom Divider */}

          <div className="mt-24 flex justify-center">

            <div className="h-px w-72 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

          </div>

        </div>

      </FadeInSection>

    </section>
  );
}