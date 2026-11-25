import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const process = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Every project starts with understanding the idea, the problem and the people it is meant for. I break down the requirements before thinking about the solution.",
  },
  {
    number: "02",
    title: "DEFINE",
    description:
      "I turn the initial idea into a clearer direction by defining the core features, technical requirements and overall experience.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Before writing everything, I think about how the product should feel. Interfaces, interactions and visual details are shaped around the purpose of the project.",
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "This is where the idea becomes a real product. I work across frontend, backend, APIs, databases and interactive experiences depending on what the project needs.",
  },
  {
    number: "05",
    title: "REFINE",
    description:
      "I test the experience, find what feels wrong and keep improving it. Performance, responsiveness and small interaction details all matter.",
  },
  {
    number: "06",
    title: "SHIP",
    description:
      "Once everything is ready, the product goes live. I make sure the final experience is stable, responsive and ready for real users.",
  },
];

function ProcessItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-black/[0.12] py-8 transition-colors duration-300 hover:bg-[#e4572e] hover:text-[#f2efe8] md:py-10"
    >
      <div className="grid gap-6 md:grid-cols-[80px_1fr_1fr_50px] md:items-start md:gap-8">

        {/* Number */}
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#e4572e] transition-colors group-hover:text-[#f2efe8]">
          {item.number}
        </span>

        {/* Title */}
        <h3 className="font-display text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
          {item.title}
        </h3>

        {/* Description */}
        <p className="max-w-lg text-sm leading-7 text-[#625e56] transition-colors group-hover:text-[#f2efe8]/80">
          {item.description}
        </p>

        {/* Arrow */}
        <div className="hidden justify-end md:flex">
          <ArrowUpRight
            size={17}
            className="text-[#8c887d] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2efe8] group-hover:opacity-100"
          />
        </div>

      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f2efe8] text-[#171717]"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="border-t border-black/[0.12] py-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] text-[#e4572e]">
                05
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8c887d]">
                Process
              </span>

            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] md:block">
              How I Work / 06 Steps
            </span>

          </div>

        </div>

        {/* ==========================================
            MAIN INTRO
        ========================================== */}

        <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-8 font-mono text-[9px] uppercase tracking-[0.25em] text-[#8c887d]">
              From idea to reality
            </p>

            <h2 className="font-display text-[16vw] font-semibold leading-[0.76] tracking-[-0.085em] md:text-[11vw] lg:text-[8vw]">
              HOW I
              <br />
              <span className="text-[#e4572e]">
                WORK.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:pb-3"
          >
            <div className="mb-6 h-px w-12 bg-black/25" />

            <p className="max-w-md text-base leading-8 text-[#625e56] md:text-lg">
              I like keeping the process simple. Understand the problem,
              build the right solution, refine the details and ship something
              that people can actually use.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.15]">
                <ArrowDownRight size={15} />
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#8c887d]">
                Scroll through the process
              </span>
            </div>
          </motion.div>

        </div>

        {/* ==========================================
            PROCESS LIST
        ========================================== */}

        <div className="border-b border-black/[0.12]">

          {process.map((item, index) => (
            <ProcessItem
              key={item.number}
              item={item}
              index={index}
            />
          ))}

        </div>

        {/* ==========================================
            BOTTOM STATEMENT
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-center md:py-20"
        >

          <p className="max-w-3xl font-display text-2xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
            GOOD PRODUCTS AREN'T JUST
            <span className="text-[#e4572e]"> BUILT.</span>
            <br />
            THEY'RE THOUGHT THROUGH.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 self-start border-b border-black/[0.18] pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#171717] transition-colors duration-300 hover:border-[#e4572e] hover:text-[#e4572e] md:self-end"
          >
            Let's build something

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

        </motion.div>

        {/* ==========================================
            SECTION FOOTER
        ========================================== */}

        <div className="flex items-center justify-between border-t border-black/[0.12] py-7">

          <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d]">
            Process / 05
          </span>

          <a
            href="#contact"
            className="group flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d] transition-colors duration-300 hover:text-[#e4572e]"
          >
            Continue to contact

            <span className="flex h-6 w-6 items-center justify-center border border-black/10 transition-colors group-hover:border-[#e4572e]">
              <ArrowUpRight size={11} />
            </span>
          </a>

          <span className="hidden font-mono text-[8px] text-[#8c887d] md:block">
            05 / 06
          </span>

        </div>

      </div>
    </section>
  );
}