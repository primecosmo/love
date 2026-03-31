import { useState, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "@fontsource/great-vibes";

export default function LuxuryHeartApology() {
  const [forgiven, setForgiven] = useState(false);
  const [typedText, setTypedText] = useState("");
  const cardRef = useRef();
  const message = `I messed up, but I promise to make it up to you 💖.
Please forgive me. You are the most special person in my life ❤️.
I will always cherish and love you endlessly.`;

  // Typing effect
  useEffect(() => {
    if (!forgiven) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(message.slice(0, i + 1));
        i++;
        if (i >= message.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [forgiven]);

  // Mouse parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMouse({ x, y });
  };

  // Initialize tsparticles
  const particlesInit = async (engine) => await loadFull(engine);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800 overflow-hidden"
    >
      {/* Heart-shaped glowing particles */}
      <Particles
        id="particles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
          particles: {
            number: { value: 120, density: { enable: true, area: 900 } },
            shape: { type: "heart" },
            color: { value: ["#ff77a9", "#f43f5e", "#fcd34d", "#fff"] },
            opacity: { value: 0.8, random: { enable: true, minimumValue: 0.4 } },
            size: { value: 5, random: { enable: true, minimumValue: 2 } },
            move: { enable: true, speed: 1, direction: "top", random: true, outModes: { default: "out" } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Giant flowing heart text */}
      <svg
        viewBox="0 0 600 600"
        className="absolute w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] z-0"
      >
        <defs>
          <path
            id="heartPath"
            d="M300,550 
               C100,400 50,200 300,100 
               C550,200 500,400 300,550 Z"
          />
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff77a9"/>
            <stop offset="50%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#fcd34d"/>
          </linearGradient>
        </defs>
        <text
          fill="none"
          stroke="url(#heartGradient)"
          strokeWidth="1.5"
          fontSize="16"
          fontFamily="'Great Vibes', cursive"
        >
          <textPath href="#heartPath" startOffset="0%">
            {Array(30).fill("I’m really sorry — ").join("")}
          </textPath>
          <animate
            attributeName="startOffset"
            from="0%"
            to="100%"
            dur="20s"
            repeatCount="indefinite"
          />
        </text>
      </svg>

      {/* Glassy apology card */}
      <div
        ref={cardRef}
        className="relative backdrop-blur-2xl bg-white/10 p-10 rounded-3xl shadow-2xl text-center max-w-md z-10 border border-white/20 transition-transform duration-300"
        style={{
          transform: `rotateY(${mouse.x / 2}deg) rotateX(${-mouse.y / 2}deg)`,
          boxShadow: "0 0 100px rgba(255,182,193,0.6)",
          background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,182,193,0.1))",
        }}
      >
        {!forgiven ? (
          <>
            <h1
              className="text-5xl font-extrabold mb-6"
              style={{
                fontFamily: "'Great Vibes', cursive",
                background: "linear-gradient(90deg, #ff77a9, #ec4899, #f43f5e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 2s infinite",
              }}
            >
              I'm truly sorry...
            </h1>
            <p className="text-white text-lg mb-6 min-h-[80px] whitespace-pre-wrap">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
            <button
              onClick={() => setForgiven(true)}
              className="px-8 py-3 rounded-3xl bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition duration-300"
            >
              Please Forgive Me 🥺
            </button>
          </>
        ) : (
          <>
            <h1
              className="text-5xl font-extrabold mb-4"
              style={{
                fontFamily: "'Great Vibes', cursive",
                background: "linear-gradient(90deg, #ff77a9, #ec4899, #f43f5e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 2s infinite",
              }}
            >
              You forgave me! 😍
            </h1>
            <p className="text-white text-lg">I promise to always be better ❤️</p>
          </>
        )}
      </div>

      {/* Background music */}
      <audio autoPlay loop muted id="bg-music">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
      `}</style>
    </div>
  );
}