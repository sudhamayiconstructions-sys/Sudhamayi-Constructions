import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import FadeInSection from "../animations/FadeInSection";

import projects from "../data/projects";

export default function Portfolio() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("All");
  const filteredProjects =
  filter === "All"
    ? projects
    : projects.filter(
        (project) => project.category === filter
      );
  return (
    <section id="portfolio" className="relative min-h-screen overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.06),transparent_60%)]" />

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

          {/* Back Button */}

          <Link
            to="/"
            className="group mb-16 inline-flex items-center gap-3 text-gray-300 transition hover:text-amber-400"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-2"
            />
            Back to Home
          </Link>

          {/* Heading */}

          <div className="mb-20 text-center">

            <div className="mb-8 flex items-center justify-center gap-8">

              <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

              <span className="text-xs uppercase tracking-[10px] text-amber-400">
                Portfolio
              </span>

              <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            </div>

            <h1 className="text-5xl font-bold text-white">
              Our Completed Projects
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Every project reflects our commitment to craftsmanship,
              quality construction, and timeless architecture.
            </p>
            {/* Filter Buttons */}

<div className="mt-14 flex flex-wrap justify-center gap-5">

  {["All", "Apartment", "Independent House"].map((item) => (

    <button
      key={item}
      onClick={() => setFilter(item)}
      className={`
        rounded-full
        border
        px-8
        py-3
        text-sm
        font-semibold
        uppercase
        tracking-[3px]
        transition-all
        duration-500
        backdrop-blur-xl

        ${
          filter === item
            ? "border-amber-400 bg-amber-400 text-black shadow-[0_0_30px_rgba(251,191,36,0.30)]"
            : "border-white/10 bg-white/[0.03] text-white hover:border-amber-400/60 hover:text-amber-400 hover:bg-white/[0.05]"
        }
      `}
    >

      {item}

    </button>

  ))}

</div>

          </div>

          {/* Portfolio Grid */}

<div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

  {filteredProjects.map((project, index) => (

    <motion.div
      key={project.id}
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
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          transition-all
          duration-500
          hover:border-amber-400/60
          hover:shadow-[0_25px_60px_rgba(251,191,36,0.15)]
        "
      >

        {/* Image */}

        <div className="aspect-[4/5] overflow-hidden">

          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

        </div>

        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-transparent
            to-transparent
          "
        />

        {/* Content */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-7
          "
        >

          <p className="text-xs uppercase tracking-[4px] text-amber-400">

            {project.title}

          </p>

          <h3
            className="
              mt-2
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
              mt-4
              h-[2px]
              w-14
              bg-amber-400
              transition-all
              duration-500
              group-hover:w-36
            "
          />

          <p className="mt-5 text-gray-300">

            {project.category}

          </p>

        </div>

        {/* Floating Arrow */}

        <div
          className="
            absolute
            right-6
            top-6
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            bg-black/40
            opacity-0
            backdrop-blur-md
            transition-all
            duration-500
            group-hover:opacity-100
          "
        >

          <ArrowLeft
            className="rotate-180 text-amber-300"
            size={20}
          />

        </div>

      </motion.div>

    </motion.div>

  ))}

</div>
        </div>

      </FadeInSection>

    </section>
  );
}