"use client";

import React from "react";

const Kegiatan = () => {
  const kegiatanData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&fit=crop",
      date: "Mar 16, 2024",
      category: "Ibadah",
      title: "Kebaktian Minggu Bersama",
      description: "Ibadah minggu bersama seluruh anggota PMK Universitas Dipa Makassar. Merayakan kebersamaan dalam iman dan kasih.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&fit=crop",
      date: "Mar 10, 2024",
      category: "Pelayanan",
      title: "Bakti Sosial ke Panti Asuhan",
      description: "Kegiatan bakti sosial dan berbagi kasih kepada anak-anak panti asuhan. Wujud nyata kasih Kristus dalam pelayanan.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&fit=crop",
      date: "Feb 28, 2024",
      category: "Retret",
      title: "Retret Pemuda di Pantai",
      description: "Waktu tenang bersama Tuhan di tengah keindahan ciptaan-Nya. Memperbarui komitmen dan memperdalam iman bersama.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&fit=crop",
      date: "Feb 20, 2024",
      category: "Seminar",
      title: "Seminar Kepemimpinan Kristen",
      description: "Mengasah kemampuan kepemimpinan berdasarkan prinsip-prinsip Alkitab untuk mahasiswa Kristen masa kini.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&fit=crop",
      date: "Feb 14, 2024",
      category: "Fellowship",
      title: "Malam Pujian dan Doa",
      description: "Waktu khusus untuk memuji Tuhan dan berdoa bersama. Membangun persekutuan yang lebih erat dalam kasih Kristus.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&fit=crop",
      date: "Feb 05, 2024",
      category: "Pelatihan",
      title: "Pelatihan Tim Multimedia",
      description: "Meningkatkan kemampuan tim multimedia dalam mendukung pelayanan PMK melalui teknologi dan kreativitas.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* HEADER SECTION */}
        <div className="mb-16 text-left">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl  bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              SERANGKAIAN KEGIATAN
            </h1>
            <div className="h-1.5 w-40 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-6"></div>
          </div>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl">
            Persekutuan Mahasiswa Kristen menyelenggarakan berbagai kegiatan yang membentuk iman, karakter, dan kebersamaan dalam Kristus. Mari bergabung dan menjadi bagian dari keluarga besar PMK.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kegiatanData.map((kegiatan, index) => (
            <div
              key={kegiatan.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <img
                  src={kegiatan.image}
                  alt={kegiatan.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                {/* DATE & CATEGORY */}
                <div className="flex items-center gap-3 text-sm mb-4">
                  <time className="text-gray-500 font-medium">{kegiatan.date}</time>
                  <span className="text-gray-300">•</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs  uppercase tracking-wide">
                    {kegiatan.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl  text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {kegiatan.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-base mb-6 line-clamp-3 leading-relaxed">
                  {kegiatan.description}
                </p>

                {/* BUTTON */}
                <button className="inline-flex items-center gap-2 text-blue-600  text-base hover:text-blue-700 group/btn transition-all duration-300">
                  <span>Lebih Lanjut</span>
                  <svg 
                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;