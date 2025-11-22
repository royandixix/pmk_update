"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (
      !heroRef.current ||
      !headlineRef.current ||
      !descRef.current ||
      !ctaRef.current ||
      !overlayRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 1024;
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" }
      });

      // Background overlay fade in
      tl.from(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
      });

      // Headline - Different animation for mobile vs desktop
      const words = headlineRef.current.querySelectorAll(".word");
      
      if (isMobile) {
        // Mobile: Simple fade up animation
        tl.from(headlineRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        }, "-=0.4");
      } else {
        // Desktop: Spectacular 3D animation
        tl.from(words, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          transformOrigin: "50% 50% -100px",
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }, "-=0.4");
      }

      // Teks Penjelas - Simpler on mobile
      tl.from(
        descRef.current,
        {
          opacity: 0,
          x: isMobile ? -30 : -80,
          filter: isMobile ? "none" : "blur(10px)",
          duration: isMobile ? 0.8 : 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // CTA Buttons - Less dramatic bounce on mobile
      tl.fromTo(
        ctaRef.current.children,
        {
          opacity: 0,
          scale: isMobile ? 0.9 : 0.5,
          y: isMobile ? 20 : 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: isMobile ? "power3.out" : "elastic.out(1, 0.6)",
          stagger: 0.1,
        },
        "-=0.4"
      );

      // Floating animation hanya untuk desktop
      if (!isMobile) {
        tl.to(headlineRef.current, {
          y: -10,
          duration: 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }, "+=0.5");
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gray-900 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/img/pengurus/pengurus terpilih-min.JPG')",
      }}
    >
      {/* Overlay Gradient dengan animasi */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"
      ></div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col justify-center items-start min-h-screen px-6 sm:px-8 lg:px-16 pt-32 pb-20"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* KIRI - Deskripsi & Buttons */}
            <div className="order-2 lg:order-1">
              {/* Teks Penjelas - Clean & Readable */}
              <p
                ref={descRef}
                className="text-gray-300 font-normal leading-relaxed mb-8 will-change-transform"
                style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
                  lineHeight: "1.6",
                }}
              >
                Bersatu dalam Iman, Bertumbuh dalam Kasih,
                <br />
                Melayani dengan Setia.
              </p>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl text-base will-change-transform">
                 lanjut
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-200 backdrop-blur-sm text-base flex items-center justify-center gap-2 will-change-transform">
                  Hubungi kami
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* KANAN - Headline */}
            <div className="order-1 lg:order-2">
              <h1
                ref={headlineRef}
                className="font-extrabold tracking-tight text-white will-change-transform"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  perspective: "1000px",
                }}
              >
                <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
                  Persekutuan
                </span>{" "}
                <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
                  Mahasiswa
                </span>{" "}
                <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
                  Kristen
                </span>
                <br />
                <span className="word inline-block">Universitas</span>{" "}
                <span className="word inline-block">Dipa</span>{" "}
                <span className="word inline-block">Makassar</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}