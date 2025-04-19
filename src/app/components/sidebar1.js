"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

// Shimmer animation keyframes (Tailwind doesn't support keyframes directly in classNames)
const shimmerStyle = {
  background: `linear-gradient(90deg, #defaaa 25%, #d5eb34 50%, #defaaa 75%)`,
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
};

const shimmerKeyframes = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Viswaroopa Darshan", path: "/viswaroopa-darshan" },
  { name: "Devi Puranam", path: "/devi-puranam" },
  { name: "Swayambu Devi", path: "/swayambu-devi" },
  { name: "SriPadhathri", path: "/sripadhathri" },
  { name: "MahaKodiLingam", path: "/mahakodilingham" },
  { name: "Sathsthapana", path: "/sathsthapana" },
  { name: "Temple Info", path: "/temple-info" },
  { name: "Donation", path: "/donation" },
  { name: "Contact Us", path: "/contact-us" },
];

const sidebarVariants = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
  exit: { x: -300, opacity: 0 },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Inject shimmer keyframes */}
      <style>{shimmerKeyframes}</style>

      {/* Floating Button */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-white/40 backdrop-blur-md hover:opacity-90 shadow-xl border border-white/30"
          aria-label="Toggle Menu"
        >
          <Menu className="text-[#2a4d23]" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed background */}
            <motion.div
              className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
              onClick={toggleSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 left-0 h-full w-72 z-50 p-6 text-[#2a4d23]
                         rounded-r-3xl shadow-2xl backdrop-blur-2xl
                         bg-gradient-to-br from-white/60 to-white/30
                         border-r border-white/40
                         overflow-y-auto custom-scroll"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleSidebar}
                  aria-label="Close Sidebar"
                  className="text-[#2a4d23] hover:text-red-500 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.03, // Subtle scale
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      transition: {
                        type: "spring",
                        stiffness: 180,
                        damping: 22,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                    exit={{ scale: 1, opacity: 1 }} // Reset effect after hover
                  >
                    <Link
                      href={item.path}
                      className="block px-4 py-2 rounded-xl text-[#2a4d23] font-medium 
                                 hover:bg-[#2a4d23] hover:text-white transition duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}

                      {/* Shimmering effect for loading */}
                      <div
                        className="absolute inset-0 opacity-40 rounded-xl"
                        style={shimmerStyle}
                      ></div>

                      {/* Arrow animation that appears only on hover */}
                      <motion.span
                        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 12,
                        }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.aside>

            {/* Custom Scrollbar with Flashing Effects */}
            <style jsx>{`
              .custom-scroll::-webkit-scrollbar {
                width: 18px;
                background-color: transparent;
              }

              .custom-scroll::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(10px);
                border-radius: 25px;
                box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
              }

              .custom-scroll::-webkit-scrollbar-thumb {
                background: linear-gradient(45deg, #ffcc00, #8bd13f);
                border-radius: 25px;
                border: 4px solid rgba(255, 255, 255, 0.4);
                box-shadow: 0 0 15px rgba(255, 165, 0, 0.6);
                transition: background 0.4s ease-in-out, box-shadow 0.3s ease;
              }

              .custom-scroll::-webkit-scrollbar-thumb:hover {
                background: linear-gradient(45deg, #8bd13f, #ff8c00);
                box-shadow: 0 0 20px rgba(255, 165, 0, 0.8);
              }

              /* Shimmering effect while scrolling */
              .custom-scroll::-webkit-scrollbar-thumb::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #ffcc00, #8bd13f, #ff8c00);
                background-size: 300% 100%;
                animation: shimmerEffect 1.5s infinite linear;
              }

              @keyframes shimmerEffect {
                0% {
                  background-position: 300% 0;
                }
                100% {
                  background-position: -300% 0;
                }
              }
            `}</style>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
