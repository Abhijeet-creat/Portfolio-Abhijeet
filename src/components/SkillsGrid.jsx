import { motion } from "framer-motion";

const rowOne = [
  {
    number: "01",
    name: "JAVA",
    category: "TECH",
  },
  {
    number: "02",
    name: "C++",
    category: "TECH",
  },
  {
    number: "03",
    name: "PYTHON",
    category: "TECH",
  },
  {
    number: "04",
    name: "JAVASCRIPT",
    category: "TECH",
  },
  {
    number: "05",
    name: "REACT",
    category: "TECH",
  },
  {
    number: "06",
    name: "NEXT.JS",
    category: "TECH",
  },
  {
    number: "07",
    name: "NODE.JS",
    category: "TECH",
  },
];

const rowTwo = [
  {
    number: "08",
    name: "EXPRESS.JS",
    category: "BUILD",
  },
  {
    number: "09",
    name: "POSTGRESQL",
    category: "BUILD",
  },
  {
    number: "10",
    name: "MONGODB",
    category: "BUILD",
  },
  {
    number: "11",
    name: "THREE.JS",
    category: "BUILD",
  },
  {
    number: "12",
    name: "AI / ML",
    category: "BUILD",
  },
  {
    number: "13",
    name: "REST APIs",
    category: "BUILD",
  },
  {
    number: "14",
    name: "CREATIVE CODE",
    category: "BUILD",
  },
];

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotate: -1,
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="skill-card group relative h-[245px] w-[330px] shrink-0 overflow-hidden rounded-[26px] border border-[#171717]/15 bg-[#e9e6df] p-6 text-[#171717] md:h-[275px] md:w-[390px] md:p-7"
    >
      {/* Technical grid */}

      <div className="skill-card-grid pointer-events-none absolute inset-0 opacity-70" />

      {/* Top information */}

      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-[9px] font-medium tracking-[0.18em] text-[#514d46]">
          {skill.number}
        </span>

        <span className="font-mono text-[8px] font-medium uppercase tracking-[0.22em] text-[#514d46]">
          {skill.category}
        </span>
      </div>

      {/* Skill name */}

      <div className="absolute inset-x-7 top-1/2 -translate-y-1/2">
        <h3 className="font-display text-[29px] font-bold uppercase leading-none tracking-[-0.055em] md:text-[34px]">
          {skill.name}
        </h3>
      </div>

      {/* Bottom information */}

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between md:bottom-7 md:left-7 md:right-7">
        <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-[#8c887d]">
          ABHIJEET
        </span>

        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#171717]/30 transition-all duration-300 group-hover:border-[#e4572e] group-hover:bg-[#e4572e]">
          <span className="h-1 w-1 rounded-full bg-[#171717]/40 transition-colors duration-300 group-hover:bg-[#f2efe8]" />
        </span>
      </div>

      {/* Orange hover line */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#e4572e] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

function SkillRow({ skills, reverse = false }) {
  return (
    <div className="skills-marquee">
      <div
        className={`skills-track flex w-max gap-4 py-2 md:gap-5 ${
          reverse ? "reverse" : ""
        }`}
      >
        {/* First set */}

        {skills.map((skill) => (
          <SkillCard
            key={`${skill.number}-first`}
            skill={skill}
          />
        ))}

        {/* Duplicate set */}

        {skills.map((skill) => (
          <SkillCard
            key={`${skill.number}-second`}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f2efe8] py-20 md:py-28">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto mb-12 max-w-[1600px] px-6 md:px-10 lg:px-14">

        <div className="flex items-end justify-between border-t border-[#171717]/20 pt-5">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[9px] font-bold text-[#e4572e]">
              03
            </span>

            <span className="h-px w-10 bg-[#171717]/25" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#514d46]">
              Technologies
            </span>

          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#625d54] md:block">
            Tools / 14
          </span>

        </div>

        <div className="mt-10 flex items-end justify-between">

          <h2 className="font-display text-5xl font-bold uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl lg:text-[7vw]">
            WHAT I
            <br />

            <span className="text-[#e4572e]">
              BUILD WITH.
            </span>
          </h2>

          <p className="hidden max-w-[260px] text-right text-sm font-medium leading-6 text-[#514d46] lg:block">
            A collection of technologies, tools and ideas I use to turn
            problems into digital experiences.
          </p>

        </div>

      </div>

      {/* =====================================================
          FIRST ROW
      ===================================================== */}

      <SkillRow skills={rowOne} />

      {/* =====================================================
          SECOND ROW
      ===================================================== */}

      <div className="mt-4">
        <SkillRow
          skills={rowTwo}
          reverse
        />
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="mx-auto mt-10 flex max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">

        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#625d54]">
          14 technologies
        </span>

        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#625d54]">
          Hover / Pause
        </span>

      </div>

    </section>
  );
}