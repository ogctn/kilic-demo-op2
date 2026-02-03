import Link from 'next/link';
import { Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 py-16 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        
        {/* Şirket Özeti */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">BK</div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Bilal Kılıç <span className="text-green-500">Enerji</span>
            </span>
          </Link>
          <p className="leading-relaxed max-w-sm mb-6">
            7552 Sayılı İklim Kanunu ve Avrupa Yeşil Mutabakatı süreçlerinde; hukuk, teknoloji ve finansı birleştiren yeni nesil enerji danışmanlığı.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Linkedin className="w-5 h-5"/>} />
            <SocialIcon icon={<Instagram className="w-5 h-5"/>} />
          </div>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h4 className="text-white font-bold mb-6">Kurumsal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/kurumsal" className="hover:text-green-500 transition">Hakkımızda</Link></li>
            <li><Link href="/hizmetler" className="hover:text-green-500 transition">Hizmetlerimiz</Link></li>
            <li><Link href="/teknoloji" className="hover:text-green-500 transition">Crealab Teknoloji</Link></li>
            <li><Link href="/surdurulebilirlik" className="hover:text-green-500 transition">Sürdürülebilirlik (ESG)</Link></li>
            <li><Link href="/iletisim" className="hover:text-green-500 transition">İletişim</Link></li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="text-white font-bold mb-6">Bize Ulaşın</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-500 shrink-0" />
              <span>Mustafa Kemal Mah. 2141. Cad. Çankaya / Ankara</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500 shrink-0" />
              <span>+90 (312) 000 00 00</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-500 shrink-0" />
              <span>info@bilalkilicenerji.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div>&copy; {new Date().getFullYear()} Bilal Kılıç Enerji Danışmanlık. Tüm hakları saklıdır.</div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">KVKK Aydınlatma Metni</Link>
          <Link href="#" className="hover:text-white">Çerez Politikası</Link>
        </div>
      </div>
    </footer>
  );
};

function SocialIcon({ icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
      {icon}
    </a>
  )
}

export default Footer;
