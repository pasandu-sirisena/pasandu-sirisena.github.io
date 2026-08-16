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
  github: "https://github.com/pasandusirisena",
  linkedin: "https://www.linkedin.com/in/pasandusirisena",
  email: "mailto:hello@pasandu.com",
};

const projects = [
  {
    title: "FPGA-Based Wi-Fi Spatial Sensor",
    year: "2026",
    body: "Hardware and firmware co-design for spatial scanning: ESP32 firmware streams RSSI samples into FPGA logic that timestamps and buffers them, with a Python pipeline reconstructing the spatial map.",
    tags: ["Verilog", "C/C++", "Python", "ESP32"],
  },
  {
    title: "3D Environment Reconstruction System",
    year: "2025",
    body: "A custom spatial measurement device pairing a Time-of-Flight sensor with a stepper motor to sweep a room, producing point clouds rendered as navigable wireframe geometry.",
    tags: ["Python", "Open3D", "Hardware Integration"],
  },
  {
    title: "Image Decompressor",
    year: "2025",
    body: "A from-scratch decoder that parses compressed image streams and rebuilds pixel data, built around custom data structures and careful memory handling.",
    tags: ["C++", "Data Structures", "Algorithms"],
  },
];

const focus = [
  {
    title: "Digital Logic & FPGA",
    body: "RTL design in Verilog, timing-aware architecture, simulation and verification benches.",
  },
  {
    title: "Firmware & Embedded",
    body: "Bare-metal and RTOS-adjacent C/C++ on ESP32 and ARM, peripheral drivers and sensor pipelines.",
  },
  {
    title: "Microelectronics",
    body: "Device physics, CMOS fundamentals and the path from schematic to silicon-aware design.",
  },
  {
    title: "Test & Validation",
    body: "Building repeatable measurement setups, instrumentation and data analysis in Python.",
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
          <p className="eyebrow rise-in text-sand-muted">Hamilton, Ontario</p>
          <h1 className="rise-in mt-6 text-5xl font-medium leading-[1.02] text-sand sm:text-7xl">
            Pasandu Didula
            <br />
            Sirisena
          </h1>
          <p className="rise-in mt-8 max-w-2xl text-lg leading-relaxed text-sand/75">
            Computer Engineering student at McMaster University working across microelectronics,
            digital logic design and firmware. Incoming Operations Test Engineer Intern at L3Harris
            WESCAM, and most at home where hardware and software have to agree with each other.
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

      {/* Projects */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="eyebrow text-muted-foreground">Selected work</p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Experience &amp; projects</h2>

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
            <span>© {new Date().getFullYear()} Pasandu Didula Sirisena</span>
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
