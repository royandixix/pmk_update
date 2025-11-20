import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// app/user/layout.tsx (Bagian yang diubah)

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Navbar />
      <Header />
    
      {/* ⚠️ DIUBAH: Hapus p-6 dari sini. */}
      {/* Tambahkan kelas untuk memberi ruang di bawah fixed Navbar */}
      <main>
        {children}
      </main> 
      
      <Footer />
    </section>
  );
}