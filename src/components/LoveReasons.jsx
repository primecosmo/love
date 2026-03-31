import { motion } from "framer-motion";

const reasons = [
  "Tumhari smile meri jaan hai 😊",
  "Tum meri peace ho ❤️",
  "Tumhare bina sab bekar lagta hai 💔",
  "Tum meri duniya ho 🌍",
];

export default function LoveReasons() {
  return (
    <div className="py-24 text-center">
      <h2 className="text-4xl font-bold text-rose-500 mb-12">
        Why You Mean Everything 💖
      </h2>

      <div className="grid md:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="glass p-6 text-lg"
            whileHover={{ scale: 1.08 }}
          >
            {reason}
          </motion.div>
        ))}
      </div>
    </div>
  );
}