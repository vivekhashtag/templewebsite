"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TemplePlanPage() {
  // Define all image paths as constants
  const sathsthapanaImages = [
    "/sathsthapana/1.jpeg",
    "/sathsthapana/2.jpeg",
    "/sathsthapana/3.jpeg",
  ];

  const nagaDeitiesImages = {
    bg: "/sathsthapana/04a.jpg",
    main: "/sathsthapana/04.jpg",
  };

  const mathikaDeities = [
    {
      name: "Devi Shree Vishnu Vana Durga",
      img: "/sathsthapana/05.jpg",
    },
    {
      name: "Devi Mandira Shree Varahi Amman",
      img: "/sathsthapana/07.jpg",
    },
    {
      name: "Devi Shree Prathyangira",
      img: "/sathsthapana/08.jpg",
    },
    {
      name: "Devi Shree Raja Mathangi",
      img: "/sathsthapana/06.jpg",
    },
  ];

  const parivaraDeity = {
    img: "/sathsthapana/09.jpg",
    name: "Lord Varka Nivarhti Kala Bhairavar",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-amber-800 mb-4"
        >
          Sathsthapana
        </motion.h1>
        <p className="text-xl text-stone-700 max-w-3xl mx-auto"></p>
      </div>

      {/* Section 1: Sathsthapana */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-24"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-amber-200">
          <div className="bg-amber-700 p-6">
            <h2 className="text-3xl font-bold text-amber-50 text-center">
              The sacred confluence (Sangamam) of Hinduism's six primary forms
              of worship at Thiruvadisoolam
            </h2>
          </div>

          {/* Three Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8">
            {sathsthapanaImages.map((src, index) => (
              <div
                key={index}
                className="relative h-96 rounded-xl overflow-hidden border border-amber-300 shadow-md"
              >
                <Image
                  src={src}
                  alt={`Sathsthapana ceremony ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
              </div>
            ))}
          </div>

          <div className="p-8">
            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              The sacred
              <span className="font-semibold text-amber-700">
                {" "}
                Sathsthapana{" "}
              </span>
              aspect unifies the six fundamental forms of Sanatana Dharma
              worship at one divine location, as prescribed by Aadhi Sankara,
              along with the worship of the Pancha Moorthis of Marulalars of
              Devi Sri Karumaari Amman.
            </p>

            <div className="bg-amber-50/50 p-4 rounded-lg border-l-4 border-amber-400 mb-6">
              <h4 className="font-semibold text-amber-800 mb-3 text-lg">
                The Six Forms of Worship:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="font-medium text-stone-800">
                    Saktham - Worship of Sri Devi
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="font-medium text-stone-800">
                    Saivam - Worship of Lord Shiva{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="font-medium text-stone-800">
                    Vaishnavam - Worship of Lord MahaVishnu
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="font-medium text-stone-800">
                    Ganapathyam - Worship of Lord Sri Ganesh{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="font-medium text-stone-800">
                    Kaumaram - Worship of Lord Sri Muruga{" "}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="font-medium text-stone-800">
                    Sauram - Worship of Lord Sri Surya{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <p className="text-lg text-amber-800 font-medium mb-4">
                Plans are underway for the construction of four new temples
                surrounding the Kodi Lingam:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 text-xl">•</span>
                  <span className="font-semibold text-amber-700">
                    Lord Ganapathi at southwest Nairutya Konam
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 text-xl">•</span>
                  <span className="font-semibold text-amber-700">
                    Lord Muruga at northwest Vayu Konam
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 text-xl">•</span>
                  <span className="font-semibold text-amber-700">
                    Lord Surya at southeast Agni Konam
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 text-xl">•</span>
                  <span className="font-semibold text-amber-700">
                    Pancha Moorthis at northeast Ishanaya Konam
                  </span>
                </li>
              </ul>
              <p className="text-lg text-amber-800 mt-4">
                Each temple will feature an 80-foot Vimana, with construction of
                the Raja Gopuram and Gosala currently in progress.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2: Naga Deities */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-24"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-amber-200">
          <div className="bg-amber-700 p-6">
            <h2 className="text-3xl font-bold text-amber-50 text-center">
              Naga Deities
            </h2>
          </div>

          <div className="flex flex-col items-center p-8">
            <h2 className="text-3xl font-bold text-amber-800 text-center my-8">
              Sri Devi Sarva Kariyanaaga Swaroopini
            </h2>

            {/* Centered Main Image */}
            <div className="relative w-full max-w-2xl h-[900px] rounded-xl overflow-hidden border-2 border-amber-300 shadow-lg mb-8">
              <Image
                src={nagaDeitiesImages.main}
                alt="Sri Devi Sarva Kariyanaaga Swaroopini"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
            </div>

            <div className="max-w-4xl text-center">
              <p className="text-lg text-stone-700 leading-relaxed">
                In ancient times, worship focused mainly on Naga Deities. Only
                after the 13th century did Navagraha worship emerge. Aadhi
                Sheshan reigns as king of all nagas, while Devi adorns Aadhi
                Sheshan on Her forehead .<br></br> At Badrinath, Devi Sri
                Karumaari revealed a divine swaroop to Devi Aga Guha Yogi
                Punniyakotti Maduraimuthu Swamigal - a form entirely composed of
                nagas (serpents). This sacred vision was then manifested as a
                murti for devotees' worship, demonstrating that true surrender
                to Devi ensures she guides our destiny. This is the only place
                in creation where Devi manifests fully in naga form, radiating
                grace and blessings. Devotees of all faiths worship here,
                seeking her guidance for peaceful lives. Unlike temples offering
                pariharams (remedies), here Devi grants complete nivarthi
                (liberation) by absorbing the karma of those who surrender
                wholeheartedly.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                The year 2016 saw the grand consecration (Maha Samprokshanam) of
                Devi Sri Sarva Kariyanaaga Swaroopini!
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Surrounding the main sanctum of Devi Karingamaari are eight
                divine Naga deities who serve as celestial protectors:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  "Sangan",
                  "Kuligan",
                  "Ananthan",
                  "Vasuki",
                  "Dhakshan",
                  "Karkodagan",
                  "Padman",
                  "Mahapadman",
                ].map((naga) => (
                  <div
                    key={naga}
                    className="bg-amber-50 p-3 rounded-lg border border-amber-200"
                  >
                    <p className="font-medium text-amber-800">{naga}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-stone-700 leading-relaxed">
                These sacred serpent deities are accompanied by the celestial
                figures of Rahu and Ketu, completing the cosmic protection
                around the sanctum.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Mathika Deities */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-24"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-amber-200">
          <div className="bg-amber-700 p-6">
            <h2 className="text-3xl font-bold text-amber-50 text-center">
              Mathika Deities
            </h2>
          </div>

          <div className="p-8">
            <p className="text-lg text-stone-700 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              The temple complex honors the powerful Mathika deities, each
              representing distinct aspects of the Divine Mother's energy and
              protection:
            </p>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {mathikaDeities.map((deity, index) => (
                <div key={index} className="group">
                  <div className="relative h-160 rounded-xl overflow-hidden border-2 border-amber-300 shadow-md">
                    <Image
                      src={deity.img}
                      alt={deity.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
                  </div>
                  <div className="mt-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <p className="text-center font-semibold text-amber-800 text-lg">
                      {deity.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 max-w-4xl mx-auto">
              <p className="text-lg text-amber-800 text-center">
                These fierce yet benevolent forms of the Goddess provide
                specialized protection against negative energies while blessing
                devotees with courage and spiritual power.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 4: Parivara Deity */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 mb-24"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-amber-200">
          <div className="bg-amber-700 p-6">
            <h2 className="text-3xl font-bold text-amber-50 text-center">
              Parivara Deity
            </h2>
          </div>

          <div className="flex flex-col items-center p-8">
            <div className="max-w-3xl text-center mb-8">
              <p className="text-xl text-stone-700 leading-relaxed">
                The revered{" "}
                <span className="font-semibold text-amber-700">
                  Lord Varka Nivarhti Kala Bhairavar
                </span>{" "}
                graces the temple grounds as the primary parivara deity,
                embodying the protective aspect of Lord Shiva.
              </p>
            </div>

            {/* Centered Main Image */}
            <div className="relative w-full max-w-2xl h-[500px] rounded-xl overflow-hidden border-2 border-amber-300 shadow-lg">
              <Image
                src={parivaraDeity.img}
                alt={parivaraDeity.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
            </div>

            <div className="mt-8 max-w-2xl text-center">
              <p className="text-lg text-stone-700 leading-relaxed">
                This formidable yet benevolent form of Bhairavar specially
                manifests to remove obstacles, destroy negative energies,
                ensures the way for a peaceful life.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
