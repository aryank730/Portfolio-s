import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaDatabase } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className=" text-gray-900 py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">About Me</h2>
      <div className="w-24 h-1 bg-indigo-500 mx-auto mb-10 rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Description */}
        <div className="text-lg text-gray-800 space-y-6">
          <p>
            Hi there! I'm <span className="font-bold text-blsck">Aryan</span>, a passionate MERN stack developer
            based in Noida, Uttar Pradesh. With over 15+ months of experience as a software developer, I specialize
            in creating elegant, user-friendly web applications that deliver exceptional user experiences.
          </p>
          <p>
            My approach to design and development is inspired by the principles of simplicity, clarity, and
            attention to detail. I believe that the best digital experiences are those that feel intuitive and
            effortless, where the technology fades into the background and allows the content to take center
            stage.
          </p>
          <NavLink to="/" className="text-indigo-500 font-semibold hover:underline inline-flex items-center gap-1">
            Let’s work together <span>&rarr;</span>
          </NavLink>
        </div>

        {/* Right: Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            className="bg-[#302c42] rounded-xl p-6 flex items-start gap-4 border border-transparent hover:border-indigo-300 transition-all duration-300 shadow-md hover:shadow-blue-500/50 hover:scale-[1.02] animate-fadeInUp"
          >

            <div className="text-indigo-300 shadow-amber-50 text-2xl">
              <FaGraduationCap />
            </div>
            <div>
              <h4 className="text-white font-bold">Education</h4>
              <p className="text-gray-400 text-sm">Master's of Computer App..</p>
            </div>
          </div>

          <div
            className="bg-[#302c42] rounded-xl p-6 flex items-start gap-4 border border-transparent hover:border-indigo-300 transition-all duration-300 shadow-md hover:shadow-blue-500/50 hover:scale-[1.02] animate-fadeInUp"
          >

            <div className="text-indigo-300 text-2xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-white font-bold">Location</h4>
              <p className="text-gray-400 text-sm">Noida, Uttar Pradesh</p>
            </div>
          </div>

          <div className="bg-[#302c42] rounded-xl p-6 flex items-start gap-4 border border-transparent hover:border-indigo-300 transition-all duration-300 shadow-md hover:shadow-blue-500/50 hover:scale-[1.02] animate-fadeInUp"
          >

            <div className="text-indigo-300 text-2xl">
              <FaCode />
            </div>
            <div>
              <h4 className="text-white font-bold">Frontend</h4>
              <p className="text-gray-400 text-sm">React, Tailwind CSS</p>
            </div>
          </div>

          <div
            className="bg-[#302c42] rounded-xl p-6 flex items-start gap-4 border border-transparent hover:border-indigo-300 transition-all duration-300 shadow-md hover:shadow-blue-500/50 hover:scale-[1.02] animate-fadeInUp"
          >

            <div className="text-indigo-300 text-2xl">
              <FaDatabase />
            </div>
            <div>
              <h4 className="text-white font-bold">Backend</h4>
              <p className="text-gray-400 text-sm">Node.js,  MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
