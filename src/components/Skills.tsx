
import React from 'react';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C++", "Python", "JavaScript", "HTML", "CSS"],
      color: "blue"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "HBase"],
      color: "green"
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["Node.js", "Express.js", "Flask", "React"],
      color: "purple"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Firebase", "Hadoop", "HiveQL", "Postman", "Azure", "NGINX"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500/10 to-blue-600/10 border-blue-500/30 text-blue-400",
      green: "from-green-500/10 to-green-600/10 border-green-500/30 text-green-400",
      purple: "from-purple-500/10 to-purple-600/10 border-purple-500/30 text-purple-400",
      orange: "from-orange-500/10 to-orange-600/10 border-orange-500/30 text-orange-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${getColorClasses(category.color)} rounded-lg border`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 bg-gradient-to-r ${getColorClasses(category.color)} rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coursework Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Relevant Coursework
          </h3>
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Object-Oriented Programming",
                "Data Structures & Algorithms", 
                "Computer Networks",
                "Database Management Systems",
                "Data Science and Big Data Analysis",
                "Discrete Mathematics",
                "Processor Architecture"
              ].map((course) => (
                <div 
                  key={course}
                  className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300 text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
