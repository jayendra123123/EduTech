import React from 'react';
import { Mail, MapPin, Linkedin, DownloadCloud } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-white/5 flex items-center justify-center text-xl font-bold">J</div>
            <div>
              <div className="text-2xl font-bold">Jayendra</div>
              <div className="text-sm text-white/60">Full-Stack Developer</div>
            </div>
          </div>

          <p className="text-white/60">Experienced developer focusing on modern web applications, React, Node.js and scalable front-end designs. (Details inferred from uploaded resume file.)</p>

          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-orange-400"/><a href="mailto:jayendramalla26@gmail.com" className="text-white/80 hover:underline">jayendramalla26@gmail.com</a></div>
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-white/60"/><div className="text-white/80">India</div></div>
            <div className="flex items-center gap-3"><Linkedin className="w-4 h-4 text-white/60"/><a href="https://www.linkedin.com/in/jayendra-malla-1a77b6256/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:underline">linkedin</a></div>
          </div>

          <div className="mt-auto"><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm text-white/80"><DownloadCloud className="w-4 h-4"/>Scroll up</button></div>
        </div>

        <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8"><ContactForm/></div>
      </div>
    </section>
  );
}
