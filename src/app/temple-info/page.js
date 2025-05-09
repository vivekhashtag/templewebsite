"use client";
import {
  FaClock,
  FaPhone,
  FaCalendarAlt,
  FaPrayingHands,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RitualsFestivitiesPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <div className="bg-amber-700 text-white py-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-amber-200">
          Rituals and Festivities
        </h1>
        <p className="text-lg">
          A glimpse into the divine schedule of Sri Devi Karumaariamman Maha
          Aranya Kshethram
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/*// Add this section below your existing content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-8 mb-8">
          <div className="bg-amber-600 p-4">
            <h2 className="text-xl font-bold text-white text-center">
              Glimpse of Festivals at Thiruvadisoolam
            </h2>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example festival images - replace with your actual images */}
              {[
                {
                  img: "/templeinfo/aadhideviworship.jpg",
                  caption:
                    "Worshipping Aadhi Devi in the form of pot, symbolizing her presence and power.",
                },

                {
                  img: "/templeinfo/gopooja.jpg",
                  caption:
                    "Swamiji performing Kho Pooja — a sacred offering of devotion and gratitude to the holy cows, symbolizing reverence for all living beings and the nurturing spirit of Dharma.",
                },
                {
                  img: "/templeinfo/trishulpooja.jpg",
                  caption:
                    "Swamiji performing Trishul Pooja in the sacred hills where Devi placed Her divine feet — Thirupadham.",
                },
                {
                  img: "/templeinfo/koozhvaarthal.jpg",
                  caption:
                    "As part of the tradition, sacred koozh (porridge) is offered to Devi and then shared as prasad among devotees.",
                },
                {
                  img: "/templeinfo/smallpadayal.jpg",
                  caption:
                    "Padayal—offered in banana leaves with fruits, sweets, savouries, and food—is offered to Devi and then shared among devotees as prasad.",
                },
                {
                  img: "/templeinfo/bhagavathi.jpg",
                  caption:
                    "Devi in her Bhagavathi roop (form) radiates strength, grace, and divine presence.",
                },
                {
                  img: "/templeinfo/unjal.jpg",
                  caption:
                    "Every Pournami, Devi is seated on the Vunjal (swing) and gently swung back and forth in a loving ritual known as Vunjal Sevai.",
                },
                {
                  img: "/templeinfo/devi.jpg",
                  caption:
                    "Devi, accompanied by her two guardians—Lord Sri Muthuveeraswamy and Lord Sri Kaathavarayaswamy with the divine grace",
                },
                {
                  img: "/templeinfo/velliambal.jpg",
                  caption:
                    "The radiant silver moorthi of Devi Sri Karumaari Amman, embodying her divine grace and protective power.",
                },
                {
                  img: "/templeinfo/suyambudevi.jpg",
                  caption:
                    "Swayambu form of Devi with sacred Chandan Kaapu, worshipped with devotion.",
                },
                {
                  img: "/templeinfo/suyambudevi2.jpg",
                  caption:
                    "Suyambu Devi Sri Karumaariamman radiating serene divinity and timeless presence.",
                },
                {
                  img: "/templeinfo/thaayaar.jpg",
                  caption:
                    "Thirumanjanam performed for Sri Devi Mahalakshmi Thayaar, invoking blessings of wealth, grace, and prosperity.",
                },

                {
                  img: "/templeinfo/navratri.jpg",
                  caption:
                    "A divine darshan of Devi in Her nine glorious forms during Navratri, a-lifetime blessing.",
                },
                {
                  img: "/templeinfo/annapadayal.jpg",
                  caption:
                    "Annapadayal — where the divine Mother is adorned with prasad, embodying abundance, nourishment, and the grace of selfless giving.",
                },

                {
                  img: "/templeinfo/kalazhagar.jpg",
                  caption:
                    "Kallazhagar Vaibhavam — the majestic descent of Lord Kallazhagar into the river, blessing the devotees with His divine darshan and grace in this vibrant celebration of tradition and faith.",
                },
                {
                  img: "/templeinfo/ramnavami.jpg",
                  caption:
                    "Ram Navami — celebrating the divine birth of Maryada Purushottam Lord Sri Rama, an embodiment of dharma, courage, and compassion. Jai Shri Ram!",
                },
                {
                  img: "/templeinfo/janmashtami.jpg",
                  caption:
                    "Radhe Krishna — a celebration of divine love and bliss on the auspicious occasion of Janmashtami. Jai Shri Krishna!",
                },
                {
                  img: "/templeinfo/annapadayal108.jpg",
                  caption:
                    "Annapavadai Seva to Lord Sri Vaaru Venkatesa Perumal — a divine offering of food, sweets, and fruits, symbolizing devotion and abundance, with sacred prasad shared as blessings to all devotees.",
                },
                {
                  img: "/templeinfo/dwarkadhish.jpg",
                  caption:
                    "Shri Dwarkadheesh Darshan - The divine glimpse of Lord Shri Krishna as Shri Dwarkadheesh fills the heart with peace and devotion.",
                },
                {
                  img: "/templeinfo/sorgavaasalmain.jpg",
                  caption:
                    "Vaikunda Ekadashi - Sorgavaasal Darshn - Witnessing the sacred Sorgavaasal - a gateway to the divine abode.",
                },
                {
                  img: "/templeinfo/kavacham.jpg",
                  caption:
                    "Swayambu Devi Sri Karumaari Amman adorned with Kavacham, radiating grace and boundless blessings.",
                },
                {
                  img: "/templeinfo/gurupoojai.jpg",
                  caption:
                    "Maha Guru Poojai - Paying heartfelt reverence to Marulalar Arul Siddhar Punniyakotti Swamigal.",
                },
                {
                  img: "/templeinfo/manjalkaapu2.jpg",
                  caption:
                    "Sri Devi Karumaari Amman's Manjal Kaapu - ushering in prosperity, peace and divine protection.",
                },
                {
                  img: "/templeinfo/podhupadayal.jpeg",
                  caption:
                    "Podhupadayal - Unity in Diversity - Devotees from all walks of life come together to offer Podhupadayal - symbolizing Vasudhaiva Kutumbakam.",
                },
                {
                  img: "/templeinfo/sumangalipooja.jpg",
                  caption:
                    "Sumangali Pooja - An auspicious ritual seeking the blessings of Devi for family harmony, virtue, and prosperity.",
                },
                {
                  img: "/templeinfo/chandi.jpg",
                  caption:
                    "Sahasara Chandi Homam & Mahishasura Vadham - Performed during Navratri to invoke Devi's strength, destroy negativity, and lead a righteous life.",
                },
                {
                  img: "/templeinfo/ganeshchathurthi2.jpg",
                  caption:
                    "Ganesh Chaturthi Celebrations - Celebrating the remover of obstacles with joy and devotion. Jai Shree Ganesh!",
                },

                {
                  img: "/templeinfo/mummudi2.jpeg",
                  caption:
                    "Mummudi Vizha - The Ritual of Surrender - Devotees observer viratham and offer Mummudi to Devi - a sacred act of surrender and faith.",
                },

                {
                  img: "/templeinfo/theechatti.jpg",
                  caption:
                    "Thee Chatti Vaibhavam - A powerful expression of devotion - carrying fire-filled mud pots with neem leaves in pur bhakti.",
                },
                {
                  img: "/templeinfo/aug15.jpg",
                  caption:
                    "Independence Day Celebrations - Flag hoisting be our beloved Swamiji - a tribute to patriotism, selflessness, and national pride. Jai Hind!",
                },
              ].map((festival, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={festival.img}
                      alt={festival.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 bg-amber-50">
                    <p className="text-center font-medium text-amber-800">
                      {festival.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Temple Timings */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-amber-600 p-4 flex items-center">
            <FaClock className="text-white mr-2" />
            <h2 className="text-xl font-bold text-white">Temple Timings</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-amber-200 rounded-lg p-4">
                <h3 className="font-bold text-amber-800 mb-2">
                  Viswaroopini Devi Sri Karumaariamman Temple
                </h3>
                <p className="text-stone-700">Morning: 6:00 AM – 7:30 PM</p>
              </div>
              <div className="border border-amber-200 rounded-lg p-4">
                <h3 className="font-bold text-amber-800 mb-2">
                  Saptha Sailaja Madhya Peedam
                </h3>
                <p className="text-stone-700">Morning: 6:30 AM – 1:00 PM</p>
                <p className="text-stone-700">Evening: 4:00 PM – 8:00 PM</p>
                <p className="text-sm text-amber-700 mt-2">
                  *No darshans for 108 Divyadesams on Mondays except special
                  occasions (Pournima, Amavasya)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Regular Poojas */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-amber-600 p-4 flex items-center">
            <FaPrayingHands className="text-white mr-2" />
            <h2 className="text-xl font-bold text-white">Regular Poojas</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Amman Temple Poojas */}
              <div>
                <h3 className="font-bold text-lg text-amber-800 mb-3 border-b border-amber-200 pb-2">
                  Devi Sri Karumaari Amman Temple
                </h3>
                <ul className="space-y-3">
                  {[
                    "Every day, Morning 6:00 AM - Ko Pooja",
                    "4 Kala Abishekams - Swayambu Devi Sri Devi Karumaari Amman",
                    "Friday & Sunday during Rahu kala - Sarva Kari Naga Swaroopini Abishekam",
                    "Every Thei Pirai Ashtami - Ashta Puja Kalabhairavar Abishekam",
                    "Every Valar Pirai Panchami - Sri Devi Varahi Abishekam",
                    "Krithikai Naksthara - Lord Sri Muruga Abishekam",
                    "Amavasya - Special Pooja",
                    "Pournima - Sri Devi Karumaari Amman Utsavar Vunjal Seva",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perumal Temple Poojas */}
              <div>
                <h3 className="font-bold text-lg text-amber-800 mb-3 border-b border-amber-200 pb-2">
                  Saptha Sailaja Madhya Peedam
                </h3>
                <ul className="space-y-3">
                  {[
                    "Swathi Naksthara - Sri Lakshmi Narasimhar Thirumanjanam",
                    "Every Wednesday - Sri Dhanvanthri Thirumanjanam",
                    "Every Friday - Sri Mahalakshmi Thayaar Thirumanjanam",
                    "Moola Nakshathara - Sri Bhaktha Anjaneyar Thirumanjanam",
                    "Ekadashi - Sri Vaaru Venkatesa Perumal Utsavar Thirumanjanam",
                    "Every Friday - Sri Vaaru Venkatesa Perumal Moolavar Thirumanjanam",
                    "Every Saturday - Sri Bhaktha Anjaneyar Thirumanjanam",
                    "Pradosham - Sri Lakshmi Narasimhar Thirumanjanam",
                    "Every Thursday - Sri Vaaru Venkatesa Perumal Nethra darshan",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Festivals Calendar */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-amber-600 p-4 flex items-center">
            <FaCalendarAlt className="text-white mr-2" />
            <h2 className="text-xl font-bold text-white">
              Festivals at Thiruvadisoolam
            </h2>
          </div>
          <h6 className="text-0.5xl px-5 py-5 text-stone-700">
            The following is a month-wise listing of sacred festivals celebrated
            at Thiruvadisoolam. As per tradition, dates may shift each year
            based on the Tamil Panchangam and lunar phases.
          </h6>
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  month: "January",
                  festivals: [
                    "Sorgavaasal Thirapu - Vaikunda Ekadashi",
                    "Thai Pongal",
                    "Thai Poosam",
                  ],
                },
                {
                  month: "February",
                  festivals: ["Maha Shivaratri"],
                },
                {
                  month: "March",
                  festivals: ["Panguni Uthiram - Murugar/Sri Sri Thayaar"],
                },
                {
                  month: "April",
                  festivals: [
                    "Chithirai Thirunal",
                    "Chithira Pournami Festival",
                    "Kalazhagar Festival",
                    "RamaNavami Festival",
                    "108 Pradishta Day",
                  ],
                },
                {
                  month: "May",
                  festivals: ["Vaikasi Vishaka Festival"],
                },
                {
                  month: "June",
                  festivals: ["Rath Yatra"],
                },
                {
                  month: "July",
                  festivals: [
                    "Aadi Festival (Five Sundays, Aadi Puram)",
                    "Maha Guru Poojai - Marulalar Sri Punnyakotti Swamigal",
                  ],
                },
                {
                  month: "August",
                  festivals: [
                    "Ganesh Chathurthi",
                    "Ambal Pradistha day",
                    "Thiruonam",
                    "Janmashtami Festival",
                  ],
                },
                {
                  month: "September",
                  festivals: [
                    "Navaratri Festival - Sahasra Chandi Homam",
                    "Saraswati Pooja, Vijayadashami",
                    "AnnaPadayal",
                  ],
                },
                {
                  month: "October",
                  festivals: ["Kanda Sashti"],
                },
                {
                  month: "November",
                  festivals: ["Karthigai Deepam"],
                },
                {
                  month: "December",
                  festivals: [
                    "Pavithra Utsav",
                    "Sorgavaasal Thirapu - Vaikunda Ekadashi",
                    "Thai Pongal",
                  ],
                },
              ].map((monthData, index) => (
                <div
                  key={index}
                  className="border border-amber-200 rounded-lg p-4"
                >
                  <h3 className="font-bold text-amber-800 mb-3">
                    {monthData.month}
                  </h3>
                  <ul className="space-y-2">
                    {monthData.festivals.map((festival, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span className="text-stone-700">{festival}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Contact Numbers */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="bg-amber-600 p-4 flex items-center">
            <FaPhone className="text-white mr-2" />
            <h2 className="text-xl font-bold text-white">Contact Numbers</h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "Saptha Sailaja Madhya Peedam - Perumal Temple",
                  numbers: ["+91 63804 35246", "+91 63828 5850"],
                },
                {
                  name: "Devi Sri Karumaariamman Temple",
                  numbers: ["+91 98842 22448", "+91 99620 47107"],
                },
                {
                  name: "For Donation",
                  numbers: ["+91 98842 22448", "+91 98402 89020"],
                },
                {
                  name: "For Annadanam",
                  numbers: ["+91 94447 58504", "+91 98842 22448"],
                },
              ].map((contact, index) => (
                <div key={index} className="border-b border-amber-100 pb-3">
                  <h3 className="font-semibold text-amber-800">
                    {contact.name}
                  </h3>
                  {contact.numbers.map((num, i) => (
                    <p key={i} className="text-stone-700">
                      {num}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
