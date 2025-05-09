// devi-puranam/page.js
"use client"; // Ensure for Framer Motion animations

import { motion } from "framer-motion";
import VideoPlayer from "../components/VideoPlayer";

const devalokImages = [
  {
    src: "/devipuranam/scenery1.jpg",
    caption:
      "The Devas appeal to Lord Shiva, seeking protection for humanity in Kali Yuga.",
  },
  {
    src: "/devipuranam/scenery2.jpg",
    caption:
      "The Devas fervently plead to Devi, voicing their fears of Kali Yuga’s darkness.",
  },
  {
    src: "/devipuranam/scenery3.jpg",
    caption:
      "In Her radiant Digambari form, Devi receives the sacred sceptre from Lord Shiva.",
  },
  {
    src: "/devipuranam/scenery4.jpg",
    caption:
      "Bathed in divine grace, Devi is anointed with sacred ash (Sambal) by Lord Shiva Himself.",
  },
  {
    src: "/devipuranam/scenery5.jpg",
    caption:
      "Journeying to Vishnu Loka, Devi secures a sacred vow from Her divine brother, Lord Sri Vishnu.",
  },
  {
    src: "/devipuranam/scenery6.jpg",
    caption:
      "Devi Saraswati and Devi Lakshmi offer Thamboolam, honoring Devi's divine mission.",
  },
  {
    src: "/devipuranam/scenery7.jpg",
    caption:
      "Devi’s celestial journey to Surya Loka to bestow blessings upon the Sun God.",
  },
  {
    src: "/devipuranam/scenery8.jpg",
    caption:
      "Devi’s solemn expedition to Yama Loka, reclaiming divine symbols from Lord Yama.",
  },
  {
    src: "/devipuranam/scenery9.jpg",
    caption:
      "Devi, escorted by seven Saktha Yogis and Saptha Kannis, prepares for Her earthly descent.",
  },
  {
    src: "/devipuranam/scenery10.jpg",
    caption:
      "The glorious descent of Devi, accompanied by Her guardians—Lord Sri Muthuveeraswamy and Lord Sri Kaathavarayaswamy.",
  },
];

const earthScenes = [
  {
    src: "/devipuranam/01.jpg",
    caption:
      "Devi, in the form of a dark serpent, struck the maiden — heralding Her sacred incarnation. (1823)",
  },
  {
    src: "/devipuranam/02.jpg",
    caption:
      "From the funeral pyre, She rose resplendent — the first revelation of Devi Karumaari. (1823)",
  },
  {
    src: "/devipuranam/03.jpg",
    caption:
      "Guided by Her divine will, Sri Paalayakumara Swamigal journeyed to Vada Vedaranyam, the present-day Thiruverkadu.",
  },
  {
    src: "/devipuranam/04.jpg",
    caption:
      "In Thiruverkadu, Devi’s Leela unfolded through: Marulali Sri Thambu Swamigal (1870–1955), Marulali Sri Paramanandham Swamigal (1955–1962), and Marulali Sri Punnyakotti Swamigal (1962–1997).",
  },

  {
    src: "/devipuranam/05.jpg",
    caption:
      "Bestowing Her infinite grace, Devi granted a vision of Her cosmic form to Guha Yogi Sri Maduraimuthu Punnyakotti Swamigal. (1999)",
  },
  {
    src: "/viswaroopam/09.jpg",
    caption:
      "The grand Viswaroopa Darshan: Devi Sri Karumaari revealed Herself, as Swamigal gazed in reverent surrender. (2008)",
  },
];

