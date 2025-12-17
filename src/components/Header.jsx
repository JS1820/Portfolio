import { useState, useMemo } from 'react'
import { Moon, Sun, Download } from 'lucide-react'
import { LINKS } from '../data/links'

export default function Header() {
  const [dark, setDark] = useState(true)
  const containerCls = useMemo(() => dark ? 'dark' : '', [dark])

  

  return (
    <div className={containerCls}>
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-slate-950 shadow-md">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-slate-900 dark:text-slate-100">
          <div className="flex items-center gap-3">
            <img
             src="src/image/JS.jpg"   
            alt="Jeevan Satish"
             className="h-9 w-9 rounded-full object-cover border border-slate-300 dark:border-slate-700"
            />
            <span className="font-semibold">Jeevan Satish</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            {[
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map(l => (
              <a key={l.id} href={`#${l.id}`} className="hover:opacity-80">
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="toggle theme"
              onClick={() => setDark(d => !d)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a href={LINKS.resume} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}