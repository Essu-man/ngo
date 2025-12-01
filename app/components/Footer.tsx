import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-black/5 dark:border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-3 text-sm">
                <div>
                    <div className="font-semibold">BrightFuture Foundation</div>
                    <p className="mt-2 text-foreground/70 max-w-xs">Empowering communities through education, health, and opportunity.</p>
                </div>
                <div>
                    <div className="font-medium mb-2">Quick Links</div>
                    <ul className="space-y-1">
                        <li><Link className="hover:text-foreground/80" href="/about">About</Link></li>
                        <li><Link className="hover:text-foreground/80" href="/programs">Programs</Link></li>
                        <li><Link className="hover:text-foreground/80" href="/impact">Impact</Link></li>
                        <li><Link className="hover:text-foreground/80" href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="font-medium mb-2">Stay in touch</div>
                    <p className="text-foreground/70">hello@brightfuture.org</p>
                    <p className="text-foreground/70">+1 (555) 123-4567</p>
                </div>
            </div>
            <div className="text-xs text-foreground/60 py-4 text-center">© {new Date().getFullYear()} BrightFuture Foundation. All rights reserved.</div>
        </footer>
    );
}
