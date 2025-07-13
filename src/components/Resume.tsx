import React from "react";
import { FileText, Download, Eye, ArrowRight } from "lucide-react";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1pekyPsSxCb5UhHO8an6hyl957nJ1qJdt/view?usp=sharing";
  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1pekyPsSxCb5UhHO8an6hyl957nJ1qJdt";

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* View Online */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <Eye className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  View Online
                </h3>
                <p className="text-sm text-gray-400">Open in Google Drive</p>
              </div>
            </div>
            <ArrowRight
              className="text-gray-400 group-hover:text-blue-400 transition-all duration-300"
              size={20}
            />
          </a>

          {/* Download PDF */}
          <a
            href={downloadLink}
            download
            className="flex items-center justify-between p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <Download className="text-green-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Download PDF
                </h3>
                <p className="text-sm text-gray-400">Save to your device</p>
              </div>
            </div>
            <ArrowRight
              className="text-gray-400 group-hover:text-green-400 transition-all duration-300"
              size={20}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
