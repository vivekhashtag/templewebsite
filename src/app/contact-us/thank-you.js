// app/contactus/thank-you.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-amber-800 mb-6">
          Thank You for Contacting Us!
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          We have received your message and will get back to you shortly.
        </p>
        <Link href="/" passHref>
          <button className="bg-amber-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-amber-700 transition duration-200">
            Go Back to Website
          </button>
        </Link>
      </div>
    </div>
  );
}
