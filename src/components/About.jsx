import aboutImage from "../assets/images/aboutlogo.png";

import FadeInSection from "../animations/FadeInSection";
import SlideLeft from "../animations/SlideLeft";
import SlideRight from "../animations/SlideRight";

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black text-white pt-28 pb-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>

      {/* Radial Glow */}
      <div className="absolute left-[-15%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-amber-400/10 blur-[180px]"></div>

      {/* Decorative Glow */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-400/5 blur-[150px]"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <FadeInSection>

          <div className="text-center mb-9">

            <div className="flex items-center justify-center gap-8">

  <div className="h-px w-54 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>

  <p className="uppercase tracking-[10px] text-amber-400 font-semibold text-sm whitespace-nowrap">
    ABOUT US
  </p>

  <div className="h-px w-54 bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>

</div>

            <h2 className="mt-8 text-5xl md:text-6xl font-bold leading-tight tracking-tight">

              Building Trust Through

              <br />

              <span className="text-white">
                Quality Construction
              </span>

            </h2>

          </div>

        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Image */}

          <SlideLeft>

            <div className="relative group">

              {/* Glow */}

              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-r from-amber-400/20 via-amber-300/10 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

              {/* Corner Borders */}

              <div className="absolute -top-4 -left-4 h-20 w-20 border-l-2 border-t-2 border-amber-400 rounded-tl-xl"></div>

              <div className="absolute -bottom-4 -right-4 h-20 w-20 border-r-2 border-b-2 border-amber-400 rounded-br-xl"></div>

              <img
  src={aboutImage}
  alt="Sudhamayi Constructions"
  className="
    relative
    mt-12 md:mt-26
    h-auto md:h-[620px]
    w-full
    rounded-[32px]
    object-contain md:object-cover
    border
    border-white/10
    shadow-[0_35px_80px_rgba(0,0,0,0.6)]
    transition-all
    duration-700
    group-hover:scale-[1.03]
  "
/>

            </div>

          </SlideLeft>

          {/* Right Content */}

          <div>

            <SlideRight>

              <p className="uppercase tracking-[8px] text-amber-400 text-sm font-semibold">

                Since 2016

              </p>

            </SlideRight>

            <SlideRight delay={0.10}>

              <h3 className="mt-5 text-5xl leading-tight font-bold">

                Crafting Premium

                <br />

                <span className="text-amber-400">
                  Living Spaces
                </span>

              </h3>

            </SlideRight>

            <SlideRight delay={0.20}>

              <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">

                Sudhamayi Constructions has been delivering premium
                residential projects across Hyderabad since 2016.
                We specialize in apartment construction and independent
                homes, combining superior craftsmanship, trusted
                expertise, and modern construction techniques to create
                spaces that families cherish for generations.

              </p>

            </SlideRight>

            {/* Features */}

            <div className="mt-14 space-y-3">
                              <SlideRight delay={0.30}>

                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.06]">

                  <div className="flex items-center gap-5">

                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>

                    <span className="text-lg font-medium text-gray-100">
                      Premium Residential Construction
                    </span>

                  </div>

                  

                </div>

              </SlideRight>

              <SlideRight delay={0.40}>

                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.06]">

                  <div className="flex items-center gap-5">

                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>

                    <span className="text-lg font-medium text-gray-100">
                      Apartment & Independent House Projects
                    </span>

                  </div>

                  

                </div>

              </SlideRight>

              <SlideRight delay={0.50}>

                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.06]">

                  <div className="flex items-center gap-5">

                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>

                    <span className="text-lg font-medium text-gray-100">
                      High Quality Materials
                    </span>

                  </div>

                  

                </div>

              </SlideRight>

              <SlideRight delay={0.60}>

                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.06]">

                  <div className="flex items-center gap-5">

                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>

                    <span className="text-lg font-medium text-gray-100">
                      Experienced Construction Team
                    </span>

                  </div>

                  

                </div>

              </SlideRight>

              <SlideRight delay={0.70}>

                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-md transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.06]">

                  <div className="flex items-center gap-5">

                    <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>

                    <span className="text-lg font-medium text-gray-100">
                      Customer Satisfaction & Transparency
                    </span>

                  </div>

                  

                </div>

              </SlideRight>

            </div>

            {/* Button */}

            <SlideRight delay={0.80}>

              <div className="mt-7">

                <button
                  className="
                    group
                    px-9
                    py-4
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
                  <span className="flex items-center gap-3">
  Learn More

  <span
    className="
      inline-block
      transition-transform
      duration-300
      group-hover:translate-x-2
    "
  >
    →
  </span>

</span>
                </button>

              </div>

            </SlideRight>

          </div>
                  </div>

      </div>

    </section>
  );
}

export default About;