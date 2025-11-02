import { Code, Monitor, Smartphone } from 'lucide-react';

const items = [
  {
    title: 'FinTech Dashboard',
    desc: 'Real-time analytics with custom charts and role-based access.',
    icon: Monitor,
    badge: 'Web App',
    gradient: 'from-indigo-500 via-sky-500 to-cyan-400',
  },
  {
    title: 'Mobile Commerce',
    desc: 'Headless storefront with blazing-fast product search.',
    icon: Smartphone,
    badge: 'Mobile-first',
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-400',
  },
  {
    title: 'Developer Toolkit',
    desc: 'Open-source components for rapid product delivery.',
    icon: Code,
    badge: 'Open Source',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-600">A glimpse of what we build: performant apps with clean design and delightful interactions.</p>
          </div>
          <a href="#contact" className="hidden rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 md:inline-block">Start a project</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1">
              <div className={`h-32 w-full bg-gradient-to-r ${item.gradient}`} />
              <div className="p-5">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                  <item.icon className="h-4 w-4" />
                  {item.badge}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-slate-600">{item.desc}</p>
                <div className="mt-4 text-sm font-medium text-slate-900/70 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore case study →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
