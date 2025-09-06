"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
];

const socialLinks = [
	{ name: 'GitHub', href: 'https://github.com/rawad123321', icon: Github },
	{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/rawad-nounou-79a773325', icon: Linkedin },
	{ name: 'Email', href: 'mailto:rawadnounou@gmail.com', icon: Mail },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsOpen(false);
	};

	return (
		<motion.nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-background/80 backdrop-blur-md border-b border-primary/20'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
					>
						RN
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<motion.button
								key={item.name}
								onClick={() => scrollToSection(item.href)}
								className="text-text hover:text-primary transition-colors duration-200 font-medium"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.name}
							</motion.button>
						))}
					</div>

					{/* Social Links */}
					<div className="hidden md:flex items-center space-x-4">
						{socialLinks.map((social) => {
							const Icon = social.icon;
							return (
								<motion.a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 rounded-lg bg-surface hover:bg-primary/10 transition-colors duration-200"
									whileHover={{ scale: 1.1, rotate: 5 }}
									whileTap={{ scale: 0.9 }}
								>
									<Icon className="w-5 h-5 text-text hover:text-primary" />
								</motion.a>
							);
						})}
					</div>

					{/* Mobile menu button */}
					<motion.button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 rounded-lg bg-surface hover:bg-primary/10 transition-colors duration-200"
						whileTap={{ scale: 0.9 }}
					>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</motion.button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20"
					>
						<div className="px-4 py-6 space-y-4">
							{navItems.map((item) => (
								<motion.button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="block w-full text-left text-text hover:text-primary transition-colors duration-200 font-medium py-2"
									whileHover={{ x: 10 }}
								>
									{item.name}
								</motion.button>
							))}

							<div className="flex space-x-4 pt-4 border-t border-primary/20">
								{socialLinks.map((social) => {
									const Icon = social.icon;
									return (
										<motion.a
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="p-3 rounded-lg bg-surface hover:bg-primary/10 transition-colors duration-200"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
										>
											<Icon className="w-5 h-5 text-text hover:text-primary" />
										</motion.a>
									);
								})}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
