"use client";

import { useEffect } from "react";

export default function FlowerRain() {
  useEffect(() => {
    const flowerTypes = ["🌹", "🌺", "🌸", "💮", "🌼"];
    const totalFlowers = 50;

    for (let i = 0; i < totalFlowers; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.textContent =
        flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
      flower.style.left = Math.random() * 100 + "%";
      flower.style.animationDuration = 5 + Math.random() * 5 + "s";
      flower.style.animationDelay = Math.random() * 5 + "s";
      flower.style.fontSize = 20 + Math.random() * 20 + "px";

      document.getElementById("flower-section")?.appendChild(flower);
    }

    return () => {
      const container = document.getElementById("flower-section");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #flower-section {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 0;
        }

        .flower {
          position: absolute;
          top: -50px;
          animation: fall linear infinite;
          opacity: 0.8;
        }

        @keyframes fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
