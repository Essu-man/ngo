"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-colors ${scrolled ? "backdrop-blur bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10" : "bg-transparent"}`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="BrightFuture" width={28} height={28} />
                    <span className="text-lg font-semibold">BrightFuture Foundation</span>
                </Link>
                <button
                    className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground/30 sm:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        {open ? (
                            <path fillRule="evenodd" d="M6.22 5.22a.75.75 0 011.06 0L12 9.94l4.72-4.72a.75.75 0 111.06 1.06L13.06 11l4.72 4.72a.75.75 0 11-1.06 1.06L12 12.06l-4.72 4.72a.75.75 0 11-1.06-1.06L10.94 11 6.22 6.28a.75.75 0 010-1.06z" clipRule="evenodd" />
                        ) : (
                            <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25c0-.414.336-.75.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25c0-.414.336-.75.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        )}
                    </svg>
                </button>
                <div className="hidden sm:flex items-center gap-6 text-sm">
                    <Link href="/about" className="hover:text-foreground/80">About</Link>
                    <Link href="/programs" className="hover:text-foreground/80">Programs</Link>
                    <Link href="/impact" className="hover:text-foreground/80">Impact</Link>
                    <Link href="/contact" className="hover:text-foreground/80">Contact</Link>
                    <Link href="/donate" className="rounded-full bg-foreground text-background px-4 py-2 font-medium hover:opacity-90">Donate</Link>
                </div>
            </nav>
            {open && (
                <div className="sm:hidden border-t border-black/5 dark:border-white/10">
                    <div className="space-y-1 px-4 py-3">
                        <Link href="/about" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">About</Link>
                        <Link href="/programs" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">Programs</Link>
                        <Link href="/impact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">Impact</Link>
                        <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10">Contact</Link>
                        <Link href="/donate" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md bg-foreground text-background text-center">Donate</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
