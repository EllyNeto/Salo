"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Search, 
  BarChart2, 
  BookOpen, 
  Building2, 
  User,
  Layout,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Início", href: "/dashboard" },
  { icon: Search, label: "Explorar", href: "/explore" },
  { icon: BarChart2, label: "Análise", href: "/analysis" },
  { icon: BookOpen, label: "Aprendizado", href: "/learning" },
  { icon: Building2, label: "Empresas", href: "/explore" }, // Note: Both explore and companies point to explore for now
  { icon: User, label: "Perfil", href: "/profile" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Trigger */}
      <button 
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-primary rounded-lg text-white md:hidden shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 border-r border-foreground/5 flex flex-col h-screen bg-background/80 backdrop-blur-xl transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static md:bg-background/50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
      <div className="p-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Layout className="w-5 h-5 text-white" />
          </div>
          Salo
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive 
                  ? "bg-primary/5 text-primary shadow-sm" 
                  : "text-foreground/50 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-foreground/40"}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-foreground/5">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
            AL
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Alex Lawson</span>
            <span className="text-[10px] text-foreground/40 font-medium uppercase tracking-wider">Plano Pro</span>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
