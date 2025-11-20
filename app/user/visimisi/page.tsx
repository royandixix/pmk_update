'use client';

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CloudUpload, Lock, Server } from "lucide-react";

// fitur tetap sama
const features = [
  {
    name: "Misi 1",
    description:
      "Membina serta menyakinkan mahasiswa Kristen untuk menerima Kristus sebagai Tuhan dan Juruselamat secara pribadi.",
    icon: CloudUpload,
  },
  {
    name: "Misi 2",
    description:
      "Membina mahasiswa Kristen agar dapat bertumbuh dan mencapai kedewasaan rohani melalui Persekutuan, Kesaksian, dan Pelayanan.",
    icon: Lock,
  },
];

// HOOK count-up (simple, smooth)
function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame: number;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}

export default function PMKSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // angka berjalan
  const anggotaBiasa = useCountUp(973, isInView);
  const anggotaLuarBiasa = useCountUp(4525, isInView);
  const totalAnggota = useCountUp(5498, isInView);

  return (
    <section
      ref={ref}
      className="bg-gray-900 min-h-screen flex items-center py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:items-center">
          
          {/* Gambar kiri */}
          <motion.div
            className="lg:col-span-6 flex flex-col justify-center items-center mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* GAMBAR */}
            <div className="w-full max-w-[800px]">
              <Image
                src="/img/pengurus/pengurus terpilih-min.JPG"
                alt="PMK Universitas Dipa Makassar"
                width={2000}
                height={1200}
                className="w-full h-auto object-contain rounded-lg shadow-xl"
                priority
              />
            </div>

            {/* STATISTIK — DI BAWAH GAMBAR */}
            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-indigo-400 uppercase tracking-wide">
                Jumlah Anggota PMK Universitas Dipa Makassar
              </h3>

              <div className="mt-6 grid grid-cols-3 gap-6 text-white">
                <div>
                  <p className="text-4xl font-extrabold">{anggotaBiasa}</p>
                  <p className="text-gray-400 text-sm">Anggota Biasa</p>
                </div>

                <div>
                  <p className="text-4xl font-extrabold">{anggotaLuarBiasa}</p>
                  <p className="text-gray-400 text-sm">Anggota Luar Biasa</p>
                </div>

                <div>
                  <p className="text-4xl font-extrabold">{totalAnggota}</p>
                  <p className="text-gray-400 text-sm">Total Anggota</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* KONTEN TEKS KANAN */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold text-indigo-400 uppercase tracking-wide">
              Kerohanian PMK
            </h2>

            <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Visi PMK Universitas Dipa Makassar
            </p>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Menghasilkan sarjana Kristen yang injili dan bermisi sehingga
              dapat menjadi berkat bagi lingkungan di sekitarnya.
            </p>

            <dl className="mt-12 space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.name}
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <Icon
                      className="h-12 w-12 text-indigo-400 flex-shrink-0"
                      strokeWidth={1.5}
                    />

                    <div>
                      <dt className="text-lg font-semibold text-white">
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-gray-400 leading-relaxed">
                        {feature.description}
                      </dd>
                    </div>
                  </motion.div>
                );
              })}
            </dl>
          </motion.div>

        </div>
      </div>
    </section>
  );
}