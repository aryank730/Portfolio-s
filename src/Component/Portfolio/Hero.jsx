import React, { useState, useEffect } from 'react';
import { SiGmail } from "react-icons/si";
import myimg from '../../assets/myimg.png';
import Snowfall from 'react-snowfall';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiPostman,
} from 'react-icons/si';

// Indian seasons mapping
const INDIAN_SEASONS = {
  WINTER: { 
    months: [12, 1, 2], 
    name: 'Winter', 
    effect: 'snow',
    color: '#82C3D9'
  },
  SPRING: { 
    months: [3, 4], 
    name: 'Spring', 
    effect: 'springBreeze',
    color: '#9ACD32'
  },
  SUMMER: { 
    months: [5, 6, 7, 8, 9], 
    name: 'Summer', 
    effect: 'summer',
    color: '#FFD700'
  },
  AUTUMN: { 
    months: [10, 11], 
    name: 'Autumn', 
    effect: 'autumn',
    color: '#8B4513'
  }
};

const skills = [
    { name: 'React', icon: <FaReact />, color: 'text-sky-500', bg: 'bg-sky-100' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500', bg: 'bg-green-100' },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-400', bg: 'bg-gray-200' },
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-500', bg: 'bg-orange-100' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'text-blue-500', bg: 'bg-blue-100' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500', bg: 'bg-yellow-100' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400', bg: 'bg-cyan-100' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-red-500', bg: 'bg-red-100' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500', bg: 'bg-orange-100' },
];

// Gentle Spring Breeze Effect for March-April
const SpringBreezeEffect = () => {
  return (
    <>
      {/* Gentle wind particles (cherry blossom petals) */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: '#FFB6C1',
              opacity: 0.4 + Math.random() * 0.4,
              animation: `float ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          >
            ❀
          </div>
        ))}
        
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`breeze-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(144, 238, 144, 0.3), transparent)',
              animation: `breezeFlow ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-50vh) translateX(20vw) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes breezeFlow {
          0%, 100% {
            transform: translateX(0) scaleX(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(100px) scaleX(1.5);
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
};

// Summer Effect
const SummerEffect = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={`sunray-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            backgroundColor: '#FFD700',
            opacity: 0.3 + Math.random() * 0.4,
            animation: `sunrayFall ${8 + Math.random() * 12}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      <style>{`
        @keyframes sunrayFall {
          0% {
            transform: translateY(-100%) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Autumn Effect
const AutumnEffect = () => {
  const leaves = ['🍁', '🍂'];
  
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => {
        const leaf = leaves[Math.floor(Math.random() * leaves.length)];
        return (
          <div
            key={`leaf-${i}`}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-5%',
              animation: `leafFall ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {leaf}
          </div>
        );
      })}
      
      <style>{`
        @keyframes leafFall {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) translateX(30vw) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const Home = () => {
    const [currentSeason, setCurrentSeason] = useState(null);
    const [seasonalEffect, setSeasonalEffect] = useState('snow');

    // Determine current Indian season
    useEffect(() => {
        const getIndianSeason = () => {
            const now = new Date();
            const currentMonth = now.getMonth() + 1;
            
            for (const [seasonKey, data] of Object.entries(INDIAN_SEASONS)) {
                if (data.months.includes(currentMonth)) {
                    return {
                        key: seasonKey,
                        name: data.name,
                        effect: data.effect,
                        color: data.color
                    };
                }
            }
            return INDIAN_SEASONS.WINTER;
        };

        const season = getIndianSeason();
        setCurrentSeason(season);
        setSeasonalEffect(season.effect);
    }, []);

    // Render seasonal effect
    const renderSeasonalEffect = () => {
        switch(seasonalEffect) {
            case 'snow':
                return (
                    <Snowfall
                        color="#82C3D9"
                        style={{
                            position: 'fixed',
                            width: '100vw',
                            height: '100vh',
                            zIndex: 10,
                            pointerEvents: 'none',
                        }}
                    />
                );
            case 'springBreeze':
                return <SpringBreezeEffect />;
            case 'summer':
                return <SummerEffect />;
            case 'autumn':
                return <AutumnEffect />;
            default:
                return (
                    <Snowfall
                        color="#82C3D9"
                        style={{
                            position: 'fixed',
                            width: '100vw',
                            height: '100vh',
                            zIndex: 10,
                            pointerEvents: 'none',
                        }}
                    />
                );
        }
    };

    return (
        <>
            {renderSeasonalEffect()}

            {/* Your Original UI - EXACTLY AS IT WAS */}
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
                        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 justify-center  gap-6 place-items-center">
                            {skills.map((skill, index) => (
                                <div  key={index}
                                    className="w-24 h-28 bg-[#121212] rounded-xl flex flex-col justify-center items-center gap-3 shadow-md transition-all duration-300 border border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                                >

                                    <div className={`p-4 rounded-xl ${skill.bg}`}>
                                        <div className={`text-2xl ${skill.color}`}>{skill.icon}</div>
                                    </div>
                                    <p className="text-white  font-light">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;