import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to enhance readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Delivering modern, interactive web experiences
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            ArabixDev
            <span className="block bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Tech-forward portfolio studio
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
            We craft fast, scalable, and playful digital products. Explore our selected work and get in touch to build something remarkable together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
              View Projects
            </a>
            <a href="#contact" className="rounded-lg bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-900 shadow ring-1 ring-slate-200 backdrop-blur hover:bg-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
