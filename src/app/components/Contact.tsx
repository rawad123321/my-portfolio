"use client";

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, CheckCircle, MessageCircle, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('message');
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const contacts = [
    {
      name: 'Email',
      value: 'rawadnounou@gmail.com',
      icon: Mail,
      color: 'from-blue-600 to-purple-600',
      link: 'mailto:rawadnounou@gmail.com',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/rawad-nounou-79a773325',
      icon: Linkedin,
      color: 'from-blue-400 to-blue-700',
      link: 'https://www.linkedin.com/in/rawad-nounou-79a773325/',
    },
    {
      name: 'GitHub',
      value: 'github.com/rawad123321',
      icon: Github,
      color: 'from-gray-800 to-gray-900',
      link: 'https://github.com/rawad123321',
    },
     {
    name: 'WhatsApp',
    value: 'Feel free to send me a WhatsApp message',
    icon: MessageCircle,
    color: 'from-green-400 to-green-600',
    link: 'https://wa.me/96171393753?text=Hi%20Rawad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!',
  },
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId =  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!; 
      const templateId =  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey =  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
      
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'rawadnounou@gmail.com',
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setIsSubmitted(true);
      // Removed reset() as it's not defined in the provided code

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-text/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-4">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-primary" />
                Let&apos;s Connect
              </h3>
              <p className="text-text/70 text-lg leading-relaxed mb-8">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.name}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`backdrop-blur-sm rounded-xl p-4 border hover:shadow-lg transition-all duration-300 group`}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-text group-hover:text-primary transition-colors duration-300">
                          {contact.name}
                        </div>
                        <div className="text-text/60 text-sm">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-3 text-text/70"
            >
              <MapPin className="w-5 h-5 text-primary" />
              <span>Available for remote work worldwide</span>
            </motion.div>
          </motion.div>

          {/* Tabbed Contact Form / Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 glass-card"
          >
            {/* Tabs */}
            <div className="flex gap-4 mb-6 justify-center">
              <button
                className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'message' ? 'bg-black border-primary text-white' : 'bg-surface/50 border-transparent text-text/70 hover:bg-black hover:text-white'}`}
                onClick={() => setActiveTab('message')}
                onMouseEnter={() => setActiveTab('message')}
              >
                Send me a message
              </button>
              <button
                className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'zoom' ? 'bg-black border-primary text-white' : 'bg-surface/50 border-transparent text-text/70 hover:bg-black hover:text-white'}`}
                onClick={() => setActiveTab('zoom')}
                onMouseEnter={() => setActiveTab('zoom')}
              >
                Book a Zoom Call
              </button>
            </div>
            {/* Tab Content */}
            {activeTab === 'message' && (
              <div>
                <h3 className="text-2xl font-bold text-text mb-6">Send me a message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-text mb-2">Message Sent!</h4>
                    <p className="text-text/70">Thank you for reaching out. I&apos;ll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                          Name *
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                        Subject *
                      </label>
                      <input
                        {...register('subject', { required: 'Subject is required' })}
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg text-text placeholder-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            )}
            {activeTab === 'zoom' && (
              <div className="bg-black rounded-2xl p-2 md:p-6 border border-primary/20 shadow-md w-full">
                <h3 className="text-2xl font-bold text-white mb-6">Book a Zoom Call</h3>
                <div className="w-full flex justify-center items-center">
                  <iframe
                    src="https://calendly.com/rawadnounou/30min"
                    width="100%"
                    height="400"
                    frameBorder={"0"}
                    className="rounded-2xl border border-primary/20 bg-black block max-w-full"
                    title="Book a Zoom Call"
                    style={{ width: '100%', minWidth: 0, maxWidth: '100%', minHeight: '320px', maxHeight: '400px', backgroundColor: '#000' }}
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Fix FormData type
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
