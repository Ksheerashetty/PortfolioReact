import { useEffect, useState } from "react";

export default function StarBackground({ isMenuOpen }) {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStar();
    generateMeteor();
    const handleResize = () => {
      generateStar();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function generateStar() {
    const numberOfStars =
      Math.floor(window.innerWidth * window.innerHeight) / 10000;

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDur: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  }

  function generateMeteor() {
    const numberOfMeteor = 4;
    const newMeteor = [];
    for (let i = 0; i < numberOfMeteor; i++) {
      newMeteor.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 5,
        animationDur: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteor);
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            height: `${star.size}px`,
            width: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: `${star.opacity}`,
            animationDuration: `${star.animationDur}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            height: `${meteor.size * 1}px`,
            width: `${meteor.size * 20}px`,
            // height: `${meteor.size}px`,
            // width: `${meteor.size}px`, has star falling effect
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDur}s`,
          }}
        />
      ))}
    </div>
  );
}
