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
      <div className="absolute bottom-4 left-4 flex gap-4">
        <button
          onClick={toggleMute}
          className="bg-white text-black px-4 py-2 rounded shadow"
        >
          {muted ? "Unmute Mantra" : "Mute Mantra"}
        </button>
        <a
          href="/home/mantra.mpeg"
          download
          className="bg-green-500 text-white px-4 py-2 rounded shadow"
        >
          Download Mantra
        </a>
      </div>
    </div>
  );
}
