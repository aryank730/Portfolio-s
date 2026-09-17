import React, { useState, useEffect } from 'react';
import myimg from '../../assets/myimg.webp';
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
} from 'react-icons/si';
import SeasonalEffect, { getIndianSeason } from './effects/SeasonalEffects';

const stack = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Git', icon: <FaGitAlt /> },
];

const stats = [
    { value: '2+', label: 'Years building production apps' },
    { value: '4', label: 'Live platforms shipped' },
    { value: '2', label: 'Payment integrations (Razorpay)' },
];

const Hero = () => {
    const [seasonalEffect, setSeasonalEffect] = useState('snow');

    useEffect(() => {
        const season = getIndianSeason();
        setSeasonalEffect(season.effect);
    }, []);

    return (
        <>
            <SeasonalEffect effect={seasonalEffect} />

            <section className="bg-gray-900 pt-28 pb-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-3/5 spine pl-6 md:pl-10">
                        <p className="tick font-mono text-sm text-live mb-6">
                            Noida, India — open to new roles
                        </p>

                        <h1 className="font-display font-semibold text-text text-4xl sm:text-5xl leading-[1.1]">
                            Aryan Katiyar builds full-stack systems that ship — and stay up.
                        </h1>

                        <p className="text-muted text-lg leading-relaxed mt-6 max-w-xl">
                            MERN Stack Developer with 2+ years of experience architecting production platforms —
                            from multi-tenant SaaS marketplaces with role-based access, to Razorpay-integrated
                            checkouts and booking systems, deployed and maintained end to end.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <a
                                href="mailto:aryanktr730@gmail.com"
                                className="px-6 py-3 bg-accent text-ink font-medium rounded-sm hover:brightness-110 transition"
                            >
                                Email me
                            </a>
                            <button
                                type="button"
                                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 border border-line text-text font-medium rounded-sm hover:border-accent transition"
                            >
                                See the work
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="font-display text-3xl text-text">{stat.value}</p>
                                    <p className="text-sm text-muted mt-1 leading-snug">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=" -mt-6 p-1 z-20 bg-black rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] bg-opacity-20">
                        <img
                            className="max-w-[400px] rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] w-full"
                            src={myimg}
                            alt=""
                        />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-16 pl-6 md:pl-10">
                    <p className="font-mono text-xs text-muted uppercase tracking-wide mb-4">Stack in daily use</p>
                    <div className="flex flex-wrap gap-3">
                        {stack.map((tech) => (
                            <span
                                key={tech.name}
                                className="flex items-center gap-2 px-3 py-2 border border-line rounded-sm text-sm text-text bg-surface"
                            >
                                <span className="text-accent">{tech.icon}</span>
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;