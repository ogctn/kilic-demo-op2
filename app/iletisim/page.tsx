// app/iletisim/page.tsx
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Iletisim() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <Navbar />
      <PageHeader 
        title="Bize Ulaşın" 
        desc="Projeleriniz ve yasal uyum süreçleriniz için uzman ekibimizle iletişime geçin."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          
          {/* İletişim Bilgileri */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-bold text-primary mb-6">İletişim Bilgileri</h2>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Adres</h3>
                <p className="text-neutral-600 text-sm mt-1">
                  Mustafa Kemal Mah. <br />
                  Çankaya / Ankara
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">E-Posta</h3>
                <p className="text-neutral-600 text-sm mt-1">info@bilalkilicenerji.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Telefon</h3>
                <p className="text-neutral-600 text-sm mt-1">+90 (312) 000 00 00</p>
              </div>
            </div>
          </div>

          {/* İletişim Formu (Görseldir, backend bağlantısı yok) */}
          <div className="lg:col-span-2 bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">E-Posta Adresi</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" placeholder="ornek@sirket.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Konu</label>
                <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition bg-white">
                  <option>Genel Bilgi Talebi</option>
                  <option>YİDEP Danışmanlığı</option>
                  <option>Enerji Verimliliği (ISO 50001)</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition" placeholder="Mesajınızı buraya yazınız..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition shadow-lg shadow-primary/20">
                Gönder
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}

