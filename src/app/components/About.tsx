"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
  <section id="about" className="py-24 px-6 bg-background mt-0">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Profile Image - aligned with About Me title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0 flex items-start"
        >
          <div className="relative">
            <div>
              <Image
                src="/Rawad.jpeg"
                alt="Rawad Nounou"
                width={256}
                height={256}
                className="w-96 h-96 rounded-full object-cover shadow-2xl border-4 border-primary ring-8 ring-secondary/20 z-10 hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            {/* Responsive Let's Connect button */}
            <a 
               href="#contact"
              className="block md:absolute md:bottom-[-24px] md:right-2 mt-4 md:mt-0 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce text-center w-max mx-auto">
              Let&apos;s Connect!
            </a>
          </div>
        </motion.div>
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-text/80 mb-8 leading-relaxed">
            Hi! I&apos;m Rawad Nounou, a creative software engineer who loves turning ideas into beautiful, user-friendly digital experiences. I thrive on collaboration, clear communication, and continuous learning. My work blends modern design with robust engineering, always aiming for impact and delight.
          </p>
          <span className="inline-block px-6 py-2 bg-background border border-primary rounded-full text-primary font-semibold shadow hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">Based in Beirut, Lebanon and Barcelona, Spain.</span>
          <span className="inline-block px-6 py-2 bg-background border border-primary rounded-full text-primary font-semibold shadow hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">Open to remote work.</span>
          <br />
          <span className="inline-block px-6 py-2 bg-background border border-primary rounded-full text-primary font-semibold shadow hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">Willing to relocate.</span>
        </motion.div>
      </div>
    </section>
  );
}
