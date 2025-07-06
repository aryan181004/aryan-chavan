
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed text-lg text-center">
                I'm always interested in discussing new opportunities, exciting projects, 
                or just having a conversation about technology and innovation. Let's connect!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <a 
                href="mailto:aryan2004.chavan@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                  <Mail className="text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">aryan2004.chavan@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+918408808301"
                className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg group-hover:bg-green-500/20 transition-all duration-300">
                  <Phone className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+91-8408808301</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://github.com/aryan181004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 group"
                >
                  <Github className="text-gray-400 group-hover:text-white transition-colors duration-300" size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/aryan-chavan-8522bb264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-110 group"
                >
                  <Linkedin className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
