import { useState } from "react";

export default function VideoPlayer({
  videoId,
  thumbnailUrl,
  altText = "Video Thumbnail",
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // If no custom thumbnail is provided, use YouTube default
  const thumbnail =
    thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="flex justify-center my-16">
      {!isVideoOpen ? (
        <div
          className="relative cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
          <img
            src={thumbnail}
            alt={altText}
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="relative w-full"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
