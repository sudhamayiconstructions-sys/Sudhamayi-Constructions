import {
  PhoneCall,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import FadeInSection from "../animations/FadeInSection";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-28 pb-10">

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

          {/* Top Divider */}

          <div className="mb-20 flex justify-center">

            <div className="h-px w-72 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>

          </div>

          {/* Footer Grid */}

          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

            {/* Company */}

            <div>

              <h2 className="text-3xl font-bold leading-tight">

                <span className="text-white">

                  SUDHAMAYI

                </span>

                <br />

                <span className="text-amber-400">

                  CONSTRUCTIONS

                </span>

              </h2>

              <p className="mt-8 leading-8 text-gray-400">

                Building premium residential homes and apartment
                projects with quality craftsmanship, trusted expertise,
                and modern construction techniques since 2016.

              </p>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-xl font-semibold text-white">

                Quick Links

              </h3>

              <div className="mt-8 space-y-4">
                              {[
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
].map((item) => (

  <motion.a
    key={item.name}
    href={item.href}
    whileHover={{ x: 6 }}
    transition={{ duration: 0.2 }}
    className="
      group
      flex
      items-center
      gap-2
      text-gray-400
      transition-colors
      duration-300
      hover:text-amber-400
    "
  >

    <ArrowUpRight
      size={16}
      className="
        transition-transform
        duration-300
        group-hover:rotate-45
      "
    />

    {item.name}

  </motion.a>

))}

              </div>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-xl font-semibold text-white">
                Services
              </h3>

              <div className="mt-8 space-y-4 text-gray-400">

                <p>Residential Construction</p>

                <p>Apartment Construction</p>

                <p>Contract Construction</p>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-semibold text-white">
                Contact
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-start gap-3">

                  <PhoneCall
                    size={18}
                    className="mt-1 text-amber-400"
                  />

                  <span className="text-gray-400">

                    +91 99599 75029

                  </span>

                </div>

                <div className="flex items-start gap-3">

                  <Mail
                    size={18}
                    className="mt-1 text-amber-400"
                  />

                  <span className="break-all text-gray-400">

                    sudhamayiconstructions@gmail.com

                  </span>

                </div>

                <div className="flex items-start gap-3">

                  <MapPin
                    size={18}
                    className="mt-1 text-amber-400"
                  />

                  <span className="text-gray-400">

                    Gajularamaram,
                    <br />
                    Hyderabad

                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Bottom Divider */}

          <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Bottom Bar */}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">

            <p>

              © 2026 Sudhamayi Constructions. All Rights Reserved.

            </p>

          </div>

        </div>

      </FadeInSection>

    </footer>
  );
}
