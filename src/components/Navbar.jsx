import { ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "WORK",
    href: "#work",
  },
  {
    label: "CONTACT",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className="flex h-[76px] w-full items-center justify-between border-b px-6 md:px-10 lg:px-14"
        style={{
          backgroundColor: "rgba(242, 239, 232, 0.96)",
          borderColor: "rgba(23, 23, 23, 0.12)",
          color: "#171717",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="#hero"
          className="group font-display text-[19px] font-bold tracking-[-0.07em]"
          style={{
            color: "#171717",
          }}
        >
          ABHIJEET
          <span
            style={{
              color: "#e4572e",
            }}
          >
            .
          </span>
        </a>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative py-2 text-[10px] font-semibold tracking-[0.22em] transition-colors duration-300"
              style={{
                color: "#171717",
              }}
            >
              {link.label}

              {/* underline */}
              <span
                className="absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full"
                style={{
                  backgroundColor: "#e4572e",
                }}
              />
            </a>
          ))}
        </div>

        {/* =================================================
            CONTACT ARROW
        ================================================= */}

        <a
          href="#contact"
          aria-label="Contact"
          className="group flex h-[44px] w-[44px] items-center justify-center border transition-all duration-300"
          style={{
            borderColor: "rgba(23, 23, 23, 0.18)",
            color: "#171717",
          }}
        >
          <ArrowUpRight
            size={17}
            strokeWidth={1.8}
            className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />

          <span
            className="absolute h-[44px] w-[44px] scale-0 transition-transform duration-300 group-hover:scale-100"
            style={{
              backgroundColor: "#e4572e",
              zIndex: -1,
            }}
          />
        </a>
      </nav>
    </header>
  );
}