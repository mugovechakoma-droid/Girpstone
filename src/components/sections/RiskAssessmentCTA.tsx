"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const RiskAssessmentCTA = () => {
  return (
    <section id="consultation" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Abstract geometric decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Ready for <span className="text-safety-orange">Maximum</span> Protection?
          </h2>
          <p className="text-xl text-white/70 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Our tactical experts are ready to perform a comprehensive audit of your security needs. Protect your mission with elite intelligence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-12 py-6 bg-safety-orange text-white rounded-full font-black text-xl hover:bg-white hover:text-safety-orange transition-all duration-300 shadow-2xl shadow-safety-orange/20">
              Request Security Assessment
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskAssessmentCTA;
