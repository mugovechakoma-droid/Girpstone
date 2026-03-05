"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building, TreePine, ShoppingBag, HardHat, Landmarking } from "lucide-react";

const industries = [
  { title: "Corporate", icon: <Building className="w-8 h-8" /> },
  { title: "Residential Estates", icon: <TreePine className="w-8 h-8" /> },
  { title: "Retail", icon: <ShoppingBag className="w-8 h-8" /> },
  { title: "Construction", icon: <HardHat className="w-8 h-8" /> },
  { title: "Financial Institutions", icon: <Landmarking className="w-8 h-8" /> },
];

const IndustriesServed = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-green tracking-tighter mb-4">
            Industries We Serve
          </h2>
          <div className="w-20 h-1.5 bg-safety-orange rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, borderColor: "#ff8c00" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center group cursor-default transition-all duration-300"
            >
              <div className="text-deep-green mb-6 group-hover:text-safety-orange transition-colors duration-300">
                {industry.icon}
              </div>
              <h4 className="text-sm font-black text-deep-green uppercase tracking-wider leading-tight">
                {industry.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
