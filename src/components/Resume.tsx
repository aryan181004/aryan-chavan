import React from 'react';
import { FileText } from 'lucide-react';

const Resume = () => {
  const resumeLink = "https://drive.google.com/file/d/1pekyPsSxCb5UhHO8an6hyl957nJ1qJdt/view?usp=sharing";

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Resume</span>
        </h2>

        <div className="flex justify-center">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <FileText size={24} />
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;