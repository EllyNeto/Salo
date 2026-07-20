import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="text-2xl font-bold tracking-tight text-foreground">Salo</div>
        <Link 
          href="/signin" 
          className="px-4 py-2 rounded-full border border-foreground/10 text-sm font-medium hover:bg-foreground/5 transition-colors"
        >
          Entrar
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-8">
          Mapeamento de Carreira Inteligente v2.0
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[#0F172A] mb-6">
          Sua jornada de carreira,<br />
          <span className="text-primary">planejada inteligentemente.</span>
        </h1>
        
        <p className="text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed">
          A plataforma de carreira com IA que ajuda você a navegar seu crescimento profissional com precisão, insights baseados em dados e roadmaps personalizados.
        </p>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard" 
            className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Começar Agora
          </Link>
          <button className="px-8 py-4 bg-surface text-foreground rounded-full font-medium border border-foreground/5 hover:bg-foreground/5 transition-all">
            Ver Metodologia
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <span className="text-xl font-bold">Stripe</span>
            <span className="text-xl font-bold">Linear</span>
            <span className="text-xl font-bold">Airbnb</span>
            <span className="text-xl font-bold">Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
