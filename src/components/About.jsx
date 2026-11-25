import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "FULL STACK",
    description:
      "Building complete web products from interface to backend.",
  },
  {
    number: "02",
    title: "AI / ML",
    description:
      "Experimenting with intelligent systems and contextual experiences.",
  },
  {
    number: "03",
    title: "CREATIVE CODE",
    description:
      "Using code to create interactions that feel more alive.",
  },
  {
    number: "04",
    title: "3D / WEBGL",
    description:
      "Exploring Three.js and immersive browser experiences.",
  },
  {
    number: "05",
    title: "PRODUCT",
    description:
      "Thinking beyond features and focusing on the complete experience.",
  },
  {
    number: "06",
    title: "UI / UX",
    description:
      "Designing interfaces that are clear, intentional and memorable.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f2efe8] text-[#171717]"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="border-t border-black/[0.12]">
          <div className="flex items-center justify-between border-b border-black/[0.12] py-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-[#e4572e]">
                02
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8c887d]">
                About Me
              </span>
            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] md:block">
              Profile / 2026
            </span>
          </div>
        </div>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <div className="grid gap-16 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* BIG STATEMENT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-8 font-mono text-[9px] uppercase tracking-[0.25em] text-[#8c887d]">
              A little about me
            </p>

            <h2 className="font-display text-[15vw] font-semibold leading-[0.78] tracking-[-0.08em] md:text-[10vw] lg:text-[7.8vw]">
              I BUILD
              <br />

              <span className="text-[#e4572e]">
                THINGS
              </span>

              <br />

              THAT MOVE
              <span className="text-[#e4572e]">.</span>
            </h2>
          </motion.div>

          {/* DESCRIPTION */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-end"
          >
            <div className="max-w-xl">

              <p className="text-xl leading-8 text-[#3e3b36] md:text-2xl md:leading-9">
                I&apos;m Abhijeet, a Computer Science student and software
                developer who likes turning ideas into{" "}
                <span className="font-semibold text-[#171717]">
                  real digital products.
                </span>
              </p>

              <p className="mt-7 text-sm leading-7 text-[#777168] md:text-base">
                I work across full-stack development, AI, interactive web
                experiences and 3D. What interests me most is the space where
                engineering meets visual design — where something doesn&apos;t
                just work, but feels good to use.
              </p>

              <a
                href="#work"
                className="group mt-9 inline-flex items-center gap-3 border-b border-black/20 pb-2 text-[9px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 hover:border-[#e4572e] hover:text-[#e4572e]"
              >
                Explore my work

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

            </div>
          </motion.div>
        </div>

        {/* =====================================================
            HIGHLIGHT STATS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid border-y border-black/[0.12] md:grid-cols-3"
        >

          {/* CGPA */}

          <div className="border-b border-black/[0.12] p-7 md:border-b-0 md:border-r md:p-9">
            <span className="font-mono text-[9px] text-[#e4572e]">
              01
            </span>

            <p className="mt-8 font-display text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
              9.18
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8c887d]">
              Current CGPA
            </p>
          </div>

          {/* PROJECTS */}

          <div className="border-b border-black/[0.12] p-7 md:border-b-0 md:border-r md:p-9">
            <span className="font-mono text-[9px] text-[#e4572e]">
              02
            </span>

            <p className="mt-8 font-display text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
              10+
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8c887d]">
              Projects built
            </p>
          </div>

          {/* MAJOR BUILDS */}

          <div className="p-7 md:p-9">
            <span className="font-mono text-[9px] text-[#e4572e]">
              03
            </span>

            <p className="mt-8 font-display text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
              03+
            </p>

            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8c887d]">
              Major builds
            </p>
          </div>

        </motion.div>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <div className="py-24 md:py-32">

          {/* Heading */}

          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8c887d]">
                What I work with
              </p>

              <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
                CAPABILITIES
                <span className="text-[#e4572e]">.</span>
              </h3>
            </div>

            <span className="hidden font-mono text-[8px] text-[#8c887d] md:block">
              06 AREAS
            </span>
          </div>

          {/* Capability grid */}

          <div className="grid border-t border-black/[0.12] md:grid-cols-2 lg:grid-cols-3">

            {capabilities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className={`group min-h-[210px] border-b border-black/[0.12] p-7 transition-colors duration-300 hover:bg-[#e4572e] hover:text-[#f2efe8] md:p-9 ${
                  index % 3 !== 2 ? "lg:border-r" : ""
                } ${
                  index % 2 === 0
                    ? "md:border-r lg:border-r"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <span className="font-mono text-[9px] text-[#e4572e] transition-colors group-hover:text-[#f2efe8]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[#8c887d] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2efe8] group-hover:opacity-100"
                  />

                </div>

                <h4 className="mt-12 font-display text-2xl font-semibold tracking-[-0.04em]">
                  {item.title}
                </h4>

                <p className="mt-3 max-w-xs text-xs leading-6 text-[#8c887d] transition-colors group-hover:text-[#f2efe8]/80">
                  {item.description}
                </p>

              </motion.div>
            ))}

          </div>
        </div>

        {/* =====================================================
            SECTION FOOTER
        ===================================================== */}

        <div className="flex items-center justify-between border-t border-black/[0.12] py-7">

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d]">
            About / 02
          </span>

          <a
            href="#skills"
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-[#8c887d] transition-colors hover:text-[#e4572e]"
          >
            Continue to skills

            <span className="flex h-6 w-6 items-center justify-center border border-black/10 transition-colors group-hover:border-[#e4572e]">
              <ArrowDown
                size={11}
                className="rotate-[-45deg] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>

          <span className="hidden font-mono text-[8px] text-[#8c887d] md:block">
            02 / 07
          </span>

        </div>

      </div>
    </section>
  );
}