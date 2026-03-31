import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ApologyCard() {
  const [open, setOpen] = useState(false);

  const handleForgive = () => {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="py-24 flex flex-col items-center">

      <motion.div
        onClick={() => setOpen(!open)}
        className="glass p-8 w-80 text-center cursor-pointer transition hover:scale-105"
        whileTap={{ scale: 0.95 }}
      >
        <h2 className="text-2xl font-semibold text-rose-600">
          Open My Heart 💌
        </h2>

        {open && (
          <motion.p
            className="mt-4 text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            I'm deeply sorry for everything.  
            You deserve love, respect, and honesty — and I promise to give you all of that.  
            Please don’t walk away… you mean the world to me ❤️
          </motion.p>
        )}
      </motion.div>

      <motion.button
        onClick={handleForgive}
        className="mt-10 px-8 py-4 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full glow-btn text-lg"
        whileHover={{ scale: 1.1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Forgive Me ❤️
      </motion.button>
    </div>
  );
}