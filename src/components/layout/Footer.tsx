import React from "react";
import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-green text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-safety-orange" />
              <span className="text-2xl font-black tracking-tighter">
                GIRPSTONE
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              The standard in precision security and elite protection services for the global enterprise. Protecting assets and communities with intelligence-led strategies.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-safety-orange transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-safety-orange transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-safety-orange transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-safety-orange transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Operations</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><Link href="/services" className="hover:text-safety-orange transition-colors">Static Guarding</Link></li>
              <li><Link href="/services" className="hover:text-safety-orange transition-colors">AI Monitoring</Link></li>
              <li><Link href="/services" className="hover:text-safety-orange transition-colors">Rapid Response</Link></li>
              <li><Link href="/services" className="hover:text-safety-orange transition-colors">Private Investigation</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li><Link href="/about" className="hover:text-safety-orange transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-safety-orange transition-colors">Contact Us</Link></li>
              <li><Link href="/payments" className="hover:text-safety-orange transition-colors">Payment Portal</Link></li>
              <li><Link href="#" className="hover:text-safety-orange transition-colors">Compliance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-center gap-3"><Phone size={16} className="text-safety-orange" /> +263 772 464 452</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-safety-orange" /> info@girpstonsecurity.com</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="text-safety-orange mt-1" /> 115 Leopold Takawira St, Harare</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Girpstone Security. All Rights Reserved. Engineered for Excellence.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
