import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCallIcon,
  Send,
} from "lucide-react";
import { useToast } from "../../hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_API_KEY
      )
      .then((result) => {
        //address result
        alert("Message Sent!");
        setFormData({ name: "", message: "", email: "" });
      })
      .catch(() => {
        alert("Oops something went wrong. Please try again.");
      });
  };
  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center text-center py-20"
    >
      <RevealOnScroll>
        <div className="w-150 px-4 ">
          <h2 className=" text-3xl font-bold mb-8  text-purple-800">
            Get in Touch
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto text-gray-300">
            I&apos;m always open to discussing new opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6 justify-center ">
                <div className="flex items-start space-x-4 ">
                  <div className="p-3 rounded ">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a
                      target="_blank"
                      href="mailto:ksheerashetty@gmail.com"
                      className="text-white transition-colors"
                    >
                      ksheerashetty@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded">
                    <PhoneCallIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <a
                      target="_blank"
                      href="tel:+918431078378"
                      className="text-white transition-colors"
                    >
                      8431078378
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded ">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <a target="_blank" className="text-white transition-colors">
                      Bangalore,India
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h4>Connect with Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ksheerashetty28/"
                  >
                    <Linkedin />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/ksheerashettyyy/"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
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
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-purple-500 text-black py-3 px-6 rounded font-semibold text-lg transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(39,130,246,0.4)] cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send height={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
