import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

function HoverCard({ children, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{
        y: -10,
        scale: 1.02,
        borderColor: "rgb(251 191 36)",
        boxShadow: "0 25px 50px rgba(251,191,36,0.12)",
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className={`group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition-all duration-200 ${className}`}
    >
      {/* Spotlight */}

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              rgba(251,191,36,0.12),
              transparent 70%
            )
          `,
        }}
      />

      {/* Top Accent */}

      <motion.div
        className="absolute top-0 left-0 h-1 w-full bg-amber-400 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default HoverCard;