/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Info, 
  FileText, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Menu, 
  X,
  ShieldCheck,
  BrainCircuit,
  Eye,
  Lock,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ORGANIZERS = [
  {
    name: "Pai Chet Ng",
    affiliation: "Singapore Institute of Technology, Singapore",
    email: "paichet.ng@singaportech.edu.sg"
  },
  {
    name: "Guang Hua",
    affiliation: "Singapore Institute of Technology, Singapore",
    email: "guang.hua@singaporetech.edu.sg"
  },
  {
    name: "Fani Deligianni",
    affiliation: "University of Glasgow, United Kingdom",
    email: "fani.deligianni@glasgow.ac.uk"
  },
  {
    name: "Konstantinos N. Plataniotis",
    affiliation: "University of Toronto, Canada",
    email: "kostas@ece.utoronto.ca"
  }
];

const IMPORTANT_DATES = [
  { label: "Satellite Workshop webpages due date", date: "March 18, 2026" },
  { label: "Satellite Workshop paper submission due date", date: "May 13, 2026" },
  { label: "Satellite Workshop paper acceptance notification", date: "June 10, 2026" },
  { label: "Satellite Workshop camera-ready due date", date: "July 1, 2026" },
  { label: "Satellite Workshop author registration due date", date: "July 16, 2026" }
];

const PROGRAM = [
  { time: "09:00 - 09:30", title: "Opening Keynote", speaker: "TBA", description: "\"Agentic AI for Robust and Trustworthy Visual Systems.\" This session defines the shift from feed-forward perception to reasoning-driven imaging." },
  { time: "09:30 - 10:15", title: "Regular Paper Session I: Oral", description: "Focused on Adversarial Robustness and Trustworthy Vision. Featuring top-tier peer-reviewed papers on adversarial imaging and robust perception." },
  { time: "10:15 - 10:30", title: "Interactive Poster Session & Coffee Break", description: "To promote inclusivity and student engagement, this central session allows for one-on-one dialogue between authors and attendees." },
  { time: "10:30 - 10:50", title: "Invited Technical Talk", speaker: "TBA", description: "\"Watermarking and Content Authenticity for Generative Imaging.\" A deep dive into the intersection of provenance and agentic verification." },
  { time: "10:50 - 11:35", title: "Regular Paper Session II: Oral", description: "Focused on Reasoning-Guided Restoration. This session explores how agentic models handle low-vision data and verification-aware pipelines." },
  { time: "11:35 - 12:00", title: "Closing Remarks & Awards", description: "Summary of the workshop and announcement of best paper awards." }
];

const TPC = [
  "Seyed Jamal Seyedmohammadi, Singapore Institute of Technology",
  "Seyed Mohammad Sheikholeslami, University of Toronto",
  "Seyed Kawa Atapour, University of Concordia",
  "Christos Korgialas, Aristotle University of Thessaloniki",
  "Kaushik Bhargav Sivangi, University of Glasgow"
];

