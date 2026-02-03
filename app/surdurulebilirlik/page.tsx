// app/surdurulebilirlik/page.tsx
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import { Leaf, Droplets, ShoppingBag, AlertTriangle, FileCheck, Target, ArrowDown } from 'lucide-react';

export default function Surdurulebilirlik() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <Navbar />
      <PageHeader 
        title="Sürdürülebilirlik & İklim Uyumu" 
        desc="Kanun 7552, ISO 14064 ve Su Verimliliği Yönetmeliği kapsamında; ölçülebilir, denetlenebilir ve yasal risklerden arındırılmış yönetim süreçleri."
      />

      {/* --- NAVİGASYON KARTLARI (Hızlı Erişim) --- */}
      <section className="-mt-16 relative z-20 px-6 mb-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-green-500 flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-full text-green-600"><Leaf className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-primary">Karbon Yönetimi</h3>
              <p className="text-xs text-neutral-500">ISO 14064 & ETS Uyumu</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-blue-500 flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-full text-blue-600"><Droplets className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-primary">Su Verimliliği</h3>
              <p className="text-xs text-neutral-500">Son Tarih: 30.06.2026</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-purple-500 flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-full text-purple-600"><ShoppingBag className="w-6 h-6"/></div>
            <div>
              <h3 className="font-bold text-primary">Yeşil Satın Alma</h3>
              <p className="text-xs text-neutral-500">Kanun 4734 & LCC Kriterleri</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BÖLÜM 1: KARBON AYAK İZİ (DOSYA 42'DEN ALINAN SÜREÇ) --- */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-3xl font-bold text-primary mb-4">Kurumsal Karbon Ayak İzi</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                ISO 14064-1 standardına ve GHG Protokolüne uygun olarak 6 adımlı yol haritamızla emisyonlarınızı yönetiyoruz.
              </p>
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" /> Hedef: Net Sıfır
                </h4>
                <p className="text-sm text-neutral-500">
                  SBTI (Bilim Temelli Hedefler) ile uyumlu azaltım stratejileri geliştiriyoruz.
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              {/* Adım Adım Süreç (Dosya 42) */}
              <div className="relative border-l-2 border-neutral-200 ml-3 space-y-12 pb-12">
                <StepItem 
                  number="01" 
                  title="Başlangıç & Baz Yıl Seçimi" 
                  desc="Kurumun emisyon takibine başlayacağı referans yılın (Baz Yıl) belirlenmesi ve proje ekibinin kurulması." 
                />
                <StepItem 
                  number="02" 
                  title="Sınırların Belirlenmesi" 
                  desc="Organizasyonel ve faaliyet sınırlarının çizilmesi. Hangi tesislerin ve hangi emisyon kaynaklarının (doğalgaz, araçlar, soğutucular) dahil edileceğinin tespiti." 
                />
                <StepItem 
                  number="03" 
                  title="Veri Toplama" 
                  desc="Faturalar, kantar fişleri ve sayaç verilerinin toplanarak 'Faaliyet Verisi'ne dönüştürülmesi ve boşluk analizi yapılması." 
                />
                <StepItem 
                  number="04" 
                  title="Hesaplama (ISO 14064)" 
                  desc="Toplanan verilerin uluslararası geçerliliği olan emisyon faktörleri ile çarpılarak tCO₂e (Ton Karbondioksit Eşdeğeri) cinsinden hesaplanması." 
                />
                <StepItem 
                  number="05" 
                  title="Raporlama ve Doğrulama" 
                  desc="Hesaplamaların ISO 14064 standardına uygun raporlanması ve yetkili kuruluşlarca doğrulanması (Verification)." 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BÖLÜM 2: SU VERİMLİLİĞİ (DOSYA 18/34 - KRİTİK TARİHLER) --- */}
      <section className="py-20 bg-[#F0F9FF] border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Su Verimliliği Seferberliği</h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Su Verimliliği Yönetmeliği kapsamında kamu ve özel sektör işletmeleri için kritik yükümlülükler başlamıştır.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AlertCard 
              date="30.06.2026" 
              title="Son Raporlama Tarihi" 
              desc="Bu tarihe kadar Su Verimliliği Raporlarının sisteme yüklenmesi zorunludur."
              color="red"
            />
            <AlertCard 
              date="%5" 
              title="Yıllık Hedef" 
              desc="2026'dan itibaren her yıl en az %5 verimlilik artışı sağlanması gerekmektedir."
              color="blue"
            />
            <AlertCard 
              date="Mavi Karne" 
              title="Prestij Belgesi" 
              desc="Su ayak izini düşüren kurumlara verilecek olan çevresel yeterlilik göstergesi."
              color="green"
            />
            <AlertCard 
              date="İdari Ceza" 
              title="Yaptırım Riski" 
              desc="Raporların sunulmaması durumunda yönetmelik gereği idari para cezaları uygulanacaktır."
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* --- BÖLÜM 3: YEŞİL SATIN ALMA (DOSYA 41 - YENİ EKLENDİ) --- */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               {/* Dekoratif Arka Plan */}
               <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent rounded-3xl -rotate-3 transform"></div>
               <div className="relative bg-white p-8 rounded-3xl border border-purple-100 shadow-xl">
                  <h4 className="font-bold text-purple-900 mb-6 border-b border-purple-100 pb-4">Yeni İhale Kriterleri (Kanun 4734)</h4>
                  <ul className="space-y-4">
                     <CheckItem text="Teknik şartnamelerde 'Enerji Verimliliği Sınıfı' zorunluluğu." />
                     <CheckItem text="LCC (Yaşam Döngüsü Maliyeti) hesaplaması." />
                     <CheckItem text="Tedarikçiden Karbon Ayak İzi belgesi talebi." />
                     <CheckItem text="Yeşil üretim yapan isteklilere fiyat avantajı." />
                  </ul>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold mb-4">KAMU İHALE MEVZUATI</div>
               <h2 className="text-3xl font-bold text-primary mb-6">Yeşil Satın Alma Dönemi</h2>
               <p className="text-neutral-600 mb-6 leading-relaxed">
                  İklim Kanunu ile birlikte kamu alımları artık sadece "en düşük fiyat" odaklı değildir. Satın alma yönetmeliklerinizin, çevresel kriterleri ve enerji performansını kapsayacak şekilde güncellenmesi gerekmektedir.
               </p>
               <p className="text-neutral-600 leading-relaxed">
                  Bilal Kılıç Enerji olarak, idari ve teknik şartnamelerinizin mevzuata uygun revizyonunu sağlıyoruz.
               </p>
            </div>
         </div>
      </section>

      {/* --- BÖLÜM 4: YASAL UYARI (DOSYA 37 - VALİLİK SORUMLULUĞU) --- */}
      <section className="py-16 bg-red-50 border-t border-red-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="inline-flex items-center justify-center p-3 bg-red-100 text-red-600 rounded-full mb-6">
              <AlertTriangle className="w-8 h-8" />
           </div>
           <h2 className="text-2xl font-bold text-red-900 mb-4">Yöneticiler İçin Kritik Yasal Uyarı</h2>
           <p className="text-red-800 mb-8 leading-relaxed">
              <strong>5442 Sayılı İl İdaresi Kanunu</strong> ve İklim Kanunu gereği; enerji, su ve atık yönetimi yükümlülüklerinin yerine getirilmemesinden doğacak idari ve mali yaptırımlardan, kurum tüzel kişiliği kadar <strong>yöneticiler ve mülki amirler (Valilik) doğrudan sorumludur.</strong>
           </p>
           <div className="inline-block bg-white px-6 py-3 rounded-lg border border-red-200 text-red-700 text-sm font-semibold shadow-sm">
              "Bütçe yoktu" veya "Belediye yapmadı" mazeretleri hukuken geçersizdir. (Dosya 37)
           </div>
        </div>
      </section>

    </main>
  );
}

// --- Alt Bileşenler ---

function StepItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative pl-8">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-accent"></div>
      <div className="text-accent font-bold text-sm mb-1">ADIM {number}</div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function AlertCard({ date, title, desc, color }: { date: string, title: string, desc: string, color: 'red'|'blue'|'green'|'orange' }) {
  const colors = {
    red: "text-red-600 bg-red-50 border-red-100",
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    green: "text-green-600 bg-green-50 border-green-100",
    orange: "text-orange-600 bg-orange-50 border-orange-100",
  }
  return (
    <div className={`p-6 rounded-xl border ${colors[color]}`}>
      <div className="text-3xl font-bold mb-2">{date}</div>
      <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-sm opacity-80">{desc}</p>
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
   return (
      <li className="flex items-start gap-3">
         <div className="mt-1 min-w-[20px] text-purple-600">
            <FileCheck className="w-5 h-5" />
         </div>
         <span className="text-neutral-700 text-sm">{text}</span>
      </li>
   )
}