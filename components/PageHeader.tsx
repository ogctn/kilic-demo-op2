// components/PageHeader.tsx
interface PageHeaderProps {
  title: string;
  desc: string;
}

const PageHeader = ({ title, desc }: PageHeaderProps) => {
  return (
    <div className="pt-40 pb-20 bg-primary text-white relative overflow-hidden">
      {/* Arkaplan Süsleri (Geliştirilmiş) */}
      
      {/* Sağ Üst - Büyük Accent Orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse pointer-events-none"></div>
      
      {/* Sol Alt - Mavi/Soft Orb */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      {/* İnce Çizgisel Doku (Opsiyonel: Daha kurumsal bir hava katar) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            {desc}
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-24 h-1.5 bg-accent rounded-full"></div>
            <div className="w-3 h-1.5 bg-accent/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-accent/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