export default function DeviSriKarumariPage() {
  return (
    <div className="flex flex-col items-center">
      {" "}
      {/* Section 1: Devi's Divine Play */}
      <section className="w-full bg-white bg-[url('/home/bg.png')] bg-cover bg-center py-16 px-4">
        <div className="w-full px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            ✨ The Descent of Aadhi Brahma Nayagi in Kali Yuga ✨
          </h2>
          <p className="mt-2 text-green-700 mb-8 max-w-4xl mx-auto">
            The Aadhi Brahma Nayagi — the Eternal Mother known by Her six divine
            names: Brahmanakanni, Antarakanni, Akayavani, Visalatchi, Kamatchi,
            and Meenatchi — incarnates in the darkest peak of Kali Yuga as Devi
            Karumaari, to protect and uplift the cosmos once again.
          </p>
          <VideoPlayer
            videoId="MG1JlzMTa9E"
            thumbnailUrl="/devipuranam/aadhibhramanayagi.jpg"
            altText="The Descent of Aadhi Brahma Nayagi in Kali Yuga"
          />{" "}
        </div>
        <div className="max-w-5xl mx-auto text-center mt-8">
          <h2 className="text-4xl font-bold mb-8">Devi’s Divine Play</h2>

          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Alarmed by the intensity of Kali Yuga, the Devas, Saints, and
              Yogis sought the guidance of the Supreme Mother. In response, Devi
              Karumaari promised to manifest and protect humanity through Her
              chosen messengers, the Arulalars. Before descending to Earth, She
              received the sacred sceptre from Lord Shiva and embraced the five
              divine roles—creation, protection, destruction, concealment, and
              the bestowal of grace—thus beginning Her holy mission for Kali
              Yuga.
            </p>
            <p>
              Fulfilling Her promise to the Devas, Devi claimed these five roles
              as Her own and sought a sacred vow from Her divine brother, Lord
              Sriman Narayanan. He pledged to manifest His divine presence in
              Her Aadhi Thiruvadi Kshetra (Thiruvadisoolam) after His earthly
              incarnations in Kali Yuga, vowing to stand beside Her in His
              Aachaavathara forms (the Dasa Avatars), blessing all who seek Her
              with infinite grace and prosperity.
            </p>
            <p>
              During Her celestial travels, Devi (Parapaarai) visited Surya Loka
              and chastised Lord Surya for failing to recognize Her Kali Yuga
              incarnation. Moved by His sincere plea for forgiveness, She
              softened and blessed Him with a divine boon—that She would
              manifest Her sacred presence on His day, Sunday, as Devi Maari of
              Kali Yuga.
            </p>
            <p>
              In Her journey to Yamaloka, Devi encountered Lord Yama, who too
              failed to recognize Her divine form cloaked in the darkness of
              Kali Yuga. To humble his pride, She reclaimed the Trishul and the
              Death Rope once entrusted to him. In Her infinite compassion, She
              also bestowed a blessing: that Her devotees would be beyond
              Yama&apos; s reach unless She Herself granted permission.
            </p>
            <p>
              Upon arriving on Earth, Devi incarnated through a celestial maiden
              (Saptha Kanni) in southern Tamil Nadu to help humanity recognize
              Her divine essence. Though initially blessed with prosperity, the
              maiden became entangled in the illusions of Maya, forgetting her
              divine purpose. Her family fell into poverty, and she struggled to
              care for her five children in the humble village of
              Pazhanthandalam. In an act of divine compassion, Devi transformed
              into a black serpent and struck the maiden, leading to her passing
              on a Friday in the Tamil month of Thai.
            </p>
            <p>
              As cremation rites began, Devi appeared in the form of a frail,
              radiant elderly woman. She illuminated the funeral ground with Her
              divine light and removed the maiden’s body. Then, reappearing as a
              celestial maiden glowing with inner brilliance, She manifested
              fully on that Sunday evening—marking the first revelation of Devi
              Karumaari and bestowing upon Herself the sacred name Karumaari.
            </p>
            <p>
              At that very spot, Devi made a powerful vow: &quot;I shall bless
              humanity for twenty-one generations through yogis who meditate and
              worship Me in the Srividhya tradition.&quot; To fulfill this
              promise, She incarnated yogis to walk among mortals. She guided
              Sri Paalaiyakumaran Swamigal to the Sri Ellai Kali Amman Temple
              near the Arulmigu Vedapureeswarar Temple in Vada Thirumaraikadu
              (Thiruverkadu), where She again manifested Her divine presence.
            </p>
            <p>
              Devi then embarked on a divine journey to bless various sacred
              sites. She chose Sri Thambu Swamigal to enact Her divine
              Leela—reviving the deceased daughter of Sri Poovai Vaiyapuri
              Mudalaiyar. To convey Her sacred words (Arul Vakku), Devi
              instructed Sri Thambu Swamigal to establish a Sakthi Peedam, which
              eventually became the renowned Sri Devi Karumaari Devasthanam.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {devalokImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="rounded-xl w-full h-150 object-cover"
                />
                <p className="mt-4 text-gray-800 font-medium">{img.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full px-4 py-16 bg-gradient-to-b from-amber-600 to-amber-800 text-center">
        {/* Video 2 */}
        <h2 className="text-3xl font-bold text-white mt-16">
          🌟 The Devi&apos;s Vow to Incarnate 🌟
        </h2>
        <p className="mt-2 text-white mb-8 max-w-4xl mx-auto">
          Alarmed by the arrival of Kali Yuga, the Devas — led by Indra, the
          Munis, and Yogis — appealed to the Supreme Lord. Guided by the
          Lord&apos;s wisdom, they surrendered unto Mahashakti, the Eternal
          Mother. Appearing in resplendent form, Devi vowed to incarnate and
          reveal Her Viswaroopa during the decline of Dharma in this dark age.
        </p>
        <VideoPlayer
          videoId="-bumfS8eFoU"
          thumbnailUrl="/devipuranam/scenery10.jpg"
          altText="The Devas' Appeal to the Supreme Mother"
        />
      </div>
      {/* Section 2: Devi's Grace on Earth */}
      <section className="w-full bg-gray-100 bg-[url('/home/bg.png')] bg-cover bg-center py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Devi’s Grace on Earth</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {earthScenes.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-4 rounded-xl shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="rounded-lg w-full h-96 object-cover"
                />
                <p className="mt-2 text-gray-700">{img.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Now after Section 2 - your video heading + VideoPlayer */}
      <div className="w-full px-4 py-16 bg-gradient-to-b from-amber-600 to-amber-800 text-center">
        {/* Video 3 */}
        <h2 className="text-3xl font-bold text-white mt-16">
          🌟 The Earthly Incarnation of Devi Sri Karumaari and the Birth of the
          Sacred Peedams 🌟
        </h2>
        <div className="mt-2 text-white mb-8 max-w-4xl mx-auto space-y-4 text-lg">
          <p>
            Upon descending to Earth, Devi incarnated through a celestial maiden
            (Saptha Kanni) in southern Tamil Nadu to reveal Her divine presence
            to humanity. Though initially blessed, the maiden fell into the
            illusions of Maya, leading her family into hardship in the humble
            village of Pazhanthandalam. In an act of compassion, Devi manifested
            as a black serpent, striking the maiden and marking her sacred
            passing on a Friday in the Tamil month of Thai. As funeral rites
            began, Devi appeared as a radiant elderly woman, removed the body,
            and later revealed Herself as a glowing celestial maiden on a Sunday
            evening — thus bestowing Herself the sacred name{" "}
            <strong>Karumaari</strong>.
          </p>
          <p className="italic">
            &quot;I shall bless humanity for twenty-one generations through
            yogis who meditate and worship Me in the Srividhya tradition.&quot;
            To fulfill this vow, Devi incarnated yogis such as{" "}
            <strong>Sri Paalaiyakumaran Swamigal</strong>, guiding him to the
            Sri Ellai Kali Amman Temple in Vada Thirumaraikadu (Thiruverkadu).
            She chose <strong>Sri Thambu Swamigal</strong> to enact Her divine
            Leela — reviving the deceased daughter of a devotee — and
            established the sacred{" "}
            <strong>Sri Devi Karumaari Devasthanam</strong>, where She
            manifested as <strong>Jyothi</strong>, the embodiment of Vaak Shakti
            (divine speech). Through generations of Marulaalars — especially{" "}
            <strong>Sri Paramanandam Swamigal</strong> and{" "}
            <strong>Arul Siddhar Sri Punniyakotti Swamigal</strong> — Devi
            continued Her divine mission:
          </p>
          <ul className="list-disc list-inside text-left pl-8">
            <li>Manifesting Her sacred presence through form</li>
            <li>Offering divine messages through Arul Vakku</li>
          </ul>
          <p>
            Finally, Devi revealed Her eternal abode,{" "}
            <strong>Aadhi Thiruvadi Kshetra</strong>, to Her divine son{" "}
            <strong>
              Devi Guhayogi Sri Sri Punniyakotti Maduraimuthu Swamigal
            </strong>
            , unveiling Her Vishwaroopa as{" "}
            <strong>Akhilandakoti Brahmanda Nayagi</strong> — the Supreme Mother
            of countless universes. From this sacred Kshetra, She continues to
            shower grace, protection, and boundless blessings upon all who seek
            Her.
          </p>
        </div>

        <VideoPlayer
          videoId="TO6S7btlkuI"
          thumbnailUrl="/devipuranam/04.jpg"
          altText="The Earthly Incarnation of Devi Karumaari"
        />
      </div>
    </div>
  );
}
