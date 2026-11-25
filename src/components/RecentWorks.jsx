import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "CHENNAI FLOOD TWIN",
    category: "3D DIGITAL TWIN",
    year: "2026",

    description:
      "An interactive 3D digital twin focused on visualizing terrain, rainfall and flood conditions across Chennai. The project combines geospatial data, elevation models and immersive visualization to create a more intuitive way of understanding how environmental conditions can affect urban areas. Instead of presenting complex datasets as static information, the experience turns them into something users can visually explore and understand.",

    technologies: [
      "Next.js",
      "Three.js",
      "React",
      "Python",
      "GeoJSON",
      "GeoTIFF",
    ],

    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1800&auto=format&fit=crop",

    github: "https://github.com/Abhijeet-creat/chennai-flood-twin",

    live: "",
  },

  {
    number: "02",
    title: "FOCUSFLOW",
    category: "PRODUCTIVITY PLATFORM",
    year: "2026",

    description:
      "A modern productivity and focus platform designed to help users organize their work, manage tasks and build more consistent working habits. FocusFlow combines a clean interface with practical productivity features to make planning and completing work feel simple. The project focuses heavily on usability, responsive design and creating a distraction-free digital workspace.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "UI/UX",
    ],

    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1800&auto=format&fit=crop",

    github: "https://github.com/Abhijeet-creat/FocusFlow",

    live: "https://focusflow-dusky-nu.vercel.app/",
  },

  {
    number: "03",
    title: "DEVPULSE",
    category: "DEVELOPER EXPERIENCE",
    year: "2026",

    description:
      "A developer-focused project built around creating a practical and modern digital experience for developers. DevPulse explores the combination of clean interface design, useful functionality and a strong technical foundation. The project reflects my interest in building products where the engineering behind the application and the experience of using it are equally important.",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "APIs",
      "UI/UX",
    ],

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1800&auto=format&fit=crop",

    github: "https://github.com/Abhijeet-creat/DevPulse",

    live: "https://devpulse-chi-five.vercel.app/",
  },

  {
    number: "04",
    title: "CODEFORGE",
    category: "FULL-STACK DEVELOPMENT",
    year: "2026",

    description:
      "A developer-focused coding platform designed around problem solving, authentication and structured programming practice. CodeForge combines a modern frontend with backend APIs, database integration and containerized development infrastructure. The project explores how a complete full-stack application can bring together coding workflows, user accounts, problem solving and scalable backend services into one cohesive developer experience.",

    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "REST APIs",
    ],

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1800&auto=format&fit=crop",

    github: "https://github.com/Abhijeet-creat/CodeForge",

    live: "",
  },
];

/* =========================================================
   PROJECT LINKS
========================================================= */

