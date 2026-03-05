"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Video, Search, Truck, Home } from "lucide-react";

const services = [
  {
    title: "Security Guards",
    description: "Highly trained, disciplined personnel for corporate and residential assets.",
    icon: <UserCheck className="w-10 h-10" />,
  },
  {
    title: "CCTV & Surveillance",
    description: "Advanced AI-driven monitoring and real-time threat detection systems.",
    icon: <Video className="w-10 h-10" />,
  },
  {
    title: "Private Investigation",
    description: "Discreet, intelligence-led investigations handled by former law enforcement.",
    icon: <Search className="w-10 h-10" />,
  },
  {
    title: "Cash-in-Transit",
    description: "Secure logistics and armored transport for high-value financial assets.",
    icon: <Truck className="w-10 h-10" />,
  },
  {
    title: "Residential Security",
    description: "Dedicated perimeter protection and rapid response for estates and homes.",
    icon: <Home className="w-10 h-10" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-deep-green tracking-tighter mb-4">
              Our Core Security Services
            </h2>
            <div className="w-20 h-1.5 bg-safety-orange rounded-full mb-6"></div>
          </div>
          <p className="text-deep-green/60 max-w-sm text-sm font-medium">
            Providing comprehensive, end-to-end protection for high-value assets and infrastructure.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-panel group cursor-pointer hover:bg-deep-green transition-all duration-500 border-gray-100 hover:border-deep-green"
            >
              <div className="text-safety-orange group-hover:text-white transition-colors mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-deep-green group-hover:text-white transition-colors mb-4">
                {service.title}
              </h4>
              <p className="text-deep-green/60 group-hover:text-white/60 transition-colors text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
