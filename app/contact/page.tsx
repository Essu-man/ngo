export default function ContactPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
            <p className="mt-4 text-foreground/70">We'd love to hear from you. For partnership or media inquiries, drop us a message below.</p>

            <form action="mailto:hello@brightfuture.org" method="post" encType="text/plain" className="mt-8 grid gap-4">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input required name="name" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input required type="email" name="email" className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea required name="message" rows={5} className="mt-1 w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <button className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 w-fit">Send</button>
            </form>

            <div className="mt-8 text-sm text-foreground/70">
                Or email us directly: <a className="underline" href="mailto:hello@brightfuture.org">hello@brightfuture.org</a>
            </div>
        </div>
    );
}
