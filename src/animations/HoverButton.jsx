import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function HoverButton({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.1,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.08,
        x: 6,
        boxShadow: "0 12px 30px rgba(251,191,36,0.35)",
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`group inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-semibold text-gray-950 transition-all duration-200 ${className}`}
      {...props}
    >
      <span>{children}</span>

      <motion.div
        className="flex items-center"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.1 }}
      >
        <ArrowRight
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </motion.div>
    </motion.button>
  );
}

export default HoverButton;