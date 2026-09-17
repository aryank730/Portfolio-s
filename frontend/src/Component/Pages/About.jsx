import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const education = [
    { degree: 'Master of Computer Applications (MCA)', school: 'Jain University', period: '2022 — 2024' },
    { degree: 'Bachelor of Science (B.Sc)', school: 'S.J. Mahavidyalaya', period: '2019 — 2022' },
];

const softSkills = ['Team Collaboration', 'Problem-Solving', 'Communication', 'Project Ownership'];

const About = () => {
    return (
        <section className="bg-ink py-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto spine pl-6 md:pl-10">
                <p className="tick font-mono text-sm text-muted mb-3">About</p>
                <h2 className="font-display text-3xl md:text-4xl text-text font-semibold mb-12">
                    From database design to production
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-5">
                        <p className="text-text/90 text-lg leading-relaxed">
                            I'm Aryan Katiyar, a MERN Stack Developer based in Noida, India, with 2+ years of
                            experience taking full-stack products from database design through production
                            deployment.
                        </p>
                        <p className="text-muted leading-relaxed">
                            I've delivered a multi-tenant SaaS e-commerce platform, a lead management and booking
                            portal, and several client-facing web applications — designing REST APIs, implementing
                            JWT authentication and role-based access control, and integrating Razorpay payments
                            along the way.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {softSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-sm text-muted border border-line rounded-sm px-2.5 py-1"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <NavLink
                            to="/contact"
                            className="group inline-flex items-center gap-2 text-accent font-medium mt-4"
                        >
                            Let's work together
                            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </NavLink>
                    </div>

                    <div className="border-l border-line pl-6">
                        <h3 className="font-mono text-xs text-muted uppercase tracking-wide mb-4">Education</h3>
                        <div className="space-y-5">
                            {education.map((item) => (
                                <div key={item.degree}>
                                    <p className="text-text font-medium">{item.degree}</p>
                                    <p className="text-sm text-muted mt-1">
                                        {item.school} · {item.period}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;