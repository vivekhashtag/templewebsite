"use client";
import { useRef, useState } from "react";
export default function CoverVideo() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  return (
    <div className="relative w-full h-auto">
      <video
        ref={videoRef}
        src="/home/headervideo.mp4"
        autoPlay
        muted={muted}
        loop
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-4 left-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
        <button
          onClick={toggleMute}
          className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded shadow"
        >
          {muted ? "Unmute Mantra" : "Mute Mantra"}
        </button>
        <a
          href="/home/mantra.mpeg"
          download
          className="bg-green-500 text-white px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded shadow"
        >
          Download Mantra
        </a>
      </div>
    </div>
  );
}
