function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Tesla-style futuristic animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-slate-900"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <header className="relative px-10 py-6 flex justify-between items-center backdrop-blur-xl bg-black/40 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-3xl font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Fashion Studio
        </h1>
        <nav className="flex gap-8 text-sm font-medium text-gray-300 uppercase tracking-wider">
          <a href="#features" className="hover:text-cyan-400 transition">Funciones</a>
          <a href="#tools" className="hover:text-cyan-400 transition">Herramientas</a>
          <a href="#about" className="hover:text-cyan-400 transition">Nosotros</a>
        </nav>
      </header>

      <section className="relative px-8 py-28 text-center max-w-7xl mx-auto z-10">
        <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tight leading-none">
          Futuro del
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent">
            Fashion Tech
          </span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Ingeniería de moda avanzada impulsada por tecnología para crear, editar y visualizar patronaje con precisión profesional.
        </p>
        <button className="bg-white text-black hover:bg-cyan-300 transition px-10 py-4 rounded-full text-lg font-bold shadow-2xl uppercase tracking-wide">
          Entrar al Sistema
        </button>
      </section>

      <section id="tools" className="relative px-8 py-20 max-w-7xl mx-auto z-10">
        <h3 className="text-4xl font-bold text-center mb-16 uppercase tracking-widest text-cyan-300">
          Core Modules
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white/5 border border-cyan-400/20 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(34,211,238,0.15)] p-8 hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-bold text-cyan-300 mb-4 uppercase">Patronaje Básico</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Generación automática de estructuras base para prendas esenciales con precisión técnica.
            </p>
            <button className="w-full bg-cyan-400 text-black py-3 rounded-xl font-bold hover:bg-cyan-300 transition uppercase">
              Acceder
            </button>
          </div>

          <div className="bg-white/5 border border-purple-400/20 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.15)] p-8 hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-bold text-purple-300 mb-4 uppercase">Patronaje Pro</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sistema avanzado de edición libre para manipular geometría, curvas y estructuras del molde.
            </p>
            <button className="w-full bg-purple-400 text-black py-3 rounded-xl font-bold hover:bg-purple-300 transition uppercase">
              Diseñar
            </button>
          </div>

          <div className="bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-8 hover:scale-105 transition duration-300">
            <h4 className="text-2xl font-bold text-white mb-4 uppercase">Diseño 3D</h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Visualización volumétrica avanzada para simulación y validación previa de diseños.
            </p>
            <button className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 transition uppercase">
              Visualizar
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="relative px-8 py-24 text-center z-10 border-t border-white/10 mt-16">
        <h3 className="text-4xl font-bold mb-6 uppercase tracking-widest text-cyan-300">
          Precision Meets Innovation
        </h3>
        <p className="max-w-4xl mx-auto text-lg text-gray-500 leading-relaxed font-light">
          Fashion Studio combina ingeniería digital, diseño técnico y simulación inteligente para revolucionar el desarrollo de moda profesional.
        </p>
      </section>
    </div>
  );
}
