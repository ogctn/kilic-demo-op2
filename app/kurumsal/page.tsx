import PageHeader from '@/components/PageHeader';
import { Target, Users, Scale, FileText } from 'lucide-react';

export default function Kurumsal() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <PageHeader 
        title="Kurumsal Kimlik" 
        desc="Enerji yönetimini sadece mühendislik değil; hukuk, finans ve yönetişim (ESG) disiplinlerinin kesişim noktasında ele alıyoruz."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">DOSYA 40: ESG YÖNETİŞİMİ</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Yönetim Felsefemiz</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Bilal Kılıç Enerji, enerji sektöründeki geleneksel danışmanlık kalıplarını yıkarak; kurumların yasal uyumluluk, dijital dönüşüm ve sürdürülebilirlik hedeflerini <strong>RACI Matrisi</strong> temelinde, sorumlulukların net olduğu bir yapıda yönetir.
              </p>
              <p>
                <strong>Hukuk Birimlerinin Rolü:</strong> 5 Bakanlık, 40 Kanun ve sayısız yönetmelik arasında kaybolmamanız için, hukuk departmanlarınızla entegre çalışıyor, yasal risk haritalarını çıkarıyoruz.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <ValueCard 
              icon={<Scale className="w-6 h-6 text-white" />} 
              title="Hukuki Güvence" 
              desc="İklim Kanunu ve Su Verimliliği Yönetmeliği kapsamındaki idari ve mali risklerin yönetimi." 
            />
             <ValueCard 
              icon={<Users className="w-6 h-6 text-white" />} 
              title="Entegre Yönetim" 
              desc="Hukuk, Teknik ve Finans birimleri arasında köprü kuran bütüncül danışmanlık." 
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-4 p-6 bg-white border border-slate-100 shadow-sm rounded-xl hover:shadow-md transition">
      <div className="w-12 h-12 min-w-[48px] bg-slate-900 rounded-lg flex items-center justify-center shadow-lg shadow-slate-900/20">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  )
}
