import { Sidebar } from "@/components/Sidebar";
import { CheckCircle2, Lock, Play } from "lucide-react";

export default function CareerRoadmap() {
  const steps = [
    {
      status: "completed",
      title: "Domínio de Design Visual",
      desc: "Teoria das cores avançada, sistemas de tipografia e princípios de layout.",
      date: "Concluído em 12 de junho de 2026"
    },
    {
      status: "completed",
      title: "Pensamento de Produto e UX",
      desc: "Metodologias de pesquisa de usuário, mapeamento de jornada e testes de usabilidade.",
      date: "Concluído em 05 de julho de 2026"
    },
    {
      status: "current",
      title: "Pensamento Sistêmico Estratégico",
      desc: "Arquitetando sistemas de design escaláveis e documentação para equipes de engenharia.",
      duration: "faltam 4 semanas"
    },
    {
      status: "locked",
      title: "Liderança em Design",
      desc: "Gestão de stakeholders, mentoria de equipe e planejamento estratégico.",
    },
    {
      status: "locked",
      title: "Design de Negócios e Crescimento",
      desc: "Compreendendo economia de unidade, otimização de funil e análise de dados.",
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-foreground/5 p-8">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Roadmap para Senior Product Designer</h1>
              <p className="text-foreground/40 text-sm font-medium uppercase tracking-widest mt-1">Sua jornada rumo à excelência</p>
            </div>
            <div className="flex gap-8">
              <div className="text-right">
                <div className="text-xl font-bold">64%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Progresso Geral</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">5 Meses</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Tempo Estimado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-[71px] top-12 bottom-12 w-0.5 bg-foreground/5"></div>
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 items-start relative">
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-background ${
                  step.status === 'completed' ? 'bg-primary text-white' :
                  step.status === 'current' ? 'bg-white border-primary text-primary shadow-lg shadow-primary/20' :
                  'bg-foreground/5 text-foreground/20'
                }`}>
                  {step.status === 'completed' && <CheckCircle2 className="w-6 h-6" />}
                  {step.status === 'current' && <Play className="w-5 h-5 fill-current" />}
                  {step.status === 'locked' && <Lock className="w-5 h-5" />}
                </div>

                {/* Content Card */}
                <div className={`flex-1 card p-8 transition-all ${
                  step.status === 'current' ? 'ring-2 ring-primary/20 shadow-xl shadow-black/5' : 
                  step.status === 'locked' ? 'opacity-50' : ''
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    {step.status === 'completed' && (
                      <span className="text-[10px] font-bold uppercase text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full">Concluído</span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/50 leading-relaxed mb-6">{step.desc}</p>
                  
                  {step.status === 'current' ? (
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-primary/60 italic">{step.duration}</div>
                      <button className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-primary/90 transition-all">
                        Continuar Aprendizado
                      </button>
                    </div>
                  ) : step.status === 'completed' ? (
                    <div className="text-xs font-medium text-foreground/30">{step.date}</div>
                  ) : (
                    <div className="text-xs font-bold text-foreground/20 uppercase tracking-widest">Módulo Bloqueado</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
