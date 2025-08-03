'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Github, Linkedin, Instagram, Send } from 'lucide-react';
import BodyClassName from '../components/BodyClassName';

const ConnectPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/rohanvenkatesha' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/rohan-venkatesha/' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/rohan.v10' },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    console.log({ name, email, message });
    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <>
      <BodyClassName className="bg-default" />
      <Header />
      <main className="px-4 md:px-8 max-w-5xl mx-auto">
        {/* Hero */}
        <section className="text-center my-16 md:my-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400"
          >
            Let&apos;s Build Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Have a project in mind, a question about my travels, or just want to say hi? My inbox is always open.
          </motion.p>
        </section>

        {/* Content Grid */}
        <section className="grid md:grid-cols-2 gap-16 items-start text-center md:text-left">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Find me elsewhere</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-slate-400 max-w-sm md:max-w-none">
              For professional inquiries, please use the form. For everything else, feel free to connect on social media. I&apos;m always happy to talk about code, cameras, or kilometers.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 flex flex-col items-center md:items-start"
          >
            <div className="w-full max-w-sm md:max-w-none">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>
            <div className="w-full max-w-sm md:max-w-none">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>
            <div className="w-full max-w-sm md:max-w-none">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 w-full max-w-sm md:max-w-none">
              <button
                type="submit"
                disabled={status === 'Sending...'}
                className="btn btn-primary flex items-center gap-2"
              >
                <Send size={18} />
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              {status && <p className="text-sm text-slate-400">{status}</p>}
            </div>
          </motion.form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ConnectPage;
