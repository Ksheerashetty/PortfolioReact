import {
  ArrowRight,
  ExternalLink,
  Github,
  PlusIcon,
  MinusIcon,
} from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";
import { useState } from "react";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Assemble Endgame",
      desc: "A fun interactive project inspired by Hangman, built with React to showcase engaging UI and smooth functionality.",
      img: "/src/assets/Project1.png",
      tags: ["React", "JavaScript", "CSS"],
      demo: "https://assembleendgamee.netlify.app/",
      github: "https://github.com/Ksheerashetty/AssemleEndgame",
    },
    {
      id: 2,
      title: "Task Assignment System",
      desc: "A task management system using localStorage where admins assign tasks and employees can view and take actions on their assigned tasks.",
      img: "/src/assets/Project2.png",
      tags: ["React", "JavaScript", "TailwindCSS"],
      demo: "https://tasksassignment.netlify.app/",
      github: "https://github.com/Ksheerashetty/TaskAssignmentSystem",
    },
    {
      id: 3,
      title: "Chef Hat",
      desc: "A recipe suggestion app that generates possible dishes based on the ingredients entered by the user.",
      img: "/src/assets/Project3.png",
      tags: ["React", "JavaScript", "CSS"],
      demo: "https://cheffhat.netlify.app/",
      github: "https://github.com/Ksheerashetty/ChefHat",
    },
    {
      id: 4,
      title: "Tenzies Game",
      desc: "A digital version of the dice game Tenzies, built using React with state management and interactive UI elements.",
      img: "/src/assets/Project4.png",
      tags: ["React", "JavaScript", "CSS"],
      demo: "https://tenziessssss.netlify.app/",
      github: "https://github.com/Ksheerashetty/Tenzies",
    },
    {
      id: 5,
      title: "Expense Tracker",
      desc: "A web application to manage and track daily expenses, with features for adding, categorizing, and analyzing spending habits.",
      img: "/src/assets/Project5.png",
      tags: ["React", "TypeScript", "CSS", "Chartjs"],
      demo: "https://expensesflow.netlify.app/",
      github: "https://github.com/Ksheerashetty/expense-tracker",
    },
    {
      id: 6,
      title: "Personal Portfolio",
      desc: "A personal portfolio to showcase my projects and skills. Yes, I have two portfolios — didn’t want to scrap the old one! You can still check it out for some of my earlier projects.",
      img: "/src/assets/Project6.png",
      tags: ["HTML", "CSS"],
      demo: "https://ksheerashetty-portfolio.netlify.app/",
      github: "https://github.com/Ksheerashetty/Portfolioo",
    },
  ];

  const [visiblePro, setVisiblePro] = useState(2);

  function handleShowMore() {
    setVisiblePro((visiblePro) => visiblePro + 2);
  }

  function handleShowLess() {
    setVisiblePro(2);
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section
      id="projects"
      className=" min-h-screen flex justify-center text-center items-center py-20 bg-[#1a0d1d]"
    >
      <RevealOnScroll>
        <div className=" max-w-5xl mx-auto px-4">
          <h2 className=" text-3xl font-bold mb-8 text-fuchsia-800">
            Projects
          </h2>
          <p className=" text-center mb-12 max-w-2xl mx-auto text-gray-300">
            Here are some of my projects, please feel free to explore 😊
          </p>
          <div className="grid grid-cols:1 md:grid-cols-2 gap-10">
            {projects.slice(0, visiblePro).map((pro) => (
              <div
                key={pro.id}
                className="flex flex-col justify-between border-purple-950 border rounded-xl shadow p-4 min-h-[400px]"
              >
                {/* address the spacing */}
                <h1 className="m-4 text-xl font-semibold text-purple-400">
                  {pro.title}
                </h1>
                <div className="h-48 overflow-hidden group flex  justify-center">
                  <img
                    onClick={() => window.open(pro.demo, "_blank")}
                    src={pro.img}
                    alt={pro.title}
                    className="w-[90%] h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pro.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm font-medium rounded border border-purple-800 hover:bg-purple-900 hover:text-white transition cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm mb-4 text-gray-300 px-4">{pro.desc}</p>

                  <div className="flex justify-between items-center">
                    <a
                      target="_blank"
                      href={pro.demo}
                      className="flex items-center gap-2 text-purple-500 border rounded p-2 hover:text-blue-300 transition-colors duration-300 my-4"
                    >
                      <ExternalLink height={20} width={20} />
                      <span>View Project</span>
                    </a>
                    <a
                      target="_blank"
                      href={pro.github}
                      className="flex items-center gap-2 text-purple-500 border rounded p-2 hover:text-blue-300 transition-colors duration-300 my-4"
                    >
                      <Github height={20} width={20} />
                      <span>View Github</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex justify-center gap-6">
            {visiblePro < projects.length ? (
              <button
                onClick={handleShowMore}
                className="px-4 py-2 border-purple-500 border hover:bg-purple-900 text-white text-lg bg-purple-600 rounded transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              >
                Show More <PlusIcon size={16} />
              </button>
            ) : (
              <button
                onClick={handleShowLess}
                className="px-4 py-2 border-purple-500 border hover:bg-purple-900 text-white text-lg bg-purple-600 rounded transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              >
                Show Less <MinusIcon size={16} />
              </button>
            )}

            <a
              target="_blank"
              className="px-4 py-2 border border-purple-500 hover:bg-fuchsia-900 text-white bg-fuchsia-600  text-lg  rounded transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              href="https://github.com/Ksheerashetty"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

//  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px 8px rgba(59,130,246,0.1)] transition-all">
//               <h3 className="text-xl font-semibold mb-2"> Project 1</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable clond infrastrucry mgmt with real time monitoring and
//                 automated scaling
//               </p>
//               <div className="flex flex-wrap">
//                 {["React", "React", "React", "React", "React", "React"].map(
//                   (item, index) => (
//                     <span
//                       key={index}
//                       className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
//                     >
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-purple-500 border rounded p-2 hover:text-blue-300 transition-colors my-4 "
//                 >
//                   View Project
//                 </a>
//                 <a
//                   href="#"
//                   className="text-purple-500 border rounded p-2 hover:text-blue-300 transition-colors my-4 "
//                 >
//                   View Github
//                 </a>
//               </div>
//             </div>
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px_8px_rgba(59,130,246,0.1)] transition-all">
//               <h3 className="text-xl font-semibold mb-2"> Project 2</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable clond infrastrucry mgmt with real time monitoring and
//                 automated scaling
//               </p>
//               <div className="flex flex-wrap">
//                 {["React", "React", "React", "React", "React", "React"].map(
//                   (item, index) => (
//                     <span
//                       key={index}
//                       className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
//                     >
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
//                 >
//                   View Project
//                 </a>
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
//                 >
//                   View Github
//                 </a>
//               </div>
//             </div>
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px 8px rgba(59,130,246,0.1)] transition-all">
//               <h3 className="text-xl font-semibold mb-2"> Project 3</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable clond infrastrucry mgmt with real time monitoring and
//                 automated scaling
//               </p>
//               <div className="flex flex-wrap">
//                 {["React", "React", "React", "React", "React"].map(
//                   (item, index) => (
//                     <span
//                       key={index}
//                       className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
//                     >
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
//                 >
//                   View Project
//                 </a>
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
//                 >
//                   View Github
//                 </a>
//               </div>
//             </div>
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-600/30 hover:shadow-[8_2px 8px rgba(59,130,246,0.1)] transition-all">
//               <h3 className="text-xl font-semibold mb-2"> Project 4</h3>
//               <p className="text-gray-400 mb-4">
//                 Scalable clond infrastrucry mgmt with real time monitoring and
//                 automated scaling
//               </p>
//               <div className="flex flex-wrap">
//                 {["React", "React", "React", "React", "React", "React"].map(
//                   (item, index) => (
//                     <span
//                       key={index}
//                       className="bg-purple-500/10 text-violet-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition m-1 cursor-pointer"
//                     >
//                       {item}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
//                 >
//                   View Project
//                 </a>
//                 <a
//                   href="#"
//                   className="text-purple-500 hover:text-blue-300 transition-colors my-4 mx-5 "
//                 >
//                   View Github
//                 </a>
//               </div>
//             </div>
