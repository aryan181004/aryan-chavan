
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img 
                  src="/lovable-uploads/65768063-5755-409c-997c-ea1415b2a38c.png" 
                  alt="Aryan Chavan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Aryan Chavan
          </h1>
          
          <div className="text-xl md:text-2xl text-blue-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer & ML Engineer
            </span>
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s'}}>
            Information Technology student at PICT with expertise in full-stack development, 
            machine learning, and cloud deployment. Passionate about building scalable solutions 
            and innovative technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a 
              href="https://github.com/aryan181004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aryan-chavan-8522bb264/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:aryan2004.chavan@gmail.com"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+918408808301"
              className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
