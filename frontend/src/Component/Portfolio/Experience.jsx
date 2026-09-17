import React from 'react';

const roles = [
    {
        period: '07/2024 — Present',
        company: 'Smart School Education Pvt. Ltd.',
        title: 'Software Developer (MERN Stack)',
        location: 'Noida, India',
        points: [
            'Built and maintained full-stack web applications with React.js, Node.js, Express.js and MongoDB, designing and documenting REST APIs for web and admin-panel clients.',
            'Implemented JWT authentication and role-based access control for secure admin systems.',
            'Worked across sprint cycles with cross-functional teams to ship features on deadline.',
        ],
        current: true,
    },
    {
        period: '12/2023 — 05/2024',
        company: 'DCM Infotech Pvt. Ltd.',
        title: 'Junior Specialist, Frontend Development',
        location: 'Jaipur, India',
        points: [
            'Built and optimized responsive corporate websites with HTML, CSS, JavaScript and React.js, improving load performance through image compression, minification and browser caching.',
            'Resolved UI/UX bugs and shipped new features from client feedback, adapting quickly to new tools and requirements.',
        ],
        current: false,
    },
];

const Experience = () => {
    return (
        <section className="bg-ink py-20 px-6 md:px-12" id="experience">
            <div className="max-w-5xl mx-auto spine pl-6 md:pl-10">
                <p className="tick font-mono text-sm text-muted mb-3">Career</p>
                <h2 className="font-display text-3xl md:text-4xl text-text font-semibold mb-12">Experience</h2>

                <div className="space-y-12">
                    {roles.map((role) => (
                        <div key={role.company} className="relative pl-6 border-l border-line">
                            <div
                                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                                    role.current ? 'bg-live' : 'bg-line'
                                }`}
                            />
                            <p className="font-mono text-xs text-muted mb-2">{role.period}</p>
                            <h3 className="font-display text-xl text-text font-medium">{role.title}</h3>
                            <p className="text-accent text-sm mt-1">
                                {role.company} · {role.location}
                            </p>
                            <ul className="mt-4 space-y-2">
                                {role.points.map((point) => (
                                    <li key={point} className="text-muted text-sm leading-relaxed pl-4 relative">
                                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-line" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;