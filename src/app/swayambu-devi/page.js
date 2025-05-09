"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import VideoPlayer from "../components/VideoPlayer";

const photos = [
  { src: "/swayambu/01.jpg", caption: "The discovery of Swayambu Devi" },
  { src: "/swayambu/03.jpg", caption: "The divine first touch" },
  {
    src: "/swayambu/04.jpg",
    caption: "Swamiji carries Swayambu Devi for the first Abishekam",
  },
  {
    src: "/swayambu/06.jpg",
    caption: " The Siva-Sakthi Linga Roopa with the three golden lines ",
  },
  { src: "/swayambu/11.jpg", caption: "Abishekam with Milk" },
  { src: "/swayambu/11b.jpg", caption: "Abishekam with Curd" },
  { src: "/swayambu/10b.jpg", caption: "Abishekam with Panchamirtham" },
  { src: "/swayambu/08.jpg", caption: "Abishekam with Ghee" },
  { src: "/swayambu/10a.jpg", caption: "Abishekam with Ganga Jal" },
  {
    src: "/swayambu/10.jpg",
    caption: "The divine Crown offered to Swayambu Devi",
  },
  {
    src: "/swayambu/12b.jpg",
    caption: "Swayambu Devi with Viswaroopa Devi in the backdrop",
  },
  {
    src: "/swayambu/13.jpg",
    caption: "The first Deepaarathanai to Swayambu Devi",
  },
  {
    src: "/swayambu/14.jpg",
    caption: "Tri Sakthi Regai Swayambu Devi in the Sanctum Sanctorum",
  },
  {
    src: "/swayambu/15bdevi.jpg",
    caption: "Swayambu Devi – Sri Devi Karumaari Amman",
  },
  {
    src: "/swayambu/15devi.jpg",
    caption: "Swayambu Devi – Sri Devi Karumaari Amman",
  },
];

export default function SwayambuDeviPage() {
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <section
        className="relative bg-cover bg-center text-white py-24 px-6"
        style={{ backgroundImage: "url('/swayambu/bg.jpg')" }}
      >
        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Heading */}

          <h1
            className="text-5xl font-bold mb-12 text-white drop-shadow-[2px_2px_2px_#000000] [text-shadow:_-1px_-1px_0_yellow,_1px_-1px_0_yellow,_-1px_1px_0_yellow,_1px_1px_0_yellow]
          drop-shadow-lg"
          >
            Thirupadham
          </h1>

          {/* Sacred Foot Image Block */}
          <div className="relative mx-auto mb-16 w-fit">
            {/* Divine glow */}
            <div className="absolute inset-0 rounded-3xl bg-amber-100 opacity-20 blur-3xl"></div>

            {/* Main Footprint Image */}
            <Image
              src="/swayambu/01Thirupadham.jpeg"
              alt="Divine Footprint of Devi"
              width={600}
              height={800}
              className="relative z-10 rounded-3xl border-8 border-amber-300 shadow-2xl"
            />
          </div>

          {/* Sacred Description */}
          <div className="space-y-6 text-2xl leading-relaxed text-gray-100 px-4">
            <p>
              From time immemorial, the Supreme Mother has existed as Maha
              Sakthi, with neither beginning nor end. She bestowed a divine form
              upon Aadhi Sivan (Lord Shiva), and together, they brought about
              the rebirth of all the worlds. At Her command, the Devas and the
              Trimurthies took charge of these worlds, establishing Her as the
              very first and highest of all that exists.{" "}
              <strong>Thiruvadisoolam</strong> : Where Devi’s Holy Footprints
              Remain Long before the yugas (ages) began, Aadhi Sakthi and Lord
              Shiva created this world, Earth. During that time, She chose a
              special sacred spot for Herself by leaving an impression of{" "}
              <strong>Her Holy Feet</strong> and marking it with Her
              three-leaf-adorned Trishul. In later times, this revered place
              became known as Thiruvadisoolam.
            </p>
            <p>
              To stand before the Thirupadham is to be enveloped in the Divine
              Mother&apos;s boundless love and sacred energy.
            </p>
          </div>
          {/* Video 2   <div className="w-full px-4 py-16  text-center">        </div>*/}
          <VideoPlayer
            videoId="Vj5aUYAjCgs"
            thumbnailUrl="/swayambu/09.jpg"
            altText="Thiruvadisoolam the Land of Divinity!"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="relative bg-cover bg-center text-gray-800 py-20 px-6"
        style={{ backgroundImage: "url('/swayambu/bg.jpg')" }} // second background
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Divine Manifestations of Swayambu Devi
          </h2>

          {/* Grid of Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {photos.map((photo, idx) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                key={idx}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={400}
                  height={500}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 text-center">
                  <p className="text-sm font-medium">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content after photos */}
          <div className="mt-16 space-y-6 text-2xl text-white leading-relaxed">
            <p>
              In a profound display of divine play (Leela), Devi manifested at
              Thiruvadisoolam, revealing Her cosmic form as the guardian of this
              era and affirming Her sacred presence. During the excavation for
              Devi’s sanctum—destined to support the towering Mahalingam—water
              from the hidden Vegavathi River miraculously surged forth, mingled
              with blood. From this sacred phenomenon, Swayambu Devi emerged in
              the form of{" "}
              <strong className="text-amber-400">
                Shiva-Shakti Linga, marked by three golden lines
              </strong>
              . This awe-inspiring vision was witnessed by devoted souls present
              on that significant day, 28th January 2018 (Sunday).
            </p>

            <p>
              This moment became a living testament to Devi’s divine essence—the
              animating life force of all creation. She sanctified this sacred
              ground with Her Holy Feet, blessing it as a powerful spiritual
              epicenter that continues to bestow abundance, prosperity, and
              grace upon all who seek Her.
            </p>
            <p>
              In a similar divine occurrence, Devi Mookambika manifested as
              Swayambu with golden lines for Sri Adi Shankaracharya, along the
              banks of the river Souparnika, bestowing Her grace upon the world.
              Even in today’s times, we continue to witness Devi revealing Her
              eternal presence in the very places sanctified by Her divine
              footprints.
            </p>
            <p>
              Through these manifestations, the Devi&apos;s timeless energy
              continues to guide and protect ! 🙏🙏
            </p>
            <p className="text-center">
              Thaye Saranam! Devi Saranam! Thiruvadiye Saranam! 🙏🙏
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
