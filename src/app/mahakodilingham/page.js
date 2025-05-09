"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MahakodilinghamPage() {
  return (
    <div className="bg-stone-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-amber-800 mb-4"
        >
          Mahakodilingam
        </motion.h1>
        <p className="text-2xl text-stone-700 max-w-3xl mx-auto">
          The sacred journey through time
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="space-y-20 md:space-y-32">
        {" "}
        {/* Increased spacing */}
        {/* PAST */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="relative h-[70vh] min-h-[800px] w-full rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/mahakodilingham/01then.JPG"
              alt="Ancient Mahakodilingham"
              fill
              className="object-cover grayscale-[10%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              The Sacred Past
            </h2>
            <p className="text-xl text-stone-700 leading-relaxed">
              In this exalted realm, Devi manifests as Viswaroopini Devi Sri
              Karumaari Amman — the embodiment of Supreme Grace and Light — a
              timeless presence that transcends all confines.
            </p>
          </div>
        </motion.section>
        {/* PRESENT */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="relative h-[70vh] min-h-[800px] w-full rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/mahakodilingham/02now.jpg"
              alt="Current Mahakodilingham"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              The Living Present
            </h2>
            <p className="text-xl text-stone-700 leading-relaxed">
              By the Divine Mother&apos;s command, a radiant Jyothi form of Her
              consort, Lord Shiva — the embodiment of Supreme Consciousness —
              shall be established above Her sanctified presence, manifesting as
              a towering Shivalingam crafted to radiate divine grace.
            </p>
          </div>
        </motion.section>
        {/* FUTURE */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 pb-20"
        >
          <div className="relative h-[70vh] min-h-[800px] w-full rounded-2xl overflow-hidden shadow-xl mb-8">
            <Image
              src="/mahakodilingham/03future.jpeg"
              alt="Future Mahakodilingham"
              fill
              className="object-cover brightness-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto  px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">
              The Divine Future
            </h2>
            <p className="text-xl text-stone-700 leading-relaxed">
              The <strong>Kodilingam</strong> will be composed of three
              segments, each symbolizing the divine presences of Lord Brahma,
              Lord Vishnu, and Lord Rudra.
            </p>
            <ul className="list-disc list-inside my-4 text-xl text-stone-700">
              <li className="px-5">
                <strong>Length & Width:</strong> Each measuring 108 ft
              </li>
              <li className="px-5">
                <strong>Height:</strong> 164 ft
              </li>
              <li className="px-5">
                <strong>Crowning Kalash:</strong> A golden dome soaring to 53
                feet at the pinnacle
              </li>
            </ul>
            <p className="text-xl text-stone-700 leading-relaxed">
              From within this magnificent <strong>Mahalingam</strong>, Devi
              will unveil Her sacred form. Upon completion, this will stand as
              the tallest Mahalingam globally.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
