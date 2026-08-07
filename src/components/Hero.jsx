import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section id="hero"
      className="relative min-h-screen overflow-hidden bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">

        <div className="max-w-3xl mt-32">

          {/* Since 2016 */}

          <p className="uppercase tracking-[10px] text-amber-400 font-semibold text-sm md:text-base">
            Since 2016
          </p>

          {/* Heading */}

          <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-xl">
            Building Better Homes
            <br />
            <span className="text-amber-400">
              For Better Living
            </span>
          </h1>

          {/* Description */}

          <p className="mt-10 text-lg md:text-xl leading-9 text-gray-200 max-w-2xl">
            Sudhamayi Constructions has been building premium apartments and
            independent homes across Hyderabad since 2016, combining quality
            craftsmanship, trusted expertise, and modern engineering to create
            homes that last for generations.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-6">

  <a
  href="#projects"
    className="
      px-9 py-4
      rounded-xl
      bg-white/10
      backdrop-blur-2xl
      border
      border-white/20
      text-white
      font-semibold
      transition-all
      duration-500
      hover:-translate-y-1
      hover:bg-white/15
      hover:border-amber-400/60
      hover:text-amber-400
      hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]
    "
  >
    View Projects
  </a>

  <a
  href="#contact"
    className="
      px-9 py-4
      rounded-xl
      bg-white/10
      backdrop-blur-2xl
      border
      border-white/20
      text-white
      font-semibold
      transition-all
      duration-500
      hover:-translate-y-1
      hover:bg-white/15
      hover:border-amber-400/60
      hover:text-amber-400
      hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]
    "
  >
    Contact Us
  </a>

</div>

          {/* Statistics */}

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl">

            {/* Card 1 */}

            <div
              className="
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/20
                rounded-3xl
                p-8
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:bg-white/15
                hover:border-amber-400/50
                hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]
                cursor-pointer
              "
            >
              <h2 className="text-4xl font-bold text-amber-400">
                10+
              </h2>

              <p className="mt-3 text-gray-200">
                Years Experience
              </p>

            </div>

            {/* Card 2 */}

            <div
              className="
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/20
                rounded-3xl
                p-8
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:bg-white/15
                hover:border-amber-400/50
                hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]
                cursor-pointer
              "
            >
              <h2 className="text-4xl font-bold text-amber-400">
                8+
              </h2>

              <p className="mt-3 text-gray-200">
                Completed Projects
              </p>

            </div>

            {/* Card 3 */}

            <div
              className="
                bg-white/10
                backdrop-blur-2xl
                border
                border-white/20
                rounded-3xl
                p-8
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:bg-white/15
                hover:border-amber-400/50
                hover:shadow-[0_0_40px_rgba(251,191,36,0.25)]
                cursor-pointer
              "
            >
              <h2 className="text-3xl font-bold text-amber-400">
                Hyderabad
              </h2>

              <p className="mt-3 text-gray-200">
                Serving the City
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;