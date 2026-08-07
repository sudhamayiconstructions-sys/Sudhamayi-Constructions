import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import FadeInSection from "../animations/FadeInSection";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_65%)]"></div>

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

      {/* Decorative Circle */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/5"></div>

      <FadeInSection>
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

          {/* Small Heading */}

          <p className="text-xs font-semibold uppercase tracking-[10px] text-amber-400">
            LET'S BUILD TOGETHER
          </p>

          {/* Heading */}

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">

            Ready To Build
            <br />

            <span className="text-amber-400">
              Your Dream Home?
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400">

            Whether you're planning a premium independent house,
            an apartment project, or construction on your own plot,
            our experienced team is ready to turn your vision into reality.

          </p>

          {/* Button */}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
  group
  relative
  mt-14
  inline-flex
  items-center
  gap-3
  overflow-hidden
  rounded-full
  border
  border-white/15
  bg-white/[0.05]
  px-9
  py-4
  font-semibold
  text-white
  backdrop-blur-xl
  transition-all
  duration-500

  hover:scale-105
  hover:bg-amber-400
  hover:text-black
  hover:border-amber-400
  hover:shadow-[0_20px_60px_rgba(251,191,36,0.28)]
"
          >

            <span
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle,rgba(251,191,36,0.18),transparent_70%)]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <span className="relative z-10">
              Contact Us
            </span>

            <ArrowRight
              size={18}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />

          </motion.a>

        </div>
      </FadeInSection>
    </section>
  );
}