import Link from "next/link";

const TIERS = [
    { amount: "$25", desc: "Supplies for a student's month of classes" },
    { amount: "$100", desc: "One community health screening kit" },
    { amount: "$250", desc: "Seed funding for a micro‑enterprise" },
    { amount: "$1,000", desc: "Sponsor a classroom for a semester" },
];

export default function DonatePage() {
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Donate</h1>
            <p className="mt-4 text-foreground/70">Your support fuels direct program delivery. 93% of every dollar goes straight to programs.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {TIERS.map((t) => (
                    <div key={t.amount} className="rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6 bg-white/60 dark:bg-white/5 flex flex-col">
                        <div className="text-2xl font-semibold">{t.amount}</div>
                        <p className="mt-2 text-foreground/70">{t.desc}</p>
                        <Link href="#" className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Give {t.amount}</Link>
                    </div>
                ))}
            </div>

            <div className="mt-8 rounded-2xl ring-1 ring-black/10 dark:ring-white/10 p-6">
                <div className="font-medium">Prefer a custom amount or bank transfer?</div>
                <p className="mt-2 text-foreground/70 text-sm">Email our philanthropy team at <a className="underline" href="mailto:giving@brightfuture.org">giving@brightfuture.org</a> for wiring instructions and receipts.</p>
            </div>
        </div>
    );
}
