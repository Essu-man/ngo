import Link from "next/link";

const PROGRAMS = [
    {
        title: "Education Access",
        desc: "Scholarships, after-school programs, and digital labs for rural youth.",
        stats: "8,400 students/year",
    },
    {
        title: "Community Health",
        desc: "Mobile clinics, nutrition education, and mental health support.",
        stats: "52,000 visits/year",
    },
    {
        title: "Livelihoods & MSMEs",
        desc: "Vocational training, microfinance circles, and entrepreneurship mentorship.",
        stats: "2,300 entrepreneurs",
    },
];

export default function ProgramsPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Our Programs</h1>
            <p className="mt-4 text-foreground/70 max-w-2xl">We co-design initiatives with local leaders, focusing on scalable, community-owned solutions. Here are our core pillars and flagship initiatives.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROGRAMS.map((p) => (
                    <div key={p.title} className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6 bg-white/60 dark:bg-white/5">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="mt-2 text-foreground/70">{p.desc}</p>
                        <div className="mt-4 text-sm"><span className="font-medium text-foreground">Annual reach:</span> {p.stats}</div>
                    </div>
                ))}
            </div>
            <div className="mt-10 flex gap-3">
                <Link href="/impact" className="inline-flex items-center justify-center rounded-full px-5 py-3 ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/10">See Impact</Link>
                <Link href="/donate" className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 font-medium hover:opacity-90">Support a Program</Link>
            </div>
        </div>
    );
}
