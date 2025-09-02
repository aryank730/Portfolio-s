import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiWebpack,
  SiPostman,
  SiBootstrap,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500', bg: 'bg-orange-100' },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500', bg: 'bg-blue-100' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500', bg: 'bg-yellow-100' },
  { name: 'React', icon: <FaReact />, color: 'text-sky-500', bg: 'bg-sky-100' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-600', bg: 'bg-purple-100' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400', bg: 'bg-cyan-100' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600', bg: 'bg-green-100' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', bg: 'bg-green-100' },
  { name: 'Express', icon: <SiExpress />, color: 'text-gray-400', bg: 'bg-gray-200' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500', bg: 'bg-red-100' },
  { name: 'Webpack', icon: <SiWebpack />, color: 'text-blue-400', bg: 'bg-blue-100' },
  { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500', bg: 'bg-orange-100' },
];

const SkillsSection = () => {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-20 mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-24 h-28 bg-[#121212] rounded-xl flex flex-col justify-center items-center gap-3 shadow-md transition-all duration-300 border border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >

            <div className={`p-4 rounded-xl ${skill.bg}`}>
              <div className={`text-2xl ${skill.color}`}>{skill.icon}</div>
            </div>
            <p className="text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
