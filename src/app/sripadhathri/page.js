"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SapthaSailjaPage() {
  const images = [
    "/sripadhathri/bakthahanuman.jpg",
    "/sripadhathri/05.jpg",
    "/sripadhathri/07.jpg",
    "/sripadhathri/08.jpg",
    "/sripadhathri/11.jpg",
    "/sripadhathri/09.jpg",
    "/sripadhathri/12lakshminarasimhar.jpg",
    "/sripadhathri/13andal.jpg",
    "/sripadhathri/14perumal.jpg",
    "/sripadhathri/15.jpg",
    "/sripadhathri/22.jpg",
    "/sripadhathri/17.jpg",
    "/sripadhathri/18.jpg",
    "/sripadhathri/19.jpg",
    "/sripadhathri/16.jpg",
    "/sripadhathri/hanuman2.jpg",
    "/sripadhathri/20.jpg",
    "/sripadhathri/garudar.jpg",
  ];

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: "url('sripadhathri/00.JPG')" }}
    >
      {/* Dark overlay div */}
      <div className="absolute inset-0 bg-yellow-200/80"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-amber-900 mb-4  [text-shadow:_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]
          drop-shadow-lg"
          >
            Sri Sri Padhathri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl text-amber-900/80 max-w-2xl mx-auto [text-shadow:_-1px_-1px_0_white,_1px_-1px_0_white,_-1px_1px_0_white,_1px_1px_0_white]
          drop-shadow-lg"
          >
            Saptha Sailaja Madhya Peedam
          </motion.p>
        </div>

        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-yellow-900/80 rounded-xl p-6 shadow-lg border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
            The Sacred Vow Fulfilled
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
              <div className="relative h-160 md:h-140 w-full rounded-lg overflow-hidden mb-2">
                <Image
                  src="/sripadhathri/01deviperumal.jpg"
                  alt="Devi receiving divine mandate in heavenly realms"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white text-center px-4 text-sm md:text-base">
                The Celestial Promise: <br />
                Lord Sriman Narayanan vows His divine accompaniment to Devi
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
              <div className="relative h-160 md:h-140 w-full rounded-lg overflow-hidden mb-2">
                <Image
                  src="/sripadhathri/02deviperumal.JPG"
                  alt="Divine manifestation at Thiruvadisoolam"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white text-center px-4 text-sm md:text-base">
                The Divine Fulfillment: <br />
                Sri Vaaru Venkatesa Perumal manifests <br />
                amidst the seven at Thiruvadisoolam
              </p>
            </motion.div>
          </div>

          <div className="bg-yellow-800/70 p-6 rounded-lg border border-white/5">
            <p className="text-white text-lg leading-relaxed">
              As promised, Lord Sriman Narayanan has magnificently fulfilled His
              divine vow by manifesting as{" "}
              <span className="font-semibold">Sri Vaaru Venkatesa Perumal</span>
              in the sacred kshetra of Thiruvadisoolam. Enshrined amidst seven
              majestic hills, this kshetra{" "}
              <span className="italic"> Saptha Sailaja Madhya Peedam </span>
              stands as the spiritual axis where the divine promise materialized
              in its full glory.
            </p>

            <p className="text-white mt-4 text-lg leading-relaxed">
              Here, the Lord in His most benevolent form showers infinite grace
              upon devotees, just as He pledged to Devi Karumaari before Her
              earthly descent. The very hills that cradle His sanctum resonate
              with the fulfillment of that ancient covenant - where the Supreme
              Mother's chosen abode is eternally graced by the living presence
              of the Lord in His{" "}
              <span className="font-semibold">Aachaavathara</span> forms,
              blessing all who seek refuge at this powerful junction of divine
              energies. This sacred kshethra is reverently known as Sri Sri
              Padhathri!
            </p>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-yellow-900/80 rounded-xl p-6 shadow-lg border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center py-4">
            Saptha Sailaja Sri Vaaru Venkatesa Perumal, Sri Sri Padhathri
          </h2>

          <motion.div whileHover={{ scale: 1.01 }} className="mb-8">
            <div className="relative h-400 w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/sripadhathri/03perumal.jpg"
                alt="Main temple image"
                fill
                className="object-cover"
              />{" "}
            </div>
          </motion.div>

          <div className="bg-yellow-800/70 p-6 rounded-lg border text-2xl border-white/5 text-center">
            <p className="text-white">Govindha! Govindha! Om Namo Narayana!</p>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-yellow-900/80 rounded-xl p-6 shadow-lg border border-white/10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 py-5 text-center">
            108 divyadesams at Thiruvadisoolam
          </h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative h-164 w-full rounded-lg overflow-hidden">
              <Image
                src="/sripadhathri/04.JPG"
                alt="Gallery key image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <div className="bg-yellow-800/70 p-6 rounded-lg border border-white/5">
            <p className="text-white">
              A distinctive aspect of this revered temple is the remarkable
              presence of 108 Divya Desams surrounding the Saptha Sailaja Madhya
              Peedam dedicated to Lord Shriman Narayanan, known as Lord Sri Varu
              Venkatesa Perumal, who graciously bestows blessings upon all.
            </p>
            <p className="text-white">
              Each of the 108 Divya Desams associated with Lord Shriman
              Narayanan features its own shrine. Currently, 106 of these Divya
              Desams have been consecrated and are being worshipped. The 107th
              Divya Desam, Thiruparkadal, is symbolically represented by
              Saligrams, while the 108th Divya Desam, Sree Vaikundam, is
              depicted through a mural, which is still under construction. It is
              noteworthy that this temple is the first of its kind globally to
              house all 108 Divya Desams in a single locale.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative h-96 w-full">
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
