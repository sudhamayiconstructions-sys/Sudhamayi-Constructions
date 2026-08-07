import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919959975029"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        width: 210,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        fixed
        bottom-8
        right-4
        z-[999]
        flex
        h-16
        w-16
        items-center
        overflow-hidden
        rounded-full
        bg-[#25D366]
        shadow-[0_15px_40px_rgba(37,211,102,0.35)]
      "
    >
      <div className="flex h-16 w-16 items-center justify-center flex-shrink-0">
        <FaWhatsapp
          size={34}
          className="text-white"
        />
      </div>

      <span
        className="
          whitespace-nowrap
          font-semibold
          text-white
          pr-7
          text-lg
        "
      >
        Chat With Us
      </span>
    </motion.a>
  );
}