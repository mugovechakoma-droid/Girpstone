"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, UserCheck, Cpu } from "lucide-react";

const reasons = [
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Rapid Response",
    description: "Unmatched emergency response times powered by decentralized tactical units strategically placed for maximum coverage.",
  },
  {
    icon: <UserCheck className="w-12 h-12" />,
    title: "Trained Personnel",
    description: "Guards undergo continuous tactical and ethical training to ensure elite standards and cultural alignment with your mission.",
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Tech Integration",
    description: "Digitally tracked patrols and AI-integrated perimeters provide 100% transparency and data-driven security analysis.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-deep-green text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-safety-orange/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-safety-orange/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Why Choose Girpstone?
          </h2>
          <div className="w-20 h-1.5 bg-safety-orange rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/10 group-hover:bg-safety-orange/20 group-hover:border-safety-orange/30 transition-all duration-300">
                <div className="text-safety-orange">{reason.icon}</div>
              </div>
              <h4 className="text-2xl font-bold mb-4">{reason.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
