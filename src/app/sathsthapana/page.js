"use client";

import { motion } from "framer-motion";

// Shimmer animation keyframes (Tailwind doesn't support keyframes directly in classNames)
const shimmerStyle = {
  background: `linear-gradient(90deg, #e0e0e0 25%, #f8f8f8 50%, #e0e0e0 75%)`,
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
};

const shimmerKeyframes = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

const items = ["Shiva", "Vishnu", "Lakshmi", "Durga", "Ganesha"];

export default function SathspanaParivaraPage() {
  return (
    <>
      {/* Inject shimmer keyframes */}
      <style>{shimmerKeyframes}</style>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
        <motion.ul
          className="space-y-4 w-full max-w-md"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 text-xl font-semibold text-gray-700 relative overflow-hidden"
            >
              {item}

              {/* Shimmer overlay for loading effect */}
              <div
                className="absolute inset-0 opacity-40 rounded-xl"
                style={shimmerStyle}
              ></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}
