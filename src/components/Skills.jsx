import { motion } from "framer-motion";

const rowOne = [
  "Java",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
];

const rowTwo = [
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Three.js",
  "REST APIs",
  "Git",
];

function SkillCard({ skill, index, type }) {
  return (
    <div
      className="skill-card group relative h-[245px] w-[360px] shrink-0 overflow-hidden rounded-[28px] border border-black/[0.13] bg-[#ebe9e3] transition-all duration-500 hover:-translate-y-1 hover:border-black/25 hover:shadow-[0_20px_45px_rgba(23,23,23,0.08)] sm:h-[260px] sm:w-[400px] md:h-[280px] md:w-[450px]"
    >
      {/* Grid background */}

      <div className="skill-card-grid pointer-events-none absolute inset-0 opacity-70" />

      {/* Top information */}

      <div className="relative z-10 flex items-center justify-between p-6 sm:p-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#77736a]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8c887d]">
          {type}
        </span>
      </div>

      {/* Skill */}

      <div className="relative z-10 flex h-[135px] items-center px-7 sm:px-9">
        <h3 className="font-display text-3xl font-semibold uppercase tracking-[-0.045em] text-[#171717] sm:text-4xl">
          {skill}
        </h3>
      </div>

      {/* Bottom line */}

      <div className="absolute bottom-0 left-7 right-7 z-10 border-t border-black/[0.12]" />

      {/* Signature */}

      <span className="absolute bottom-5 left-7 z-10 font-mono text-[8px] uppercase tracking-[0.25em] text-[#9b978e]">
        ABHIJEET
      </span>

      {/* Corner indicator */}

      <div className="absolute bottom-5 right-7 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-black/20">
        <span className="h-1 w-1 rounded-full bg-[#e4572e] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Hover accent */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#e4572e] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

function SkillRow({ skills, reverse = false, type }) {
  const duplicated = [...skills, ...skills];

  return (
    <div className="skills-marquee group relative overflow-hidden">
      <div
        className={`skills-track ${
          reverse ? "reverse" : ""
        } flex w-max gap-4 py-2`}
      >
        {duplicated.map((skill, index) => (
          <SkillCard
            key={`${skill}-${index}`}
            skill={skill}
            index={index % skills.length}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#f2efe8] py-24 text-[#171717] md:py-32"
    >
      <div className="mx-auto max-w-[1800px]">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="px-6 md:px-10 lg:px-14">
          <div className="flex items-start justify-between border-t border-black/[0.12] pt-6">

            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-[#e4572e]">
                03
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8c887d]">
                Technologies
              </span>
            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] md:block">
              Tools / 14
            </span>
          </div>
        </div>

        {/* =====================================================
            HERO HEADING
        ===================================================== */}

        <div className="grid items-end gap-12 px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-14">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="font-display text-[17vw] font-semibold leading-[0.76] tracking-[-0.085em] md:text-[11vw] lg:text-[8.4vw]">
              WHAT I
              <br />
              <span className="text-[#e4572e]">
                BUILD WITH.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-md lg:justify-self-end"
          >
            <div className="mb-5 h-px w-12 bg-black/25" />

            <p className="text-base leading-7 text-[#5f5b54] md:text-lg md:leading-8">
              A collection of technologies, tools and ideas I use to turn
              problems into digital experiences.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            SKILL ROW 1
        ===================================================== */}

        <div className="mb-3">
          <SkillRow
            skills={rowOne}
            type="TECH"
          />
        </div>

        {/* =====================================================
            SKILL ROW 2
        ===================================================== */}

        <SkillRow
          skills={rowTwo}
          reverse
          type="BUILD"
        />

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="mx-6 mt-16 border-t border-black/[0.12] md:mx-10 lg:mx-14">
          <div className="flex items-center justify-between py-6">

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d]">
              Skills / 03
            </span>

            <a
              href="#work"
              className="group flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d] transition-colors duration-300 hover:text-[#e4572e]"
            >
              Continue to work

              <span className="flex h-6 w-6 items-center justify-center border border-black/10 transition-colors group-hover:border-[#e4572e]">
                ↘
              </span>
            </a>

            <span className="hidden font-mono text-[8px] text-[#8c887d] md:block">
              03 / 07
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}