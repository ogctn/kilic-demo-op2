import Link from 'next/link';
import { ShieldAlert, BarChart3, BrainCircuit, Droplets, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-neutral-800 bg-white">
      
      {/* --- HERO BÖLÜMÜ --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-900/40 to-transparent skew-x-12 translate-x-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider mb-6 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              7552 Sayılı İklim Kanunu Uyumlu
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Enerjide <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Yasal</span> ve <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Dijital</span> Dönüşüm.
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              YİDEP zorunluluğu, Su Verimliliği Raporlaması ve Karbon Ayak İzi süreçlerini; yapay zeka destekli Crealab teknolojisi ve uzman hukuk kadromuzla yönetiyoruz.
            </p>
            <div className="flex gap-4">
              <Link href="/iletisim" className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2 shadow-lg shadow-green-900/20">
                Ücretsiz Keşif Al <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/hizmetler" className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-lg font-semibold hover:bg-white/20 transition backdrop-blur-sm">
                Çözümlerimiz
              </Link>
            </div>
          </div>
          
          {/* İstatistik Kutusu (PDF Verileri) */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl text-white hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <div className="text-sm text-blue-400 mb-1 font-bold">SON TARİH</div>
                <div className="text-2xl font-bold">30.06.2026</div>
                <div className="text-xs text-gray-400 mt-1">Su Verimliliği Raporu</div>
              </div>
              <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <div className="text-sm text-green-400 mb-1 font-bold">HEDEF</div>
                <div className="text-2xl font-bold">%5 / Yıl</div>
                <div className="text-xs text-gray-400 mt-1">Verimlilik Artışı Zorunluluğu</div>
              </div>
              <div className="col-span-2 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="text-sm text-purple-400 mb-1 font-bold">MEVZUAT</div>
                <div className="text-lg font-bold">4734 Sayılı Kanun</div>
                <div className="text-xs text-gray-400 mt-1">Yeşil Satın Alma & LCC Kriterleri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HİZMET KATEGORİLERİ --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Uçtan Uca İklim ve Enerji Danışmanlığı</h2>
            <p className="text-slate-600">
              Dokümanlarınızda belirtilen yasal yükümlülükler ve teknik gereksinimler doğrultusunda uzmanlaşmış çözümler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<ShieldAlert className="w-8 h-8 text-red-500" />}
              title="Yasal Uyum & Risk"
              desc="İklim Kanunu, YİDEP hazırlama ve idari yaptırım risklerine karşı hukuki kalkan."
              link="/hizmetler"
            />
            <ServiceCard 
              icon={<Droplets className="w-8 h-8 text-blue-500" />}
              title="Su Verimliliği"
              desc="2026 raporlama sürecine tam uyum, su ayak izi ve geri kazanım projeleri."
              link="/surdurulebilirlik"
            />
            <ServiceCard 
              icon={<BrainCircuit className="w-8 h-8 text-purple-500" />}
              title="Crealab AI"
              desc="Yapay zeka ile anomali tespiti, tüketim tahmini ve dijital ikiz simülasyonları."
              link="/teknoloji"
            />
            <ServiceCard 
              icon={<BarChart3 className="w-8 h-8 text-green-500" />}
              title="Enerji & Karbon"
              desc="ISO 50001 ve ISO 14064 standartlarında ölçülebilir verimlilik yönetimi."
              link="/hizmetler"
            />
          </div>
        </div>
      </section>

      {/* --- NEDEN BİZ (PDF 37 - VALİLİK UYARISI) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Neden Bilal Kılıç Enerji?</h2>
            <div className="space-y-6">
              <FeatureItem 
                title="Hukuki Güvence (Dosya 37)"
                desc="5442 Sayılı Kanun ve İklim Kanunu gereği, yöneticilerin doğrudan sorumluluğunda olan süreçleri %100 yasal uyumla yönetiyoruz."
              />
              <FeatureItem 
                title="Teknoloji Odaklı Yaklaşım"
                desc="Sadece raporlama yapmıyoruz; AI destekli algoritmalarla enerji tüketiminizdeki kaçakları anlık tespit ediyoruz."
              />
              <FeatureItem 
                title="Finansal Erişim"
                desc="Yeşil Mutabakat uyumlu projeleriniz için uluslararası fon ve teşvik mekanizmalarına erişim sağlıyoruz."
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
             <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                   <ShieldAlert className="w-6 h-6 text-red-600" />
                   <div>
                      <h4 className="font-bold text-slate-900">Risk Yönetimi</h4>
                      <p className="text-sm text-slate-600">İdari Para Cezaları & İtibar Kaybı</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                   <Droplets className="w-6 h-6 text-blue-600" />
                   <div>
                      <h4 className="font-bold text-slate-900">Mavi Karne</h4>
                      <p className="text-sm text-slate-600">Su Verimliliği Prestij Belgesi</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ icon, title, desc, link }: { icon: any, title: string, desc: string, link: string }) {
  return (
    <Link href={link} className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-green-500 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit group-hover:bg-green-500/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
      <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
        İncele <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  )
}

function FeatureItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 min-w-[24px]">
        <CheckCircle2 className="w-6 h-6 text-green-500" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
        <p className="text-slate-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  )
}
