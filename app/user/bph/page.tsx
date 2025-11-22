import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useMemo, useEffect } from "react";

const StrukturOrganisasi = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  // Restore posisi scroll saat kembali
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollStruktur");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem("scrollStruktur");
    }
  }, []);

  const divisiData = useMemo(
    () => [
      {
        title: "Bidang Kerohanian dan Pelayanan",
        desc: "Bidang Kerohanian & Pelayanan memiliki tanggung jawab dalam pelaksanaan program ibadah dan kegiatan rohani di PMK Universitas Dipa Makassar. Bidang ini membantu anggota dan pengurus dalam pelayanan melalui firman Tuhan, doa, persekutuan, serta kesaksian, sekaligus memfasilitasi kegiatan ibadah dan pelayanan kasih.",
        img: "images/divisi/Kerohanian.jpg",
        path: "/divisi/kerohanian",
      },
      {
        title: "Bidang Kaderisasi",
        desc: "Bidang Kaderisasi bertugas menjalankan program kerja yang berfokus pada pembinaan dan pengembangan anggota serta pengurus dalam hal keorganisasian. Bidang ini memfasilitasi berbagai kegiatan pembinaan agar anggota semakin aktif, terlatih, dan siap mengambil peran dalam kepengurusan selanjutnya.",
        img: "images/divisi/Kaderisasi.jpg",
        path: "/divisi/kaderisasi",
      },
      {
        title: "Bidang Humas",
        desc: "Bidang Humas bertanggung jawab menjembatani komunikasi antara PMK Universitas Dipa Makassar dengan organisasi intra maupun ekstra kampus. Bidang ini menjalankan program kerja yang telah disepakati, serta memfasilitasi anggota agar mudah memperoleh informasi tentang berbagai kegiatan yang diadakan oleh PMK.",
        img: "images/divisi/Humas.jpg",
        path: "/divisi/humas",
      },
      {
        title: "Bidang Study Club",
        desc: "Bidang Study Club berperan dalam menjalankan program kerja yang mendukung pengembangan ilmu pengetahuan bagi pengurus dan anggota PMK Universitas Dipa Makassar. Bidang ini membina serta memfasilitasi kegiatan-kegiatan akademik yang sesuai dengan disiplin ilmu masing-masing anggota.",
        img: "images/divisi/Studyclup.jpg",
        path: "/divisi/study-club",
      },
      {
        title: "Bidang Minat dan Bakat",
        desc: "Bidang Minat dan Bakat bertugas menjalankan program kerja yang mendorong pengembangan potensi anggota sesuai minat dan bakat mereka. Bidang ini membina dan memfasilitasi anggota maupun pengurus dalam berbagai kegiatan yang mendukung bakat individu, seperti seni, olahraga, dan keterampilan lainnya.",
        img: "images/divisi/MinatBakat.jpg",
        path: "/divisi/minat-bakat",
      },
      {
        title: "Bidang Kesekretariatan dan Dana",
        desc: "Bidang Kesekretariatan dan Dana bertugas menjalankan program kerja yang berkaitan dengan pengelolaan inventaris dan kebutuhan administrasi organisasi. Mereka secara rutin mendata dan merawat seluruh inventaris yang dimiliki organisasi, serta memastikan kebutuhan operasional organisasi dapat terpenuhi dengan baik.",
        img: "images/divisi/Kesektariaan.jpg",
        path: "/divisi/administrasi-keuangan",
      },
    ],
    []
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 py-20 shadow-lg relative">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl font-semibold uppercase tracking-widest text-blue-600"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Pengurus Bidang
          </motion.h2>
          <motion.p
            className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            Pengurus Bidang, Adalah anggota biasa yang dipilih dan dibentuk oleh
            tim Formatur
          </motion.p>
        </div>
        <hr className="border-gray-300 my-12" />

        {/* Struktur Organisasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {divisiData.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial="hidden"
                whileHover={{ scale: 1.05 }}
                whileInView="visible"
                exit="exit"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Link
                  to={item.path}
                  onClick={() =>
                    sessionStorage.setItem("scrollStruktur", window.scrollY)
                  }
                  className="block"
                >
                  <img src={item.img} alt={item.title} />
                </Link>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center"
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={fadeInUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-lg font-medium leading-relaxed mt-2">
                  {item.desc}
                </p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
