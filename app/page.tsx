import Image from "next/image";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaArrowDown,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLinkedinIn,
  FaServer,
  FaTools,
} from "react-icons/fa";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { Navbar } from "@/components/navbar";
import { CountUp, RevealObserver } from "@/components/reveal";
import { Rail, Sparkle, SpinBadge, Stripes, Sun } from "@/components/retro";
import {
  education,
  experience,
  profile,
  projects,
  skills,
  type Project,
} from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Glasgow",
    addressCountry: "GB",
  },
  alumniOf: education.map((item) => ({
    "@type": "CollegeOrUniversity",
    name: item.school,
  })),
  sameAs: [profile.github, profile.linkedin],
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;
const cvDownload = {
  href: profile.resume,
  download: "Avishkar_Mahalingpure_Resume.pdf",
} as const;

const facts = [
  {
    label: "Currently",
    value: "MSc Advanced Computer Science, University of Strathclyde",
  },
  { label: "Looking for", value: "Graduate software engineering roles" },
  { label: "Based in", value: profile.location },
  {
    label: "Core stack",
    value: "Java, Spring Boot, TypeScript, React, Node.js, PostgreSQL",
  },
];

const stats = [
  { value: experience.length, label: "Internships", look: "bg-mustard text-ink -rotate-6" },
  { value: projects.length, label: "Projects built", look: "bg-tang text-ink rotate-3" },
  {
    value: skills.reduce((n, g) => n + g.items.length, 0),
    label: "Technologies",
    look: "bg-avocado text-paper -rotate-3",
  },
  { value: education.length, label: "Degrees", look: "bg-rust text-paper rotate-6" },
];

const marqueeStack = [
  "Java",
  "Spring Boot",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "FastAPI",
  "Flutter",
];
const marqueeTagline = [
  "Open to graduate roles",
  "Full stack",
  "Glasgow, UK",
  "MSc Advanced CS",
  "Database to UI",
];

const skillLook: Record<string, { icon: IconType; className: string }> = {
  Languages: { icon: FaCode, className: "bg-mustard text-ink" },
  Backend: { icon: FaServer, className: "bg-tang text-ink" },
  Frontend: { icon: FaLaptopCode, className: "bg-avocado text-paper lg:col-span-2" },
  Databases: { icon: FaDatabase, className: "bg-rust text-paper" },
  Tools: { icon: FaTools, className: "bg-cocoa text-paper sm:col-span-2 lg:col-span-1" },
};

const featured = projects.filter((p) => p.featured);
const archive = projects.filter((p) => !p.featured);
const featuredShadows = ["var(--tang)", "var(--mustard)", "var(--avocado)"];

// Experience and education together, newest first, for the timeline.
const timeline = [
  ...experience.map((job) => ({
    icon: FaBriefcase,
    kind: "Internship",
    date: job.period,
    title: job.role,
    subtitle: job.company,
    body: job.summary,
  })),
  ...education.map((item) => ({
    icon: FaGraduationCap,
    kind: "Education",
    date: item.period,
    title: item.degree,
    subtitle: item.school,
    body: undefined,
  })),
].sort((a, b) => yearOf(b.date) - yearOf(a.date));

function yearOf(period: string) {
  const years = period.match(/\d{4}/g);
  return years ? Number(years[years.length - 1]) : 0;
}

const pad = (n: number) => String(n).padStart(2, "0");
const shadow = (color: string) => ({ "--shadow": color }) as CSSProperties;

function SectionHeading({
  number,
  label,
  title,
  accent,
  dark,
}: {
  number: number;
  label: string;
  title: string;
  accent: string;
  dark?: boolean;
}) {
  return (
    <div className="reveal mb-14">
      <p className={`kicker flex items-center gap-3 ${dark ? "text-mustard" : "text-rust"}`}>
        <span
          className={`rounded-full border-2 px-3 py-1 ${
            dark ? "border-mustard" : "border-ink bg-mustard text-ink"
          }`}
        >
          No. {pad(number)}
        </span>
        {label}
      </p>
      <h2 className="mt-5 text-[2.75rem] sm:text-6xl lg:text-7xl">
        {title} <em className={dark ? "text-mustard" : "text-rust"}>{accent}</em>
      </h2>
    </div>
  );
}

