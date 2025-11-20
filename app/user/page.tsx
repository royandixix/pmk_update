import Visi from './visimisi/page';
import Struktural from './struktural/page';  // ✅ Ubah menjadi PascalCase
// import '../styles/globals.css';

export default function UserPage() {
  return (
    <div>
      {/* Panggil komponen Visi */}
      <Visi />
      <Struktural />  {/* ✅ Gunakan PascalCase */}
      <></>
    </div>
  );
}