"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { GridBackgroundDemo } from "../ui/GridBackground";

export default function ClientProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const authPaths = ["/"];

  return (
    <div className="relative">
      {/* background grid */}
      <div className="absolute inset-0 -z-10">
        <GridBackgroundDemo />
      </div>

      {/* navbar except auth pages */}
      {authPaths.includes(path) && <Navbar />}

      {children}

      <Footer />
    </div>
  );
}
