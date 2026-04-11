export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-slate-900"></div>

      <header className="relative px-10 py-6 flex justify-between items-center backdrop-blur-xl bg-black/40 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-3xl font-bold tracking-[0.3em] uppercase bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Fashion Studio
        </h1>
      </header>

      <section className="relative px-8 py-24 max-w-7xl mx-auto z-10 grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 uppercase">
            Futuro del Fashion Tech
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Ingeniería de moda avanzada impulsada por tecnología.
          </p>

          <button className="bg-white text-black px-10 py-4 rounded-full font-bold">
            Entrar al Sistema
          </button>
        </div>

        <div className="relative flex justify-center items-center">

          <div className="absolute w-[420px] h-[420px] border border-cyan-400/30 rounded-full animate-pulse"></div>

          <div className="relative bg-white/5 border border-cyan-300/30 rounded-3xl p-10 w-[430px] h-[520px]">

            <h3 className="text-cyan-300 mb-6">
              3D MANNEQUIN
            </h3>

            <div className="w-20 h-20 border-2 border-cyan-300 rounded-full mx-auto"></div>

            <div className="w-28 h-40 border-2 border-cyan-300 rounded-3xl mx-auto mt-4"></div>

          </div>

        </div>

      </section>

    </div>
  );
}
