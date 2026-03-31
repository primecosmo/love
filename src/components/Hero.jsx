import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { FaPlay, FaPause } from "react-icons/fa";

const text = "I'm Truly Sorry ❤️";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);

  // ✨ Smooth Typewriter
  useEffect(() => {
    if (started && index < text.length) { // only type after start
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [index, started]);

  // 💕 Confetti Button
  const handleForgive = () => {
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4 bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300">

      {/* 🔒 Overlay Button */}
      {!started && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <button
            onClick={() => setStarted(true)} // just show content
            className="px-6 sm:px-10 py-3 sm:py-4 bg-pink-500 text-white rounded-full text-base sm:text-lg shadow-xl animate-pulse"
          >
            Tap to Feel My Apology ❤️
          </button>
        </div>
      )}

      {/* 💖 Floating Hearts */}
      {started && [...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -800, opacity: [0, 1, 0] }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute text-pink-400 text-xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          ❤
        </motion.span>
      ))}

      {/* 💔 Title */}
      {started && (
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-rose-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.h1>
      )}

      {/* 💬 Subtitle */}
      {started && (
        <motion.p
          className="mt-5 text-gray-700 max-w-xl text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          I know I hurt you… and it kills me inside every single moment 🥺  
          I just want one chance to make it right.
        </motion.p>
      )}

      {/* 💌 Apology Card */}
      {started && (
        <motion.div
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 p-6 max-w-md cursor-pointer rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-2xl"
        >
          <h2 className="text-xl text-rose-700 font-semibold">
            Open My Heart 💌
          </h2>

          {open && (
            <motion.p
              className="mt-4 text-gray-800 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              I'm really sorry for everything…  
              Tum meri life ka sabse important hissa ho.  
              Main promise karta hoon ke main better banunga… sirf tumhare liye nahi, hum dono ke liye ❤️
            </motion.p>
          )}
        </motion.div>
      )}

      {/* 💖 Reasons */}
      {started && open && (
        <motion.div
          className="mt-8 grid md:grid-cols-2 gap-4 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            "Tumhari smile meri jaan hai 😊",
            "Tum meri peace ho ❤️",
            "Tumhare bina sab adhura lagta hai 💔",
            "Tum meri duniya ho 🌍",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="p-4 text-sm rounded-xl bg-white/30 backdrop-blur-md border border-white/40 shadow-md"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* 💕 Forgive Me Button */}
      {started && (
        <motion.button
          onClick={handleForgive}
          whileHover={{ scale: 1.15 }}
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 10px #fb7185",
              "0 0 25px #f43f5e",
              "0 0 10px #fb7185",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 px-10 py-4 text-lg bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-xl"
        >
          Forgive Me ❤️
        </motion.button>
      )}
    </div>
  );
}