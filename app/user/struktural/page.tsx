"use client";

import React from "react";
import { motion } from "framer-motion";

interface Leader {
  name: string;
  role: string;
  imageUrl: string;
  id?: string;
}

const leaders: Leader[] = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "1",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "2",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "3",
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "4",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "5",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    id: "6",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LeadershipPage: React.FC = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Bagan Struktur Organisasi PMK Universitas Dipa Makassar
          </h2>
          <p className="mt-4 text-lg text-gray-400 font-medium">Pengurus Harian</p>
          <p className="mt-2 text-gray-400">
            Pengurus Harian adalah anggota biasa yang dipilih dalam Rapat Umum Anggota.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              className="flex flex-col rounded-2xl overflow-hidden shadow-lg transform transition duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Gambar full */}
              <img
                src={leader.imageUrl}
                alt={`${leader.name}, ${leader.role}`}
                className="h-96 w-full object-cover"
              />
              {/* Info di bawah card */}
              <div className="bg-gray-800 p-6 text-center">
                <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
                <p className="text-indigo-400 font-medium">{leader.role}</p>
                {leader.id && (
                  <p className="text-sm text-gray-400 mt-1">
                    ID: <span className="font-mono">{leader.id}</span>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;