function Marquee({
  items,
  reverse,
  duration,
  className,
  dotClassName,
}: {
  items: string[];
  reverse?: boolean;
  duration: string;
  className: string;
  dotClassName: string;
}) {
  // Four copies so half the track is always wider than the screen; the
  // animation slides it by half and loops seamlessly.
  return (
    <div
      className={`marquee-track ${reverse ? "marquee-reverse" : ""} ${className}`}
      style={{ "--duration": duration } as CSSProperties}
    >
      {[0, 1, 2, 3].map((copy) =>
        items.map((item) => (
          <span key={`${copy}-${item}`} className="flex items-center gap-6 whitespace-nowrap pr-6">
            {item}
            <span className={dotClassName}>✺</span>
          </span>
        )),
      )}
    </div>
  );
}

function ProjectLinks({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <p className={`flex flex-wrap gap-3 ${className}`}>
      {project.link && (
        <a
          href={project.link}
          {...external}
          aria-label={`${project.title} live site`}
          className="btn btn-sm btn-mustard"
        >
          Live site <FiArrowUpRight />
        </a>
      )}
      <a
        href={project.github}
        {...external}
        aria-label={`${project.title} source code`}
        className="btn btn-sm btn-paper"
      >
        <FaGithub /> Source
      </a>
    </p>
  );
}

