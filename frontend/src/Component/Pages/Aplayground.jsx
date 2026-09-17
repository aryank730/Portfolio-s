import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCode, FaSearch, FaPalette, FaKeyboard } from 'react-icons/fa';
import { HiOutlineCalculator } from 'react-icons/hi2';
import { TbApi, TbMarkdown } from 'react-icons/tb';
import { MdGradient } from 'react-icons/md';
import { BsDroplet, BsWater, BsGrid3X3Gap, BsImage, BsBook } from 'react-icons/bs';

const tools = [
    // {
    //     to: 'bmicalc',
    //     icon: <HiOutlineCalculator />,
    //     name: 'BMI Calculator',
    //     description: 'Height and weight in, BMI and category out.',
    // },
    {
        to: 'json-formatter',
        icon: <FaCode />,
        name: 'JSON Formatter',
        description: 'Format, validate and minify JSON with error feedback.',
    },
    {
        to: 'regex-tester',
        icon: <FaSearch />,
        name: 'Regex Tester',
        description: 'Live match highlighting against any pattern and flags.',
    },
    {
        to: 'api-tester',
        icon: <TbApi />,
        name: 'API Request Tester',
        description: 'A mini-Postman — send requests, inspect the response.',
    },
    {
        to: 'color-palette',
        icon: <FaPalette />,
        name: 'Color Palette & Contrast',
        description: 'Generate shades and check WCAG contrast compliance.',
    },
    {
        to: 'markdown-preview',
        icon: <TbMarkdown />,
        name: 'Markdown Preview',
        description: 'Write markdown, see the rendered output live.',
    },
    {
        to: 'gradient-generator',
        icon: <MdGradient />,
        name: 'CSS Gradient Generator',
        description: 'Build linear or radial gradients, copy the CSS.',
    },
    {
        to: 'typing-test',
        icon: <FaKeyboard />,
        name: 'Typing Speed Test',
        description: 'Check your words-per-minute and accuracy.',
    },
    {
        to: 'glass-generator',
        icon: <BsDroplet />,
        name: 'Glassmorphism Generator',
        description: 'Frosted-glass boxes — size, blur, border and shadow, live.',
    },
    {
        to: 'shape-generator',
        icon: <BsWater />,
        name: 'Shape Generator',
        description: 'Smooth wave dividers or organic blobs, randomized on demand.',
    },
    {
        to: 'flex-grid-playground',
        icon: <BsGrid3X3Gap />,
        name: 'Flexbox / Grid Playground',
        description: 'Toggle every layout property, watch it change live.',
    },
    {
        to: 'image-compressor',
        icon: <BsImage />,
        name: 'Image Compressor',
        description: 'Resize and compress images entirely in your browser.',
    },
    {
        to: 'guestbook',
        icon: <BsBook />,
        name: 'Guestbook',
        description: 'Leave a note — anything from feedback to just saying hi.',
    },
];

const Aplayground = () => {
    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto spine pl-6 md:pl-10">
                <p className="tick font-mono text-sm text-muted mb-3">Playground</p>
                <h1 className="font-display text-3xl md:text-4xl text-text font-semibold mb-3">
                    Small tools, built for fun
                </h1>
                <p className="text-muted max-w-xl mb-12">
                    A set of working utilities I built to practice, and that you might find useful too.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                    {tools.map((tool) => (
                        <NavLink
                            key={tool.to}
                            to={tool.to}
                            className="group bg-surface border border-line rounded-sm p-5 hover:border-accent transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-accent text-lg">{tool.icon}</span>
                                <h3 className="font-display text-text font-medium group-hover:text-accent transition-colors">
                                    {tool.name}
                                </h3>
                            </div>
                            <p className="text-sm text-muted leading-relaxed">{tool.description}</p>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Aplayground;