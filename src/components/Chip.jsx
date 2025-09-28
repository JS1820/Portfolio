export default function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
      {children}
    </span>
  )
}