const socials = [
  { href: profile.github, icon: FaGithub, label: "GitHub" },
  { href: profile.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: FaEnvelope, label: "Email" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <RevealObserver />
      <Navbar />

      <header id="home" className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="relative mx-auto max-w-6xl px-5 pb-10 sm:pb-16">
          {/* Striped sun rising behind the name, with sunburst rays */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-14 -top-6 w-[200px] sm:-right-4 sm:-top-10 sm:w-[330px] lg:right-0 lg:w-[400px]"
          >
            <div className="rays absolute left-1/2 top-1/2 aspect-square w-[240%] -translate-x-1/2 -translate-y-1/2" />
            <Sun id="hero-sun" className="relative w-full" />
            <Sparkle size={30} className="absolute -left-8 top-6 hidden sm:block" />
            <Sparkle size={18} className="absolute -left-2 top-20 hidden sm:block" />
          </div>

          <p className="kicker relative flex items-center gap-2 text-rust">
            <Sparkle size={14} fill="#A93A14" />
            {profile.role} · {profile.location}
          </p>
          <h1 className="display shadow-stack relative mt-5 text-[clamp(2.6rem,11vw,8.5rem)]">
            Avishkar
            <br />
            Mahalingpure<span className="text-tang">.</span>
          </h1>

          <div className="relative mt-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-lg text-ink-soft sm:text-xl">
                I build software end to end: the{" "}
                <strong className="text-ink">database</strong>, the{" "}
                <strong className="text-ink">API</strong> and the{" "}
                <strong className="text-ink">interface</strong>. Currently
                doing an MSc in Advanced Computer Science at Strathclyde, and
                open to graduate software engineering roles.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#work" className="btn btn-tang">
                  See my work <FaArrowDown />
                </a>
                <a {...cvDownload} className="btn btn-paper">
                  <FiDownload /> Download CV
                </a>
                <ul className="flex gap-2">
                  {socials.map(({ href, icon: Icon, label }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        {...(href.startsWith("http") ? external : {})}
                        className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-paper-light transition-colors hover:bg-mustard"
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <SpinBadge
              text="OPEN TO GRADUATE ROLES ✺ GLASGOW, UK ✺ "
              className="hidden h-40 w-40 shrink-0 sm:block lg:h-44 lg:w-44"
            />
          </div>
        </div>

        {/* Two crossing tape bands */}
        <div aria-hidden className="relative py-10 sm:py-14">
          <div className="-mx-10 rotate-[2.5deg] overflow-hidden border-y-2 border-ink bg-mustard py-2.5">
            <Marquee
              items={marqueeTagline}
              reverse
              duration="45s"
              className="kicker text-ink"
              dotClassName="text-rust"
            />
          </div>
          <div className="-mx-10 -mt-5 -rotate-2 overflow-hidden sm:-mt-9 border-y-2 border-ink bg-ink py-3 text-paper sm:py-4">
            <Marquee
              items={marqueeStack}
              duration="60s"
              className="font-display text-2xl italic sm:text-3xl"
              dotClassName="text-mustard not-italic"
            />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading number={1} label="About" title="A little" accent="about me." />
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="reveal space-y-5 text-lg text-ink-soft lg:col-span-7">
                <p className="drop-cap">
                  Hello! I&apos;m a software engineer who likes building things
                  end to end: the database, the API and the interface. I&apos;m
                  currently studying for an MSc in Advanced Computer Science at
                  the University of Strathclyde in Glasgow.
                </p>
                <p>
                  Before that I did two internships at Eduplus Campus, building
                  ERP backend modules in Groovy and shipping a Flutter app from
                  design to handover. My main tools are Java, Spring Boot,
                  TypeScript, React, Node.js and PostgreSQL.
                </p>
              </div>
              <aside
                className="reveal card overflow-hidden lg:col-span-5"
                style={shadow("var(--tang)")}
              >
                <div className="flex items-center justify-between bg-ink px-6 py-3 text-paper">
                  <span className="kicker">Fact sheet</span>
                  <span aria-hidden className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-mustard" />
                    <span className="h-3 w-3 rounded-full bg-tang" />
                    <span className="h-3 w-3 rounded-full bg-rust" />
                  </span>
                </div>
                <dl className="divide-y-2 divide-dashed divide-ink/20 px-6">
                  {facts.map((fact) => (
                    <div key={fact.label} className="py-4">
                      <dt className="kicker text-rust">{fact.label}</dt>
                      <dd className="mt-1 font-medium">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>

            <ul className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <li key={stat.label} className="reveal flex justify-center">
                  <div
                    className={`grid aspect-square w-full max-w-[170px] place-content-center rounded-full border-2 border-ink text-center shadow-hard ${stat.look}`}
                  >
                    <p className="font-display text-5xl font-black sm:text-6xl">
                      <CountUp value={stat.value} />
                    </p>
                    <p className="kicker mt-1 !text-[0.65rem]">{stat.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 overflow-hidden bg-paper-deep py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              number={2}
              label="Experience & education"
              title="The story"
              accent="so far."
            />
            <div className="relative">
              <Rail />
              <ol className="relative space-y-8 py-14 pl-14 md:space-y-10 md:py-20 md:pl-24">
                {timeline.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.title + item.date} className="reveal relative">
                      {/* Node centred on the stripe band */}
                      <span className="absolute -left-16 top-6 grid h-10 w-10 place-items-center rounded-full border-[3px] border-paper-deep bg-ink text-mustard md:-left-[102px] md:h-[52px] md:w-[52px] md:text-lg">
                        <Icon />
                      </span>
                      <article className="card p-6 md:p-8">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="kicker rounded-full border-2 border-ink bg-mustard px-3 py-1 text-ink">
                            {item.date}
                          </span>
                          <span className="kicker text-rust">{item.kind}</span>
                        </div>
                        <h3 className="mt-4 text-2xl md:text-3xl">{item.title}</h3>
                        <p className="mt-1 font-semibold text-ink-soft">{item.subtitle}</p>
                        {item.body && (
                          <p className="mt-3 max-w-2xl text-ink-soft">{item.body}</p>
                        )}
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading number={3} label="Projects" title="Selected" accent="work." />
            <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project, i) => (
                <li key={project.title} className="reveal">
                  <article
                    className="card card-lift group flex h-full flex-col"
                    style={shadow(featuredShadows[i % featuredShadows.length])}
                  >
                    <a
                      href={project.link ?? project.github}
                      {...external}
                      aria-label={`Open ${project.title}`}
                      className="m-3 block overflow-hidden rounded-[20px] border-2 border-ink"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                        className="print-img aspect-[16/10] w-full object-cover object-top"
                      />
                    </a>
                    <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
                      <p className="kicker text-rust">No. {pad(i + 1)}</p>
                      <h3 className="mt-2 text-3xl">{project.title}</h3>
                      <p className="mt-3 text-[15px] text-ink-soft">{project.summary}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5 text-ink-soft">
                        {project.stack.map((tech) => (
                          <li key={tech} className="chip">
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <ProjectLinks project={project} className="mt-auto pt-6" />
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <h3 className="reveal mt-20 text-3xl sm:text-4xl">
              More from the <em className="text-rust">archive</em>
            </h3>
            <ul className="mt-8 grid gap-8 md:grid-cols-2">
              {archive.map((project) => (
                <li key={project.title} className="reveal">
                  <article className="card card-lift group flex h-full gap-5 p-4">
                    <a
                      href={project.link ?? project.github}
                      {...external}
                      aria-label={`Open ${project.title}`}
                      className="block w-24 shrink-0 self-start overflow-hidden rounded-2xl border-2 border-ink sm:w-36"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        sizes="144px"
                        className="print-img aspect-square w-full object-cover object-top"
                      />
                    </a>
                    <div className="flex min-w-0 flex-1 flex-col py-1 pr-1">
                      <h4 className="text-xl sm:text-2xl">{project.title}</h4>
                      <p className="mt-1 text-[15px] text-ink-soft">{project.summary}</p>
                      <p className="mt-2 font-mono text-xs text-ink-soft">
                        {project.stack.join(" / ")}
                      </p>
                      <ProjectLinks project={project} className="mt-auto pt-4" />
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 bg-paper-deep py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading number={4} label="Skills" title="Tools of" accent="the trade." />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-3">
              {skills.map((group) => {
                const look = skillLook[group.group] ?? skillLook.Tools;
                const Icon = look.icon;
                return (
                  <li
                    key={group.group}
                    className={`reveal rounded-[28px] border-2 border-ink p-7 shadow-hard ${look.className}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-3xl">{group.group}</h3>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-current text-xl">
                        <Icon />
                      </span>
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="chip !text-[0.9rem]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden bg-ink pt-20 text-paper sm:pt-28"
          style={{ "--btn-shadow": "var(--tang)" } as CSSProperties}
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              dark
              number={5}
              label="Contact"
              title="Let's build something"
              accent="together."
            />
            <p className="reveal max-w-2xl text-lg text-paper/80">
              I&apos;m looking for graduate software engineering roles. If
              you&apos;re hiring, I&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="reveal mt-10 inline-block break-words font-display text-[1.35rem] font-bold underline decoration-mustard decoration-4 underline-offset-8 transition-colors hover:text-mustard sm:text-5xl"
            >
              {/* Let long addresses wrap at the @ rather than mid-word */}
              {profile.email.split("@")[0]}
              <wbr />@{profile.email.split("@")[1]}
            </a>
            <div className="reveal mt-12 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="btn btn-mustard">
                <FaEnvelope /> Send an email
              </a>
              <a {...cvDownload} className="btn btn-paper">
                <FiDownload /> Download CV
              </a>
              <a href={profile.linkedin} {...external} className="btn btn-paper">
                <FaLinkedinIn /> LinkedIn
              </a>
              <a href={profile.github} {...external} className="btn btn-paper">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Sun setting into the stripes */}
          <div
            aria-hidden
            className="relative mx-auto mt-20 h-[210px] w-[300px] sm:h-[300px] sm:w-[430px]"
          >
            <div
              className="rays absolute left-1/2 top-[70%] aspect-square w-[210%] -translate-x-1/2 -translate-y-1/2"
              style={{ "--ray": "rgb(239 170 49 / 0.16)" } as CSSProperties}
            />
            <div className="absolute inset-0 overflow-hidden">
              <Sun id="contact-sun" className="w-full" />
            </div>
          </div>
          <Stripes />
        </section>
      </main>

      <footer className="bg-ink text-paper/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="kicker text-center">Made in Glasgow ✺ Set in Fraunces &amp; DM Sans</p>
        </div>
      </footer>
    </>
  );
}
