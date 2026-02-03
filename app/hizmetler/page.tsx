import PageHeader from '@/components/PageHeader';
import { ShieldAlert, Leaf, Zap, ShoppingBag, Wifi } from 'lucide-react';

export default function Hizmetler() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <PageHeader 
        title="Hizmetlerimiz" 
        desc="Mevzuat uyumu, teknoloji entegrasyonu ve sürdürülebilirlik raporlamasında uzman çözümler."
      />

      {/* --- KATEGORİ 1: MEVZUAT --- */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-red-100 text-red-600 rounded-lg"><ShieldAlert className="w-8 h-8"/></div>
            <h2 className="text-3xl font-bold text-slate-900">Mevzuat ve Yasal Uyum</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceDetail 
              title="YİDEP Hazırlama Danışmanlığı"
              desc="Yerel İklim Değişikliği Eylem Planı (YİDEP) kapsamında sera gazı envanteri ve azaltım senaryoları."
            />
            <ServiceDetail 
              title="İklim Kanunu Uyum Süreçleri"
              desc="7552 sayılı İklim Kanunu gereği kamu ve özel sektör yükümlülüklerinin analizi ve yol haritası."
            />
          </div>
        </div>
      </section>

      {/* --- KATEGORİ 2: DİJİTAL --- */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg"><Wifi className="w-8 h-8"/></div>
            <h2 className="text-3xl font-bold text-slate-900">Dijital Enerji (PDF 22)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceDetail 
              title="Akıllı Sayaç Entegrasyonu"
              desc="1 Mart 2026'da yürürlüğe girecek EPDK 'Akıllı Sayaç Sistemleri' yönetmeliğine uygun altyapı kurulumu."
            />
            <ServiceDetail 
              title="Uzaktan Okuma ve Veri Yönetimi"
              desc="Sayaç verilerinin OSOS standartlarında toplanması ve merkezi izleme platformuna aktarımı."
            />
          </div>
        </div>
      </section>

      {/* --- KATEGORİ 3: YEŞİL SATIN ALMA --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
             <div className="p-3 bg-green-100 text-green-600 rounded-lg"><ShoppingBag className="w-8 h-8"/></div>
             <h2 className="text-3xl font-bold text-slate-900">Yeşil Satın Alma (PDF 41)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             <ServiceDetail 
               title="Teknik Şartname Danışmanlığı"
               desc="4734 sayılı Kamu İhale Kanunu uyarınca teknik şartnamelere LCC (Yaşam Döngüsü Maliyeti) kriterlerinin eklenmesi."
             />
             <ServiceDetail 
               title="Tedarikçi Denetimi"
               desc="Tedarik zincirinden gelen karbon ayak izi verilerinin doğrulanması ve yeşil tedarikçi seçim süreçleri."
             />
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceDetail({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-green-500 transition hover:shadow-lg">
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
