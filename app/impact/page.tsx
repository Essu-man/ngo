export default function ImpactPage() {
    const metrics = [
        { label: "Lives reached", value: "120,000+" },
        { label: "Communities", value: "35" },
        { label: "Scholarships", value: "2,100" },
        { label: "% to programs", value: "93%" },
    ];

    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Impact & Transparency</h1>
            <p className="mt-4 text-foreground/70 max-w-2xl">We measure what matters and publish our progress. Below are key indicators and a snapshot of outcomes from the past 12 months.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((m) => (
                    <div key={m.label} className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6 bg-white/60 dark:bg-white/5">
                        <div className="text-2xl font-semibold">{m.value}</div>
                        <div className="text-foreground/60 text-sm mt-1">{m.label}</div>
                    </div>
                ))}
            </div>

            <div className="mt-12 rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6 bg-white/60 dark:bg-white/5">
                <div className="text-lg font-medium">12‑month outcomes</div>
                <p className="mt-2 text-foreground/70 max-w-prose">Attendance rates increased by 18% across education programs; 9 new clinics deployed; 430 MSMEs launched with an average 1.7x income uplift within 6 months. Independent audit completed Q3.</p>
                <div className="mt-6 h-48 w-full rounded-xl bg-gradient-to-br from-cyan-100/60 to-emerald-100/60 dark:from-cyan-900/20 dark:to-emerald-900/20 flex items-center justify-center text-sm text-foreground/60">
                    Quarterly charts/dashboard embed placeholder
                </div>
            </div>

            <div className="mt-10 text-sm text-foreground/70">
                For detailed reports, request access to our data room at: <a className="underline" href="mailto:hello@brightfuture.org?subject=Data%20Room%20Access">hello@brightfuture.org</a>
            </div>
        </div>
    );
}
