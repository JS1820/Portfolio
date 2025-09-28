import { Github, ExternalLink } from 'lucide-react'

export default function ProjectCard({ p }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 group bg-white dark:bg-slate-900">
      <div className="relative h-52">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {p.tech.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-white/70 dark:bg-slate-800/70 backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{p.blurb}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{p.impact}</p>
        <div className="flex gap-3 pt-1">
          <a href={p.live} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 text-sm">
            <ExternalLink className="h-4 w-4" /> Live
          </a>
          <a href={p.repo} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm">
            <Github className="h-4 w-4" /> Code
          </a>
        </div>
      </div>
    </div>
  )
}