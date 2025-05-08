/*export default function ViswaroopaDarshanPage() {
  return (
    <div>
      <h1>Viswaroopa Darshan</h1>
      <p>This is a placeholder content for the Viswaroopa Darshan page.</p>
    </div>
  );
}*/
// Viswaroopam/page.js

"use client";

import { motion } from "framer-motion";
import FlowerRain2 from "../components/FlowerRain2";
import VideoPlayer from "../components/VideoPlayer";

export default function ViswaroopaDarshanPage() {
  const captions = [
    "Swamigal offers a sacred pooja, invoking divine blessings before the excavation (2002)",
    "The sacred Swayambu stone is discovered — a hidden treasure of divinity (2002)",
    "The celestial vision of Devi gracefully unfolds",
    "The glorious shaping of the Viswaroopa Darshan begins",
    "Devi Sri Karumari's Viswaroopa idol is lovingly prepared for her sacred journey (2006)",
    "The divine idol of Viswaroopa Devi is received with devotion and joyous celebration",
    "Viswaroopa Devi steps onto her destined land of divinity — Thiruvadisoolam",
    "The enshrinement of Viswaroopa Devi — a moment of cosmic significance (2008)",
    "The Viswaroopa Darshan manifests — Devi Sri Karumaari stands revealed, as Swamigal offers his reverent gaze.",
    "Vishwaroopa Devi Sri Karumaari Amman stands tall, blessing all with infinite grace and protection",
  ];
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <section className="w-full">
        {/* Video instead of GIF */}
        <video
          src="/viswaroopam/viswaroopam.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover"
        />

        {/* Heading and Paragraphs */}
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Viswaroopa Darshan</h1>
          <p className="mb-4">
            {/* Your paragraph 1 content */}
            At Thiruvadisoolam, the Divine Mother, who had once instructed the
            Devas to quietly meditate in this sacred forest, chose to bless Her
            beloved son, Devi Guha Yogi Sri Sri Punniyakotti Maduraimuthu
            Swamigal, with a rare and divine vision — the Vishwaroopa Darshan
            (cosmic form).
          </p>
          <p className="mb-4">
            {/* Your paragraph 2 content */}
            She first appeared to him as a frail old woman, guiding him gently.
            Then, She transformed into a mystical black serpent (Karu Nagam) and
            disappeared. Right after this, in a blinding flash of light —
            brighter than countless suns — Lord Shiva and Devi Shakti revealed
            themselves in their cosmic form, reminding the world that She is the
            source of all creation. Amid the deep forest, surrounded by seven
            sacred hills, and witnessed by Devas, Rishis, Siddhars, and saints,
            She revealed her true form — Akhilanda Kodi Brahmanda Nayagi, the
            Supreme Mother of all universes. Merging with Lord Shiva, She showed
            that She holds the combined power of all 51 Shakthi Peedams within
            Herself. Fulfilling Her promise to the Devas, She manifested as
            Kaliyuga Nayagi Karumari, the guiding force for humanity in this
            age. She then lovingly instructed Her son, Sri Swamigal, to create a
            sacred idol (Moorthy) of Her Vishwaroopa form, so that all devotees
            could receive Her grace and feel Her divine presence even today.
          </p>
          {/* Add more paragraphs if you have */}
        </div>
      </section>
      {/* Section 2 */}

      <section className="relative  bg-gradient-to-b from-yellow-100 to-yellow-200 py-16">
        <FlowerRain2 />
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pradhishta of Devi Karumari’s Sacred Moorthy (Vishwaroopa Darshan)
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-16 text-gray-700 leading-relaxed space-y-6">
            <p>
              When the Divine Mother gave her cosmic vision (Vishwaroopa
              Darshan) to Devi Guha Yogi Sri Sri Punniyakoti Maduraimuthu
              Swamigal, he was unsure how to create a Moorthy (idol) that could
              match the grandeur of what he had seen — a form taller than all
              Devas.
            </p>
            <p>
              Sensing his hesitation, Devi lovingly reassured him:
              <br />
              <em>
                “I have shown you this vision to remove the suffering of the
                world. Create a Moorthy of My sacred form. Through it, I will
                bless people with peace and prosperity. I will also show you the
                special self-manifested (Swayambu) rock I’ve prepared for this
                purpose.”
              </em>
            </p>
            <p>
              She then guided Sri Swamigal to a spot where an eagle (Garuda)
              would circle in the sky. There, he would find a Trishul (Trident)
              and sacred stone (Thirukal). If he dug deep at that place, he
              would discover the rock meant for Her Moorthy.
            </p>
            <p>
              Even though the area looked like plain farmland, a devoted
              geologist, Mr. Aathur Thiru Palaniswami, trusted Devi’s words. At
              a depth of 22 feet, a team using powerful machinery discovered an
              extraordinary rock — 56 feet tall, 30 feet wide, and 20 feet deep.
              Miraculously, it looked like a woman with long hair lying on her
              side. No other rocks were found above or below it.
            </p>
            <p>
              This sacred place was once a cremation ground, just like the one
              where Devi appeared in Konavadai, Pattachikavur Village, near
              Thirumukudal in Kanchipuram District. It took nearly five years
              (2002–2007) to fully uncover this massive rock.
            </p>
            <p>
              Finally, under Devi’s divine guidance, the Pradhishta
              (enshrinement) of the Vishwaroopa Moorthy took place on September
              11, 2008 (26th day of Tamil month Avani, Thiruvonam Nakshatram,
              Dwadashi Tithi, Suklapaksham, Siddha Yogam) at Thiruvadisoolam,
              performed by Sri Swamigal himself.
            </p>
          </div>

          <div className="relative">
            {/*<FlowerRain2 /> */}
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

            <div className="flex flex-col space-y-16">
              {Array.from({ length: 10 }, (_, index) => {
                const imgNum = String(index + 1).padStart(2, "0");
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center ${
                      isLeft ? "md:flex-row-reverse" : ""
                    } relative`}
                  >
                    <div className="md:w-1/2 p-6 relative">
                      <FlowerRain2 />
                      <img
                        src={`/viswaroopam/${imgNum}.jpg`}
                        alt={`Viswaroopa Darshan Image ${index + 1}`}
                        className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                      />
                    </div>

                    <div className="md:w-1/2 p-6 text-center md:text-left">
                      <FlowerRain2 />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-block bg-gradient-to-r from-yellow-400 to-amber-400 text-white !important px-6 py-4 rounded-2xl shadow-xl"
                      >
                        <h3 className="text-2xl md:text-4xl font-extrabold tracking-wide">
                          {captions[index]}
                        </h3>
                      </motion.div>
                    </div>

                    {/* Dot in center */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 border-4 border-white rounded-full z-10"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Now after Section 2 - your video heading + VideoPlayer */}
      <div className="w-full px-4 py-16 bg-amber-600 text-center">
        <h2 className="text-3xl font-bold !text-white">
          Experience the Divine Journey of Enshrinement of Viswaroopa Devi Sri
          Karumaari Amman
        </h2>
        <p className="mt-2 !text-white mb-8">Click below to watch the video</p>

        <VideoPlayer
          videoId="M-xWCu1RhWo"
          thumbnailUrl="/home/02Viswaroopam.jpg"
          altText="Viswaroopa Darshan and Pradhishta of Sri Devi Karumariamman Idol"
        />
      </div>
    </div>
  );
}
