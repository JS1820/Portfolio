import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Section from './components/Section'
import Chip from './components/Chip'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { LINKS } from './data/links'
import { SKILLS } from './data/skills'
import { PROJECTS } from './data/projects'
import { EXPERIENCE } from './data/experience'
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <div className="dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Header />

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Software Developer
            </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300">
  Software Developer with 3+ years of experience designing and deploying secure, high-performance applications using React,
  Next.js, Python, and Django. Recently completed a Master’s in Computer Science at Drexel University, with a strong focus on
  frontend-leaning full-stack development, cloud-native systems, and clean, maintainable architectures that deliver
  measurable business impact.
</p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/>San Jose, CA, USA</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/>+1(267)593-9889 </div>
              <a href={LINKS.email} className="flex items-center gap-2 hover:underline"><Mail className="h-4 w-4"/>Email me</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="order-first md:order-none"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
<img
  src="/images/portfolio-hero.png"
  alt="Portfolio hero"
  className="h-full w-full object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-sm opacity-90">
                <div className="font-medium">Latest build: TaskFlow</div>
                <div>• React.js, Tailwind CSS, Flask, PostgreSQL, Docker, AWS</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-slate-600 dark:text-slate-300 leading-relaxed">
              I’m Jeevan Satish, a software developer with over 3 years of experience designing and delivering
              scalable, high-performance web applications. My work spans frontend-leaning full-stack development
              using React, Next.js, Python, and Django, with a strong focus on clean architecture, modular design,
              and maintainable code.
              <br /><br />
              I’ve built and deployed secure, cloud-ready systems across enterprise environments, working extensively
              with RESTful APIs, SQL and NoSQL databases, CI/CD pipelines, and containerized deployments. I enjoy
              solving complex problems, improving system performance, and translating business requirements into
              reliable, user-focused solutions.
              </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.slice(0, 9).map(s => <Chip key={s}>{s}</Chip>)}
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map(p => <ProjectCard key={p.title} p={p} />)}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {EXPERIENCE.map(e => (
              <div key={e.role + e.org} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-semibold">{e.role} · {e.org}</div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{e.time}</span>
                </div>
                <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
                  {e.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>


        {/* Education */}
        <Section id="education" title="Education">
  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
    <div className="flex items-center justify-between mb-2">
      <div className="text-lg font-semibold">Drexel University</div>
      <span className="text-xs text-slate-500 dark:text-slate-400">Sept 2023 – Sept 2025</span>
    </div>
    <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
      <li>Master of Science in Computer Science </li>
      <li>CGPA: 3.87 / 4.0</li>
      <li>Relevant Coursework: Data Structures & Algorithms, AI, CyberSecurity</li>
    </ul>
  </div>

  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mt-4">
    <div className="flex items-center justify-between mb-2">
      <div className="text-lg font-semibold">Presidency University</div>
      <span className="text-xs text-slate-500 dark:text-slate-400">Jul 2020 – Aug 2023</span>
    </div>
    <ul className="list-disc pl-5 text-slate-600 dark:text-slate-300 text-sm space-y-1">
      <li>Bachelor of Technology in Big Data</li>
      <li>CGPA: 8.93 / 10.0</li>
    </ul>
  </div>
</Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {SKILLS.map(s => <Chip key={s}>{s}</Chip>)}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Have a role, project, or question? Send a message and I’ll get back shortly.
                  </p>
      <div className="flex gap-3">
        <a href={LINKS.github} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
          <Github className="h-4 w-4"/> GitHub
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
          <Linkedin className="h-4 w-4"/> LinkedIn
        </a>
        <a href={LINKS.email}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90">
          <Mail className="h-4 w-4"/> Email
        </a>
      </div>
    </div>

    {/* Use the new component */}
    <ContactForm />
  </div>
</Section>

        <Footer />
      </main>
    </div>
  )
}