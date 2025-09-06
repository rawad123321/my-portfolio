"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';

const projects = [
	{
		name: "PackRun",
		description: "A location based mobile app that connects runners in real time. It offers live tracking, group run formation, and social challenges to make running more interactive, motivating, and community driven.",
		github: "https://github.com/rawad123321/PackRun",
		image: "/packrun.png",
		tech: ["React Native", "MapLibre", "Stadia Maps API", "Firebase"],
		category: "Mobile App",
		featured: true,
	},
	{
		name: "Speechify",
		description: "Speechify is a Text-to-Speech (TTS) Chrome extension created to help language learners, individuals with visual impairments such as dyslexia, and anyone who prefers listening over reading.",
		github: "https://github.com/rawad123321/Speechify",
		image: "/speechify.gif",
		tech: ["React", "Chrome Extensions API", "Web Speech API", "TypeScript"],
		category: "Chrome Extension",
		featured: true,
	},
	{
		name: "Stekkabok",
		description: "Developed a website for a local guest house in Iceland, enhancing its online presence and usability. The site features a modern design, responsive layout, and integrated booking system to improve user experience and streamline reservations.",
		github: "https://github.com/rawad123321/pj-stekkabok",
		image: "/stekkabok.png",
		tech: ["React", "TypeScript", "Vitest"],
		category: "Website",
		featured: true,
	},
];

export default function Projects() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const featuredProjects = projects.filter(project => project.featured);

	return (
		<section id="projects" ref={ref} className="py-24 px-6 bg-surface">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
						Featured Projects
					</h2>
					<p className="text-text/70 text-lg max-w-2xl mx-auto">
						A showcase of my recent work and side projects
					</p>
				</motion.div>

				{/* Featured Projects */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 px-4">
					{featuredProjects.map((project, index) => (
						<motion.div
							key={project.name}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="group relative bg-background/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl"
						>
							{/* Project Image - moved higher */}
							<div className="relative h-48 md:h-72 overflow-hidden">
								<Image
									src={project.image}
									alt={project.name}
									width={900}
									height={448}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									priority
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

								{/* Overlay */}
								<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="flex gap-4">
										<motion.a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 bg-background/80 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
										>
											<Github className="w-6 h-6" />
										</motion.a>
									</div>
								</div>

								{/* Category Badge */}
								<div className="absolute top-4 left-4">
									<span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full">
										{project.category}
									</span>
								</div>

								{/* Stats */}
								<div className="absolute top-4 right-4 flex gap-2">
									{/* Stats removed for simplicity */}
								</div>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
									{project.name}
								</h3>
								<p className="text-text/70 mb-4 leading-relaxed">
									{project.description}
								</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Stats */}
								<div className="flex items-center justify-between text-sm text-text/60">
									{/* Stats removed for simplicity */}
									<div className="flex gap-2">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1 hover:text-primary transition-colors duration-300"
										>
											<Github className="w-4 h-4" />
											Code
										</a>
										{/* Live link removed for simplicity */}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
