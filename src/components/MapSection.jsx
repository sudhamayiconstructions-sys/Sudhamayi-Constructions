import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

import FadeInSection from "../animations/FadeInSection";
import SlideRight from "../animations/SlideRight";

export default function MapSection() {
  return (
    <section
      id="map"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06),transparent_65%)]"></div>

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

            <div className="mb-16 text-center">

              <div className="mb-8 flex items-center justify-center gap-6">

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

                <span className="text-xs font-semibold uppercase tracking-[10px] text-amber-400">

                  FIND US

                </span>

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

              </div>

              <h2 className="text-5xl font-bold text-white">

                Visit Our Location

              </h2>

            </div>

          </SlideRight>

          {/* Card */}

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
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

            <div className="grid md:grid-cols-2">

              {/* Left Map */}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.5009916714544!2d78.42277657516827!3d17.531318483380584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMxJzUyLjgiTiA3OMKwMjUnMzEuMyJF!5e0!3m2!1sen!2sin!4v1786082063096!5m2!1sen!2sin"
                className="h-[320px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />

              {/* Right */}

              <div className="flex flex-col justify-center p-10">

                <div className="flex items-center gap-3">

                  <MapPin
                    className="text-amber-400"
                    size={28}
                  />

                  <h3 className="text-3xl font-bold text-white">

                    Visit Our Office

                  </h3>

                </div>

                <p className="mt-8 leading-8 text-gray-300">

                  P43, Vokshith Enclave
                  <br />
                  Gajularamaram
                  <br />
                  Hyderabad
                </p>

                <a
                  href="https://maps.app.goo.gl/jafGG4DGgLu4DQxDA?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    mt-10
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.05]
                    px-7
                    py-4
                    text-white
                    transition-all
                    duration-500
                    hover:border-amber-400
                    hover:bg-amber-400
                    hover:text-black
                  "
                >

                  <span>

                    Get Directions

                  </span>

                  <Navigation
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />

                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </FadeInSection>

    </section>
  );
}