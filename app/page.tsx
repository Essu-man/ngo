import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate">
      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-100/60 to-emerald-100/40 dark:from-cyan-950/40 dark:to-emerald-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-3 py-1 text-xs text-foreground/70 ring-1 ring-black/10 dark:ring-white/10">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Making impact since 2012
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Empowering communities with education, health, and opportunity
            </h1>
            <p className="mt-5 text-lg text-foreground/70 max-w-xl">
              BrightFuture Foundation partners with local leaders to deliver programs that unlock potential and create lasting change.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/donate" className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 font-medium hover:opacity-90">
                Donate Now
              </Link>
              <Link href="/programs" className="inline-flex items-center justify-center rounded-full px-5 py-3 ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/10">
                Explore Programs
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2"><span className="font-semibold text-foreground">120k+</span> lives reached</div>
              <div className="flex items-center gap-2"><span className="font-semibold text-foreground">35</span> communities</div>
              <div className="flex items-center gap-2"><span className="font-semibold text-foreground">93%</span> programs direct-to-impact</div>
            </div>
          </div>
          <div className="relative aspect-[4/3] sm:aspect-[16/12] lg:aspect-[4/3]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-white/60 dark:from-white/5 dark:to-white/0">
              <svg viewBox="0 0 400 300" className="size-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#4ade80" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="400" height="300" fill="url(#g1)" opacity="0.08" />
                <g fill="none" stroke="#10b981" strokeOpacity="0.4" strokeWidth="2">
                  <circle cx="80" cy="80" r="40" />
                  <circle cx="200" cy="140" r="60" />
                  <circle cx="320" cy="100" r="36" />
                </g>
                <g>
                  <rect x="40" y="190" width="60" height="80" rx="8" fill="#0ea5e9" opacity="0.35" />
                  <rect x="120" y="170" width="60" height="100" rx="8" fill="#10b981" opacity="0.35" />
                  <rect x="200" y="200" width="60" height="70" rx="8" fill="#84cc16" opacity="0.35" />
                  <rect x="280" y="160" width="60" height="110" rx="8" fill="#f59e0b" opacity="0.35" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Education", desc: "Scholarships, literacy, and digital skills for youth.", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm1 5l5 3-5 3-5-3 5-3zm-6 5l5 3 5-3v4l-5 3-5-3v-4z" },
            { title: "Health", desc: "Clinics, nutrition, and mental health support.", icon: "M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4a1.5 1.5 0 011.5 1.5V12H15a1.5 1.5 0 010 3h-1.5V16.5a1.5 1.5 0 01-3 0V15H9a1.5 1.5 0 010-3h1.5V8.5A1.5 1.5 0 0112 7z" },
            { title: "Livelihoods", desc: "Training, microfinance, and entrepreneurship.", icon: "M4 6a2 2 0 012-2h8l4 4v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm8 1v3h3" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6 bg-white/60 dark:bg-white/5">
              <div className="size-10 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor"><path d={f.icon} /></svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-transparent to-black/[.03] dark:to-white/[.03]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-2xl ring-1 ring-black/10 dark:ring-white/10 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="size-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="400" height="300" fill="url(#g2)" opacity="0.06" />
              <polyline points="20,250 80,210 140,230 200,160 260,180 320,120 380,140" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              <polyline points="20,260 80,200 140,210 200,150 260,160 320,100 380,120" fill="none" stroke="#22c55e" strokeWidth="3" />
              <g fill="#0ea5e9">
                <circle cx="200" cy="160" r="5" />
                <circle cx="320" cy="120" r="5" />
              </g>
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Real impact. Transparent reporting.</h2>
            <p className="mt-4 text-foreground/70 max-w-prose">From quarterly reports to on-the-ground stories, we share how every donation fuels measurable outcomes. Explore our dashboards and see the difference your support makes.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/impact" className="inline-flex items-center justify-center rounded-full px-5 py-3 ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/10">View Impact</Link>
              <Link href="/about" className="inline-flex items-center justify-center rounded-full px-5 py-3 ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg:white/10">Our Story</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
