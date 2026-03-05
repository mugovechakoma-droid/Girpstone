"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeBackground from "../three/ThreeBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <ThreeBackground />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-safety-orange/10 text-safety-orange text-xs font-bold tracking-widest mb-6 uppercase">
              Elite Enterprise Protecetion
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-deep-green leading-[1.05] tracking-tighter mb-8">
              Elite Security Solutions for <span className="text-safety-orange">Businesses</span> and Communities.
            </h1>
            <p className="text-lg md:text-xl text-deep-green/60 max-w-2xl mb-10 leading-relaxed font-medium">
              Uncompromising protection powered by intelligence, technology, and the highest standards of professional guarding for a complex global landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-premium text-lg px-10 py-5 bg-deep-green border-2 border-deep-green">
                Request Security Consultation
              </button>
              <button className="btn-outline text-lg px-10 py-5">
                Explore Our Operations
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats (Visual decoration) */}
      <div className="absolute bottom-10 right-10 hidden lg:block text-right">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-9xl font-black text-deep-green tracking-tighter"
        >
          2026
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
