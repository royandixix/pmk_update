"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Leader {
  name: string;
  role: string;
  imageUrl: string;
  id: string;
}

const leaders: Leader[] = [
  { id: "1", name: "SINTA SATTU", role: "Sekretaris", imageUrl: "/img/pengurus/sekertaris/SINTA SATTU-min.jpg" },
  { id: "2", name: "ANDRIB ARIB", role: "Ketua Umum", imageUrl: "/img/pengurus/ketua/ANDRIB ARIB-min.jpg" },
  { id: "3", name: "JESLY PUTRI TIRANDA", role: "Bendahara", imageUrl: "/img/pengurus/bendahara/JESLY PUTRI TIRANDA.JPG" },
  { id: "4", name: "NATALIA ARRUAN", role: "Wakil Ketua", imageUrl: "/img/pengurus/wakil/NATALIA ARRUAN.jpg" },
];

const LeadershipPage: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = [0, 1, 2].map(i => leaders[(startIndex + i) % leaders.length]);

  const handleNext = () => setStartIndex(prev => (prev + 1) % leaders.length);
  const handlePrev = () => setStartIndex(prev => (prev === 0 ? leaders.length - 1 : prev - 1));

  return (
    <div className="bg-[#0f1116] min-h-screen flex flex-col items-center py-24 sm:py-32">

      {/* Section Text */}
      <motion.div
        className="text-center sm:text-left max-w-3xl mx-auto mb-20 px-4 sm:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
          Bagan Struktur Organisasi PMK Universitas Dipa Makassar
        </h2>
        <p className="mt-6 text-xl text-gray-300 font-semibold">Pengurus Harian</p>
        <p className="mt-3 text-lg text-gray-400 leading-relaxed">
          Pengurus Harian adalah anggota biasa yang dipilih dalam Rapat Umum Anggota.
        </p>
      </motion.div>

      {/* Desktop Slider */}
      <div className="hidden sm:flex gap-6 justify-center w-full max-w-7xl overflow-hidden">
        {visibleCards.map((leader) => (
          <motion.div
            key={leader.id}
            className="relative w-64 rounded-lg overflow-hidden bg-gray-800 shadow cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <img src={leader.imageUrl} alt={leader.name} className="h-[450px] w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center bg-black/40">
              <div className="text-xs font-semibold text-white">{leader.role}</div>
              <h3 className="text-lg text-white">{leader.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="hidden sm:flex justify-center gap-4 mt-6">
        <button onClick={handlePrev} className="p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button onClick={handleNext} className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden flex flex-col items-center gap-4 px-4 w-full">
        {leaders.map((leader) => (
          <motion.div
            key={leader.id}
            className="relative w-full max-w-sm rounded-lg overflow-hidden bg-gray-800 shadow cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <img src={leader.imageUrl} alt={leader.name} className="h-[450px] w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-center bg-black/40">
              <div className="text-xs font-semibold text-white">{leader.role}</div>
              <h3 className="text-lg text-white">{leader.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default LeadershipPage;
