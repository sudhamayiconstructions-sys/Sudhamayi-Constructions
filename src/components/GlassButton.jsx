function GlassButton({ children }) {
  return (
    <button
      className="
        px-9 py-4
        rounded-xl
        bg-white/10
        backdrop-blur-2xl
        border
        border-white/20
        text-white
        font-semibold
        tracking-wide
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-white/15
        hover:border-amber-400/60
        hover:text-amber-400
        hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]
      "
    >
      {children}
    </button>
  );
}

export default GlassButton;