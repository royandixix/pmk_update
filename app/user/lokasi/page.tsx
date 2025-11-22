"use client";

import React from 'react';

export default function SekretariatInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl lg:text-5xl  text-indigo-700 mb-3">
          Sekretariat PMK Universitas Dipa Makassar
        </h1>
        <p className="text-slate-600 text-sm lg:text-base">
          Jl. Telagasari H No.97, Paconkakkang, Kec. Binggangpara, Kota Makassar
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/img/sekret/1.jpg"
                alt="Sekretariat PMK"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="text-xs  text-indigo-600 uppercase tracking-wider">
                SEKRETARIAT
              </span>
              <h2 className="text-3xl lg:text-4xl  text-slate-900 mt-2 mb-4">
                Fasilitas & Lingkungan
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Pusat kegiatan dan koordinasi PMK Universitas Dipa Makassar dengan suasana nyaman, mendukung spiritualitas, diskusi, dan pelaksanaan berbagai agenda organisasi.
              </p>
            </div>

            <div className="space-y-6">
              {/* Forum Discussion Space */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg  text-slate-900 mb-1">
                    Forum Discussion Space
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Tempat diskusi, bertukar ide, dan memperkuat spiritualitas antar anggota PMK.
                  </p>
                </div>
              </div>

              {/* Resource & Inventory Corner */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg  text-slate-900 mb-1">
                    Resource & Inventory Corner
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Penyimpanan alat ibadah, dokumentasi kegiatan, dan perlengkapan teknis.
                  </p>
                </div>
              </div>

              {/* Creative Activity Hub */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg  text-slate-900 mb-1">
                    Creative Activity Hub
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Ruang untuk merancang dan mengeksekusi kegiatan internal dan eksternal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Location */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl  text-slate-900 mb-2">
              📍 Lihat Lokasi di Google Maps
            </h3>
          </div>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7698562843586!2d119.48926997475956!3d-5.142857951841934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2f4a7d4e8e9%3A0x9f3c8c3c5e3c5e3d!2sUniversitas%20Dipa%20Makassar!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Sekretariat PMK"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}