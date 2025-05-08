"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Facebook, Instagram, MessageCircleMore, Youtube } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Reach out to the temple administration for queries or spiritual
            guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Phone Numbers */}
            <div className="bg-amber-100 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-amber-700 mb-4">
                Contact Numbers
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <span className="font-medium">Perumal Koil:</span>
                    <div className="text-gray-700">
                      +91 63804 35246 / +91 63828 5850
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <span className="font-medium">Amman Koil:</span>
                    <div className="text-gray-700">
                      +91 98842 22448 / +91 99620 47107
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <span className="font-medium">For Donation:</span>
                    <div className="text-gray-700">
                      +91 98842 22448 / +91 98402 89020
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <div>
                    <span className="font-medium">For Annadanam:</span>
                    <div className="text-gray-700">
                      +91 94447 58504 / +91 98842 22448
                    </div>
                  </div>
                </li>
              </ul>
              {/* Social Media Links */}
              <div className="flex space-x-4 items-center py-4">
                <a
                  href="https://www.facebook.com/Thiruvadisoolam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/thiruvadisoolam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/c/thiruvadisoolam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://whatsapp.com/channel/0029Va5GET3F1YlUeqMnZ81Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-900"
                >
                  <MessageCircleMore className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="bg-amber-100 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-amber-700 mb-4">
                Temple Location
              </h2>
              <p className="text-gray-700 mb-4">
                Sri Devi Karumariamman Maha Aranya Kshethram,
                <br />
                Sri Koilpuram, Thiruvadisoolam,
                <br />
                Chengalpat District, 603003
              </p>

              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0922442010367!2d80.01809951534833!3d12.698903721879315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52feb10c5503e9%3A0xfc841d387b888d5a!2sArulmigu%20Sri%20Devi%20Karumari%20Amman%20Peedam!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Routes   */}

            <div className="bg-amber-100 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-amber-700 mb-4">
                How to Reach
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-lg text-amber-600">
                    Route 1
                  </h3>
                  <p className="text-gray-700">
                    When you come via GST road, enter Mahindracity and go
                    straight. Just before Mahindra Research Valley, near Parker
                    building, take left. At the roundtana, take the narrow road
                    through the village (2 km). After seeing the arch, enter and
                    travel another 2 km. Look for Thiruvadisoolam temple board,
                    take right to reach the temple.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-amber-600">
                    Route 2
                  </h3>
                  <p className="text-gray-700">
                    Via GST, take left at Singamperumal Koil, travel 18km to
                    Chenneri (Thiruporur-Chengalpat highway). From Chenneri,
                    take right and travel 2 km to enter Thiruvadisoolam. Travel
                    another 2.5 km, crossing Sri Aadhipureeswarar Sivan temple
                    to reach the temple.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-amber-600">
                    Route 3
                  </h3>
                  <p className="text-gray-700">
                    Via OMR, take right from Thiruporur, travel 20 km on
                    Thiruporur-Chengalpat highway. On right, see arch to enter
                    Thiruvadisoolam. Travel 2.5 km, crossing Sri
                    Aadhipureeswarar Sivan temple to reach the temple.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-amber-600">
                    Route 4
                  </h3>
                  <p className="text-gray-700">
                    From Chengalpat, take Chengalpat-Thiurporur highway for 9km.
                    On left, see arch to enter Thiruvadisoolam. Travel 2.5 km,
                    crossing Sri Aadhipureeswarar Sivan temple to reach the
                    temple.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-cover bg-center bg-no-repeat p-6 rounded-xl shadow-md"
            style={{
              backgroundImage: `url('/home/bg.png')`,
              backgroundColor: "rgba(255,255,255,0.3)",
              backgroundBlendMode: "overlay",
            }}
          >
            <h2 className="text-2xl font-bold text-amber-700 mb-6">
              Send Us a Message
            </h2>
            <form
              action="https://formsubmit.co/tiruvadisoolam@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              {/*  <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/contact-us/thank-you.js"
              /> */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
            {/* Blessings sub-Section */}
            <div className="mt-12 bg-amber-50 p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-amber-700 mb-6 text-center">
                Blessings to Embrace
              </h2>
              <ul className="list-disc list-inside space-y-4 text-gray-800 text-lg">
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
              <p className="mt-6 text-gray-800 text-lg leading-relaxed">
                Engage wholeheartedly in the service of our Divine parents,{" "}
                <strong>Shiva and Sakthi</strong>, at this revered temple, and
                relish in the abundance of Their blessings and protection. This
                dedication will foster prosperity in your lives and support the
                advancement of future generations.
              </p>
              <p className="mt-4 text-center text-amber-700 text-xl font-semibold">
                Amma Saranam! Devi Saranam! Thiruvadiye Saranam!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
