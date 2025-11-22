import Visi from "./visimisi/page";
import Struktural from "./struktural/page";
import PengurusSection from "./pengurus/page";
import Kegiatan from "./kegiatan/page";
import Lokasi from "./lokasi/page";
export default function UserPage() {
  return (
    <div>
      <Visi />
      <Struktural />
      <PengurusSection />   {/* jalankan */}
      <Kegiatan />
      <Lokasi />
    </div>
  );
}
