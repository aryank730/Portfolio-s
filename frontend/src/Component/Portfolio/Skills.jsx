import React from 'react';

const categories = [
    {
        label: 'Frontend',
        items: ['React.js', 'Redux', 'Context API', 'React Router', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
    },
    {
        label: 'Backend',
        items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
    },
    {
        label: 'Database',
        items: ['MongoDB', 'Mongoose'],
    },
    {
        label: 'Integrations',
        items: ['Razorpay Payment Gateway', 'SMTP Email'],
    },
    {
        label: 'Tools & Platforms',
        items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Hostinger VPS', 'npm'],
    },
    {
        label: 'Generative AI',
        items: ['LLM-Based Text Generation', 'AI Image Generation', 'AI Chatbot Integration', 'Prompt Engineering'],
    },
];

const Skills = () => {
    return (
        <section className="bg-ink py-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto spine pl-6 md:pl-10">
                <p className="tick font-mono text-sm text-muted mb-3">Toolkit</p>
                <h2 className="font-display text-3xl md:text-4xl text-text font-semibold mb-12">Skills</h2>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                    {categories.map((cat) => (
                        <div key={cat.label}>
                            <h3 className="font-mono text-xs text-accent uppercase tracking-wide mb-3">{cat.label}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-sm text-text/90 border border-line rounded-sm px-2.5 py-1 bg-surface"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;