const NavItem = ({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-[#003366] hover:text-[#0066cc] transition-colors duration-200 font-semibold px-4 py-2 text-sm uppercase tracking-wider"
  >
    {children}
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7f9] font-sans text-[#333]">
      {/* Top Header - White with Logos */}
      <div className="bg-white border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img 
              src="https://signalprocessingsociety.org/sites/default/files/logo_0.png" 
              alt="IEEE SPS Logo" 
              className="h-12 sm:h-16 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="h-12 w-[1px] bg-gray-200 hidden sm:block"></div>
            <div className="hidden sm:block">
              <h1 className="text-[#003366] font-display font-extrabold text-2xl leading-none">ICIP 2026</h1>
              <p className="text-[#0066cc] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Lyon, France | Oct 25-28</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://www.ieee.org" className="text-xs text-gray-500 hover:text-[#003366]">IEEE.org</a>
            <span className="text-gray-300">|</span>
            <a href="https://ieeexplore.ieee.org" className="text-xs text-gray-500 hover:text-[#003366]">IEEE Xplore</a>
            <span className="text-gray-300">|</span>
            <a href="https://signalprocessingsociety.org" className="text-xs text-gray-500 hover:text-[#003366]">SPS</a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Navy */}
      <header className="sticky top-0 z-50 bg-[#003366] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <nav className="hidden md:flex items-center space-x-2">
              <a href="#about" className="text-white hover:bg-white/10 px-4 py-4 text-xs font-bold uppercase tracking-widest transition-colors">About</a>
              <a href="#dates" className="text-white hover:bg-white/10 px-4 py-4 text-xs font-bold uppercase tracking-widest transition-colors">Dates</a>
              <a href="#organizers" className="text-white hover:bg-white/10 px-4 py-4 text-xs font-bold uppercase tracking-widest transition-colors">Organizers</a>
              <a href="#program" className="text-white hover:bg-white/10 px-4 py-4 text-xs font-bold uppercase tracking-widest transition-colors">Program</a>
              <a href="#submission" className="text-white hover:bg-white/10 px-4 py-4 text-xs font-bold uppercase tracking-widest transition-colors">Submission</a>
            </nav>
            <div className="md:hidden flex items-center h-full">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="flex items-center">
              <a href="#submission" className="bg-[#ffcc00] text-[#003366] px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                Submit Paper
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-[#002244] border-t border-white/10"
            >
              <div className="flex flex-col p-2">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white p-4 text-xs font-bold uppercase tracking-widest">About</a>
                <a href="#dates" onClick={() => setIsMenuOpen(false)} className="text-white p-4 text-xs font-bold uppercase tracking-widest">Dates</a>
                <a href="#organizers" onClick={() => setIsMenuOpen(false)} className="text-white p-4 text-xs font-bold uppercase tracking-widest">Organizers</a>
                <a href="#program" onClick={() => setIsMenuOpen(false)} className="text-white p-4 text-xs font-bold uppercase tracking-widest">Program</a>
                <a href="#submission" onClick={() => setIsMenuOpen(false)} className="text-white p-4 text-xs font-bold uppercase tracking-widest">Submission</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero / Banner Area */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/lyon/1920/1080?blur=2" 
            alt="Lyon Banner" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f4f7f9]/20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-4">
              ARTI 2026
            </h2>
            <div className="h-1 w-24 bg-[#ffcc00] mx-auto mb-6"></div>
            <p className="text-white text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Workshop on Agentic Reasoning for Trustworthy Imagery
            </p>
            <p className="text-gray-300 mt-4 text-sm uppercase tracking-[0.3em]">
              Satellite Workshop @ IEEE ICIP 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb / Page Title Bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-[#003366]">Home</a>
          <ChevronRight size={12} />
          <a href="#" className="hover:text-[#003366]">Workshops</a>
          <ChevronRight size={12} />
          <span className="text-[#003366]">ARTI 2026</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* About Section */}
            <section id="about" className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-[#003366] text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#ffcc00]"></span>
                Workshop Overview
              </h3>
              <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-6">
                <p className="text-lg font-medium text-[#003366]">
                  Recent breakthroughs in agentic AI have transitioned computer vision from static, feed-forward perception to dynamic systems capable of reasoning, planning, and iterative verification.
                </p>
                <p>
                  Concurrently, the proliferation of synthetic media, adversarial attacks, and sophisticated data degradation has made reliability and authenticity central challenges for the signal processing community. The <strong>Agentic Reasoning for Trustworthy Imaging (ARTI)</strong> workshop introduces a novel paradigm: moving beyond passive image processing toward "active" systems that reason about visual uncertainty, provenance, and manipulation.
                </p>
                <p>
                  While ICIP traditionally addresses restoration, forensics, and security as distinct tracks, ARTI unifies these domains through the lens of agentic reasoning. The workshop focuses on systems that do not merely process pixels but actively verify authenticity and robustness through multi-stage decision-making and feedback-driven analysis.
                </p>
              </div>
            </section>

            {/* Program Section */}
            <section id="program" className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-[#003366] text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#ffcc00]"></span>
                Technical Program
              </h3>
              <div className="space-y-6">
                {PROGRAM.map((item, i) => (
                  <div key={i} className="group border-l-2 border-gray-100 hover:border-[#0066cc] pl-6 py-2 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[10px] font-black text-[#0066cc] uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-sm">
                        {item.time}
                      </span>
                      <h4 className="text-gray-900 font-bold">{item.title}</h4>
                    </div>
                    {item.speaker && (
                      <p className="text-xs text-[#003366] font-bold mb-2">Speaker: {item.speaker}</p>
                    )}
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Organizers Section */}
            <section id="organizers" className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-[#003366] text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-[#ffcc00]"></span>
                Organizing Committee
              </h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {ORGANIZERS.map((org, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#003366]">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{org.name}</h4>
                      <p className="text-xs text-[#0066cc] font-medium mb-1">{org.affiliation}</p>
                      <a href={`mailto:${org.email}`} className="text-[10px] text-gray-400 hover:text-[#003366] flex items-center gap-1">
                        <Mail size={10} />
                        {org.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-8">
            
            {/* Important Dates Sidebar */}
            <section id="dates" className="bg-[#003366] text-white p-8 rounded-sm shadow-lg">
              <h3 className="text-[#ffcc00] text-lg font-display font-bold mb-6 uppercase tracking-widest flex items-center gap-2">
                <Calendar size={18} />
                Important Dates
              </h3>
              <div className="space-y-6">
                {IMPORTANT_DATES.map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                    <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="font-bold text-white">{item.date}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Submission Sidebar */}
            <section id="submission" className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-[#003366] text-lg font-display font-bold mb-6 uppercase tracking-widest flex items-center gap-2">
                <FileText size={18} />
                Submission
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Submit for publication in <strong>IEEE Xplore ICIP 2026 Workshop Proceedings</strong>.
              </p>
              <button className="w-full bg-[#0066cc] text-white py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-[#003366] transition-colors flex items-center justify-center gap-2">
                <ExternalLink size={14} />
                Submit Paper
              </button>
            </section>

            {/* TPC Sidebar */}
            <section id="tpc" className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-[#003366] text-lg font-display font-bold mb-6 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={18} />
                Technical Committee
              </h3>
              <ul className="space-y-4">
                {TPC.map((member, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                    <div className="mt-1 w-1 h-1 bg-[#0066cc] rounded-full flex-shrink-0"></div>
                    {member}
                  </li>
                ))}
              </ul>
            </section>

          </aside>

        </div>
      </main>

      {/* Footer - ICIP Style */}
      <footer className="bg-[#002244] text-white py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
            <div>
              <img 
                src="https://signalprocessingsociety.org/sites/default/files/logo_0.png" 
                alt="IEEE SPS Logo" 
                className="h-12 object-contain brightness-0 invert opacity-80 mb-6"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs text-gray-400 leading-relaxed">
                IEEE ICIP is the world's largest and most comprehensive technical conference focused on image and video processing and computer vision.
              </p>
            </div>
            <div>
              <h5 className="text-[#ffcc00] font-display font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h5>
              <ul className="text-xs text-gray-400 space-y-3">
                <li><a href="https://2026.ieeeicip.org" className="hover:text-white">ICIP 2026 Official Site</a></li>
                <li><a href="#about" className="hover:text-white">About ARTI</a></li>
                <li><a href="#dates" className="hover:text-white">Important Dates</a></li>
                <li><a href="#submission" className="hover:text-white">Call for Papers</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#ffcc00] font-display font-bold text-sm uppercase tracking-widest mb-6">Contact</h5>
              <p className="text-xs text-gray-400 mb-4">For inquiries regarding the ARTI workshop:</p>
              <a href="mailto:paichet.ng@singaportech.edu.sg" className="text-xs font-bold text-white hover:text-[#ffcc00] flex items-center gap-2">
                <Mail size={14} />
                paichet.ng@singaportech.edu.sg
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <p>© 2026 IEEE Signal Processing Society. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://www.ieee.org/site-terms-conditions.html" className="hover:text-white">Terms</a>
              <a href="https://www.ieee.org/security-privacy.html" className="hover:text-white">Privacy</a>
              <a href="https://www.ieee.org/about/corporate/governance/p9-26.html" className="hover:text-white">Nondiscrimination</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
