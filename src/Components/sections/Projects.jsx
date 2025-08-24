import RevealOnScroll from "../RevealOnScroll";
export default function Projects() {
  return (
    <section
      id="projects"
      className=" min-h-screen flex justify-center text-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="  max-w-5xl mx-auto px-4">
          <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-purple-900 bg-clip-text text-transparent">
            Projectshhhhhhhhhhhhhhh
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px 8px rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2"> Project 1</h3>
              <p className="text-gray-400 mb-4">
                Scalable clond infrastrucry mgmt with real time monitoring and
                automated scaling
              </p>
              <div className="flex flex-wrap">
                {["React", "React", "React", "React", "React", "React"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-purple-500 border rounded p-2 hover:text-blue-300 transition-colors my-4 "
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="text-purple-500 border rounded p-2 hover:text-blue-300 transition-colors my-4 "
                >
                  View Github
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2"> Project 2</h3>
              <p className="text-gray-400 mb-4">
                Scalable clond infrastrucry mgmt with real time monitoring and
                automated scaling
              </p>
              <div className="flex flex-wrap">
                {["React", "React", "React", "React", "React", "React"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
                >
                  View Github
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px 8px rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2"> Project 3</h3>
              <p className="text-gray-400 mb-4">
                Scalable clond infrastrucry mgmt with real time monitoring and
                automated scaling
              </p>
              <div className="flex flex-wrap">
                {["React", "React", "React", "React", "React"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
                >
                  View Github
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px 8px rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-semibold mb-2"> Project 4</h3>
              <p className="text-gray-400 mb-4">
                Scalable clond infrastrucry mgmt with real time monitoring and
                automated scaling
              </p>
              <div className="flex flex-wrap">
                {["React", "React", "React", "React", "React", "React"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
                >
                  View Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
