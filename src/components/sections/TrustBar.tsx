"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, Calendar } from "lucide-react";

const stats = [
  { icon: <Calendar className="w-6 h-6" />, value: "5+", label: "Years Excellence" },
  { icon: <Users className="w-6 h-6" />, value: "500+", label: "Elite Personnel" },
  { icon: <ShieldCheck className="w-6 h-6" />, value: "100%", label: "Compliance Rate" },
  { icon: <Award className="w-6 h-6" />, value: "ISO", label: "Certified Ops" },
];

const TrustBar = () => {
  return (
    <section className="relative z-20 -mt-16 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-[40px] shadow-2xl shadow-deep-green/10 border border-gray-50 p-8 md:p-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-deep-green/5 flex items-center justify-center text-safety-orange">
                {stat.icon}
              </div>
              <div>
                <span className="block text-3xl font-black text-deep-green tracking-tight">{stat.value}</span>
                <span className="text-xs font-bold text-deep-green/40 uppercase tracking-widest">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustBar;
