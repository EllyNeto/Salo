import { Sidebar } from "@/components/Sidebar";
import { Lightbulb, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 overflow-y-auto pt-20 md:pt-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Bom dia, Alex</h1>
          <p className="text-foreground/50 font-medium">Você está progredindo de forma constante. 3 áreas-chave precisam de sua atenção hoje.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Goal Card */}
          <div className="col-span-1 md:col-span-8 card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Objetivo Atual</span>
              <h2 className="text-2xl font-bold mb-1">Senior Product Designer</h2>
              <p className="text-foreground/50 text-sm">Transição estratégica de nível pleno</p>
              
              <div className="flex items-center gap-6 mt-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">68%</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/30">Pontuação de Prontidão</span>
                </div>
                <div className="h-10 w-px bg-foreground/5"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">5</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/30">Competências a adquirir</span>
                </div>
              </div>
            </div>
            
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-foreground/5 stroke-current" strokeWidth="10" fill="transparent" r="40" cx="50" cy="50" />
                <circle className="text-primary stroke-current" strokeWidth="10" strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.68)} transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-primary">68%</div>
            </div>
          </div>

          {/* AI Insight Card */}
          <div className="col-span-1 md:col-span-4 bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-lg shadow-primary/20">
            <Lightbulb className="w-8 h-8 mb-4 opacity-80" />
            <h3 className="text-lg font-bold mb-2">Insight de IA</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              "Cargos sêniores na Stripe e Linear estão priorizando 'Pensamento Sistêmico Estratégico' em vez de execução visual. Considere focar seu próximo módulo de aprendizado nisso."
            </p>
            <button className="text-xs font-bold uppercase tracking-widest bg-white/10 hover:bg-white/20 py-2 px-4 rounded-lg transition-all">
              Explorar Insight
            </button>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Next Recommended Skill */}
          <div className="col-span-1 md:col-span-6 card p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">Pensamento Sistêmico Estratégico</h4>
                <p className="text-xs text-foreground/50">Próxima competência recomendada</p>
              </div>
            </div>
            <button className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">Começar</button>
          </div>

          {/* Learning Progress */}
          <div className="col-span-1 md:col-span-6 card p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold">Liderança em Design 101</h4>
              <span className="text-xs font-bold text-foreground/40 italic">Em Progresso</span>
            </div>
            <div className="w-full h-2 bg-foreground/5 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[42%] rounded-full"></div>
            </div>
            <div className="mt-3 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-foreground/30">
              <span>Progresso</span>
              <span>42%</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="col-span-1 md:col-span-12 card p-8">
            <h3 className="text-lg font-bold mb-6">Atividade Recente</h3>
            <div className="space-y-6">
              {[
                { icon: CheckCircle2, label: "Concluiu 'Prototipagem Avançada'", time: "há 2 horas", color: "text-green-500" },
                { icon: Clock, label: "Perfil atualizado com novas certificações", time: "Ontem", color: "text-blue-500" },
                { icon: TrendingUp, label: "Analisou compatibilidade com Linear", time: "há 2 dias", color: "text-purple-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <span className="text-xs text-foreground/30 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
