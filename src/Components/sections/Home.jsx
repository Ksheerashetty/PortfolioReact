import RevealOnScroll from "../RevealOnScroll";
import { ArrowDown } from "lucide-react";
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-x-hidden bg-background"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold my-8 cursor-pointer ">
            <span className="bg-gradient-to-r from-fuchsia-700 to-purple-900 bg-clip-text text-transparent hover-animate-gradient">
              Hi, I&apos;m
            </span>
            <br />
            <span className="bg-gradient-to-l from-fuchsia-700 to-purple-900 bg-clip-text text-transparent hover-animate-gradient">
              Ksheera Shetty
            </span>
          </h1>
          <p className="border border-purple-950/50 rounded p-6 text-center text-lg mb-8 max-w-xl text-foreground mx-auto hover:shadow-[0_0_15px_rgba(107,33,168,0.6)]">
            I&apos;m Ksheera, a frontend developer passionate about crafting
            sleek, user-friendly interfaces. Beyond frontend, I love exploring
            new domains and continuously expanding my knowledge to grow as a
            well-rounded developer.
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
      </RevealOnScroll>
      <div
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer "
      >
        <span
          className="text-sm text-muted-foreground mb-2"
          // color
        >
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
        {/* color */}
      </div>
    </section>
  );
}
