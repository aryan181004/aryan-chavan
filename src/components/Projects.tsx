
import React from 'react';
import { ExternalLink, Github, Calendar, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pictofest",
      description: "A full-stack art competition platform with secure image uploads, role-based authentication, and optimized database queries. Features public voting system with fraud prevention and event-driven email notifications.",
      technologies: ["React", "Firebase", "PostgreSQL", "Node.js", "Express", "Azure"],
      period: "Dec 2024 – Jan 2025",
      liveUrl: "https://pictofest.in",
      highlights: [
        "Deployed scalable architecture using Azure cloud services",
        "Implemented NGINX and PM2 for production environment",
        "Built comprehensive fraud prevention system",
        "Integrated event-driven email notifications"
      ]
    },
    {
      title: "Foveated Rendering",
      description: "Optimized CPU performance by dynamically adjusting screen resolution across foveal, near, and far peripheral regions. Implemented real-time gaze and blink detection for hands-free cursor control.",
      technologies: ["Python", "OpenCV", "NumPy", "Mediapipe"],
      period: "Oct 2024",
      highlights: [
        "Real-time gaze and blink detection",
        "Hands-free cursor control system",
        "Visual boundary markers for improved UX",
        "Dynamic resolution adjustment optimization"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={16} />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Special Recognition */}
                  {project.title === "Foveated Rendering" && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="text-yellow-400" size={16} />
                        <span className="text-yellow-400 font-medium text-sm">Recognition</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Secured 5th position in department for poster presentation to industry experts
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/aryan181004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
