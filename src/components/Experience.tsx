
import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Briefcase className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Machine Learning Intern</h3>
                  <p className="text-lg text-blue-400 font-medium">LSOYS Apps</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Feb 2025 – May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Remote</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Contributions</h4>
                <div className="space-y-4">
                  {[
                    {
                      area: "Security & Surveillance",
                      description: "Developed fraud detection algorithms and face recognition systems for security footage analysis, enhancing surveillance capabilities in digital platforms"
                    },
                    {
                      area: "E-commerce Optimization", 
                      description: "Implemented machine learning models for personalized product recommendations, increasing user engagement and sales in e-commerce applications"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <p className="text-blue-300 font-medium mb-1">{item.area}</p>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technologies & Skills Applied</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Machine Learning",
                    "Computer Vision", 
                    "Fraud Detection",
                    "Face Recognition",
                    "Recommendation Systems",
                    "Python",
                    "Data Analysis"
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-lg text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Impact</h4>
                <p className="text-gray-300 text-sm">
                  Successfully enhanced digital platform security through advanced ML algorithms while 
                  simultaneously boosting e-commerce performance through intelligent recommendation systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
