import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400">
        
        {/* Left */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} planiFy AI. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-zinc-200 transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-zinc-200 transition">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-zinc-200 transition">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}

