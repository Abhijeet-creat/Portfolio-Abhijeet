import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

const contactLinks = [
  {
    number: "01",
    label: "GITHUB",
    value: "View repositories",
    href: "https://github.com/Abhijeet-creat",
  },
  {
    number: "02",
    label: "LINKEDIN",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/abhijeet-creat/",
  },
  {
    number: "03",
    label: "RESUME",
    value: "View experience",
    href: "#",
  },
];

const capabilities = [
  "FULL STACK",
  "AI / ML",
  "3D / WEBGL",
  "INTERACTIVE WEB",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#f2efe8] text-[#171717]"
    >
      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,23,23,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="border-t border-black/[0.12] py-6">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] text-[#e4572e]">
                06
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8c887d]">
                Contact
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#e4572e]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d]">
                Available for opportunities
              </span>

            </div>

          </div>
        </div>

        {/* =====================================================
            MAIN CONTACT GRID
        ===================================================== */}

        <div className="grid border-x border-black/[0.12] lg:grid-cols-[1.15fr_0.85fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="border-b border-black/[0.12] p-7 md:p-12 lg:border-b-0 lg:border-r lg:p-14">

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <div className="flex items-center gap-3">

                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d]">
                  Have a project?
                </span>

                <span className="h-px w-8 bg-black/15" />

                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#e4572e]">
                  06 / 06
                </span>

              </div>

              {/* Main heading */}

              <h1 className="mt-16 font-display text-[18vw] font-semibold leading-[0.72] tracking-[-0.1em] md:text-[12vw] lg:text-[9vw]">
                LET&apos;S
                <br />

                <span className="text-[#e4572e]">
                  TALK.
                </span>
              </h1>

              <p className="mt-12 max-w-xl text-base leading-8 text-[#625e56] md:text-lg md:leading-9">
                I&apos;m interested in building useful products, thoughtful
                interfaces and experiences that sit somewhere between
                technology and design.
              </p>

            </motion.div>

            {/* =================================================
                CAPABILITIES
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="mt-16 border-t border-black/[0.12] pt-6"
            >

              <div className="flex items-center justify-between">

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#8c887d]">
                  What I can build
                </span>

                <span className="font-mono text-[8px] text-[#b0aba1]">
                  04 AREAS
                </span>

              </div>

              <div className="mt-5 flex flex-wrap gap-2">

                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="border border-black/[0.12] px-4 py-2.5 font-mono text-[8px] uppercase tracking-[0.16em] text-[#625e56] transition-colors duration-300 hover:border-[#e4572e] hover:text-[#e4572e]"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </motion.div>

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex flex-col">

            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="border-b border-black/[0.12] p-7 md:p-10"
            >

              <div className="flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e4572e] opacity-50" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e4572e]" />

                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#625e56]">
                  Currently available
                </span>

              </div>

              <h3 className="mt-8 max-w-sm font-display text-3xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-4xl">
                LET&apos;S BUILD
                <br />
                SOMETHING USEFUL.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#8c887d]">
                Open to internships, freelance projects, collaborations and
                interesting technical problems.
              </p>

            </motion.div>

            {/* =================================================
                INFORMATION GRID
            ================================================= */}

            <div className="grid grid-cols-2 border-b border-black/[0.12]">

              <div className="border-r border-black/[0.12] p-7 md:p-10">

                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#e4572e]"
                />

                <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d]">
                  Based in
                </p>

                <p className="mt-2 font-display text-lg font-medium tracking-[-0.04em]">
                  India
                </p>

              </div>

              <div className="p-7 md:p-10">

                <Clock3
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#e4572e]"
                />

                <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d]">
                  Response
                </p>

                <p className="mt-2 font-display text-lg font-medium tracking-[-0.04em]">
                  24–48 hrs
                </p>

              </div>

            </div>

            {/* =================================================
                CIRCULAR CTA
            ================================================= */}

            <div className="flex flex-1 items-center justify-center p-10 md:p-14">

              <motion.a
                href="mailto:"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative flex h-40 w-40 items-center justify-center rounded-full bg-[#e4572e] text-[#f2efe8] md:h-48 md:w-48"
              >

                <span className="absolute inset-[-9px] rounded-full border border-[#e4572e]/30 transition-all duration-500 group-hover:inset-[-15px] group-hover:border-[#e4572e]/50" />

                <div className="flex flex-col items-center text-center">

                  <Mail
                    size={21}
                    strokeWidth={1.5}
                    className="mb-3"
                  />

                  <span className="font-mono text-[8px] uppercase tracking-[0.22em]">
                    Start a
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.22em]">
                    conversation
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="mt-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </motion.a>

            </div>

          </div>

        </div>

        {/* =====================================================
            EMAIL BAR
        ===================================================== */}

        <motion.a
          href="mailto:"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            group
            flex
            flex-col
            gap-5
            border-x
            border-b
            border-black/[0.12]
            bg-[#f2efe8]
            p-7
            transition-all
            duration-300
            hover:border-[#e4572e]/30
            hover:bg-[#ebe8e0]
            md:flex-row
            md:items-center
            md:justify-between
            md:p-10
          "
        >

          {/* LEFT */}

          <div className="flex items-center gap-6">

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-[#8c887d]
                transition-colors
                duration-300
                group-hover:text-[#e4572e]
              "
            >
              Email
            </span>

            <span
              className="
                font-display
                text-2xl
                font-medium
                tracking-[-0.05em]
                text-[#171717]
                transition-colors
                duration-300
                group-hover:text-[#e4572e]
                md:text-3xl
              "
            >
              YOUR EMAIL
            </span>

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[#8c887d]
                transition-colors
                duration-300
                group-hover:text-[#e4572e]
              "
            >
              Get in touch
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-black/[0.12]
                text-[#e4572e]
                transition-all
                duration-300
                group-hover:border-[#e4572e]
                group-hover:bg-[#e4572e]
                group-hover:text-[#f2efe8]
              "
            >

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />

            </span>

          </div>

        </motion.a>

        {/* =====================================================
            SOCIAL LINKS
        ===================================================== */}

        <div className="grid border-x border-b border-black/[0.12] md:grid-cols-3">

          {contactLinks.map((item, index) => (
            <a
              key={item.number}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className={`group flex items-center justify-between p-6 transition-colors duration-300 hover:bg-[#e4572e] hover:text-[#f2efe8] md:p-8 ${
                index !== contactLinks.length - 1
                  ? "border-b border-black/[0.12] md:border-b-0 md:border-r"
                  : ""
              }`}
            >

              <div className="flex items-center gap-5">

                <span className="font-mono text-[8px] text-[#e4572e] transition-colors group-hover:text-[#f2efe8]">
                  {item.number}
                </span>

                <div>

                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] transition-colors group-hover:text-white/60">
                    {item.label}
                  </p>

                  <p className="mt-1 font-display text-lg font-medium tracking-[-0.04em]">
                    {item.value}
                  </p>

                </div>

              </div>

              <ArrowUpRight
                size={16}
                className="text-[#8c887d] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2efe8]"
              />

            </a>
          ))}

        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="border-x border-b border-black/[0.12] px-7 py-16 md:px-10 md:py-20 lg:px-14"
        >

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d]">
                Final note
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-6xl lg:text-7xl">
                BUILD THINGS
                <br />

                <span className="text-[#e4572e]">
                  WORTH REMEMBERING.
                </span>
              </h2>

            </div>

            <div className="font-mono text-[8px] uppercase leading-6 tracking-[0.2em] text-[#8c887d] md:text-right">
              <p>Software</p>
              <p>AI / ML</p>
              <p>Interactive Web</p>
              <p>3D Experiences</p>
            </div>

          </div>

        </motion.div>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="border-x border-b border-black/[0.12] py-7">

          <div className="flex flex-col gap-5 px-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">

            <div className="flex items-center gap-3">

              <span className="font-display text-sm font-semibold tracking-[-0.04em]">
                ABHIJEET
                <span className="text-[#e4572e]">
                  .
                </span>
              </span>

              <span className="h-px w-8 bg-black/20" />

              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#8c887d]">
                Software Developer
              </span>

            </div>

            <div className="flex items-center gap-6">

              <a
                href="#hero"
                className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#8c887d] transition-colors hover:text-[#e4572e]"
              >
                Back to top
              </a>

              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#b0aba1]">
                India
              </span>

              <span className="font-mono text-[8px] text-[#b0aba1]">
                © 2026
              </span>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}