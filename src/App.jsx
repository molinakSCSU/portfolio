import {
  ArrowRight,
  ClockCountdown,
  Envelope,
  FilmSlate,
  Sparkle,
} from '@phosphor-icons/react';

const projects = [
  {
    name: 'Variance',
    subtitle: 'Enterprise Finance Operations Platform',
    description:
      'An enterprise SaaS platform designed to automate Accounts Payable and Accounts Receivable workflows. The application ingests PDFs and images, uses Gemini AI to extract structured line items, compares invoice and PO data for discrepancies, and tracks vendor trust metrics. It supports strict approval and compliance logging and provides practical action tools like review overlays and CSV exports for legacy ERP imports.',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express',
      'Supabase (PostgreSQL)',
      'Clerk Auth',
      'Google Gemini AI',
      'Tailwind CSS v4',
      'shadcn/ui',
    ],
    githubUrl: '',
    demoUrl: '',
  },
  {
    name: 'CBT League Website',
    subtitle: 'Basketball Analytics Platform',
    description:
      'Designed and shipped a premium-feel web application to manage and display data for a continuous three-season basketball league. The platform features interactive team and player dashboards, animated stat visualizations, and a secure admin workflow. Built fully SSG-exported for GitHub Pages with type-safe stat pipelines, it includes an admin-to-GitHub publishing flow via a Vercel serverless endpoint that writes stat changes directly to the repository.',
    stack: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'GitHub REST API'],
    githubUrl: 'https://github.com/molinakSCSU/cbtleague',
    demoUrl: 'https://molinakscsu.github.io/cbtleague/',
  },
  {
    name: 'CS Library Kiosk ("CS Library Nuc Project")',
    subtitle: 'Touch-Screen Self-Service Library System',
    description:
      'Developed a full-stack Python application designed for a touch-screen, self-service library experience at SCSU. Working with a small development team, I implemented dual sign-in flows (student ID scan and email/password), a paginated catalog, checkout/return workflows, and a My Books dashboard. The system includes async performance optimizations for responsive hardware use and live book metadata integration.',
    stack: ['Python 3', 'NiceGUI', 'FastAPI', 'SQLite', 'bcrypt', 'Open Library API'],
    githubUrl: 'https://github.com/AmilcarArmmand/CS_Library_Nuc_Project',
    demoUrl: '',
  },
  {
    name: 'Movie Recommender',
    subtitle: 'Personalized Recommendation Platform',
    description:
      'Designed and shipped a full-stack movie recommendation web application featuring personalized ranking driven by likes, skips, and watch history. Engineered watched and watch-later workflows alongside a revamped responsive UI. The system integrates external APIs to deliver highly accurate, genre-based recommendations ranked by combined IMDb and user-score signals.',
    stack: ['React 18', 'Vite', 'Tailwind CSS v4', 'shadcn/ui', 'Flask (Python)', 'TMDB and OMDb APIs'],
    githubUrl: 'https://github.com/molinakSCSU/Movie-Project.git',
    demoUrl: '',
  },
];

const quickAboutDescription =
  'Hi, I’m Kenneth. I’m a Computer Science student at Southern Connecticut State University with a strong foundation in full-stack development. I enjoy working across the stack, from designing responsive frontends with React and TypeScript to architecting solid backend systems with Python and Node.';

const education = [
  {
    school: 'Naugatuck Valley Community College',
    location: 'Naugatuck, CT',
    degree: 'Associate of Computer Science',
    gpa: '3.80',
    date: 'August 2024',
    coursework: 'Java 1, Java II, Calculus II, Introduction to Database Design, Digital Design, Client-Side Web Development',
    honors: '4x Dean\'s List',
  },
  {
    school: 'Southern Connecticut State University',
    location: 'New Haven, CT',
    degree: 'Bachelor of Science, Computer Science',
    gpa: '3.79',
    date: 'Expected Graduation: May 2026',
    honors: '3x Dean\'s List',
  },
];

const technicalSkills = {
  programmingLanguages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  frameworksAndLibraries: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Flask', 'Tailwind CSS', 'Framer Motion'],
  toolsAndPlatforms: ['Supabase (PostgreSQL)', 'Clerk Auth', 'Google Gemini AI', 'Git', 'GitHub', 'Vite', 'REST APIs', 'SQLite'],
};

