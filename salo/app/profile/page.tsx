import { Sidebar } from "@/components/Sidebar";
import { GraduationCap, Briefcase, Award, Mail, Link as LinkIcon, MapPin } from "lucide-react";

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-background text-[#1D1D1F]">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Header Profile */}
        <div className="bg-surface border-b border-foreground/5 py-16">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 border-4 border-background shadow-xl mb-6 flex items-center justify-center text-primary text-4xl font-bold">
              AL
            </div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Alex Lawson</h1>
            <p className="text-xl text-foreground/50 font-medium mb-8">Senior Product Designer & Systems Architect</p>
            
            <div className="flex gap-6">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/40">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/40">
                <Mail className="w-4 h-4" />
                alex@lawson.design
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <LinkIcon className="w-4 h-4" />
                lawson.design
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 space-y-8 px-4">
          {/* Professional Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-2">
              <Briefcase className="w-5 h-5 text-foreground/30" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Experiência Profissional</h2>
            </div>
            <div className="card divide-y divide-foreground/5">
              {[
                { company: "Linear", role: "Designer de Produto", date: "2024 — Presente", logo: "bg-black" },
                { company: "Stripe", role: "Designer de UX", date: "2021 — 2024", logo: "bg-indigo-600" },
                { company: "Airbnb", role: "Designer Júnior", date: "2019 — 2021", logo: "bg-rose-500" },
              ].map((job, i) => (
                <div key={i} className="p-8 flex items-center justify-between group hover:bg-foreground/[0.01] transition-colors">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl ${job.logo} flex items-center justify-center text-white font-bold text-lg`}>
                      {job.company[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{job.company}</h3>
                      <p className="text-sm font-medium text-foreground/50">{job.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-foreground/30">{job.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Background */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-2">
              <GraduationCap className="w-5 h-5 text-foreground/30" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Formação Acadêmica</h2>
            </div>
            <div className="card p-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Stanford University</h3>
                  <p className="text-sm font-medium text-foreground/50">Mestrado em Interação Humano-Computador</p>
                  <p className="text-xs font-bold text-foreground/20 mt-1 uppercase tracking-widest">Turma de 2019</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Credentials */}
          <section>
            <div className="flex items-center gap-3 mb-6 px-2">
              <Award className="w-5 h-5 text-foreground/30" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/30">Competências e Certificações</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Sistemas de Design Sênior", issuer: "Certificado Figma", date: "2026" },
                { title: "Estratégia de Produto", issuer: "Reforge", date: "2025" },
                { title: "Engenharia de Frontend", issuer: "Frontend Masters", date: "2024" },
                { title: "Artes Visuais", issuer: "RISD", date: "2023" },
              ].map((cert, i) => (
                <div key={i} className="card p-6 flex items-center gap-4 hover:border-primary/20 transition-all group cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/20 group-hover:text-primary/40 transition-colors">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{cert.title}</h4>
                    <p className="text-[11px] font-medium text-foreground/40">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
