import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  education,
  experience,
  facts,
  profile,
  projects,
  skills,
  type Project,
} from "@/lib/data";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function Section({
  id,
  title,
  count,
  children,
}: {
  id: string;
  title: string;
  count?: number;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t py-16 animate-in fade-in fill-mode-both duration-700 md:py-20"
    >
      <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
        {count !== undefined && (
          <sup className="ml-1.5 text-sm font-normal tabular-nums text-muted-foreground">
            {String(count).padStart(2, "0")}
          </sup>
        )}
      </h2>
      {children}
    </section>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const linkClass =
    "inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground";
  return (
    <div className="flex gap-4 text-sm">
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Live <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
        Code <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function Screenshot({
  project,
  sizes,
  priority,
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <a
      href={project.link ?? project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg border bg-muted"
    >
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        sizes={sizes}
        priority={priority}
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </a>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Glasgow", addressCountry: "GB" },
  alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.school })),
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-medium">
            {profile.name}
          </a>
          <div className="flex items-center gap-1">
            <ul className="mr-2 hidden gap-1 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        <section className="grid gap-12 py-16 animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-700 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I build full-stack web and mobile applications, from ERP backends in Groovy to
              AI-assisted web apps in React and Node.js. Currently studying for an MSc at the
              University of Strathclyde after two internships at Eduplus Campus.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <Button asChild className="mr-2">
                <a href={profile.resume} download="Avishkar_Mahalingpure_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Résumé
                </a>
              </Button>
              {[
                { href: profile.github, icon: Github, label: "GitHub" },
                { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <dl className="space-y-5 self-end border-l pl-8 lg:col-span-4 lg:col-start-9">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                <dd className="mt-1 text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Section id="experience" title="Experience" count={experience.length}>
          <ul className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {experience.map((job) => (
              <li key={job.period}>
                <p className="text-sm tabular-nums text-muted-foreground">{job.period}</p>
                <h3 className="mt-2 font-medium">
                  {job.role} · {job.company}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{job.summary}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-12 grid gap-4 border-t pt-8 lg:grid-cols-2 lg:gap-16">
            {education.map((item) => (
              <li key={item.degree} className="flex items-baseline justify-between gap-4">
                <span>
                  {item.degree}
                  <span className="text-muted-foreground"> · {item.school}</span>
                </span>
                <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects" count={projects.length}>
          <ul className="space-y-16">
            {featured.map((project, i) => (
              <li
                key={project.title}
                className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-7">
                  <Screenshot
                    project={project}
                    sizes="(min-width: 768px) 640px, 100vw"
                    priority={i === 0}
                  />
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>
                  <p className="mt-4 text-sm text-muted-foreground/80">
                    {project.stack.join(" · ")}
                  </p>
                  <div className="mt-5">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="mt-20 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((project) => (
              <li key={project.title} className="group">
                <Screenshot
                  project={project}
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                />
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">{project.title}</h3>
                  <ProjectLinks project={project} />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-x-16 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((row) => (
              <div key={row.group}>
                <dt className="text-sm text-muted-foreground">{row.group}</dt>
                <dd className="mt-1.5">{row.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m open to graduate software engineering roles. The quickest way to reach me
            is{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {profile.email}
            </a>
            , or on{" "}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              LinkedIn
            </a>
            .
          </p>
        </Section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
