import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Hammer,
  CalendarDays,
} from "lucide-react";

export default function OngoingProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
  y: -8,
  scale: 1.01,
}}
      transition={{ duration: 0.35 }}
      className="
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-amber-400/60
        hover:shadow-[0_25px_60px_rgba(251,191,36,0.15)]
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE */}

        <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_70%)] z-10 pointer-events-none"></div>

          <img
            src={project.image}
            alt={project.name}
            className="
               h-[320px]
md:h-[500px]
lg:h-[700px]
w-full
object-cover
transition-transform
duration-700
hover:scale-105
            "
          />

        </div>

        {/* RIGHT SIDE */}

        <div className="flex h-full flex-col justify-center p-12 lg:p-16">

          <h3 className="text-5xl font-bold text-white leading-tight">

            {project.name}

          </h3>

          <div className="mt-10 space-y-8">

            {/* Structure */}

            <div className="flex gap-5">

              <Building2
                className="text-amber-400 mt-1"
                size={26}
              />

              <div>

                <p className="text-gray-500 uppercase tracking-[3px] text-sm">

                  Structure

                </p>

                <p className="mt-2 text-xl text-white">

                  {project.structure}

                </p>

              </div>

            </div>

            {/* Location */}

            <div className="flex gap-5">

              <MapPin
                className="text-amber-400 mt-1"
                size={26}
              />

              <div>

                <p className="text-gray-500 uppercase tracking-[3px] text-sm">

                  Location

                </p>

                <p className="mt-2 text-xl text-white">

                  {project.location}

                </p>

              </div>

            </div>

            {/* Status */}

            <div className="flex gap-5">

              <Hammer
                className="text-amber-400 mt-1"
                size={26}
              />

              <div>

                <p className="text-gray-500 uppercase tracking-[3px] text-sm">

                  Current Status

                </p>

                <div className="mt-3">

                  <span
                    className="
                      rounded-full
border
border-amber-400/30
bg-amber-400/15
px-5
py-2
font-medium
text-amber-400
backdrop-blur-md
                    "
                  >

                    {project.status}

                  </span>

                </div>

              </div>

            </div>
            {/* Progress */}

<div className="mt-12">

  <div className="flex items-center justify-between">

    <p className="text-sm uppercase tracking-[3px] text-gray-500">

      Progress

    </p>

    <p className="text-amber-400 font-semibold">

      {project.progress}%

    </p>

  </div>

  <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10">

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${project.progress}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="h-full rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.6)]"
    />

  </div>

  <p className="mt-4 text-gray-300">

    {project.progress}% Complete

  </p>

</div>

{/* Divider */}

<div className="my-10 h-px bg-white/10"></div>

{/* Completion */}

<div className="flex items-center gap-5">

  <CalendarDays
    className="text-amber-400"
    size={26}
  />

  <div>

    <p className="text-sm uppercase tracking-[3px] text-gray-500">

      Expected Completion

    </p>

    <p className="mt-2 text-xl text-white">

      {project.completion}

    </p>

  </div>

</div>

          </div>

        </div>

      </div>

    </motion.div>
  );
}