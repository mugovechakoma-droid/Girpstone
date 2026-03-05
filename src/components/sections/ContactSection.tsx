"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-deep-green tracking-tighter mb-4">
                Command Center
              </h2>
              <div className="w-20 h-1.5 bg-safety-orange rounded-full mb-8"></div>
              <p className="text-deep-green/60 text-lg font-medium leading-relaxed">
                Connect with our specialized security consultants today. We operate 24/7 across all operational zones.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Phone size={24} className="text-safety-orange" />, label: "Emergency Hotline", value: "+263 772 464 452" },
                { icon: <Mail size={24} className="text-safety-orange" />, label: "Secure Inquiry", value: "info@girpstonsecurity.com" },
                { icon: <MapPin size={24} className="text-safety-orange" />, label: "HQ Coordinates", value: "115 Leopold Takawira St, Harare" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white shadow-lg shadow-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-black text-deep-green/30 uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-lg font-bold text-deep-green">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel bg-white shadow-2xl shadow-deep-green/5 border-gray-100 p-10 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-deep-green/40 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-deep-green focus:ring-2 focus:ring-safety-orange transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-deep-green/40 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-deep-green focus:ring-2 focus:ring-safety-orange transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-deep-green/40 uppercase tracking-widest">Subject</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-deep-green focus:ring-2 focus:ring-safety-orange transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-deep-green/40 uppercase tracking-widest">Security Requirements</label>
                <textarea rows={4} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-deep-green focus:ring-2 focus:ring-safety-orange transition-all"></textarea>
              </div>
              <button type="submit" className="w-full btn-premium py-6 text-xl tracking-tight bg-deep-green hover:bg-safety-orange group">
                Establish Connection
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
