import { Sidebar } from "@/components/Sidebar";
import { Search, Filter, MapPin, Briefcase, TrendingUp } from "lucide-react";

export default function CompanyExplorer() {
  const companies = [
    {
      name: "Stripe",
      desc: "Infraestrutura financeira para a internet.",
      sectors: ["Fintech", "Infraestrutura"],
      location: "San Francisco, CA",
      status: "Contratando",
      match: 98,
      logo: "bg-indigo-600"
    },
    {
      name: "Linear",
      desc: "A melhor maneira de construir produtos.",
      sectors: ["SaaS", "Ferramentas de Design"],
      location: "Remoto",
      status: "Contratando",
      match: 94,
      logo: "bg-slate-900"
    },
    {
      name: "Airbnb",
      desc: "Viva onde quiser.",
      sectors: ["Viagens", "Marketplace"],
      location: "San Francisco, CA",
      status: "Passivo",
      match: 87,
      logo: "bg-rose-500"
    },
    {
      name: "Vercel",
      desc: "Nuvem frontend para desenvolvedores.",
      sectors: ["DevTools", "Nuvem"],
      location: "Remoto",
      status: "Contratando",
      match: 91,
      logo: "bg-black"
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 overflow-y-auto flex flex-col lg:flex-row gap-8 pt-20 md:pt-12">
        <div className="flex-1">
          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Explorador de Empresas</h1>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input 
                  type="text" 
                  placeholder="Buscar empresas, cargos ou setores..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-foreground/10 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>
              <button className="px-6 py-3 rounded-xl border border-foreground/10 bg-surface flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-foreground/60 hover:bg-foreground/5 transition-all justify-center">
                <Filter className="w-4 h-4" />
                Filtros
              </button>
            </div>
          </header>

          <div className="space-y-4">
            {companies.map((company, i) => (
              <div key={i} className="card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-primary/20 transition-all cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl ${company.logo} flex shrink-0 items-center justify-center text-white font-black text-xl shadow-inner`}>
                  {company.name[0]}
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-1 gap-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{company.name}</h3>
                    <div className="text-left sm:text-right flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                      <div className="text-xl font-black text-primary order-2 sm:order-1">{company.match}%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-primary/40 order-1 sm:order-2">Pontuação de Match</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/50 mb-3">{company.desc}</p>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex gap-2">
                      {company.sectors.map(s => (
                        <span key={s} className="text-[10px] font-bold uppercase tracking-widest bg-foreground/5 px-2 py-0.5 rounded-md text-foreground/40">{s}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-foreground/30 font-medium">
                      <MapPin className="w-3 h-3" />
                      {company.location}
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${company.status === 'Hiring' ? 'text-green-500' : 'text-amber-500'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${company.status === 'Hiring' ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                      {company.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insight Panel */}
        <aside className="w-full lg:w-80 shrink-0 space-y-6">
          <div className="card p-8 bg-primary/5 border-primary/10">
            <div className="flex items-center gap-2 mb-6 text-primary">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-bold uppercase text-xs tracking-widest">Insight de Mercado</h3>
            </div>
            
            <p className="text-sm font-medium text-foreground/70 mb-8 leading-relaxed">
              As contratações de <span className="text-foreground font-bold">Senior Product Designers</span> no setor de <span className="text-foreground font-bold">Fintech</span> aumentaram <span className="text-primary font-bold">12.4%</span> este mês.
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-end h-32 gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t-lg relative group">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg transition-all duration-500 group-hover:brightness-110" 
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-foreground/20 px-1">
                <span>Seg</span>
                <span>Dom</span>
              </div>
            </div>

            <button className="w-full mt-8 py-3 bg-surface border border-primary/20 text-primary rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary/5 transition-all">
              Relatório Completo de Mercado
            </button>
          </div>

          <div className="card p-8">
            <h4 className="text-sm font-bold mb-4">Cargos em Tendência</h4>
            <div className="space-y-4">
              {[
                { role: "Design Systems Architect", count: 12 },
                { role: "Strategic Product Lead", count: 8 },
                { role: "UX Research Manager", count: 15 },
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-xs font-medium text-foreground/60">{r.role}</span>
                  <span className="text-xs font-bold">{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
