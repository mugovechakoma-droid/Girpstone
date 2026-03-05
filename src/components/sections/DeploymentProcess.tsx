"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Initial meeting to understand your specific mission and safety goals.",
  },
  {
    number: "02",
    title: "Risk Assessment",
    description: "Tactical audit of vulnerabilities and site perimeters by our experts.",
  },
  {
    number: "03",
    title: "Deployment",
    description: "Strategic placement of elite personnel and tech hardware integrated systems.",
  },
  {
    number: "04",
    title: "Monitoring",
    description: "24/7 command center oversight and real-time performance reporting.",
  },
];

const DeploymentProcess = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-deep-green tracking-tighter mb-4">
            The Deployment Process
          </h2>
          <div className="w-20 h-1.5 bg-safety-orange rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-deep-green/5 -z-0 hidden lg:block"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-deep-green text-white flex items-center justify-center text-xl font-black mx-auto mb-8 border-4 border-white shadow-xl shadow-deep-green/10">
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-deep-green mb-4">{step.title}</h4>
              <p className="text-deep-green/60 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentProcess;
