"use client";

import Image from "next/image";
import CoverVideo from "./components/CoverVideo";
import ContentBlock from "./components/ContentBlock";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <CoverVideo />
      {/*
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
      </section> */}
      {/* 
      <motion.section
        className="max-w-5xl mx-auto p-6 md:p-10 rounded-2xl bg-white/80 shadow-xl backdrop-blur-sm border border-white/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >*/}
      {/*
      <motion.section
        className="max-w-5xl mx-auto p-6 md:p-10 rounded-2xl bg-white/80 shadow-lg backdrop-blur-sm border border-white/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          zIndex: 10, // Ensures the section stays on top of background elements
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow to elevate it
        }}
      > */}
      <motion.section
        className="relative max-w-5xl mx-auto p-6 md:p-10 rounded-2xl text-white shadow-lg backdrop-blur-sm border border-white/50 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          zIndex: 10,
          backgroundImage: `url('/home/bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 rounded-2xl z-0" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-yellow-200 drop-shadow-lg">
            Thiruvadisoolam – Where the Divine Mother First Placed Her Feet!
          </h1>

          <p className="text-lg text-white leading-relaxed mb-6 first-letter:text-4xl first-letter:font-bold first-letter:inline-block first-letter:align-baseline first-letter:mr-0">
            From time immemorial, the Supreme Mother has existed as Maha Shakti
            — the eternal divine force without beginning or end. In her infinite
            grace, she gave form to Aadhi Sivan (Lord Shiva), and together, they
            set into motion the rebirth of all the worlds. At Her divine
            command, the Devas and the Trimurthis — Brahma, Vishnu, and Shiva —
            took up their roles in shaping and preserving creation. She became
            the first and foremost, the source of all existence, and the supreme
            force behind the universe.
          </p>

          <h2 className="text-2xl font-bold mt-6 mb-4 text-yellow-200">
            A Sacred Beginning
          </h2>

          <p className="text-lg text-white leading-relaxed mb-6 first-letter:text-4xl first-letter:font-bold first-letter:inline-block first-letter:align-baseline first-letter:mr-0">
            Long before the yugas (cosmic ages) began, when creation was still
            young, Aadhi Shakti and Lord Shiva manifested the Earth. During that
            sacred time, the Divine Mother chose a special, untouched piece of
            land to anchor Her energy. There, she gently placed Her Holy Feet,
            sanctifying the soil for eternity. To mark this powerful moment, She
            planted Her three-leaf-adorned Trishul (Trident) into the earth — a
            symbol of divine presence, protection, and power. Over time, this
            sacred space came to be known as Thiruvadisoolam — a place where the
            Divine Mother&apos;s footprints remain, radiating energy, love, and
            blessings to all who step onto this hallowed ground.
          </p>
        </div>
      </motion.section>

      {/* Seven sections */}
      {[
        {
          heading: "Viswaroopa Darshan",
          image: "/home/02Viswaroopam.jpg",
          children: (
            <>
              <p className="mb-4">
                At Thiruvadisoolam, the Divine Mother, who had once instructed
                the Devas to quietly meditate in this sacred forest, chose to
                bless Her beloved son, Devi Guha Yogi Sri Punniyakodi
                Maduraimuthu Swamigal, with a rare and divine vision — the{" "}
                <strong>Vishwaroopa Darshan</strong> (cosmic form).
              </p>
              <p className="mb-4">
                She first appeared to him as a frail old woman, guiding him
                gently. Then, She transformed into a mystical black serpent (
                <strong>Karu Nagam</strong>) and disappeared. Right after this,
                in a blinding flash of light — brighter than countless suns —
                Lord Shiva and Devi Shakti revealed themselves in their cosmic
                form, reminding the world that She is the source of all
                creation.
              </p>
              <p className="mb-4">
                Amid the deep forest, surrounded by seven sacred hills, and
                witnessed by Devas, Rishis, Siddhars, and saints, She revealed
                her true form — <strong>Akhilanda Kodi Brahmanda Nayagi</strong>
                , the Supreme Mother of all universes. Merging with Lord Shiva,
                She showed that She holds the combined power of all 51 Shakthi
                Peedams within Herself.
              </p>
              <p className="mb-4">
                Fulfilling Her promise to the Devas, She manifested as{" "}
                <strong>Kaliyuga Nayagi Karumari</strong>, the guiding force for
                humanity in this age. She then lovingly instructed Her son, Sri
                Swamigal, to create a sacred idol (<strong>Moorthy</strong>) of
                Her Vishwaroopa form, so that all devotees could receive Her
                grace and feel Her divine presence even today.
              </p>
            </>
          ),
        },
        {
          heading: "Viswaroopini Devi Sri Karumaari Amman",
          image: "/home/03predistha.jpg",
          children: (
            <>
              <p className="mb-4">
                When the Divine Mother gave her cosmic vision (
                <strong>Vishwaroopa Darshan</strong>) to Devi Guha Yogi Sri
                Punniyakoti Maduraimuthu Swamigal, he was unsure how to create a
                Moorthy (idol) that could match the grandeur of what he had seen
                — a form taller than all Devas.
              </p>
              <p className="mb-4">
                Sensing his hesitation, Devi lovingly reassured him:
                <br />
                <em>
                  “I have shown you this vision to remove the suffering of the
                  world. Create a Moorthy of My sacred form. Through it, I will
                  bless people with peace and prosperity. I will also show you
                  the special self-manifested (Swayambu) rock I’ve prepared for
                  this purpose.”
                </em>
              </p>
              <p className="mb-4">
                She then guided Sri Swamigal to a spot where an eagle (
                <strong>Garuda</strong>) would circle in the sky. There, he
                would find a <strong>Trishul (Trident)</strong> and sacred stone
                (<strong>Thirukal</strong>). If he dug deep at that place, he
                would discover the rock meant for Her Moorthy.
              </p>
              <p className="mb-4">
                Even though the area looked like plain farmland, a devoted
                geologist, <strong>Mr. Aathur Thiru Palaniswami</strong>,
                trusted Devi’s words. At a depth of 22 feet, a team using
                powerful machinery discovered an extraordinary rock — 56 feet
                tall, 30 feet wide, and 20 feet deep. Miraculously, it looked
                like a woman with long hair lying on her side. No other rocks
                were found above or below it.
              </p>
              <p className="mb-4">
                This sacred place was once a cremation ground, just like the one
                where Devi appeared in{" "}
                <strong>Konavadai, Pattachikavur Village</strong>, near{" "}
                <strong>Thirumukudal in Kanchipuram District</strong>. It took
                nearly five years (2002–2007) to fully uncover this massive
                rock.
              </p>
              <p className="mb-4">
                Finally, under Devi’s divine guidance, the{" "}
                <strong>Pradhishta</strong> (enshrinement) of the Vishwaroopa
                Moorthy took place on <strong>September 11, 2008</strong> (26th
                day of Tamil month Avani, <strong>Thiruvonam Nakshatram</strong>
                , <strong>Dwadashi Tithi</strong>, <strong>Suklapaksham</strong>
                , <strong>Siddha Yogam</strong>) at Thiruvadisoolam, performed
                by Sri Swamigal himself.
              </p>
            </>
          ),
        },
        {
          heading: "Devi’s Divine Play",
          image: "/home/04divineplay.jpg",
          children: (
            <>
              <p className="mb-4">
                Alarmed by the intensity of Kali Yuga, the Devas, Saints, and
                Yogis sought the guidance of the Supreme Mother. In response,
                Devi Karumaari promised to manifest and protect humanity through
                Her chosen messengers, the Arulalars. Before descending to
                Earth, She received the sacred sceptre from Lord Shiva and
                embraced the five divine roles—creation, protection,
                destruction, concealment, and the bestowal of grace—thus
                beginning Her holy mission for Kali Yuga.
              </p>
              <p className="mb-4">
                Fulfilling Her promise to the Devas, Devi claimed these five
                roles as Her own and sought a sacred vow from Her divine
                brother, Lord Sriman Narayanan. He pledged to manifest His
                divine presence in Her{" "}
                <strong>Aadhi Thiruvadi Kshetra (Thiruvadisoolam)</strong> after
                His earthly incarnations in Kali Yuga, vowing to stand beside
                Her in His <em>Aachaavathara</em> forms (the Dasa Avatars),
                blessing all who seek Her with infinite grace and prosperity.
              </p>
              <p className="mb-4">
                During Her celestial travels, Devi (Parapaarai) visited{" "}
                <strong>Surya Loka</strong> and chastised Lord Surya for failing
                to recognize Her Kali Yuga incarnation. Moved by His sincere
                plea for forgiveness, She softened and blessed Him with a divine
                boon—that She would manifest Her sacred presence on His day,
                Sunday, as <strong>Devi Maari of Kali Yuga</strong>.
              </p>
              <p className="mb-4">
                In Her journey to <strong>Yamaloka</strong>, Devi encountered
                Lord Yama, who too failed to recognize Her divine form cloaked
                in the darkness of Kali Yuga. To humble his pride, She reclaimed
                the <em>Trishul</em> and the Death Rope once entrusted to him.
                In Her infinite compassion, She also bestowed a blessing: that
                Her devotees would be beyond Yama&apos;s reach unless She
                Herself granted permission.
              </p>
              <p className="mb-4">
                Upon arriving on Earth, Devi incarnated through a celestial
                maiden (<em>Saptha Kanni</em>) in southern Tamil Nadu to help
                humanity recognize Her divine essence. Though initially blessed
                with prosperity, the maiden became entangled in the illusions of
                Maya, forgetting her divine purpose. Her family fell into
                poverty, and she struggled to care for her five children in the
                humble village of <strong>Pazhanthandalam</strong>. In an act of
                divine compassion, Devi transformed into a black serpent and
                struck the maiden, leading to her passing on a Friday in the
                Tamil month of Thai.
              </p>
              <p className="mb-4">
                As cremation rites began, Devi appeared in the form of a frail,
                radiant elderly woman. She illuminated the funeral ground with
                Her divine light and removed the maiden’s body. Then,
                reappearing as a celestial maiden glowing with inner brilliance,
                She manifested fully on that Sunday evening—marking the first
                revelation of Devi Karumaari and bestowing upon Herself the
                sacred name <strong>Karumaari</strong>.
              </p>
              <p className="mb-4">
                At that very spot, Devi made a powerful vow:
                <br />
                <em>
                  “I shall bless humanity for twenty-one generations through
                  yogis who meditate and worship Me in the Srividhya tradition.”
                </em>
              </p>
              <p className="mb-4">
                To fulfill this promise, She incarnated yogis to walk among
                mortals. She guided{" "}
                <strong>Sri Paalaiyakumaran Swamigal</strong> to the{" "}
                <strong>Sri Ellai Kali Amman Temple</strong> near the{" "}
                <strong>Arulmigu Vedapureeswarar Temple</strong> in{" "}
                <strong>Vada Thirumaraikadu (Thiruverkadu)</strong>, where She
                again manifested Her divine presence.
              </p>
              <p className="mb-4">
                Devi then embarked on a divine journey to bless various sacred
                sites. She chose <strong>Sri Thambu Swamigal</strong> to enact
                Her divine Leela—reviving the deceased daughter of Sri Poovai
                Vaiyapuri Mudalaiyar. To convey Her sacred words (
                <em>Arul Vakku</em>), Devi instructed Sri Thambu Swamigal to
                establish a <strong>Sakthi Peedam</strong>, which eventually
                became the renowned{" "}
                <strong>Sri Devi Karumaari Devasthanam</strong>. In this sacred
                temple, Devi Karumaari manifested as <strong>Jyothi</strong>,
                the embodiment of <em>Vaak Sakthi</em>, the divine energy of
                speech and communication.
              </p>
              <p className="mb-4">
                <strong>Marulaali Sri Thambu Swamigal</strong> consecrated the
                first temple dedicated solely to Her worship. Devi also guided
                the <strong>Marulaalars</strong>, descendants of the Saaktha
                Yogi tradition—especially{" "}
                <strong>Sri Paramanandam Swamigal</strong> and{" "}
                <strong>Arul Siddhar Sri Punniyakotti Swamigal</strong>—through
                two fundamental principles:
                <br />{" "}
              </p>
              <div>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Manifesting Her divine presence through sacred form</li>
                  <li>Offering guidance through divine messages</li>
                </ul>
              </div>
              <p>
                After making Herself known at <strong>Pazhanthandalam</strong>{" "}
                and <strong>Thiruverkadu</strong>, Devi chose to unveil Her most
                ancient and eternal abode—
                <strong>Aadhi Thiruvadi Kshetra</strong>—to Her divine son,{" "}
                <strong>Devi Guhayogi</strong>. In the presence of the Devas,
                She revealed Her <strong>Vishwaroopa (cosmic form)</strong> as{" "}
                <em>Akhilandakoti Brahmanda Nayagi</em>—the Supreme Mother of
                countless universes. From this sacred Kshetra, She continues to
                bestow grace, protection, and boundless blessings to all sincere
                devotees who seek Her.
              </p>
            </>
          ),
        },
        {
          heading: "Trisakthi Swayambu Devi Sri Karumaari Amman",
          image: "/home/05swayambu.jpg",
          children: (
            <>
              <p className="mb-4">
                In a profound display of divine play (<em>Leela</em>), Devi
                manifested at Thiruvadisoolam, revealing Her cosmic form as the
                guardian of this era and affirming Her sacred presence.
              </p>
              <p className="mb-4">
                During the excavation for Devi’s sanctum—destined to support the
                towering Mahalingam—water from the hidden{" "}
                <strong>Vegavathi River</strong> miraculously surged forth,
                mingled with blood. From this sacred phenomenon,{" "}
                <strong>Swayambu Devi</strong> emerged in the form of{" "}
                <strong>Shiva-Shakti Linga</strong>, marked by three golden
                lines. This awe-inspiring vision was witnessed by devoted souls
                present on that significant day,{" "}
                <strong>28th January 2018 (Sunday)</strong>.
              </p>
              <p className="mb-4">
                This moment became a living testament to Devi’s divine
                essence—the animating life force of all creation. She sanctified
                this sacred ground with Her Holy Feet, blessing it as a powerful
                spiritual epicenter that continues to bestow abundance,
                prosperity, and grace upon all who seek Her.
              </p>
              <p>
                In a similar divine occurrence, <strong>Devi Mookambika</strong>{" "}
                manifested as Swayambu with golden lines for{" "}
                <strong>Sri Adi Shankaracharya</strong>, along the banks of the
                river <em>Souparnika</em>, bestowing Her grace upon the world.
                Even in today’s times, we continue to witness Devi revealing Her
                eternal presence in the very places sanctified by Her divine
                footprints.
              </p>
            </>
          ),
        },
        {
          heading: "MahaKodilingam",
          image: "/home/06kodilingam.jpg",
          children: (
            <>
              <p>
                In this exalted realm, where Devi has manifested as{" "}
                <strong>Arut Perum Jyothi</strong>, the embodiment of Supreme
                Grace and Light, illustrating a perpetual essence that
                transcends the confines of time, the Divine Mother has commanded
                that the establishment of a radiant Jyothi form of Her consort,
                Lord Shiva—the embodiment of Supreme Consciousness—be elevated
                above Her sanctified presence, taking the form of a towering{" "}
                <strong>Shivalingam</strong>, crafted to radiate divine grace.
              </p>
              <p>
                The <strong>Kodilingam</strong> will be composed of three
                segments, each symbolizing the divine presences of Lord Brahma,
                Lord Vishnu, and Lord Rudra.
              </p>
              <ul className="list-disc list-inside my-4">
                <li>
                  <strong>Length & Width:</strong> Each measuring 108 ft
                </li>
                <li>
                  <strong>Height:</strong> 164 ft
                </li>
                <li>
                  <strong>Crowning Kalash:</strong> A golden dome soaring to 53
                  feet at the pinnacle
                </li>
              </ul>
              <p>
                From within this magnificent <strong>Mahalingam</strong>, Devi
                will unveil Her sacred form. Upon completion, this will stand as
                the
                <strong> tallest Mahalingam globally</strong>.
              </p>
            </>
          ),
        },
        {
          heading: "Saptha Sailaja Madhya Peedam - Sri Sri Padhathri",
          image: "/home/07perumal.jpg",
          children: (
            <>
              <p className="mb-4">
                A distinctive aspect of this revered temple is the remarkable
                presence of <strong>108 Divya Desams</strong> surrounding the
                Saptha Shailaja Madhya Peetam, dedicated to{" "}
                <strong>Lord Shriman Narayanan</strong>, known here as{" "}
                <strong>Lord Sri Varu Venkatesa Perumal</strong>, who graciously
                bestows blessings upon all.
              </p>
              <p className="mb-4">
                Each of these 108 Divya Desams associated with Lord Shriman
                Narayanan features its own unique shrine. As of now,{" "}
                <strong>106 Divya Desams have been consecrated</strong> and are
                actively worshipped by devotees.
              </p>
              <p className="mb-4">
                The <strong>107th Divya Desam</strong>, <em>Thiruparkadal</em>,
                is symbolically represented by sacred <strong>Saligrams</strong>
                . The <strong>108th Divya Desam</strong>,{" "}
                <em>Sree Vaikundam</em>, is beautifully portrayed through a{" "}
                <strong>mural depiction</strong>, which is currently under
                construction.
              </p>
              <p>
                It is truly noteworthy that this temple is{" "}
                <strong>the first of its kind globally</strong> to house{" "}
                <strong>all 108 Divya Desams</strong> in a single locale — an
                unparalleled spiritual phenomenon.
              </p>
            </>
          ),
        },
        {
          heading: "Sathsthapana and Temple Deities",
          image: "/home/08sathsthapana.jpeg",
          children: (
            <div>
              <p>
                Plans are underway for the construction of four new temples
                surrounding the KodiLingam, each positioned at a cardinal point:
              </p>
              <ul className="list-disc list-inside my-4">
                <li>
                  <strong>Lord Ganapathi</strong> will grace the southwest
                  corner (<em>Nairutya Konam</em>)
                </li>
                <li>
                  <strong>Lord Muruga</strong> will be established in the
                  northwest corner (<em>Vayu Konam</em>)
                </li>
                <li>
                  <strong>Lord Surya</strong> will shine in the southeast corner
                  (<em>Agni Konam</em>)
                </li>
                <li>
                  <strong>Pancha Moorthis of the Marulaalar</strong> will be
                  situated in the northeast corner (<em>Ishanaya Konam</em>)
                </li>
              </ul>
              <p>
                Each of these temples will have a <strong>Vimana</strong> rising
                to 80 feet in height, and this sacred work is in progress. The
                construction of the temple’s <strong>Raja Gopuram</strong> and{" "}
                <strong>Gosala</strong> is also underway.
              </p>

              <h3 className="text-xl text-amber-200 font-semibold mt-6 mb-2">
                Deities in the Temple
              </h3>
              <p>
                <strong>Naga Deities</strong> – Surrounding the main sanctum of
                Devi Karingamaari are eight divine Naga deities:
              </p>
              <p className="mb-2">
                Sanakan, Kuligan, Ananthan, Vasuki, Dhakshan, Karkodagan,
                Padman, and Mahapadman, accompanied by the celestial figures of{" "}
                <strong>Rahu</strong> and <strong>Ketu</strong>.
              </p>

              <p>
                <strong>Mathika Deities</strong> – The temple also honors the
                Mathika deities, including:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Devi Dasa Bhuja Durga</li>
                <li>Devi Shree Vishnu Vana Durga</li>
                <li>Devi Mandira Shree Varahi Amman</li>
                <li>Devi Shree Prathyangira</li>
                <li>Devi Shree Raja Mathangi</li>
              </ul>

              <p>In addition, the revered:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Lord Varka Nivarhti Kala Bhairavar</li>
                <li>Lord Chiranjeevi Bhaktha Anjaneyar</li>
                <li>Lord Garudar</li>
              </ul>

              <p>
                <strong>Guardian Deities of the Temple</strong> – The protectors
                of this sacred space are:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Sri Muthu Veera Swamy</li>
                <li>Sri Kaathavaraaya Swamy</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-2 text-amber-200">
                Blessings To Embrace
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Find solace from obstacles in education, career, health,
                  marriage, inheritance, and financial burdens
                </li>
                <li>
                  Indulge in the balance of material abundance and spiritual
                  advancement, forging a journey towards a truly fulfilling
                  existence
                </li>
                <li>
                  Receive profound insights from Devi through her divine
                  messages
                </li>
                <li>
                  Experience the divine grace bestowed by a multitude of deities
                  within this singular temple destination
                </li>
              </ul>

              <p>
                Engage wholeheartedly in the service of our Divine parents,{" "}
                <strong>Shiva and Sakthi</strong>, at this revered temple, and
                relish in the abundance of Their blessings and protection. This
                dedication will foster prosperity in your lives and support the
                advancement of future generations.
              </p>

              <p className="mt-6 font-bold text-center text-amber-100">
                Amma Saranam! Devi Saranam! Thiruvadiye Saranam!
              </p>
            </div>
          ),
        },
      ].map((item, index) => (
        <section key={index} className="max-w-5xl mx-auto px-4">
          <ContentBlock {...item} />
        </section>
      ))}
    </div>
  );
}
