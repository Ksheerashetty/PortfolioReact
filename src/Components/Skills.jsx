import { useState } from "react";

export default function Skills() {

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "HTML", category: "Frontend" },
    { name: "Bootstrap", category: "Frontend" },
    { name: "Nextjs", category: "Frontend" },
    { name: "Tailwind", category: "Frontend" },
    { name: "Java", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "PHP", category: "Languages" },
    { name: "MySQL", category: "Languages" },
    { name: "Git", category: "Tools" },
    { name: "Github", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Zeplin", category: "Tools" },
    { name: "Netlify", category: "Tools" },
    { name: "Jira", category: "Tools" },
  ];
  const categories = ["All", "Frontend", "Languages", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  return (
    <section
      id="skills"
      className="min-h-screen max-w-full flex flex-col items-center justify-center text-center py-20 px-4"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-8 text-purple-800 text-center">
          Skills
        </h2>
        <div className="flex -flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-5 py-2 transition-colors duration-500 rounded-sm capitalize cursor-pointer ${
                activeCategory === cat
                  ? "bg-purple-800 text-white"
                  : "transparent border"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6 ">
          {filteredSkills.map((tech, index) => (
            <div key={index} className="bg-blue-900 skinner px-2 py-3">
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
{
  /* <div className="grid grid-cols-1 md:grid-cols-2 gap-6  px-6 md:w-[70%] w-[90%] items-stretch">
        <div className="border border-purple-950 rounded-xl p-6 ">
          <h3 className="text-xl font-bold mb-4 text-fuchsia-700">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((tech, index) => (
              <span
                key={index}
                className="skinner text-white py-1 px-3 rounded text-sm m-1 cursor-pointer"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div> */
}
{
  /* <div className="border border-purple-950 rounded-xl p-6 ">
          <h3 className="text-xl font-bold mb-4 text-fuchsia-700">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tech, index) => (
              <span
                key={index}
                className="skinner text-white py-1 px-3 rounded text-sm m-1 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div> */
}

{
  /* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-purple-950 rounded-xl p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-fuchsia-700">Languages</h3>
          <div className="flex flex-wrap gap-2 flex-1">
            {skills.map((tech) => (
              <span
                key={tech}
                className="skinner text-white py-1 px-3 rounded text-sm m-1 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-purple-950 rounded-xl p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-fuchsia-700">Tools</h3>
          <div className="flex flex-wrap gap-2 flex-1">
            {tools.map((tech) => (
              <span
                key={tech}
                className="skinner text-white py-1 px-3 rounded text-sm m-1 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div> */
}
