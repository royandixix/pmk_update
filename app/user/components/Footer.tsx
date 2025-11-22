export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* PMK UDM */}
          <div>
            <h3 className="font-bold text-lg mb-4">PMK Universitas Dipa Makassar</h3>
            <p className="text-gray-300">
              Organisasi yang bergerak dalam bidang keagamaan dan sosial di Universitas Dipa Makassar.
            </p>
          </div>

          {/* TAUTAN CEPAT */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Beranda</li>
              <li>Tentang Kami</li>
              <li>Kegiatan</li>
              <li>About</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          {/* ALAMAT */}
          <div>
            <h3 className="font-bold text-lg mb-4">Alamat</h3>
            <div className="text-gray-300 space-y-1">
              <p>Jl. Telegrap III No.97, Paccerakkang</p>
              <p>Kec. Biringkanaya, Kota Makassar</p>
            </div>
          </div>

          {/* KONTAK */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="text-sm">Email :</p>
                <p className="font-semibold">pmk@univdipa.ac.id</p>
              </div>
              <div>
                <p className="text-sm">Telepon :</p>
                <p className="font-semibold">+62 812-3456-7890</p>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-400 text-sm mb-2">© 2025 PMK Universitas Dipa Makassar.</p>
        </div>
      </div>
    </footer>
  );
}
