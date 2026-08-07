import ongoingProjects from "../data/ongoingProjects";
import OngoingProjectCard from "./OngoingProjectCard";

import FadeInSection from "../animations/FadeInSection";
import SlideRight from "../animations/SlideRight";

export default function OngoingProjects() {
  return (
    <section
      id="ongoing-projects"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.06),transparent_60%)]"></div>

      {/* Grid Pattern */}
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

                  ONGOING PROJECTS

                </span>

                <div className="h-px w-52 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

              </div>

              <h2 className="text-5xl font-bold leading-tight text-white">

                Building Tomorrow,

                <br />

                Today

              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

                Explore the projects currently under construction by
                Sudhamayi Constructions. Every project reflects our
                commitment to quality, precision, and timely delivery.

              </p>

            </div>

          </SlideRight>
          <div className="mt-20">
            <div className="mt-20">

  {ongoingProjects.map((project) => (

    <OngoingProjectCard
      key={project.id}
      project={project}
    />

  ))}

</div>

</div>

        </div>
      </FadeInSection>
    </section>
  );
}