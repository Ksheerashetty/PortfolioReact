import RevealOnScroll  from "../RevealOnScroll";
export default function About() {
  const frontend = ["REact", "vue", "ts", "css", "html"];
  const backend = ["node", "python", "mongo", "sql", "java"];
  return (
    <section
      id="about"
      className="min-h-screen max-w-full flex items-center justify-center text-center bg-[#1a0d1d] py-20"
    >
      {/* address the width color */}
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-l from-fuchsia-900 to-purple-900 bg-clip-text text-transparent">
          About Me 
          {/* address the gradient */}
        </h2>
        <div className="rounded-xl p-8 border-fuchsia-100/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            <h1 className="text-2xl font-semibold mb-8">Skills</h1>
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" border rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="border rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">BackEnd</h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Bachelor's in Computer Science</strong>
                <br />
                XYZ University (2019)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Software engineer at aBC corp (2020-present){" "}
                </h4>
                <p>
                  developed and maintained microservices for cloud based app
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

// 1a0026 22002a 190026
