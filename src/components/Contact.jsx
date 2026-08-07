import {
  PhoneCall,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import FadeInSection from "../animations/FadeInSection";
import SlideLeft from "../animations/SlideLeft";
import SlideRight from "../animations/SlideRight";

export default function Contact() {
    const form = useRef();

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
  .sendForm(
    "service_djqd8v6",
    "template_cfrcm8s",
    form.current,
    "GYe7iPK_CfwNV2vRn"
  )
    .then(() => {
      setStatus("Message sent successfully!");
      setLoading(false);
      form.current.reset();
    })
    .catch(() => {
      setStatus("Failed to send message.");
      setLoading(false);
    });
};
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32"
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

          <div className="mb-24 text-center">

            <div className="mb-8 flex items-center justify-center gap-8">

              <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

              <span className="text-xs font-semibold uppercase tracking-[10px] text-amber-400">

                WE'D LOVE TO HEAR FROM YOU

              </span>

              <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

            </div>

            <h2 className="text-5xl font-bold leading-tight text-white">

              Get In Touch

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              Whether you're planning your dream home or your next apartment
              project, we're here to answer your questions and guide you
              through every step of the journey.

            </p>

          </div>

          {/* Two Column Layout */}

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left Contact Card */}

<SlideLeft>

  <div
    className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-white/[0.03]
      p-10
      backdrop-blur-xl
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
        bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.10),transparent_65%)]
      "
    />

    <h3 className="relative z-10 text-3xl font-bold text-white">

      Contact Information

    </h3>

    <p className="relative z-10 mt-5 leading-8 text-gray-400">

      We'd be delighted to discuss your project and help bring your ideas to
      life. Feel free to reach out using any of the details below.

    </p>

    {/* Contact Details */}

    <div className="relative z-10 mt-12 space-y-8">

      {/* Phone */}

      <div className="flex items-start gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">

          <PhoneCall className="text-amber-400" size={24} />

        </div>

        <div>

          <p className="text-sm uppercase tracking-[3px] text-amber-400">

            Phone

          </p>

          <p className="mt-2 text-lg text-white">

            +91 99599 75029

          </p>

        </div>

      </div>

      {/* Email */}

      <div className="flex items-start gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">

          <Mail className="text-amber-400" size={24} />

        </div>

        <div>

          <p className="text-sm uppercase tracking-[3px] text-amber-400">

            Email

          </p>

          <p className="mt-2 text-lg text-white break-all">

            sudhamayiconstructions@gmail.com

          </p>

        </div>

      </div>

      {/* Address */}

      <div className="flex items-start gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">

          <MapPin className="text-amber-400" size={24} />

        </div>

        <div>

          <p className="text-sm uppercase tracking-[3px] text-amber-400">

            Address

          </p>

          <p className="mt-2 leading-7 text-white">

            P43, Vokshith Enclave<br />

            Gajularamaram<br />

            Hyderabad

          </p>

        </div>

      </div>

      {/* Working Hours */}

      <div className="flex items-start gap-5">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">

          <Clock3 className="text-amber-400" size={24} />

        </div>

        <div>

          <p className="text-sm uppercase tracking-[3px] text-amber-400">

            Working Hours

          </p>

          <p className="mt-2 leading-7 text-white">

            Monday – Saturday<br />

            10:00 AM – 6:00 PM

          </p>

        </div>

      </div>

    </div>

    {/* Call Now Button */}

    <motion.a
      href="tel:+919959975029"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
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
        px-8
        py-4
        text-white
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-amber-400
        hover:bg-amber-400
        hover:text-black
        hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)]
      "
    >

      <span className="font-semibold">

        Call Now

      </span>

      <ArrowRight
        size={18}
        className="transition-all duration-300 group-hover:translate-x-2"
      />

    </motion.a>

  </div>

</SlideLeft>
{/* Right Contact Form */}

<SlideRight>

  <form
  ref={form}
  onSubmit={sendEmail}
    className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-white/[0.03]
      p-10
      backdrop-blur-xl
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
        bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.10),transparent_65%)]
      "
    />

    <h3 className="relative z-10 text-3xl font-bold text-white">

      Send Us A Message

    </h3>

    <p className="relative z-10 mt-5 leading-8 text-gray-400">

      Fill in your details and we'll get back to you as soon as possible.

    </p>

    {/* Form */}

    <div className="relative z-10 mt-10 space-y-6">

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition-all
          duration-300
          focus:border-amber-400
          focus:bg-white/[0.08]
        "
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition-all
          duration-300
          focus:border-amber-400
          focus:bg-white/[0.08]
        "
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition-all
          duration-300
          focus:border-amber-400
          focus:bg-white/[0.08]
        "
      />
<select
  name="service"
  className="
    w-full
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-6
    py-4
    text-white
    outline-none
    transition-all
    duration-300
    focus:border-amber-400
    focus:bg-white/[0.08]
  "
  defaultValue=""
>
  <option value="" disabled className="text-black">
    Select a Service
  </option>

  <option className="text-black">
    Residential Construction
  </option>

  <option className="text-black">
    Apartment Construction
  </option>

  <option className="text-black">
    Contract Construction
  </option>

  <option className="text-black">
    Custom Home Construction
  </option>
</select>
      <textarea
      name="message"
        rows="6"
        placeholder="Tell us about your project..."
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          resize-none
          transition-all
          duration-300
          focus:border-amber-400
          focus:bg-white/[0.08]
        "
      />

    </div>

    {/* Send Button */}

    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      className="
        group/button
        relative
        mt-10
        inline-flex
        items-center
        gap-3
        overflow-hidden
        rounded-full
        border
        border-white/15
        bg-white/[0.05]
        px-8
        py-4
        text-white
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-amber-400
        hover:bg-amber-400
        hover:text-black
        hover:shadow-[0_20px_60px_rgba(251,191,36,0.25)]
      "
    >

      <span className="font-semibold transition-colors duration-300 group-hover/button:text-black">

        {loading ? "Sending..." : "Send Message"}

      </span>

      <ArrowRight
  size={18}
  className="
    transition-all
    duration-300
    group-hover/button:translate-x-2
    group-hover/button:text-black
  "
/>

    </motion.button>
{status && (
  <p className="mt-6 text-center text-amber-400 font-medium">
    {status}
  </p>
)}
  </form>

</SlideRight>

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