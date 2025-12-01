export default function AboutPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">About BrightFuture</h1>
            <p className="mt-4 text-foreground/70">We are a non-profit focused on community-led development across education, health, and livelihoods. Since 2012, we have partnered with local leaders to co-create programs that drive lasting change.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6">
                    <h3 className="font-medium">Mission</h3>
                    <p className="mt-2 text-foreground/70">To empower individuals with the tools and opportunities to thrive.</p>
                </div>
                <div className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6">
                    <h3 className="font-medium">Vision</h3>
                    <p className="mt-2 text-foreground/70">A world where every community can build its own brighter future.</p>
                </div>
            </div>
        </div>
    );
}
