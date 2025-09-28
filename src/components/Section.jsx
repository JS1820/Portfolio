export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
        {title}
      </h2>
      {children}
    </section>
  )
}