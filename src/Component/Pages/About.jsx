import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaDatabase, FaArrowRight, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const InfoCard = ({ icon, title, description, delay = 0, gradient }) => {
        const [cardVisible, setCardVisible] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setCardVisible(true);
            }, delay);
            return () => clearTimeout(timer);
        }, [delay]);

        return (
            <div 
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`}></div>
                
                <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>
                    <div className="flex-1">
                        <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        );
    };

    const TechStack = () => (
        <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
                {[
                    { icon: <FaReact className="w-4 h-4" />, name: 'React', color: 'text-cyan-400' },
                    { icon: <SiJavascript className="w-4 h-4" />, name: 'JavaScript', color: 'text-yellow-400' },
                    { icon: <SiTypescript className="w-4 h-4" />, name: 'TypeScript', color: 'text-blue-400' },
                    { icon: <FaNodeJs className="w-4 h-4" />, name: 'Node.js', color: 'text-green-400' },
                    { icon: <SiMongodb className="w-4 h-4" />, name: 'MongoDB', color: 'text-green-500' },
                    { icon: <SiTailwindcss className="w-4 h-4" />, name: 'Tailwind', color: 'text-cyan-500' },
                    { icon: <FaGitAlt className="w-4 h-4" />, name: 'Git', color: 'text-red-400' },
                ].map((tech, index) => (
                    <div 
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-md"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <span className={tech.color}>{tech.icon}</span>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                        Passionate developer crafting digital experiences with clean code and modern technologies
                    </p>
                </div>

                <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    
                    {/* Left: Description */}
                    <div className="space-y-6">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                Hi there! I'm <span className="font-bold text-gray-900 dark:text-white">Aryan Katiyar</span>, 
                                a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">MERN Stack Developer</span> 
                                based in Noida, Uttar Pradesh.
                            </p>
                            
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                With over <span className="font-semibold text-gray-900 dark:text-white">1.5+ Years</span> of professional experience, 
                                I specialize in creating elegant, scalable web applications that deliver exceptional user experiences. 
                                My journey in software development has equipped me with a deep understanding of both frontend and backend technologies.
                            </p>

                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I believe in the power of <span className="font-semibold">clean code</span>, <span className="font-semibold">user-centric design</span>, 
                                and <span className="font-semibold">continuous learning</span>. Every project is an opportunity to solve complex problems 
                                and create solutions that make a difference.
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <TechStack />

                        {/* CTA Button */}
                        <NavLink 
                            to="/contact" 
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 mt-6"
                        >
                            Let's Work Together
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </NavLink>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <InfoCard
                            icon={<FaGraduationCap className="w-6 h-6" />}
                            title="Education"
                            description="Master's of Computer Applications with focus on modern web technologies and software engineering."
                            delay={200}
                            gradient="from-blue-500 to-cyan-500"
                        />

                        <InfoCard
                            icon={<FaMapMarkerAlt className="w-6 h-6" />}
                            title="Location"
                            description="Based in Noida, Uttar Pradesh - India's growing tech hub with vibrant developer community."
                            delay={400}
                            gradient="from-purple-500 to-pink-500"
                        />

                        <InfoCard
                            icon={<FaCode className="w-6 h-6" />}
                            title="Frontend Expertise"
                            description="React, TypeScript, Tailwind CSS, and modern JavaScript frameworks for responsive UIs."
                            delay={600}
                            gradient="from-green-500 to-emerald-500"
                        />

                        <InfoCard
                            icon={<FaDatabase className="w-6 h-6" />}
                            title="Backend & Database"
                            description="Node.js, Express, MongoDB, REST APIs, and server-side architecture for scalable applications."
                            delay={800}
                            gradient="from-orange-500 to-amber-500"
                        />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { number: "1.5+", label: "Years Experience" },
                        { number: "20+", label: "Projects Completed" },
                        { number: "10+", label: "Technologies" },
                        { number: "100%", label: "Client Satisfaction" }
                    ].map((stat, index) => (
                        <div 
                            key={stat.label}
                            className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300"
                            style={{ animationDelay: `${index * 200 + 1000}ms` }}
                        >
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;