/* export default function DonationPage() {
  return (
    <div>
      <h1>Donation</h1>
      <p>
        Support the temple and its activities. Payment gateway integration will
        be added here.
      </p>
    </div>
  );
}
/* ExampleComponent.jsx */

"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function FramerDemo() {
  const [showCard, setShowCard] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-[#fefae0] text-[#2a4d23]">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-green-700 origin-left z-50"
      />

      <div className="max-w-screen-md mx-auto py-20 px-4 space-y-10">
        <h1 className="text-4xl font-bold mb-6">Framer Motion Demos</h1>

        {/* Toggle Card */}
        <button
          onClick={() => setShowCard(!showCard)}
          className="px-4 py-2 bg-[#2a4d23] text-white rounded-lg hover:bg-green-900 transition"
        >
          Toggle Animated Card
        </button>

        <AnimatePresence>
          {showCard && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              layout
              className="relative p-6 rounded-2xl shadow-xl bg-gradient-to-br from-white via-white/70 to-white/40 backdrop-blur-xl border border-white/40"
            >
              {/* Shimmer Layer */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer"></div>
              </div>
              <p className="relative z-10 font-medium">
                This is an animated card with shimmer and spring animation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Triggered Box */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6 bg-white rounded-xl shadow-lg border border-green-200"
        >
          <h2 className="text-xl font-semibold mb-2">
            Scroll-triggered animation
          </h2>
          <p>This box animates into view as you scroll down.</p>
        </motion.div>
      </div>

      {/* Tailwind CSS Keyframe for shimmer */}
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
}
