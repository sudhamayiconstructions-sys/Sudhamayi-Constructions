import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import FadeInSection from "../animations/FadeInSection";
import SlideRight from "../animations/SlideRight";
import projects from "../data/projects";



const featuredProjects = [
  projects[0],
  projects[4],
  projects[5],
  projects[7],
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.06),transparent_60%)]"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      <FadeInSection>
        <div className="relative z-10 mx-auto max-w-5xl px-6">

          {/* Heading */}
          <SlideRight>
            <div className="mb-16 text-center">

              <div className="mb-8 flex items-center justify-center gap-6">

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

                <span className="text-xs font-semibold uppercase tracking-[10px] text-amber-400">
                  Featured Projects
                </span>

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

              </div>

              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Crafted With Precision,
                <br />
                Built To Last
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
                Discover some of Sudhamayi Constructions' finest residential
                and apartment projects, showcasing our commitment to quality,
                elegance, and modern architectural excellence.
              </p>

            </div>
          </SlideRight>

          {/* Projects Grid Starts Here */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

  {featuredProjects.map((project, index) => (

    <motion.div
  key={project.id}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -12 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.15,
  }}
  className="group"
>

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.02]
          h-[480px]
          transition-all
          duration-500

          hover:border-amber-400/60
          hover:shadow-[0_25px_60px_rgba(251,191,36,0.15)]
        "
      >

        {/* Project Image */}

        <img
          src={project.image}
          alt={project.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/40
            to-black/10
            transition-all
            duration-500
            group-hover:from-black/95
            group-hover:via-black/45
          "
        />

        {/* Amber Glow */}

        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.12),transparent_65%)]
          "
        />

        {/* Floating Badge */}

        <div
          className="
            absolute
            left-6
            top-6
            rounded-full
            border
            border-white/20
            bg-black/50
            px-4
            py-2
            backdrop-blur-md
          "
        >

          <span className="text-xs uppercase tracking-[3px] text-amber-300">
            {project.category}
          </span>

        </div>

        {/* Bottom Content */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
          "
        >

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >

            <p className="mb-2 text-sm uppercase tracking-[4px] text-amber-400">
              {project.title}
            </p>

            <h3
              className="
                text-3xl
                font-bold
                text-white
                transition-colors
                duration-300
                group-hover:text-amber-300
              "
            >
              {project.name}
            </h3>

            <div
              className="
                mt-5
                h-[2px]
                w-14
                bg-amber-400
                transition-all
                duration-500
                group-hover:w-36
              "
            />

          </motion.div>

        </div>

        {/* Hover Arrow */}

        <div
          className="
            absolute
            right-7
            top-7
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/45
            opacity-0
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >

          <ArrowRight
            size={20}
            className="
              text-amber-300
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </div>

      </div>

    </motion.div>

  ))}

</div>
          {/* View More Button */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-20 flex justify-center"
          >
            <Link
              to="/portfolio"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-8
                py-4
                text-white
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-amber-400/60
                hover:bg-white/[0.05]
                hover:shadow-[0_15px_45px_rgba(251,191,36,0.18)]
              "
            >
              {/* Glow */}
              <span
                className="
                  absolute
                  inset-0
                  bg-[radial-gradient(circle,rgba(251,191,36,0.15),transparent_70%)]
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <span
  className="
    relative
    z-10
    text-sm
    font-semibold
    uppercase
    tracking-[4px]
    transition-colors
    duration-300
    group-hover:text-amber-400
  "
>
  View More Projects
</span>

              <ArrowRight
  size={18}
  className="
    relative
    z-10
    text-white
    transition-all
    duration-300
    group-hover:translate-x-2
    group-hover:text-amber-400
  "
/>
            </Link>
          </motion.div>

          {/* Bottom Divider */}

          <div className="mt-24 flex justify-center">
            <div className="h-px w-72 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}