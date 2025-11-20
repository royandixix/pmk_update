"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    if (!heroRef.current || !headlineRef.current || !subRef.current || !descRef.current) return;

    const tl = gsap.timeline();

    // Sub-Headline (motto)
    tl.from(subRef.current, {
      opacity: 0,
      x: -100, // dari kiri
      duration: 0.8,
      ease: "power3.out",
    })
    // Headline utama
    .from(headlineRef.current, {
      opacity: 0,
      x: 100, // dari kanan
      duration: 1,
      ease: "power3.out",
    }, "-=0.5") // overlap 0.5s
    // Teks penjelas
    .from(descRef.current, {
      opacity: 0,
      x: -50, // dari kiri sedikit
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.5");
  }, []);

  return (
    <div
      className="relative h-screen bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/img/pengurus/pengurus terpilih-min.JPG')",
      }}
    >
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center px-6 lg:px-8 text-center"
      >
        {/* Sub-Headline / Motto Pendek */}
        <p
          ref={subRef}
          className="text-xl sm:text-2xl font-bold tracking-widest text-yellow-500 uppercase mb-4"
        >
          Bersatu dalam Iman, Bertumbuh dalam Kasih, Melayani dengan Setia.
        </p>

        {/* HEADLINE UTAMA */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-xl leading-tight uppercase mb-4"
        >
          <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Persekutuan Mahasiswa Kristen
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Universitas Dipa Makassar
          </span>
        </h1>

        {/* Teks Penjelas / Nama Institusi */}
        <p
          ref={descRef}
          className="mt-2 sm:mt-4 text-base sm:text-lg font-medium text-gray-200 max-w-3xl leading-relaxed drop-shadow-md"
        >
          Persekutuan Mahasiswa Kristen (PMK) Universitas Dipa Makassar
        </p>
      </div>
    </div>
  );
}
