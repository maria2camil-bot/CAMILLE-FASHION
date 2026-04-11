import { useState } from "react";
import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Scissors, Menu, X } from "lucide-react";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import PatronajeBasico from "@/pages/patronaje-basico";
import PatronajePro from "@/pages/patronaje-pro";
import Diseno3D from "@/pages/diseno-3d";
import JardinDeLila from "@/pages/jardin-de-lila";
import Info from "@/pages/info";

const queryClient = new QueryClient();

const NAV_LINKS = [
  { href: "/patronaje-basico", label: "Básico" },
  { href: "/patronaje-pro", label: "Profesional" },
  { href: "/diseno-3d", label: "Diseño 3D" },
  { href: "/jardin-de-lila", label: "Jardín de Lila" },
  { href: "/info", label: "Información" },
];

function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Scissors className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-bold tracking-tight">Fashion Style</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`transition-colors hover:text-primary ${location === link.href ? 'text-primary' : 'text-foreground/80'}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} data-testid="button-mobile-menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-3 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className={`block py-2 px-3 text-sm font-medium transition-colors ${location === link.href ? 'text-primary bg-muted/50' : 'text-foreground/80 hover:text-primary'}`}
              onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-card py-8 md:py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-muted-foreground" />
          <span className="font-serif text-lg font-bold text-muted-foreground">Fashion Style</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Fashion Style. Diseñado para creadores.
        </p>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/patronaje-basico" component={PatronajeBasico} />
          <Route path="/patronaje-pro" component={PatronajePro} />
          <Route path="/diseno-3d" component={Diseno3D} />
          <Route path="/jardin-de-lila" component={JardinDeLila} />
          <Route path="/info" component={Info} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