function App() {
  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only rounded-md px-3 py-2 text-sm font-semibold focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:bg-background"
      >
        Skip to main content
      </a>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(72%_48%_at_50%_-8%,rgba(165,194,210,0.82),rgba(224,210,188,0.45)_52%,transparent_78%),radial-gradient(42%_28%_at_8%_88%,rgba(180,198,182,0.32),transparent_78%),linear-gradient(130deg,#d8c3a7_0%,#e6d3b8_58%,#cfb89b_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 hidden opacity-[0.08] [background:linear-gradient(to_right,#3a342a_1px,transparent_1px),linear-gradient(to_bottom,#3a342a_1px,transparent_1px)] [background-size:56px_56px] md:block" />

      <div className="mx-auto max-w-[1220px] px-4 pb-12 pt-5 sm:px-5 md:px-8 md:pb-20 md:pt-8">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-5">
          <p className="w-full text-center text-sm font-semibold tracking-tight sm:w-auto sm:text-left">Kenneth Molina</p>
          <nav
            className="flex w-full flex-wrap items-center justify-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:w-auto sm:justify-start sm:gap-4 sm:text-xs sm:tracking-[0.18em]"
            aria-label="Primary"
          >
            <a href="#work" className="px-1 py-1 transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#about" className="px-1 py-1 transition-colors hover:text-foreground">
              About
            </a>
            <a href="#contact" className="px-1 py-1 transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>
        </header>

        <main id="main-content">
          <section className="grid gap-8 border-b border-border/80 py-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:py-14">
            <div className="grid gap-5 text-center reveal-up sm:text-left [animation-delay:100ms]">
              <p className="mx-auto text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mx-0">
                Computer Science Student & Software Developer
              </p>
              <h1 className="mx-auto max-w-[18ch] text-balance text-[clamp(1.72rem,6.3vw,3.2rem)] leading-[0.98] tracking-tight sm:mx-0">
                Building Robust Full-Stack Applications
              </h1>
              <p className="mx-auto max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:mx-0 md:text-base">Selected projects below.</p>
              <div className="mx-auto flex max-w-[60ch] flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs leading-relaxed text-foreground/80 sm:mx-0 sm:justify-start md:text-sm">
                <span>Naugatuck, CT</span>
                <span className="hidden sm:inline" aria-hidden="true">
                  |
                </span>
                <a
                  href="mailto:kennethmolina18@gmail.com"
                  className="underline decoration-border/80 underline-offset-4 hover:text-foreground"
                >
                  kennethmolina18@gmail.com
                </a>
                <span className="hidden sm:inline" aria-hidden="true">
                  |
                </span>
                <a href="tel:+14757313470" className="underline decoration-border/80 underline-offset-4 hover:text-foreground">
                  475-731-3470
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-1 sm:justify-start">
                <a
                  href="#work"
                  className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:h-9 sm:w-auto sm:justify-start"
                >
                  See Work
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full border border-border bg-background/85 px-4 text-sm font-medium transition-colors hover:bg-accent sm:h-9 sm:w-auto sm:justify-start"
                >
                  Reach Out
                  <Envelope size={16} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="reveal-up grid content-start gap-4 border-t border-border/70 pt-5 text-center md:border-l md:border-t-0 md:pt-0 md:pl-6 md:text-left [animation-delay:240ms]">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:justify-start">
                <ClockCountdown size={15} aria-hidden="true" />
                Quick About Me
              </div>
              <p className="reveal-up border-b border-border/55 py-2.5 text-sm leading-relaxed text-foreground/90 [animation-delay:320ms]">
                {quickAboutDescription}
              </p>
              <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-xs text-muted-foreground">
                <Sparkle size={14} weight="fill" className="floaty" aria-hidden="true" />
                Available for freelance and product collabs
              </div>
            </div>
          </section>

          <section id="work" className="scroll-mt-16 py-8 md:py-12">
            <div className="mb-6 flex flex-col gap-1.5 border-b border-border/80 pb-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Projects</p>
              <p className="text-xs text-muted-foreground">Builds across web, data, and product systems</p>
            </div>

            <ol className="grid divide-y divide-border/70">
              {projects.map((project, index) => (
                <li
                  key={project.name}
                  className="reveal-up grid gap-3 py-4 transition-colors hover:bg-background/55 md:gap-4 md:py-5"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="min-w-0 grid gap-1.5 md:gap-2">
                    <h3 className="text-balance text-lg font-semibold tracking-tight md:text-xl">{project.name}</h3>
                    <p className="text-xs font-medium text-muted-foreground md:text-sm">{project.subtitle}</p>
                    <p className="break-words text-sm leading-relaxed text-foreground/90">{project.description}</p>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold tracking-wide text-foreground/90">Tech Stack:</span>
                      {project.stack.map((tech) => (
                        <span
                          key={`${project.name}-${tech}`}
                          className="rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[0.68rem] font-medium leading-none text-foreground/85"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-foreground transition-colors hover:bg-accent"
                        >
                          GitHub
                        </a>
                      ) : (
                        <span
                          aria-disabled="true"
                          className="inline-flex items-center rounded-full border border-border/65 bg-background/70 px-3 py-1.5 text-muted-foreground/80"
                        >
                          GitHub
                        </span>
                      )}

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-foreground transition-colors hover:bg-accent"
                        >
                          Live Demo
                        </a>
                      ) : (
                        <span
                          aria-disabled="true"
                          className="inline-flex items-center rounded-full border border-border/65 bg-background/70 px-3 py-1.5 text-muted-foreground/80"
                        >
                          Live Demo
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="about" className="scroll-mt-16 border-y border-border/80 py-10 md:py-12">
            <div className="mb-6 flex flex-col gap-1.5 border-b border-border/80 pb-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Education & Skills</p>
              <p className="text-xs text-muted-foreground">Academic background and technical toolkit</p>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
              <div className="grid gap-5">
                {education.map((item, index) => (
                  <article
                    key={item.school}
                    className="reveal-up grid gap-2 border-l border-border/70 pl-4 md:pl-5"
                    style={{ animationDelay: `${90 + index * 100}ms` }}
                  >
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="text-balance text-lg font-semibold tracking-tight">{item.school}</h2>
                      <p className="text-xs text-muted-foreground">{item.location}</p>
                    </div>
                    <p className="text-sm text-foreground/90">
                      {item.degree} | GPA: {item.gpa}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                    {item.coursework ? (
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-foreground/85">Relevant Coursework:</span> {item.coursework}
                      </p>
                    ) : null}
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground/85">Honors:</span> {item.honors}
                    </p>
                  </article>
                ))}
              </div>

              <aside className="reveal-up grid content-start gap-5 border-t border-border/70 pt-5 md:border-l md:border-t-0 md:pt-0 md:pl-5 [animation-delay:260ms]">
                <article className="grid gap-2.5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.programmingLanguages.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[0.68rem] font-medium leading-none text-foreground/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="grid gap-2.5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.frameworksAndLibraries.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[0.68rem] font-medium leading-none text-foreground/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="grid gap-2.5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Tools & Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.toolsAndPlatforms.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/80 bg-background/90 px-2.5 py-1 text-[0.68rem] font-medium leading-none text-foreground/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </aside>
            </div>
          </section>

          <section
            id="contact"
            className="reveal-up mt-8 scroll-mt-16 grid gap-4 border-b border-border/80 pb-10 pt-2 md:mt-10 md:grid-cols-[1fr_auto] md:items-end"
          >
            <div className="grid gap-2">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Let\'s Build</p>
              <h2 className="max-w-[16ch] text-balance text-3xl leading-tight tracking-tight md:text-4xl">
                Want this level of design and product thinking in your next build?
              </h2>
            </div>

            <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center md:justify-end">
              <a
                href="mailto:kennethmolina18@gmail.com"
                className="inline-flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-full border border-border bg-background/80 px-4 text-sm font-medium transition-colors hover:bg-accent sm:h-10 sm:justify-start"
              >
                <Envelope size={16} weight="bold" aria-hidden="true" />
                kennethmolina18@gmail.com
              </a>
              <a
                href="mailto:kennethmolina18@gmail.com?subject=Let%27s%20Talk"
                className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:h-10 sm:justify-start"
              >
                <FilmSlate size={16} weight="bold" aria-hidden="true" />
                Let&apos;s Talk
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
