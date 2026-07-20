import { Sidebar } from "@/components/Sidebar";
import { Search, Sparkles, Clock, Globe } from "lucide-react";

export default function LearningHub() {
  const courses = [
    {
      title: "Sistemas de Design Estratégicos",
      school: "MIT Professional Education",
      duration: "6 semanas",
      price: "$499",
      insight: "Alinha-se perfeitamente com seu objetivo atual de se tornar um Senior Product Designer.",
      image: "bg-blue-600/10"
    },
    {
      title: "Liderança para Designers",
      school: "Harvard Business School",
      duration: "4 semanas",
      price: "$299",
      insight: "Crucial para a fase 'Liderar por Influência' do seu roadmap.",
      image: "bg-red-600/10"
    },
    {
      title: "Design Avançado Baseado em Dados",
      school: "Stanford University",
      duration: "8 semanas",
      price: "$599",
      insight: "Preenche uma lacuna crítica em seu conjunto de competências de 'Design Baseado em Dados'.",
      image: "bg-amber-600/10"
    }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-12 overflow-y-auto pt-20 md:pt-12">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Hub de Aprendizado</h1>
          
          <div className="relative max-w-2xl mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
            <input 
              type="text" 
              placeholder="Buscar cursos, competências ou instituições..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-foreground/10 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {["Tudo", "Estratégia", "Liderança", "Técnico", "Negócios", "Produto"].map((filter) => (
              <button 
                key={filter}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === 'Tudo' 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-surface text-foreground/40 hover:bg-foreground/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        <div className="space-y-6">
          {courses.map((course, i) => (
            <div key={i} className="card p-4 flex flex-col sm:flex-row gap-6 hover:shadow-xl hover:shadow-black/5 transition-all group">
              {/* Course Image/Capa */}
              <div className={`w-full sm:w-48 h-32 rounded-xl shrink-0 ${course.image} flex items-center justify-center`}>
                <Globe className="w-8 h-8 text-foreground/10" />
              </div>

              {/* Course Info */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-sm font-medium text-foreground/50">{course.school}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{course.price}</div>
                      <div className="flex items-center gap-1 text-[10px] font-bold uppercase text-foreground/30 justify-end">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </div>
                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-lg border border-primary/10">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <p className="text-[11px] font-medium text-primary/80">{course.insight}</p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">Ver Detalhes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
