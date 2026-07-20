import { Sidebar } from "@/components/Sidebar";
import { ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react";

export default function AIAnalysis() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 overflow-y-auto pt-20 md:pt-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Análise de Carreira por IA</h1>
          <p className="text-foreground/50 font-medium">Análise profunda do seu posicionamento profissional e compatibilidade com ecossistemas.</p>
        </header>

        {/* Readiness Card */}
        <div className="card p-12 mb-8 flex flex-col items-center justify-center text-center">
          <div className="relative w-48 h-48 mb-6">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle className="text-foreground/5 stroke-current" strokeWidth="8" fill="transparent" r="42" cx="50" cy="50" />
              <circle className="text-primary stroke-current" strokeWidth="8" strokeLinecap="round" fill="transparent" r="42" cx="50" cy="50" strokeDasharray="263.9" strokeDashoffset={263.9 * (1 - 0.75)} transform="rotate(-90 50 50)" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-primary">75%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Pronto</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Quase lá, Alex.</h2>
          <p className="text-foreground/50 max-w-md">Seu perfil é altamente competitivo para cargos de Senior Product Designer em ecossistemas de fintech e ferramentas de desenvolvimento de alto nível.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Core Strengths */}
          <div className="card p-8">
            <div className="flex items-center gap-2 mb-6 text-green-600">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-bold uppercase text-xs tracking-widest">Principais Fortalezas</h3>
            </div>
            <div className="space-y-4">
              {[
                { skill: "Sistemas Visuais", level: "Top 5%", desc: "Domínio excepcional de design tokens e escalabilidade." },
                { skill: "Design de Interação", level: "Especialista", desc: "Compreensão avançada de movimento e gestão de estado." },
                { skill: "Estratégia de Produto", level: "Top 10%", desc: "Forte alinhamento entre as necessidades do usuário e os objetivos de negócio." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-foreground/5 bg-foreground/[0.01]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">{item.skill}</span>
                    <span className="text-[10px] font-bold bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full uppercase">{item.level}</span>
                  </div>
                  <p className="text-xs text-foreground/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Gaps */}
          <div className="card p-8">
            <div className="flex items-center gap-2 mb-6 text-amber-600">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-bold uppercase text-xs tracking-widest">Lacunas de Competências</h3>
            </div>
            <div className="space-y-6">
              {[
                { skill: "Pensamento Sistêmico Estratégico", progress: 45, status: "Crítico" },
                { skill: "Liderança Cross-funcional", progress: 60, status: "Moderado" },
                { skill: "Design Baseado em Dados", progress: 72, status: "Moderado" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">{item.skill}</span>
                    <span className={`text-[10px] font-bold uppercase ${item.status === 'Crítico' ? 'text-red-500' : 'text-amber-500'}`}>{item.status}</span>
                  </div>
                  <div className="w-full h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${item.status === 'Crítico' ? 'bg-red-500' : 'bg-amber-500'}`} style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Learning Path */}
        <div className="card p-8 mb-8">
          <h3 className="font-bold uppercase text-xs tracking-widest mb-8 text-foreground/40">Caminho de Aprendizado Estratégico</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Dominando a Estratégia", desc: "Foco em modelos de negócio e análise competitiva." },
              { step: "02", title: "Liderar por Influência", desc: "Desenvolvendo soft skills para liderança não hierárquica." },
              { step: "03", title: "Sistemas em Escala", desc: "Gerenciando organizações de design e bibliotecas complexas." },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <span className="text-5xl font-black text-foreground/5 absolute -top-4 -left-2 group-hover:text-primary/10 transition-colors">{item.step}</span>
                <div className="relative pt-4">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-foreground/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Ecosystem Fit */}
        <div className="card overflow-x-auto">
          <div className="p-8 border-b border-foreground/5 min-w-[600px] md:min-w-0">
            <h3 className="font-bold uppercase text-xs tracking-widest text-foreground/40">Compatibilidade com Ecossistemas Alvo</h3>
          </div>
          <table className="w-full text-left min-w-[600px] md:min-w-0">
            <thead>
              <tr className="bg-foreground/[0.02] text-[10px] font-bold uppercase tracking-widest text-foreground/30">
                <th className="px-8 py-4">Empresa</th>
                <th className="px-8 py-4">Foco da Função</th>
                <th className="px-8 py-4">Pontuação de Match</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-foreground/5">
              {[
                { company: "Stripe", role: "Design Systems", match: 92 },
                { company: "Linear", role: "Product Specialist", match: 88 },
                { company: "Airbnb", role: "Experience Design", match: 79 },
                { company: "Vercel", role: "Developer Experience", match: 84 },
              ].map((item, i) => (
                <tr key={i} className="hover:bg-foreground/[0.01] transition-colors">
                  <td className="px-8 py-5 font-bold">{item.company}</td>
                  <td className="px-8 py-5 text-sm text-foreground/50">{item.role}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1 bg-foreground/5 rounded-full max-w-[100px]">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${item.match}%` }}></div>
                      </div>
                      <span className="text-sm font-bold">{item.match}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="text-primary hover:text-primary/80 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
