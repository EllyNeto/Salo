import { Sidebar } from "@/components/Sidebar";
import { Sparkles, Paperclip, Send, Bot, User, FileText, ChevronRight } from "lucide-react";

export default function AIAssistant() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden pt-16 md:pt-0">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-background relative h-full">
          <header className="p-8 border-b border-foreground/5 flex items-center justify-between bg-background/50 backdrop-blur-xl sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-bold">Assistente de IA do Salo</h1>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Online e Processando</span>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-8 space-y-8">
            {/* AI Message */}
            <div className="flex gap-4 max-w-2xl">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-surface card p-4 text-sm leading-relaxed shadow-sm">
                Olá Alex! Acabei de atualizar sua análise de carreira com base em sua atividade recente. Você está agora <span className="text-primary font-bold">75% pronto</span> para um cargo de Senior Product Designer. Como posso ajudá-lo a dar o próximo passo hoje?
              </div>
            </div>

            {/* User Message */}
            <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
              <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/40 shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed shadow-lg shadow-primary/20">
                Você pode analisar meu salário atual em comparação com o mercado para cargos de Senior Product Designer em San Francisco?
              </div>
            </div>

            {/* AI Message */}
            <div className="flex gap-4 max-w-2xl">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-surface card p-4 text-sm leading-relaxed shadow-sm">
                Com base em dados da Stripe, Linear e Vercel, o salário médio de um Senior Product Designer em San Francisco é <span className="font-bold">$185k - $220k base</span>, mais participação acionária. Sua compensação atual é aproximadamente <span className="text-amber-600 font-bold">12% abaixo da média do mercado</span>. Recomendo focar em 'Pensamento Sistêmico Estratégico' para justificar uma faixa salarial maior.
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-8 pt-0">
            <div className="max-w-3xl mx-auto relative">
              <div className="card p-2 flex items-center gap-1 sm:gap-2 shadow-2xl shadow-black/5 border-foreground/10 ring-1 ring-black/[0.02]">
                <button className="p-3 hover:bg-foreground/5 rounded-xl transition-all text-foreground/30 hidden sm:block">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input 
                  type="text" 
                  placeholder="Pergunte à IA do Salo sobre sua carreira..."
                  className="flex-1 bg-transparent py-3 px-2 focus:outline-none text-sm font-medium"
                />
                <div className="flex items-center gap-2 pr-2">
                  <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] font-bold uppercase tracking-widest text-foreground/20">
                <Sparkles className="w-3 h-3" />
                Desenvolvido pela Inteligência do Salo v2.0
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar for Assistant */}
        <aside className="hidden xl:block w-80 border-l border-foreground/5 p-8 space-y-8 bg-background/30 backdrop-blur-sm overflow-y-auto">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-4">Sugestões de Prompts</h3>
            <div className="space-y-2">
              {[
                "Analisar meu salário",
                "Simulação de entrevista para Stripe",
                "Melhorar meu CV para a Linear",
                "Quais competências estão faltando?"
              ].map((prompt) => (
                <button key={prompt} className="w-full text-left p-3 rounded-xl border border-foreground/5 bg-surface hover:border-primary/30 hover:bg-primary/[0.02] transition-all text-xs font-medium flex items-center justify-between group">
                  {prompt}
                  <ChevronRight className="w-3 h-3 text-foreground/20 group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 mb-4">Ações Rápidas</h3>
            <button className="w-full flex items-center justify-center gap-2 py-4 bg-foreground text-background rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all shadow-xl shadow-black/10">
              <FileText className="w-4 h-4" />
              Fazer Upload do CV
            </button>
          </div>

          <div className="card p-6 bg-amber-500/5 border-amber-500/10">
            <h4 className="text-xs font-bold text-amber-600 mb-2">Preparação para Entrevista</h4>
            <p className="text-[11px] text-amber-900/60 leading-relaxed mb-4">
              Você tem uma simulação de entrevista agendada para sexta-feira.
            </p>
            <button className="text-[10px] font-bold uppercase tracking-widest text-amber-600 hover:underline">Ver Detalhes</button>
          </div>
        </aside>
      </main>
    </div>
  );
}
