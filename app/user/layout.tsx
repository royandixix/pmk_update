"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSidePanel from "./components/FloatingSidePanel";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <Header />

      <main>{children}</main>

      <Footer />

      {/* Floating Panel muncul di semua halaman user */}
      <FloatingSidePanel />
    </section>
  );
}
