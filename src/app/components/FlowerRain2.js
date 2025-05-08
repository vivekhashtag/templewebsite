"use client";

import { useEffect, useRef } from "react";

export default function FlowerRain2() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const flowerTypes = ["🌸", "🌹", "🌻", "🌼", "🌷", "💮", "🌺", "🥀"];

    const flowers = [];

    for (let i = 0; i < 50; i++) {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.textContent =
        flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
      flower.style.left = Math.random() * 100 + "%";
      flower.style.fontSize = `${20 + Math.random() * 30}px`;
      flower.style.animationDelay = Math.random() * 5 + "s";
      flower.style.animationDuration = 8 + Math.random() * 5 + "s"; // random fall time

      container.appendChild(flower);
      flowers.push(flower);
    }

    return () => {
      flowers.forEach((flower) => container.removeChild(flower));
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 0,
        }}
      />

      <style jsx global>{`
        .flower {
          position: absolute;
          top: -50px;
          animation: fall-sway linear infinite;
        }

        @keyframes fall-sway {
          0% {
            transform: translate(0px, 0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translate(20px, 50vh) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: translate(-20px, 100vh) rotate(360deg);
            opacity: 0.2; /* <--- stay fully visible until they fall off */
          }
        }
      `}</style>
    </>
  );
}
