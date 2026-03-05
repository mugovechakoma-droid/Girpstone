"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Girpstone Security transformed our corporate campus safety. Their personnel are professional, alert, and seamlessly integrated into our culture. Unmatched reliability.",
    author: "CEO, Global Logistics Group",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-green tracking-tighter mb-4">
            Critical Social Proof
          </h2>
          <div className="w-20 h-1.5 bg-safety-orange rounded-full mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel bg-gray-50/50 p-12 md:p-16 text-center relative"
            >
              <Quote className="w-12 h-12 text-safety-orange/20 absolute top-8 left-8" />
              <p className="text-xl md:text-2xl font-medium text-deep-green italic leading-relaxed mb-10">
                "{t.quote}"
              </p>
              <h5 className="text-lg font-black text-deep-green uppercase tracking-widest bg-safety-orange/10 inline-block px-4 py-1 rounded-full">
                {t.author}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
