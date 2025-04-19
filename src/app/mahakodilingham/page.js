import { motion } from "framer-motion";
import Image from "next/image";
import CoverVideo from "../../components/CoverVideo";
import ContentBlock from "../../components/ContentBlock";

// Animation configurations
const titleAnimation = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.3,
    },
  },
};

const subtitleAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.7 },
  },
};

const paragraphAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      type: "spring",
      damping: 12,
    },
  }),
};

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function MahakodilinghamPage() {
  return (
    <div className="space-y-12">
      <CoverVideo />

      {/* Animated Thiruvadisoolam Section */}
      <motion.section
        className="max-w-5xl mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
      >
        <motion.h1
          className="text-4xl font-extrabold text-center mb-4 text-brown-700"
          variants={titleAnimation}
        >
          Thiruvadisoolam – Where the Divine Mother First Placed Her Feet!
          <motion.span
            className="block text-2xl font-normal mt-2"
            variants={subtitleAnimation}
          >
            The Sacred Footprints of Divinity
          </motion.span>
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.03 } },
          }}
        >
          {[
            "From time immemorial, the Supreme Mother has existed as Maha Shakti — the eternal divine force without beginning or end. In her infinite grace, she gave form to Aadhi Sivan (Lord Shiva), and together, they set into motion the rebirth of all the worlds.",
            "At Her divine command, the Devas and the Trimurthis — Brahma, Vishnu, and Shiva — took up their roles in shaping and preserving creation. She became the first and foremost, the source of all existence, and the supreme force behind the universe.",
          ].map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-lg text-gray-700 leading-relaxed mb-6"
              variants={paragraphAnimation}
              custom={i}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="relative my-8 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="text-2xl font-bold mt-6 mb-4 text-brown-600"
            whileHover={{
              scale: 1.02,
              textShadow: "0 2px 4px rgba(139,87,42,0.1)",
            }}
          >
            A Sacred Beginning
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Long before the yugas (cosmic ages) began, when creation was still
            young, Aadhi Shakti and Lord Shiva manifested the Earth. During that
            sacred time, the Divine Mother chose a special, untouched piece of
            land to anchor Her energy. There, she gently placed Her Holy Feet,
            sanctifying the soil for eternity. To mark this powerful moment, She
            planted Her three-leaf-adorned Trishul (Trident) into the earth — a
            symbol of divine presence, protection, and power. Over time, this
            sacred space came to be known as Thiruvadisoolam — a place where the
            Divine Mother's footprints remain, radiating energy, love, and
            blessings to all who step onto this hallowed ground.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Animated Content Blocks */}
      {[
        {
          heading: "Viswaroopa Darshan",
          image: "/home/02Viswaroopam.jpg",
          text: "Thiruvadisoolam's Viswaroopa Darshan is an unparalleled experience...",
        },
        // ... (other content blocks)
      ].map((item, index) => (
        <motion.section
          key={index}
          className="max-w-5xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <ContentBlock {...item} />
        </motion.section>
      ))}
    </div>
  );
}
