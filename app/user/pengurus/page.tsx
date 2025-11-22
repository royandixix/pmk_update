"use client";

import React from "react";
import { motion } from "framer-motion";

interface Bidang {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

const bidangData: Bidang[] = [
  {
    title: "Bidang Kerohanian dan Pelayanan",
    description:
      "Bidang Kerohanian & Pelayanan memiliki tanggung jawab dalam pelaksanaan program ibadah dan kegiatan rohani di PMK Universitas Dipa Makassar.",
    imageUrl: "/img/pengurus/kerohanian/kerohanian-min.JPG",
    reverse: false,
  },
  {
    title: "Bidang Kaderisasi",
    description:
      "Bidang Kaderisasi menjalankan program pembinaan dan pengembangan anggota serta pengurus.",
    imageUrl: "/img/pengurus/kaderisasi/kaderisasi-min.JPG",
    reverse: true,
  },
  {
    title: "Bidang Humas",
    description:
      "Bidang Humas menjembatani komunikasi antara PMK Universitas Dipa Makassar dengan organisasi intra maupun ekstra kampus.",
    imageUrl: "/img/pengurus/humas/humas-min.JPG",
    reverse: false,
  },
  {
    title: "Bidang Study Club",
    description:
      "Bidang Study Club mendukung pengembangan ilmu pengetahuan melalui kegiatan pembelajaran dan diskusi.",
    imageUrl: "/img/pengurus/study_clup/Study Club-min.jpg",
    reverse: true,
  },
  {
    title: "Bidang Minat Dan Bakat",
    description:
      "Bidang Minat dan Bakat memfasilitasi anggota dalam mengembangkan potensi seni, olahraga, dan keterampilan.",
    imageUrl: "/img/pengurus/mb/mb-min.JPG",
    reverse: false,
  },
  {
    title: "Bidang Kesekretariatan dan Dana",
    description:
      "Bidang Kesekretariatan dan Dana mengelola administrasi, inventaris, dan kebutuhan operasional organisasi.",
    imageUrl: "/img/pengurus/kesda/kesda-min.JPG",
    reverse: true,
  },
];

const animateItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const PengurusBidangSection = () => {
  return (
    <div className="bg-white pb-20">

      {/* ========== HEADER ========= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-10"
      >
        <div className="max-w-6xl mx-auto">

          <div
            className="
              flex items-center justify-between
              md:grid md:grid-cols-[150px_1fr]
              gap-8
            "
          >

            {/* LOGO — dengan efek hover */}
            <motion.div
              className="flex md:justify-start justify-end"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <img
                src="/img/logo/Logo PMK NEW-1.png"
                alt="Logo PMK"
                className="w-16 sm:w-20 md:w-28 lg:w-32 object-contain"
              />
            </motion.div>

            {/* TEKS */}
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h1
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  font-extrabold
                  bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                  bg-clip-text text-transparent
                  drop-shadow-xl
                  text-left
                "
              >
                PENGURUS BIDANG
              </h1>

              <p className="mt-4 text-gray-700 text-left text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                Pengurus Bidang adalah anggota yang dipilih oleh tim formatur
                untuk menjalankan tugas sesuai bidang masing-masing.
              </p>

              <div className="mt-6 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

          </div>

        </div>
      </motion.div>
      {/* ========== END HEADER ========= */}


      {/* ========== LIST BIDANG ========= */}
      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {bidangData.map((bidang, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={animateItem}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >

            {/* GAMBAR — efek hover zoom */}
            <motion.div
              className={`${bidang.reverse ? "lg:order-2" : ""}`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 140, damping: 12 }}
            >
              <img
                src={bidang.imageUrl}
                alt={bidang.title}
                className="w-full rounded-xl shadow-lg ring-1 ring-gray-300"
              />
            </motion.div>

            {/* TEKS — hover naik sedikit */}
            <motion.div
              className={`${bidang.reverse ? "lg:order-1" : ""}`}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 140 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                {bidang.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                {bidang.description}
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  Program kerja terarah sesuai tujuan bidang.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  Tim yang solid dan berkomitmen melayani.
                </li>
              </ul>
            </motion.div>

          </motion.div>
        ))}
      </div>
      {/* ========== END LIST BIDANG ========= */}

    </div>
  );
};

export default PengurusBidangSection;
