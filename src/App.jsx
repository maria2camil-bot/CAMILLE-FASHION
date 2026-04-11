export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">

      {/* Fondo futurista */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-slate-900"></div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Header */}
      <header className="relative px-10 py-6 flex justify-between items-center backdrop-blur-xl bg-black/40 border-b border-white/10 sticky top-0 z-50">

        <h1 className="text-3xl font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Fashion Studio
        </h1>

        <nav className="flex gap-8 text-sm font-medium text-gray-300 uppercase">
          <a href="#">Funciones</a>
          <a href="#">Herramientas</a>
          <a href="#">Nosotros</a>
        </nav>

      </header>

      {/* Hero */}
      <section className="relative px-8 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center z-10">

        {/* Texto izquierda */}
        <div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase leading-none">
            Futuro del
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Fashion Tech
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Ingeniería de moda avanzada impulsada por tecnología para crear,
            editar y visualizar patronaje con precisión profesional.
          </p>

          <button className="bg-white text-black hover:bg-cyan-300 transition px-10 py-4 rounded-full text-lg font-bold">
            Entrar al Sistema
          </button>

        </div>

        {/* Maniquí holográfico */}
        <div className="relative flex justify-center items-center">

          <div className="absolute w-[420px] h-[420px] border border-cyan-400/30 rounded-full animate-pulse"></div>

          <div className="bg-white/5 border border-cyan-300/30 rounded-3xl p-10 w-[430px] h-[520px] backdrop-blur-xl">

            <h3 className="text-cyan-300 text-center mb-6 tracking-widest">
              3D MANNEQUIN
            </h3>

            <div className="w-20 h-20 border-2 border-cyan-300 rounded-full mx-auto"></div>

            <div className="w-28 h-40 border-2 border-cyan-300 rounded-3xl mx-auto mt-4"></div>

            {/* Blueprint */}
            <div className="mt-10">

              <p className="text-xs text-purple-300 mb-3 text-center tracking-widest">
                PATTERN BLUEPRINT
              </p>

              <div className="grid grid-cols-4 gap-2">

                <div className="h-6 border border-cyan-400/30"></div>
                <div className="h-6 border border-cyan-400/30"></div>
                <div className="h-6 border border-cyan-400/30"></div>
                <div className="h-6 border border-cyan-400/30"></div>

                <div className="h-6 border border-cyan-400/30"></div>
                <div className="h-6 border border-cyan-400/30"></div>
                <div className="h-6 border border-cyan-400/30"></div>
                <div className="h-6 border border-cyan-400/30"></div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Botones principales */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto z-10">

        <h3 className="text-4xl font-bold text-center mb-16 uppercase text-cyan-300">
          Core Modules
        </h3>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-8 backdrop-blur-xl">
            <h4 className="text-2xl font-bold text-cyan-300 mb-4">
              Patronaje Básico
            </h4>
            <button className="w-full bg-cyan-400 text-black py-3 rounded-xl font-bold">
              Acceder
            </button>
          </div>

          <div className="bg-white/5 border border-purple-400/20 rounded-3xl p-8 backdrop-blur-xl">
            <h4 className="text-2xl font-bold text-purple-300 mb-4">
              Patronaje Pro
            </h4>
            <button className="w-full bg-purple-400 text-black py-3 rounded-xl font-bold">
              Diseñar
            </button>
          </div>

          <div className="bg-white/5 border border-white/20 rounded-3xl p-8 backdrop-blur-xl">
            <h4 className="text-2xl font-bold text-white mb-4">
              Diseño 3D
            </h4>
            <button className="w-full bg-white text-black py-3 rounded-xl font-bold">
              Visualizar
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}
