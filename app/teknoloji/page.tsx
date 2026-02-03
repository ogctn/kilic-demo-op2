// app/teknoloji/page.tsx
import Navbar from '@/components/Navbar';
import { Cpu, Wifi, Activity, Lock, Search, Command, PlayCircle } from 'lucide-react';

export default function Teknoloji() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* --- HERO BÖLÜMÜ (Aynı kaldı, sadece biraz daha sadeleştirildi) --- */}
      <section className="relative pt-40 pb-32 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B0F19] to-[#0B0F19]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Crealab <br />
            Akıllı Enerji Altyapısı
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Bilal Kılıç Enerji'nin Ar-Ge merkezi Crealab tarafından geliştirilen; veriyi işleyen, öğrenen ve karar veren uçtan uca dijital ekosistem.
          </p>
        </div>
      </section>

      {/* --- BÖLÜM 1: YAPAY ZEKA (TERMINAL GÖRÜNÜMÜ) --- */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Sol: Metin */}
          <div>
            <div className="flex items-center gap-2 text-accent mb-6 font-mono text-sm">
              <Cpu className="w-4 h-4" />
              <span>ANOMALİ TESPİT MOTORU</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Sorunları gerçekleşmeden <br />
              <span className="text-accent">yakalayan algoritma.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Milyonlarca veri noktasını saniyeler içinde tarar. Standart sapmaları, gizli kaçakları ve cihaz arızalarını insan gözünden çok daha hızlı tespit eder.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Makine Öğrenmesi (Machine Learning)
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Geçmiş Veri ile Eğitilmiş Modeller
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Anlık Alarm Bildirimleri
              </li>
            </ul>
          </div>

          {/* Sağ: Terminal Simülasyonu */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
              {/* Terminal Başlık */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-gray-500">crealab_ai_core — python</span>
              </div>
              {/* Terminal İçerik */}
              <div className="p-6 text-gray-300 space-y-2">
                <div className="flex gap-2">
                  <span className="text-accent">➜</span>
                  <span className="text-blue-400">~</span>
                  <span>initiate_scan --target=factory_zone_a</span>
                </div>
                <div className="text-gray-500">Scanning IoT endpoints... [OK]</div>
                <div className="text-gray-500">Analyzing voltage fluctuations... [OK]</div>
                <div className="flex gap-2 mt-4">
                  <span className="text-red-500">[ALERT]</span>
                  <span>Anomali detected: Compressor #4</span>
                </div>
                 <div className="pl-4 text-gray-400">
                   Expected: <span className="text-green-400">450 kWh</span> <br/>
                   Current: <span className="text-red-400">620 kWh (+37%)</span>
                 </div>
                 <div className="flex gap-2 mt-4 animate-pulse">
                  <span className="text-accent">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="border-r-2 border-white/50 pr-1">generating_report...</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- BÖLÜM 2: MERKEZİ İZLEME (DASHBOARD GÖRÜNÜMÜ) --- */}
      <section className="py-32 bg-white/5 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Sol: Dashboard Simülasyonu */}
          <div className="order-2 lg:order-1 relative">
             {/* Arka plan glow */}
             <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
             
             {/* Ana Dashboard Kartı */}
             <div className="relative bg-[#0F172A] border border-white/10 rounded-xl shadow-2xl p-6">
                {/* Üst Bar */}
                <div className="flex justify-between items-center mb-8">
                   <div>
                      <h4 className="font-bold text-white">Genel Enerji Tüketimi</h4>
                      <div className="text-xs text-gray-400">Son 24 Saat</div>
                   </div>
                   <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Sistem Normal
                   </div>
                </div>

                {/* Grafik Çubukları (CSS) */}
                <div className="flex items-end gap-3 h-40 mb-6">
                   {[40, 60, 45, 70, 30, 55, 65, 80, 50, 45, 60, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-600/30 rounded-t hover:bg-accent transition-all duration-300 relative group" style={{height: `${h}%`}}>
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">{h}%</div>
                      </div>
                   ))}
                </div>

                {/* Alt Bilgiler */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                   <div>
                      <div className="text-xs text-gray-400">Aktif Güç</div>
                      <div className="text-lg font-bold text-white">4.2 MW</div>
                   </div>
                   <div>
                      <div className="text-xs text-gray-400">Reaktif</div>
                      <div className="text-lg font-bold text-white">0.8 kVAr</div>
                   </div>
                   <div>
                      <div className="text-xs text-gray-400">Tasarruf</div>
                      <div className="text-lg font-bold text-accent">₺124k</div>
                   </div>
                </div>
             </div>

             {/* Üzerine Binen Küçük Kart (Floating) */}
             <div className="absolute -right-8 -bottom-8 bg-[#1E293B] border border-white/10 p-4 rounded-xl shadow-xl w-64 hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-accent/20 rounded-lg text-accent"><Activity className="w-4 h-4"/></div>
                   <div className="text-sm font-bold text-white">Anlık Yük İzleme</div>
                </div>
                <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                   <div className="bg-accent h-full w-[70%]"></div>
                </div>
                <div className="flex justify-between text-xs mt-2 text-gray-400">
                   <span>Kapasite</span>
                   <span>%70</span>
                </div>
             </div>
          </div>

          {/* Sağ: Metin */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 text-blue-400 mb-6 font-mono text-sm">
              <Wifi className="w-4 h-4" />
              <span>IOT & SCADA ENTEGRASYONU</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Tüm tesisleriniz <br />
              tek bir ekranda.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Farklı lokasyonlardaki fabrikalarınızı, mağazalarınızı veya ofislerinizi tek bir merkezi platformdan yönetin. Marka bağımsız tüm sayaç ve sensörlerle %100 uyumludur.
            </p>
            <button className="flex items-center gap-2 text-white border-b border-accent pb-1 hover:gap-4 transition-all group">
              Platform demosunu talep et <Search className="w-4 h-4 text-accent group-hover:scale-110"/>
            </button>
          </div>

        </div>
      </section>

       {/* --- BÖLÜM 3: GÜVENLİK & YASAL UYUM --- */}
       <section className="py-24">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Veri Güvenliği ve Standartlar</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <SecurityItem 
                  icon={<Lock className="w-6 h-6"/>}
                  title="Uçtan Uca Şifreleme"
                  desc="Tüm verileriniz 256-bit SSL sertifikası ile şifrelenerek buluta aktarılır."
               />
               <SecurityItem 
                  icon={<Command className="w-6 h-6"/>}
                  title="KVKK Uyumlu"
                  desc="Kişisel verileriniz Türkiye'deki sunucularda, KVKK mevzuatına uygun saklanır."
               />
               <SecurityItem 
                  icon={<PlayCircle className="w-6 h-6"/>}
                  title="ISO 27001"
                  desc="Bilgi güvenliği yönetim sistemi standartlarında operasyonel süreçler."
               />
            </div>
         </div>
       </section>
    </main>
  );
}

function SecurityItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
   return (
      <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition">
         <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 text-gray-300">
            {icon}
         </div>
         <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
         <p className="text-sm text-gray-400">{desc}</p>
      </div>
   )
}
