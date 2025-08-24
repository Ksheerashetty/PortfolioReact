import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_API_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", message: "", email: "" });
      })
      .catch(() => {
        alert("Oops something went wrong. Please try again.");
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center text-center bg-[#1a0d1d] py-20"
    >
      <RevealOnScroll>
        <div className="w-150 px-4 ">
          <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-l from-violet-900  via-fuchsia-900 to-purple-900 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                placeholder="Name"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                placeholder="Your Message...yhhhhhhhhhhhhhhhhhhhhhhhhhh"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(39,130,246,0.4)]"
              // make purple
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
