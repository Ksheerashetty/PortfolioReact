export default function About() {
  const frontend = ["REact", "vue", "ts", "css", "html"];
  const backend = ["node", "python", "mongo", "sql", "java"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#1a0d1d] py-15 border-10"
    >
      <div className="max-w-3xl mx-auto px-4 border-2 border-amber-50">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-l from-fuchsia-900 to-purple-900 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-fuchsia-100/10 border hover:-translate-y-1 transition-all">
          <p>
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{frontend.map((tech)=>(
                <span key={tech} className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
              ))}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 1a0026 22002a 190026
