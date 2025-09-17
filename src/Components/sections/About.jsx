import { Briefcase, GraduationCap, GraduationCapIcon } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-full flex items-center justify-center text-center bg-[#1a0d1d] py-20"
    >
      {/* address the width color */}
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 text-fuchsia-800">About Me</h2>
          <div className="rounded-xl p-8">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m a Frontend Developer with experience in React,
              TypeScript, and CSS, currently working at Accenture.I&apos;ve been
              contributing to projects by building responsive UI components,
              debugging, and enhancing user experiences. I enjoy solving
              problems, learning new technologies, and continuously improving my
              craft. My goal is to grow into a well-rounded engineer who can
              design, develop, and deliver impactful digital products while
              staying curious and adaptable.
            </p>
            <div className="flex flex-row">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-left">
                    <Briefcase className="w-5 h-5" />
                    Work Experience
                  </h3>
                  <div className="text-gray-300 text-left">
                    <h4 className="font-bold">
                      Packaged App Development Associate
                    </h4>
                    <div className="flex justify-between">
                      <h3 className="font-semibold">Accenture</h3>
                      <h6>Nov 2023-present</h6>
                    </div>
                    <p className="mt-3">
                      <li className="ml-4">
                        Worked on a client-facing project using React,
                        TypeScript, and CSS to enhance and maintain UI
                        components.
                      </li>
                      <li className="ml-4">
                        Contributed to bug fixes, performance improvements, and
                        delivering a consistent user experience.
                      </li>
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-left">
                    <GraduationCap className="w-6 h-6" />
                    Education
                  </h3>
                  <div className="text-gray-300 text-left">
                    <h4 className="font-bold">
                      Visvesvaraya Technological University
                    </h4>
                    <div className="flex justify-between">
                      <h6>Computer Science and Engineering</h6>
                      <h6>(8.5CGPA)</h6>
                    </div>
                  </div>
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
