"use client";

import React from "react";

const Kegiatan: React.FC = () => {
  // Data kegiatan dalam array
  const kegiatanData = [
    {
      id: 1,
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
      date: "Mar 16, 2024",
      category: "Ibadah",
      title: "Kebaktian Minggu Bersama",
      description:
        "Ibadah minggu bersama seluruh anggota PMK Universitas Dipa Makassar. Merayakan kebersamaan dalam iman dan kasih. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
      author: {
        name: "John Doe",
        role: "Ketua PMK",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      },
    },
    {
      id: 2,
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
      date: "Mar 10, 2024",
      category: "Pelayanan",
      title: "Bakti Sosial ke Panti Asuhan",
      description:
        "Kegiatan bakti sosial dan berbagi kasih kepada anak-anak panti asuhan. Wujud nyata kasih Kristus dalam pelayanan. Optio sit exercitation et ex ullamco aliquid explicabo. Dolore da ut officia anim non ad eu.",
      author: {
        name: "Sarah Wilson",
        role: "Koordinator Pelayanan",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
    },
    {
      id: 3,
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
      date: "Feb 28, 2024",
      category: "Retret",
      title: "Retret Pemuda di Pantai",
      description:
        "Waktu tenang bersama Tuhan di tengah keindahan ciptaan-Nya. Memperbarui komitmen dan memperdalam iman bersama. Dolore commodo in nulla da nulla esse consectetur. Adipisicing voluptate velit sint adipisicing ex.",
      author: {
        name: "Michael Chen",
        role: "Pembina Rohani",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      },
    },
    {
      id: 4,
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
      date: "Feb 20, 2024",
      category: "Seminar",
      title: "Seminar Kepemimpinan Kristen",
      description:
        "Mengasah kemampuan kepemimpinan berdasarkan prinsip-prinsip Alkitab untuk mahasiswa Kristen masa kini. Magna laboris incididunt commodo elit ipsum culpa in exercitation magna adipisicing id.",
      author: {
        name: "David Anderson",
        role: "Sekretaris PMK",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&fit=crop",
      date: "Feb 14, 2024",
      category: "Fellowship",
      title: "Malam Pujian dan Doa",
      description:
        "Waktu khusus untuk memuji Tuhan dan berdoa bersama. Membangun persekutuan yang lebih erat dalam kasih Kristus. Illo sint voluptas error voluptates culpa eligendi hic vel totam vitae illo.",
      author: {
        name: "Grace Lee",
        role: "Worship Leader",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
      },
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&fit=crop",
      date: "Feb 05, 2024",
      category: "Pelatihan",
      title: "Pelatihan Tim Multimedia",
      description:
        "Meningkatkan kemampuan tim multimedia dalam mendukung pelayanan PMK melalui teknologi dan kreativitas. Non aliquid explicabo necessitatibu unde sed exercitationem placeat consectetur.",
      author: {
        name: "Daniel Park",
        role: "Koordinator Multimedia",
        avatar:
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face",
      },
    },
  ];

  return (
    <div className="bg-[#0f1116]">
      <div className="bg-[#0f1116] min-h-screen flex items-center py-24 ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
            Serangkaian Kegiatan Seru dan Bermakna di PMK PMK (Persekutuan
            Mahasiswa Kristen) menyelenggarakan berbagai kegiatan yang membentuk
            iman, karakter, dan kebersamaan dalam Kristus.
          </h2>

          {/* BLOG LIST - Vertical Layout dengan Looping */}
          <div className="mt-6 space-y-16">
            {kegiatanData.map((kegiatan) => (
              <article
                key={kegiatan.id}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                <div className="lg:w-1/2 flex-shrink-0">
                  <div className="overflow-hidden rounded-lg bg-gray-200 aspect-[16/10]">
                    <img
                      src={kegiatan.image}
                      alt={kegiatan.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <time>{kegiatan.date}</time>
                    <span className="text-gray-600">{kegiatan.category}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 hover:text-blue-400 cursor-pointer">
                    {kegiatan.title}
                  </h3>

                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    {kegiatan.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
