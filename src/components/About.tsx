
import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Information Technology student at Pune Institute of Computer Technology 
              with a strong focus on full-stack development and machine learning. With a stellar GPA of 9.57/10.0, 
              I combine academic excellence with practical experience.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech has led me to work on exciting projects ranging from art competition platforms 
              to innovative rendering optimization techniques. I'm particularly interested in the intersection 
              of web development and artificial intelligence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full text-sm">
                Innovation Focused
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {/* Education Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-blue-400 font-medium">Bachelor of Engineering - IT</p>
                      <p className="text-gray-400 text-sm">PICT, Pune • GPA: 9.57/10.0 • 2026</p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-medium">Higher Secondary Certificate</p>
                      <p className="text-gray-400 text-sm">Global Public School • 87.5% • 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/10 rounded-lg">
                  <Award className="text-yellow-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Recent Achievements</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-yellow-400 font-medium">ZS Campus Beats Winner</p>
                      <p className="text-gray-400 text-sm">Top 125 teams across India • May 2025</p>
                    </div>
                    <div>
                      <p className="text-green-400 font-medium">Seminar Poster Runner-up</p>
                      <p className="text-gray-400 text-sm">5th position departmentally • Sept 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Based in Pune, India</h3>
                  <p className="text-gray-400">Open to remote opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
