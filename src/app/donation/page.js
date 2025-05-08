"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DonationPage() {
  const [activeTab, setActiveTab] = useState("construction");
  const [constructionActiveImage, setConstructionActiveImage] = useState(0);
  const [annadanamActiveImage, setAnnadanamActiveImage] = useState(0);

  // Sample images - replace with your actual images
  const constructionImages = [
    "/donation/tc1.jpg",
    "/donation/tc2.jpg",
    "/donation/tc3.jpg",
    "/donation/tc4.jpeg",
  ];

  const annadanamImages = [
    "/donation/annadanam1.png",
    "/donation/annadanam2.png",
    "/donation/annadanam3.jpeg",
    "/donation/annadanam3.jpeg",
    "/donation/kho1.png",
    "/donation/kho2.png",
  ];

  // QR codes - replace with your actual QR codes
  const constructionQR = "/donation/temple.jpeg";
  const annadanamQR = "/donation/annadanam.jpeg";

  // Auto slider functionality
  useEffect(() => {
    // Set interval for construction images
    const constructionInterval = setInterval(() => {
      setConstructionActiveImage((current) =>
        current === constructionImages.length - 1 ? 0 : current + 1
      );
    }, 4000); // Change image every 4 seconds

    // Set interval for annadanam images
    const annadanamInterval = setInterval(() => {
      setAnnadanamActiveImage((current) =>
        current === annadanamImages.length - 1 ? 0 : current + 1
      );
    }, 4000); // Change image every 4 seconds

    // Clean up intervals on component unmount
    return () => {
      clearInterval(constructionInterval);
      clearInterval(annadanamInterval);
    };
  }, [constructionImages.length, annadanamImages.length]);

  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/swayambu/bg.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Semi-transparent overlay as a pseudo-element */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
      </div>

      {/* Content container - everything inside remains unaffected by the overlay */}
      <div className="relative z-10 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
              Be a Part of Divine Service – Contribute to Sacred Causes
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Let your contribution become a prayer in stone, a blessing in
              every grain. Together, let’s uplift dharma through service and
              compassion.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("construction")}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === "construction"
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                Temple Construction
              </button>
              <button
                onClick={() => setActiveTab("annadanam")}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === "annadanam"
                    ? "bg-amber-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                Annadanam
              </button>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Temple Construction Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: activeTab === "construction" ? 1 : 0.5,
                x: 0,
              }}
              className={`bg-white bg-opacity-90 rounded-xl shadow-xl p-6 transition-all ${
                activeTab !== "construction"
                  ? "hidden lg:block lg:opacity-50"
                  : ""
              }`}
            >
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                Temple Construction
              </h2>

              {/* Image Slider with Animation */}
              <div className="mb-8">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  {constructionImages.map((img, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: constructionActiveImage === index ? 1 : 0,
                      }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={img}
                        alt={`Temple construction ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center mt-2 space-x-2">
                  {constructionImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setConstructionActiveImage(index)}
                      className={`w-3 h-3 rounded-full ${
                        constructionActiveImage === index
                          ? "bg-amber-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Scan to Donate
                </h3>
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src={constructionQR}
                    alt="Donation QR Code for Temple Construction"
                    width={180}
                    height={180}
                    priority
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                <p className="text-gray-700">
                  Participate in the divine endeavor of constructing the sacred
                  Mahakodilingam and leave a spiritual legacy.
                </p>
                <p className="text-gray-700">
                  After making your donation, please share your transaction
                  details with us via WhatsApp or call at +91 91762 40435, so we
                  can acknowledge your contribution and send you the receipt.
                </p>
              </div>
            </motion.div>

            {/* Annadanam Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: activeTab === "annadanam" ? 1 : 0.5,
                x: 0,
              }}
              className={`bg-white bg-opacity-90 rounded-xl shadow-xl p-6 transition-all ${
                activeTab !== "annadanam" ? "hidden lg:block lg:opacity-50" : ""
              }`}
            >
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                Annadanam & Goshala
              </h2>

              {/* Image Slider with Animation */}
              <div className="mb-8">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  {annadanamImages.map((img, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: annadanamActiveImage === index ? 1 : 0,
                      }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={img}
                        alt={`Annadanam ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center mt-2 space-x-2">
                  {annadanamImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setAnnadanamActiveImage(index)}
                      className={`w-3 h-3 rounded-full ${
                        annadanamActiveImage === index
                          ? "bg-amber-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center mb-6">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Scan to Donate
                </h3>
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src={annadanamQR}
                    alt="Donation QR Code for Annadanam"
                    width={180}
                    height={180}
                    priority
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r">
                <p className="text-gray-700">
                  Support the sacred tradition of feeding devotees and the
                  needy, while also caring for the holy cows that sustain
                  Dharma.
                </p>
                <p className="text-gray-700">
                  After making your donation, please share your transaction
                  details with us via WhatsApp or call at +91 91762 40435, so we
                  can acknowledge your contribution and send you the receipt.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4 text-center mb-6">
          Jai Matha!
        </h1>
      </div>
    </div>
  );
}
