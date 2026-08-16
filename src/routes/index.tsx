import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import topo from "@/assets/topo.jpg";
import { WaveDivider } from "@/components/WaveDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pasandu Sirisena — Computer Engineering @ McMaster" },
      {
        name: "description",
        content:
          "Computer Engineering student at McMaster specializing in microelectronics, digital logic design and firmware. FPGA, Verilog and embedded systems projects.",
      },
      { property: "og:title", content: "Pasandu Sirisena — Computer Engineering @ McMaster" },
      {
        property: "og:description",
        content:
          "Microelectronics, digital logic design and firmware development. FPGA, Verilog and embedded systems projects.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINKS = {
  github: "https://github.com/pasandu-sirisena",
  linkedin: "https://www.linkedin.com/in/sirisenp/",
  email: "mailto:pasandu2sirisenad@gmail.com",
};

const experience = [
  {
    role: "Hardware/Software Test Engineering Intern",
    org: "L3Harris WESCAM",
    place: "Hamilton, ON",
    period: "May 2026 — Present",
    points: [
      "Write low-level C/C++ test software to validate custom cables, electronic hardware and development kits, debugging across the hardware/software boundary.",
      "Deploy automated scripts and performance analysis tooling to systematically test MX-10, MX-15 and MX-20 electro-mechanical camera turrets.",
      "Work directly with hardware and systems teams to build physical test infrastructure, integrating logic ICs and discrete circuit elements with embedded software.",
    ],
    tags: ["C/C++", "Test Automation", "Hardware Validation"],
  },
  {
    role: "Software Development & IT Project Management Intern",
    org: "CIBC",
    place: "Toronto, ON",
    period: "May 2025 — Aug 2025",
    points: [
      "Built and tested a critical Java/Spring Boot microservice with JUnit 5 and Mockito, cutting regression bugs by over 40%.",
      "Tracked financial resources for $1M+ in technology infrastructure projects using Agile methodologies and Jira.",
      "Led a $25K Azure server migration, upgrading critical RHEL systems across development, testing and production environments.",
    ],
    tags: ["Java", "Spring Boot", "Azure", "JUnit"],
  },
  {
    role: "B.Eng. Computer Engineering (Co-op)",
    org: "McMaster University",
    place: "Hamilton, ON",
    period: "Sep 2023 — May 2028",
    points: [
      "Coursework across digital logic design, microelectronics, embedded systems and computer architecture.",
    ],
    tags: ["Education"],
  },
];

const projects = [
  {
    title: "FPGA-Based Wi-Fi Spatial Sensor",
    year: "2026",
    body: "Programmed an ESP32 in C/C++ to extract and filter raw Wi-Fi Channel State Information, with custom Verilog logic on a Tang Primer FPGA accelerating high-throughput parallel signal workloads and Python spatial algorithms analysing the CSI metrics end to end.",
    tags: ["Verilog", "C/C++", "Python", "ESP32", "FPGA"],
  },
  {
    title: "FPGA-Based Image Decompressor",
    year: "2025",
    body: "Designed the hardware architecture for an image decompressor on the Altera DE2-115 and implemented it in SystemVerilog — reverse DCT, luma/chroma upsampling and lossless decoding — verified with waveform analysis, SRAM references and VGA output.",
    tags: ["SystemVerilog", "FPGA", "Digital Logic", "Verification"],
  },
  {
    title: "3D Spatial Mapping System (ToF Sensor)",
    year: "2025",
    body: "An embedded 3D spatial mapper pairing a Time-of-Flight sensor with firmware in C/C++ on an ARM Cortex-M4F microcontroller, processing and visualising 360° point clouds in Open3D.",
    tags: ["C/C++", "ARM Cortex-M4F", "Python", "Open3D"],
  },
];

const focus = [
  {
    title: "Digital Logic & FPGA",
    body: "RTL design in Verilog and SystemVerilog, timing-aware architecture, simulation and waveform-level verification.",
  },
  {
    title: "Firmware & Embedded",
    body: "Bare-metal C/C++ on ESP32 and ARM Cortex-M, peripheral drivers and sensor data pipelines.",
  },
  {
    title: "Microelectronics",
    body: "Device physics, CMOS fundamentals, circuit and PCB design from schematic to silicon-aware thinking.",
  },
  {
    title: "Test & Validation",
    body: "Repeatable measurement setups, automated test scripts and instrumentation with data analysis in Python.",
  },
];

function SocialButtons() {
  const base =
    "group inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/5 px-5 py-3 text-sm font-medium text-sand backdrop-blur-sm transition-all duration-300 hover:bg-sand hover:text-navy-deep";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={LINKS.github} target="_blank" rel="noreferrer" className={base}>
        <Github className="h-4 w-4" /> GitHub
      </a>
      <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className={base}>
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
      <a href={LINKS.email} className={base}>
        <Mail className="h-4 w-4" /> Email
      </a>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <img
          src={topo}
          alt=""
          width={1920}
          height={1280}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-28">
          <p className="eyebrow rise-in text-sand-muted">Toronto, Ontario</p>
          <h1 className="rise-in mt-6 text-5xl font-medium leading-[1.02] text-sand sm:text-7xl">
            Pasandu
            <br />
            Sirisena
          </h1>
          <p className="rise-in mt-8 max-w-2xl text-lg leading-relaxed text-sand/75">
            Computer Engineering student at McMaster University working across microelectronics,
            digital logic design and firmware — most at home where hardware and software have to
            agree with each other.
          </p>
          <div className="rise-in mt-10">
            <SocialButtons />
          </div>
        </div>

        <WaveDivider fillClassName="text-background" className="absolute bottom-0 left-0" />
      </section>

      {/* Focus */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="eyebrow text-muted-foreground">What I work on</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-medium sm:text-4xl">
          From transistor-level intuition to firmware that ships.
        </h2>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {focus.map((f) => (
            <div key={f.title} className="border-t border-border pt-5">
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider fillClassName="text-secondary" />

      {/* Experience */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="eyebrow text-muted-foreground">Where I've worked</p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Experience</h2>

          <div className="mt-14 space-y-4">
            {experience.map((e) => (
              <article
                key={e.role + e.org}
                className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-soft/40"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                  <div>
                    <h3 className="text-xl font-medium">{e.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {e.org} · {e.place}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-xs text-muted-foreground">{e.period}</span>
                </div>
                <ul className="mt-4 max-w-3xl space-y-2">
                  {e.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-navy-soft/50"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="eyebrow text-muted-foreground">Selected work</p>
        <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Projects</h2>

        <div className="mt-14 space-y-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-soft/40"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-xl font-medium">{p.title}</h3>
                <span className="mt-1 shrink-0 text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <WaveDivider fillClassName="text-navy-deep" />

      {/* Contact */}
      <footer className="bg-navy-deep">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="eyebrow text-sand-muted">Let's connect</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium text-sand sm:text-4xl">
            Currently looking for opportunities in design verification and AI chip workflows.
          </h2>
          <p className="mt-5 max-w-xl text-sand/70">
            Always glad to talk hardware, low-level software, or anything in between.
          </p>

          <div className="mt-10">
            <SocialButtons />
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-sand/15 pt-6 text-xs text-sand/50">
            <span>© {new Date().getFullYear()} Pasandu Sirisena</span>
            <a
              href={LINKS.email}
              className="link-underline inline-flex items-center gap-1 text-sand/70"
            >
              Say hello <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
