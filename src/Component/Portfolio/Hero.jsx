import React from 'react'
import Rank from './Rank'
import { NavLink } from 'react-router-dom'
import Aplayground from '../Pages/Aplayground'
import { SiGmail } from "react-icons/si";
import myimg from '../../assets/myimg.png'
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

const Home = () => {


    return (
        <>
            <div className="bg-black md:m-auto pt-18 px-4 md:px-8">

                <div className=" flex flex-col-reverse md:flex-row  justify-around  gap-auto md:gap-4  py-4  mt-2 md:mt-12">

                    <div className="relative w-full md:w-3xl z-20 text-white p-6 pl-10 pr-8 md:pr-20 sm:pl-10 lg:pr-20">
                        <div
                            class="absolute -left-6 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
                            <div class="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
                            <p>All Skills</p>
                        </div>

                        {/* <!-- Main Heading --> */}
                        <h1 className="text-3xl md:text-[36px] lg:text-[46px] pr-8  text-white font-bold">
                            <span className="text-[#C0B7E8]">Building </span>Innovative Digital Experiences
                            <span className="text-[#C0B7E8]"> That Inspire</span>
                        </h1>

                        <p className=" text-justify text-white mt-4 md:mt-9  mb-10 md:mb-16">
                            I'm Aryan Katiyar, a MERN Stack Developer with hands-on experience in building responsive, user-friendly, and scalable web applications. I specialize in React.js, JavaScript, Node.js, MongoDB, HTML, and CSS, with strong skills in problem-solving and debugging.

With expertise across both front-end and back-end development, I deliver end-to-end solutions that are not only efficient but also optimized for performance and user experience.

                        </p>

                        <div class=" pb-10 flex flex-col-reverse lg:flex-row gap-0 justify-between items-center text-white">
                            <div class="flex-1">

                                <div class="flex space-x-4 gap-4 flex-col md:flex-row">
                                    <a href="mailto:acode.master@example.com" class="relative overflow-hidden rounded-md bg-indigo-600 px-6 py-2 font-bold text-white shadow-md group focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 hover:bg-indigo-700 transition-colors duration-300">
                                        <span class="absolute inset-0 bg-white opacity-20 -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                        <span class="relative flex items-center gap-2 shadow z-10">Send Mail <span><SiGmail color='orange' /></span></span>
                                    </a>
                                    <button  class="relative overflow-hidden rounded-md border border-indigo-500 px-6 py-2 font-bold text-indigo-400 bg-transparent group hover:bg-indigo-600 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1">
                                        <span class="absolute inset-0 bg-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                        <span class="relative z-10">Explore Below</span>
                                    </button>
                                </div>

                                <div class="flex space-x-10 pt-0 md:pt-8 text-indigo-300 mt-10 md:mt-0 max-w-xl">
                                    <div class="text-center">
                                        <p class="text-3xl font-bold">7+</p>
                                        <p class="text-sm">Team Colabration</p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-3xl font-bold">10+</p>
                                        <p class="text-sm">Projects Delivered</p>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-3xl font-bold">10k+</p>
                                        <p class="text-sm">Lines of Code</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 z-20 bg-black rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] bg-opacity-20">
                        <img
                            className="max-w-[400px] rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] w-full"
                            src={myimg}
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex relative  -mb-8 shadow-amber-50 text-shadow-yellow-50 z-30 justify-around sm:justify-around gap-2  items-center mx-auto w-fit  rounded-2xl md:rounded-[90px] p-2 sm:p-8  bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E]">
                    <div className=" text-white  px-2 md:px-20">
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6  gap-6 place-items-center">
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
                </div>
            </div>

        </>
    )
}

export default Home