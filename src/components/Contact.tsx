
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
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
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
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

          {/* Quick Message Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Quick Message</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
            
            <p className="text-center text-gray-400 text-sm mt-4">
              Or reach out directly via email or phone above
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
