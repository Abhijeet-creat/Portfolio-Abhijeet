import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

const certificates = [
  {
    number: "01",
    title: "C++",
    issuer: "ISSUING ORGANIZATION",
    year: "2026",
    type: "TECHNICAL",
    image: "/certificates/certificate-01.jpg",
    link: "#",
  },
  {
    number: "02",
    title: "JAVA",
    issuer: "ISSUING ORGANIZATION",
    year: "2026",
    type: "TECHNICAL",
    image: "/certificates/certificate-02.jpg",
    link: "#",
  },
  {
    number: "03",
    title: "DSA",
    issuer: "ISSUING ORGANIZATION",
    year: "2026",
    type: "TECHNICAL",
    image: "/certificates/certificate-03.jpg",
    link: "#",
  },
  {
    number: "04",
    title: "React JS",
    issuer: "ISSUING ORGANIZATION",
    year: "2026",
    type: "TECHNICAL",
    image: "/certificates/certificate-04.jpg",
    link: "https://drive.google.com/file/d/1LX-xZjLafisEJNJNVpHCDquPwqbH57fW/view?usp=sharing",
  },
];

function CertificateRow({ certificate, index }) {
  return (
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
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="certificate-row group relative border-t border-black/[0.12]"
    >
      {/* =====================================================
          MAIN ROW
      ===================================================== */}

      <a
        href={certificate.link}
        target={certificate.link !== "#" ? "_blank" : undefined}
        rel={certificate.link !== "#" ? "noreferrer" : undefined}
        className="relative z-10 grid gap-5 py-8 transition-all duration-300 md:grid-cols-[70px_1fr_0.7fr_100px_30px] md:items-center md:gap-8 md:px-5"
      >

        {/* Number */}

        <span className="font-mono text-[9px] tracking-[0.2em] text-[#e4572e] transition-colors duration-300 group-hover:text-[#f2efe8]">
          {certificate.number}
        </span>

        {/* Certificate name */}

        <div>

          <p className="font-display text-xl font-semibold tracking-[-0.04em] transition-colors duration-300 md:text-2xl">
            {certificate.title}
          </p>

          <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#8c887d] transition-colors duration-300 group-hover:text-[#f2efe8]/60">
            {certificate.issuer}
          </p>

        </div>

        {/* Type */}

        <div className="hidden md:block">

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] transition-colors duration-300 group-hover:text-[#f2efe8]/60">
            {certificate.type}
          </span>

        </div>

        {/* Year */}

        <span className="font-mono text-[8px] text-[#8c887d] transition-colors duration-300 group-hover:text-[#f2efe8]/60">
          {certificate.year}
        </span>

        {/* Arrow */}

        <ArrowUpRight
          size={15}
          className="absolute right-5 top-8 text-[#8c887d] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2efe8] group-hover:opacity-100 md:relative md:right-auto md:top-auto"
        />

      </a>

      {/* =====================================================
          HOVER BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-[#e4572e] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100" />

      {/* =====================================================
          CERTIFICATE IMAGE PREVIEW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-1/2
          z-30
          hidden
          w-[340px]
          -translate-y-1/2
          translate-x-8
          scale-90
          opacity-0
          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:translate-x-0
          group-hover:scale-100
          group-hover:opacity-100
          lg:block
        "
      >

        <div className="relative overflow-hidden rounded-[4px] border border-black/10 bg-[#f8f6f0] p-2 shadow-[0_25px_70px_rgba(23,23,23,0.2)]">

          {/* Image */}

          <div className="relative aspect-[1.414/1] overflow-hidden bg-[#dedbd3]">

            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />

          </div>

          {/* Preview footer */}

          <div className="flex items-center justify-between px-3 py-3">

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#8c887d]">
              Certificate / {certificate.number}
            </span>

            <ArrowUpRight
              size={11}
              className="text-[#e4572e]"
            />

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#f2efe8] text-[#171717]"
    >

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="border-t border-black/[0.12] py-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] text-[#e4572e]">
                04
              </span>

              <span className="h-px w-10 bg-black/15" />

              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8c887d]">
                Certifications
              </span>

            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#8c887d] md:block">
              Credentials / {String(certificates.length).padStart(2, "0")}
            </span>

          </div>

        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_0.55fr] lg:items-end">

          <motion.div
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <p className="mb-7 font-mono text-[9px] uppercase tracking-[0.25em] text-[#8c887d]">
              Learning / Credentials
            </p>

            <h2 className="font-display text-[16vw] font-semibold leading-[0.76] tracking-[-0.085em] md:text-[11vw] lg:text-[8vw]">
              MY
              <br />

              <span className="text-[#e4572e]">
                CERTS.
              </span>
            </h2>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
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
              delay: 0.1,
            }}
          >

            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.12]">

              <Award
                size={17}
                strokeWidth={1.4}
                className="text-[#e4572e]"
              />

            </div>

            <p className="max-w-md text-base leading-8 text-[#625e56] md:text-lg md:leading-9">
              A collection of certifications and learning milestones that
              reflect the technologies and areas I&apos;ve been exploring.
            </p>

            <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.2em] text-[#aaa59b]">
              Hover a certificate to preview
            </p>

          </motion.div>

        </div>

        {/* =====================================================
            CERTIFICATE TABLE HEADER
        ===================================================== */}

        <div className="hidden border-y border-black/[0.12] px-5 py-4 md:grid md:grid-cols-[70px_1fr_0.7fr_100px_30px] md:items-center md:gap-8">

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#8c887d]">
            No.
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#8c887d]">
            Certificate
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#8c887d]">
            Category
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#8c887d]">
            Year
          </span>

          <span />

        </div>

        {/* =====================================================
            CERTIFICATES
        ===================================================== */}

        <div className="relative">

          {certificates.map((certificate, index) => (
            <CertificateRow
              key={certificate.number}
              certificate={certificate}
              index={index}
            />
          ))}

        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="border-b border-black/[0.12] py-7">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#8c887d]">
              Certifications / 04
            </span>

            <span className="max-w-lg text-xs leading-6 text-[#8c887d] md:text-right">
              Practical projects come first. These credentials show the
              additional technologies and areas I&apos;ve explored.
            </span>

          </div>

        </div>

        {/* =====================================================
            NEXT
        ===================================================== */}

        <div className="flex items-center justify-between py-7">

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#8c887d]">
            04 / 07
          </span>

          <a
            href="#work"
            className="group flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-[#8c887d] transition-colors hover:text-[#e4572e]"
          >
            Continue to work

            <span className="flex h-6 w-6 items-center justify-center border border-black/10 transition-colors group-hover:border-[#e4572e]">

              <ArrowUpRight
                size={11}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />

            </span>

          </a>

        </div>

      </div>

    </section>
  );
}