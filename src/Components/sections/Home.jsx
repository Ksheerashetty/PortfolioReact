export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-fuchsia-900 to-purple-900 bg-clip-text text-transparent leading-right">
          I'm Ksheera Shetty
        </h1>
        <p className="border border-purple-950/50 rounded p-6 text-center text-lg mb-8 max-w-lg text-white mx-auto hover:shadow-[0_0_15px_rgba(107,33,168,0.6)]">
          I'm a full-stack developer who loves crafting clean, scalable web
          applications. My goal is to build solutions that offer both
          exceptional performance and a delightful user experience.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="#projects"
            className="bg-purple-900 text-white p-4 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5
              hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="border border-purple-700/50 text-purple-500 font-medium p-4 rounded transition-all duration-200 hover:translate-y-0.5
             hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/10"
          >
            Contact me
          </a>
          {/* <a href="#projects" className="rounded bg-blue-300 p-4 text-white font-semibold">View projects</a>   */}
        </div>
      </div>
    </section>
  );
}
