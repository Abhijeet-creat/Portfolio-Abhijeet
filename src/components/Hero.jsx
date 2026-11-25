import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Lanyard from "./3d/Lanyard";

const stats = [
  {
    value: "9.18",
    label: "CGPA",
  },
  {
    value: "100+",
    label: "LeetCode",
  },
  {
    value: "03+",
    label: "Major Projects",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="paper-texture relative min-h-screen overflow-hidden bg-[#f2efe8] text-[#171717]"
    >
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col px-6 pb-7 pt-[76px] md:px-10 lg:px-14">
        
        {/* =====================================================
            MAIN HERO
        ===================================================== */}

        <div className="grid flex-1 items-center lg:grid-cols-[1.05fr_0.95fr]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-10 py-16 lg:py-10">

            {/* INTRODUCTION */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="font-mono text-[10px] text-[#e4572e]">
                01
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8c887d]">
                Introduction
              </span>
            </motion.div>

            {/* MAIN HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[18vw] font-semibold leading-[0.78] tracking-[-0.085em] sm:text-[14vw] md:text-[11vw] lg:text-[8.6vw]"
            >
              SOFTWARE
              <br />

              <span>
                DEVELOPER
                <span className="text-[#e4572e]">.</span>
              </span>
            </motion.h1>

            {/* INTRO TEXT */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="mt-10 max-w-[590px]"
            >
              <p className="text-lg leading-8 text-[#555149] md:text-xl">
                I&apos;m Abhijeet — a Computer Science student and developer
                who enjoys turning ideas into{" "}
                <span className="font-medium text-[#171717]">
                  useful, interactive digital products.
                </span>
              </p>
            </motion.div>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >

              {/* VIEW MY WORK */}

              <a
                href="#work"
                className="group flex items-center gap-4 bg-[#171717] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#e4572e]"
                style={{
                  color: "#f2efe8",
                }}
              >
                <span
                  style={{
                    color: "#f2efe8",
                  }}
                >
                  View my work
                </span>

                <ArrowUpRight
                  size={15}
                  style={{
                    color: "#f2efe8",
                  }}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* ABOUT ME */}

              <a
                href="#about"
                className="group flex items-center gap-3 border border-black/15 bg-transparent px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#e4572e] hover:bg-[#e4572e]"
                style={{
                  color: "#171717",
                }}
              >
                <span
                  className="transition-colors duration-300 group-hover:text-[#f2efe8]"
                  style={{
                    color: "#171717",
                  }}
                >
                  About me
                </span>

                <span
                  className="h-px w-5 transition-all duration-300 group-hover:w-8 group-hover:bg-[#f2efe8]"
                  style={{
                    backgroundColor: "#171717",
                  }}
                />
              </a>

            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="mt-14 flex max-w-[600px] border-y border-black/[0.12]"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex-1 py-5 ${
                    index !== 0
                      ? "border-l border-black/[0.12] pl-5 md:pl-8"
                      : ""
                  }`}
                >
                  <p className="font-display text-2xl font-semibold tracking-[-0.05em] md:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#8c887d] md:text-[9px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* =================================================
              RIGHT — INTERACTIVE LANYARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative h-[540px] lg:h-[720px]"
          >

            {/* INTERACTIVE PORTRAIT LABEL */}

            <div className="pointer-events-none absolute right-2 top-12 z-20 hidden items-center gap-3 md:flex">
              <span className="text-[8px] uppercase tracking-[0.25em] text-[#8c887d]">
                Interactive portrait
              </span>

              <span className="h-px w-8 bg-black/15" />
            </div>

            {/* LANYARD */}

            <div className="absolute inset-0">
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                frontImage="/abhijeet-portrait.png"
                backImage="/abhijeet-portrait.png"
                imageFit="cover"
                lanyardWidth={1}
              />
            </div>

            {/* INTERACTION LABEL */}

            <div className="pointer-events-none absolute bottom-8 right-3 z-20 hidden text-right md:block">
              <p className="font-mono text-[8px] text-[#8c887d]">
                ABH / 001
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#8c887d]">
                Drag to interact
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <div className="flex items-center justify-between border-t border-black/[0.12] pt-5">

          {/* LOCATION */}

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d]">
            Based in India
          </span>

          {/* SCROLL */}

          <a
            href="#about"
            className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-[#8c887d] transition-colors hover:text-[#e4572e]"
          >
            Scroll to explore

            <span className="flex h-6 w-6 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[#e4572e]">
              <ArrowDown
                size={11}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </span>
          </a>

          {/* PAGE NUMBER */}

          <span className="hidden font-mono text-[8px] text-[#8c887d] md:block">
            01 / 07
          </span>

        </div>
      </div>
    </section>
  );
}