"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    if (!heroRef.current || !headlineRef.current || !subRef.current || !descRef.current) return;

    const tl = gsap.timeline();

    // Sub-Headline / Motto Pendek
    tl.from(subRef.current, {
      opacity: 0,
      x: -100,
      duration: 0.8,
      ease: "power3.out",
    });

    // Headline Utama - tiap kata muncul bergantian
    const headlineWords = headlineRef.current.querySelectorAll("span.word");
    tl.from(headlineWords, {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    }, "-=0.5");

    // Teks Penjelas
    tl.from(descRef.current, {
      opacity: 0,
      x: -50,
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
        className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 text-left lg:items-center lg:text-center"
      >
        {/* Sub-Headline / Motto Pendek */}
        <p
          ref={subRef}
          className="text-yellow-500 uppercase font-bold mb-4 tracking-widest break-words max-w-full"
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.5rem)',
            lineHeight: '1.3',
          }}
        >
          Bersatu dalam Iman, Bertumbuh dalam Kasih, Melayani dengan Setia.
        </p>

        {/* HEADLINE UTAMA */}
        <h1
          ref={headlineRef}
          className="font-black tracking-tight drop-shadow-xl uppercase mb-4 break-words max-w-full"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 4rem)',
            lineHeight: '1.2',
          }}
        >
          {"Persekutuan Mahasiswa Kristen".split(" ").map((word, i) => (
            <span key={i} className="word text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 mr-2">
              {word}
            </span>
          ))}
          <br />
          {"Universitas Dipa Makassar".split(" ").map((word, i) => (
            <span key={i} className="word bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 mr-2">
              {word}
            </span>
          ))}
        </h1>

        {/* Teks Penjelas / Nama Institusi */}
        <p
          ref={descRef}
          className="text-gray-200 font-medium leading-relaxed break-words max-w-full drop-shadow-md"
          style={{
            fontSize: 'clamp(0.8rem, 2vw, 1.25rem)',
            lineHeight: '1.5',
          }}
        >
          Persekutuan Mahasiswa Kristen (PMK) Universitas Dipa Makassar
        </p>
      </div>
    </div>
  );
}
