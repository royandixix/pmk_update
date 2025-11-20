'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Menggunakan Next.js Image Component

// --- SIMULASI IMPORT LOGO LOKAL ---
// Dalam proyek Next.js nyata, path ini akan otomatis dikenali
// jika file 'Logo PMK NEW-1.png' ada di direktori 'public/img/logo'.
// Jika gambar adalah PNG, Anda mungkin perlu konfigurasi webpack atau hanya menggunakan string path:
// const LogoPmkPath = '/img/logo/Logo PMK NEW-1.png'; // <- Ini path yang direkomendasikan jika diletakkan di public
// Atau jika diimpor langsung (Next.js 13+):
// import LogoPmk from '/public/img/logo/Logo PMK NEW-1.png';

// Untuk keperluan kode ini, saya akan menggunakan string path sesuai permintaan Anda
const LogoPmkPath = '/img/logo/Logo PMK NEW-1.png'; 
// Asumsi: Logo tersebut memiliki ukuran w-8 h-8 (32px x 32px)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'About', href: '#about', id: 'about' },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.5s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
          transform-origin: left;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-purple-500/10' 
          : 'bg-black/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo dengan gambar dari path lokal */}
            <a 
              href="#" 
              className="group flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-8 h-8"> {/* w-8 h-8 untuk menyesuaikan ukuran SVG sebelumnya */}
                
                {/* START: PENGGANTIAN DENGAN NEXT/IMAGE */}
                <Image
                    src={LogoPmkPath} // Menggunakan path yang Anda sebutkan
                    alt="Logo PMK NEW-1"
                    width={32}
                    height={32}
                    // Tambahkan kelas untuk efek rotasi jika diinginkan, namun ini hanya bekerja jika gambar tidak menutupi area rotasi
                    className="transform transition-transform duration-700 object-contain" 
                    priority
                />
                {/* END: PENGGANTIAN DENGAN NEXT/IMAGE */}

                {/* Efek Glow tetap dipertahankan */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-30 blur transition-opacity duration-500"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-white group-hover:to-purple-400 transition-all duration-500">
                pmk.undipa
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 ml-auto">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 animate-fadeInDown
                    ${activeLink === link.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.name}
                  {activeLink === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 animate-slideIn"></span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#"
                className="group relative px-6 py-2 text-sm font-bold text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Login</span>
                </span>
                
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <svg
                className={`h-6 w-6 transform transition-all duration-500 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black/95 backdrop-blur-xl border-t border-gray-800">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsOpen(false);
                }}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 animate-fadeInLeft
                  ${activeLink === link.id 
                    ? 'text-white bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${navLinks.length * 50}ms` }}
              className="block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 animate-fadeInLeft text-gray-400 hover:text-white hover:bg-white/5"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}