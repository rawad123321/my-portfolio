"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Cpu,
  Palette,
  Shield
} from 'lucide-react';

const techCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    technologies: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "💎" },
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    technologies: [
      { name: "React Native", level: 85, icon: "📱" },
      { name: "Expo", level: 80, icon: "⚡" },
      { name: "Flutter", level: 70, icon: "🦋" },
      { name: "iOS", level: 75, icon: "🍎" },
      { name: "Android", level: 80, icon: "🤖" },
    ]
  },
  {
    title: "Backend",
    icon: Cpu,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    technologies: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "TensorFlow", level: 75, icon: "🧠" },
      { name: "RESTful APIs", level: 80, icon: "🔗" },
      { name: "GraphQL", level: 70, icon: "📈" },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    technologies: [
      { name: "Git", level: 90, icon: "📦" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Vercel", level: 85, icon: "▲" },
      { name: "Firebase", level: 80, icon: "🔥" },
    ]
  }
];

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-text/70 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className={`${category.bgColor} backdrop-blur-sm rounded-2xl p-6 border ${category.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.2 + techIndex * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="font-semibold text-text">{tech.name}</span>
                        </div>
                        <span className="text-sm text-text/60 font-medium">{tech.level}%</span>
                      </div>
                      
                      <div className="w-full bg-background/30 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + techIndex * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-text mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Chrome Extensions API",
              "Web Speech API",
              "RESTful APIs",
              "GraphQL",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "Jest Testing",
              "Cypress",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-surface/50 backdrop-blur-sm text-text rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
