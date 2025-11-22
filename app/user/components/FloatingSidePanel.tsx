"use client";

import Image from "next/image";
import Swal from "sweetalert2";

export default function FloatingWAButton() {
  const adminWA = "1234567890"; // ganti nomor WA admin

  const handleClick = async () => {
    const result = await Swal.fire({
      title: 'Hubungi Admin?',
      text: "Apakah kamu ingin chat via WhatsApp?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak',
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      window.open(`https://wa.me/${adminWA}`, "_blank");
    }
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-50 cursor-pointer"
      onClick={handleClick}
      style={{ width: "60px", height: "60px" }}
    >
      <Image
        src="/img/logo/whatsapp.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="rounded-full shadow-lg"
      />
    </div>
  );
}