function ProjectLinks({ project }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        marginTop: "28px",
      }}
    >
      {/* =================================================
          GITHUB BUTTON
      ================================================= */}

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          minHeight: "52px",
          padding: "0 22px",
          backgroundColor: "#171717",
          color: "#f2efe8",
          border: "1px solid #171717",
          fontFamily: '"DM Mono", monospace',
          fontSize: "9px",
          fontWeight: "500",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          textDecoration: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(event) => {
          event.currentTarget.style.backgroundColor = "#e4572e";
          event.currentTarget.style.borderColor = "#e4572e";
          event.currentTarget.style.color = "#f2efe8";
        }}
        onMouseLeave={(event) => {
          event.currentTarget.style.backgroundColor = "#171717";
          event.currentTarget.style.borderColor = "#171717";
          event.currentTarget.style.color = "#f2efe8";
        }}
      >
        <span
          style={{
            color: "#f2efe8",
            fontSize: "9px",
            fontWeight: "600",
            letterSpacing: "0.12em",
          }}
        >
          GH
        </span>

        <span
          style={{
            color: "#f2efe8",
          }}
        >
          GitHub
        </span>

        <ArrowUpRight
          size={12}
          strokeWidth={1.8}
          color="#f2efe8"
        />
      </a>

      {/* =================================================
          LIVE DEMO BUTTON
      ================================================= */}

      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            minHeight: "52px",
            padding: "0 22px",
            backgroundColor: "transparent",
            color: "#e4572e",
            border: "1px solid rgba(228, 87, 46, 0.35)",
            fontFamily: '"DM Mono", monospace',
            fontSize: "9px",
            fontWeight: "500",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.backgroundColor = "#e4572e";
            event.currentTarget.style.borderColor = "#e4572e";
            event.currentTarget.style.color = "#f2efe8";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.backgroundColor = "transparent";
            event.currentTarget.style.borderColor =
              "rgba(228, 87, 46, 0.35)";
            event.currentTarget.style.color = "#e4572e";
          }}
        >
          <span>Live Demo</span>

          <ArrowUpRight
            size={12}
            strokeWidth={1.8}
            color="currentColor"
          />
        </a>
      ) : (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            minHeight: "52px",
            padding: "0 22px",
            backgroundColor: "transparent",
            color: "#e4572e",
            border: "1px solid rgba(228, 87, 46, 0.3)",
            fontFamily: '"DM Mono", monospace',
            fontSize: "9px",
            fontWeight: "500",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>Live Demo</span>

          <ArrowUpRight
            size={12}
            strokeWidth={1.8}
            color="#e4572e"
          />
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-black/[0.12] py-14 md:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[70px_1fr_0.85fr] lg:gap-14">

        {/* =================================================
            PROJECT NUMBER
        ================================================= */}

        <div className="flex items-start">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#e4572e]">
            {project.number}
          </span>
        </div>

        {/* =================================================
            PROJECT IMAGE
        ================================================= */}

        <div className="relative overflow-hidden rounded-[26px] bg-[#dedbd3]">

          <div className="aspect-[16/10] overflow-hidden">

            <motion.img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              whileHover={{
                scale: 1.045,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2efe8] text-[#171717] opacity-0 transition-all duration-500 group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </div>

          </div>
        </div>

        {/* =================================================
            PROJECT INFORMATION
        ================================================= */}

        <div className="flex flex-col justify-between">

          <div>

            {/* CATEGORY + YEAR */}

            <div className="mb-5 flex items-center justify-between gap-4">

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d]">
                {project.category}
              </span>

              <span className="font-mono text-[8px] text-[#8c887d]">
                {project.year}
              </span>

            </div>

            {/* TITLE */}

            <h3 className="font-display text-3xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#171717] transition-colors duration-300 group-hover:text-[#e4572e] md:text-4xl">
              {project.title}
            </h3>

            {/* DESCRIPTION */}

            <p className="mt-6 max-w-lg text-[13px] leading-7 text-[#625e56] md:text-sm md:leading-7">
              {project.description}
            </p>

            {/* BUTTONS */}

            <ProjectLinks project={project} />

          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}

          <div className="mt-10">

            <div className="mb-4 h-px w-full bg-black/[0.1]" />

            <div className="flex flex-wrap gap-2">

              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-black/[0.1] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-[#625e56] transition-colors duration-300 group-hover:border-[#e4572e]/30"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN PROJECT SECTION
========================================================= */

export default function RecentWorks() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f2efe8] text-[#171717]"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="border-t border-black/[0.12] py-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] text-[#e4572e]">
                04
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8c887d]">
                Selected Work
              </span>

            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] md:block">
              Projects / 04
            </span>

          </div>

        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="grid gap-10 pb-20 pt-14 md:pb-28 md:pt-20 lg:grid-cols-[1fr_0.45fr] lg:items-end">

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
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
            className="font-display text-[16vw] font-semibold leading-[0.78] tracking-[-0.08em] md:text-[11vw] lg:text-[8vw]"
          >
            SELECTED
            <br />

            <span className="text-[#e4572e]">
              WORK.
            </span>
          </motion.h2>

          <div className="lg:pb-2">

            <div className="mb-5 h-px w-12 bg-black/25" />

            <p className="max-w-sm text-sm leading-7 text-[#625e56] md:text-base">
              A selection of projects where I experiment with software,
              interactive interfaces, full-stack development and immersive
              digital experiences.
            </p>

          </div>

        </div>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="border-t border-black/[0.12] py-7">

          <div className="flex items-center justify-between">

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d]">
              Work / 04
            </span>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] md:block">
              Selected experiments & builds
            </span>

            <a
              href="#contact"
              className="group flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.25em] text-[#8c887d] transition-colors hover:text-[#e4572e]"
            >
              Start a project

              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}