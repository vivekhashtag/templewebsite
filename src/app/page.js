import Image from "next/image";
import CoverVideo from "./components/CoverVideo";
import ContentBlock from "./components/ContentBlock";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <CoverVideo />

      <section className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-brown-700">
          Thiruvadisoolam – Where the Divine Mother First Placed Her Feet!
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          From time immemorial, the Supreme Mother has existed as Maha Shakti —
          the eternal divine force without beginning or end. In her infinite
          grace, she gave form to Aadhi Sivan (Lord Shiva), and together, they
          set into motion the rebirth of all the worlds. At Her divine command,
          the Devas and the Trimurthis — Brahma, Vishnu, and Shiva — took up
          their roles in shaping and preserving creation. She became the first
          and foremost, the source of all existence, and the supreme force
          behind the universe.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4 text-brown-600">
          A Sacred Beginning
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
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
        </p>
      </section>

      {/* Seven sections */}
      {[
        {
          heading: "Viswaroopa Darshan",
          image: "/home/02Viswaroopam.jpg",
          text: "Thiruvadisoolam’s Viswaroopa Darshan is an unparalleled experience...",
        },
        {
          heading: "Devi Sri Karumari",
          image: "/home/03predistha.jpg",
          text: "The Pradhishta ceremony of Devi Karumari’s sacred moorthy...",
        },
        {
          heading: "Devi’s Divine Play",
          image: "/home/04divineplay.jpg",
          text: "The goddess’s divine play, or ‘Leela,’ unfolds in countless forms...",
        },
        {
          heading: "Swayambu Devi",
          image: "/home/05swayambu.jpg",
          text: "In the sacred temple of Thiruvadisoolam, the Swayambu Devi manifests...",
        },
        {
          heading: "MahaKodilingam",
          image: "/home/06kodilingam.jpg",
          text: "MahaKodilingam is a central feature of the temple that holds immense spiritual significance...",
        },
        {
          heading: "Saptha Sailja Madhya Peedam",
          image: "/home/07perumal.jpg",
          text: "Thiruvadisoolam is a unique temple that stands as the first to house 108 Divya Desams...",
        },
        {
          heading: "Sathspana and Temple Deities",
          image: "/home/07perumal.jpg",
          text: "Sathspana refers to the divine circle of protection that envelopes the temple...",
        },
      ].map((item, index) => (
        <section key={index} className="max-w-5xl mx-auto px-4">
          <ContentBlock {...item} />
        </section>
      ))}
    </div>
  );
}
