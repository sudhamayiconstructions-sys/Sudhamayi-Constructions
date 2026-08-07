import {
  MessageCircleMore,
  ClipboardList,
  Hammer,
  ShieldCheck,
  KeyRound,
} from "lucide-react";

import { motion } from "framer-motion";

import FadeInSection from "../animations/FadeInSection";
import SlideRight from "../animations/SlideRight";

const process = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understanding your vision, requirements, and construction goals.",
    icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Detailed planning, budgeting, scheduling, and project preparation.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Executing every stage with premium workmanship and quality materials.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Every detail is inspected carefully before project completion.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Project Handover",
    description:
      "Delivering your dream home with complete customer satisfaction.",
    icon: KeyRound,
  },
];

export default function Process() {
  return (
    <section
      id="process"
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

            <div className="mb-24 text-center">

              <div className="mb-8 flex items-center justify-center gap-8">

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

                <span className="text-xs font-semibold uppercase tracking-[10px] text-amber-400">
                  OUR PROCESS
                </span>

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">

                From Vision
                <br />

                <span className="text-white">
                  To Reality
                </span>

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

                Every successful project follows a structured journey.
                From the first consultation to the final handover,
                we ensure transparency, quality, and excellence at every step.

              </p>

            </div>

          </SlideRight>

          {/* Timeline Starts Here */}

          <div className="relative">
            <div className="relative mx-auto max-w-5xl">

  {/* Center Timeline */}

  <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-amber-400/20 via-amber-400 to-amber-400/20 lg:block"></div>

  {process.map((step, index) => {

    const Icon = step.icon;
    const left = index % 2 === 0;

    return (

      <motion.div
        key={index}
        initial={{
          opacity: 0,
          x: left ? -80 : 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
        }}
        className={`
          relative
          mb-20
          flex
          items-center
          ${left ? "lg:justify-start" : "lg:justify-end"}
        `}
      >

        {/* Timeline Circle */}

        <div
          className="
            absolute
            left-1/2
            hidden
            h-6
            w-6
            -translate-x-1/2
            rounded-full
            border-4
            border-amber-400
            bg-black
            shadow-[0_0_20px_rgba(251,191,36,0.45)]
            lg:block
          "
        />

        {/* Card */}

        <motion.div
          whileHover={{
            y: -10,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            group
            relative
            w-full
            lg:w-[44%]
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
            hover:shadow-[0_25px_60px_rgba(251,191,36,0.15)]
          "
        >

          {/* Glow */}

          <div
            className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_65%)]
            "
          />

          {/* Step Number */}

          <p
            className="
              relative
              z-10
              text-sm
              uppercase
              tracking-[5px]
              text-amber-400
              font-semibold
            "
          >

            Step {step.number}

          </p>

          {/* Icon */}

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              relative
              z-10
              mt-6
              mb-7
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
            "
          >

            <Icon
              size={30}
              className="text-amber-400"
            />

          </motion.div>

          {/* Title */}

          <h3
            className="
              relative
              z-10
              text-3xl
              font-bold
              text-white
            "
          >

            {step.title}

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

            {step.description}

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

        </div> {/* End Timeline */}

      </div> {/* End Main Container */}

    </FadeInSection>

    </section>
  );
}