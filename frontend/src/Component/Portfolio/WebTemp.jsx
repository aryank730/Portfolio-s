import React, { useState } from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { HiOutlineCube } from 'react-icons/hi2';
import ArchitectureModal from './ArchitectureModal';

const projects = [
    {
        name: 'Falvix',
        role: 'Multi-tenant e-commerce SaaS',
        url: 'https://falvix.com/',
        description:
            'Subdomain-based marketplace with Admin, Seller, Buyer, Staff and Agency roles under JWT-backed RBAC. Built a POS module sharing one stock pool with the storefront, a Staff Accounts module with audit-logged permissions, and a Razorpay-verified subscription Feature Store with AI product description, image generation and chatbot onboarding.',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Generative AI'],
    },
    {
        name: 'Devifer',
        role: 'Lead management & booking portal',
        url: 'https://devifer.in/',
        description:
            'Role-based portal for sales executives, managers and admins — a lead pipeline module and a client-facing project tracking view, plus a service booking and order tracking module with live status updates.',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    },
    {
        name: 'Atelier Luphien',
        role: 'E-commerce platform',
        url: 'https://atelierluphien.com/',
        description:
            'Component-based storefront (Navbar, Hero, Collection Grid, Footer) with Redux and Context API managing cart and profile state, lazy-loaded sections via Intersection Observer, and a Razorpay-integrated checkout.',
        stack: ['React.js', 'Redux', 'Context API', 'Node.js', 'Express.js', 'Razorpay'],
    },
    {
        name: 'Laxaya',
        role: 'EdTech platform',
        url: 'https://laxaya.in/',
        description:
            'Full platform for teachers, students, content and financial records, with dashboard endpoints for recent activity, top-performing content revenue and platform health — plus Razorpay for course fee payments.',
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay'],
    },
];

// Every project links to its own architecture data, keyed by name.
const architectureData = {
    Falvix: {
        title: 'Falvix — architecture',
        subtitle: 'Multi-tenant, subdomain-based platform',
        hubLabel: 'Falvix',
        hubSublabel: 'platform core',
        roleLabel: 'Access View',
        roles: [
            { id: 'admin', label: 'Admin', angle: -90, access: 'Full platform control — manages sellers, staff accounts, agencies, and global platform settings across all tenants.' },
            { id: 'seller', label: 'Seller', angle: -18, access: 'Manages their own storefront, product catalog, and orders within their subdomain. Uses AI tools to generate product descriptions and images.' },
            { id: 'buyer', label: 'Buyer', angle: 54, access: 'Browses and purchases across any seller storefront. No admin or management access — read/write limited to their own cart and orders.' },
            { id: 'staff', label: 'Staff', angle: 126, access: 'Operates under permission-preset roles assigned by Admin/Seller. Every action is audit-logged; accounts can be suspended instantly.' },
            { id: 'agency', label: 'Agency', angle: 198, access: 'Resellers who onboard and manage their own client stores independently, operating as partners under the platform.' },
        ],
        flowSteps: [
            { title: 'Subdomain request', detail: 'seller1.falvix.com hits the platform — the tenant is resolved directly from the subdomain before anything else runs.' },
            { title: 'JWT verification', detail: 'The request token is validated and the user\'s identity is confirmed against that tenant.' },
            { title: 'RBAC middleware', detail: 'The verified role is checked against the specific resource and action being requested.' },
            { title: 'Route to resource', detail: 'Request reaches POS or Storefront. Both read and write to the same shared stock pool, so a sale on either side updates inventory everywhere instantly.' },
        ],
        flowNote: 'POS and Storefront share one stock pool — no separate inventory sync needed',
    },
    Devifer: {
        title: 'Devifer — architecture',
        subtitle: 'Role-based lead & booking portal',
        hubLabel: 'Devifer',
        hubSublabel: 'booking portal',
        roleLabel: 'Access View',
        roles: [
            { id: 'admin', label: 'Admin', angle: -90, access: 'Full oversight across all leads, sales team performance, and every service booking platform-wide.' },
            { id: 'manager', label: 'Manager', angle: 0, access: 'Oversees assigned sales executives, reviews pipeline health, and reassigns leads as needed.' },
            { id: 'sales', label: 'Sales Exec.', angle: 90, access: 'Works assigned leads through the sales pipeline — updates status, logs follow-ups, and closes deals.' },
            { id: 'client', label: 'Client', angle: 180, access: 'Tracks their own project or service status through a read-only, client-facing portal — no access to internal lead data.' },
        ],
        flowSteps: [
            { title: 'Booking request', detail: 'A client submits a service booking request through the portal.' },
            { title: 'Lead created', detail: 'Node.js/Express creates a lead record and places it into the sales pipeline.' },
            { title: 'RBAC visibility', detail: 'Only the assigned sales executive, their manager, and admins can see the lead\'s internal details.' },
            { title: 'Status sync', detail: 'As the sales executive updates status, the same change reflects live on the client\'s project tracking portal.' },
        ],
        flowNote: 'Client and internal sales team see the same booking, through two very different views',
    },
    'Atelier Luphien': {
        title: 'Atelier Luphien — architecture',
        subtitle: 'Component-based storefront & checkout',
        hubLabel: 'Storefront',
        hubSublabel: 'component tree',
        roleLabel: 'Component Map',
        roles: [
            { id: 'navbar', label: 'Navbar', angle: -90, access: 'Persistent navigation with a live cart count pulled directly from Redux state.' },
            { id: 'hero', label: 'Hero', angle: -18, access: 'First-paint section — not lazy-loaded, so the landing view renders immediately.' },
            { id: 'grid', label: 'Grid', angle: 54, access: 'Collection Grid, lazy-loaded via the Intersection Observer API — only fetches and renders once scrolled into view.' },
            { id: 'cart', label: 'Cart', angle: 126, access: 'Redux-managed cart state shared between the Navbar badge, cart drawer, and checkout — updates instantly everywhere.' },
            { id: 'checkout', label: 'Checkout', angle: 198, access: 'Reads the current Redux cart state and initiates a Razorpay-integrated payment flow.' },
        ],
        flowSteps: [
            { title: 'Section mounts', detail: 'Below-fold sections stay unrendered until the Intersection Observer detects they\'re about to enter the viewport.' },
            { title: 'Data hook fires', detail: 'A custom data-fetching hook requests the relevant product or collection data only when needed.' },
            { title: 'State updates', detail: 'User actions like add-to-cart or profile edits update Redux and Context state, re-rendering only the components that depend on them.' },
            { title: 'Checkout', detail: 'The Checkout component reads the current Redux cart state and hands it to the Razorpay-integrated payment flow.' },
        ],
        flowNote: 'Lazy loading and custom hooks keep the initial page light, even with a full product catalog',
    },
    Laxaya: {
        title: 'Laxaya — architecture',
        subtitle: 'Teacher, student & content management platform',
        hubLabel: 'Laxaya',
        hubSublabel: 'edtech core',
        roleLabel: 'Access View',
        roles: [
            { id: 'admin', label: 'Admin', angle: -90, access: 'Views platform health indicators and top-performing content revenue data across the whole platform.' },
            { id: 'teacher', label: 'Teacher', angle: 30, access: 'Manages their own content items and course materials, and views engagement on what they\'ve published.' },
            { id: 'student', label: 'Student', angle: 150, access: 'Accesses enrolled courses and content, and pays course fees directly through Razorpay.' },
        ],
        flowSteps: [
            { title: 'Content request', detail: 'A student requests access to enrolled course content.' },
            { title: 'Express validates', detail: 'The backend checks enrollment and fetches records from MongoDB, across the teachers, students, content and financial collections.' },
            { title: 'Dashboard aggregation', detail: 'Endpoints aggregate data like recent teacher/student activity and top-performing content revenue for the admin dashboard.' },
            { title: 'Course fee payment', detail: 'Razorpay handles the course fee payment, and the financial records collection is updated.' },
        ],
        flowNote: 'The same MongoDB collections power both the student-facing app and the admin analytics dashboard',
    },
};

const WebTemp = () => {
    const [archProject, setArchProject] = useState(null);

    return (
        <section className="bg-ink py-20 px-6 md:px-12" id="work">
            <div className="max-w-5xl mx-auto spine pl-6 md:pl-10">
                <p className="tick font-mono text-sm text-muted mb-3">Selected work</p>
                <h2 className="font-display text-3xl md:text-4xl text-text font-semibold mb-12">
                    Platforms in production
                </h2>

                <div className="divide-y divide-line border-t border-b border-line">
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 py-8 hover:bg-surface/40 transition-colors px-2 -mx-2"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-live" />
                                    <h3 className="font-display text-xl text-text font-medium">{project.name}</h3>
                                    <FaArrowUpRightFromSquare className="w-3 h-3 text-muted group-hover:text-accent transition-colors" />
                                </div>
                                <p className="text-sm text-muted mt-1">{project.role}</p>

                                {architectureData[project.name] && (
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setArchProject(project.name);
                                        }}
                                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-accent border border-line rounded-sm px-2.5 py-1.5 hover:border-accent transition"
                                    >
                                        <HiOutlineCube className="w-3.5 h-3.5" />
                                        View architecture
                                    </button>
                                )}
                            </div>
                            <div>
                                <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="font-mono text-xs text-text/80 border border-line rounded-sm px-2 py-1"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <ArchitectureModal
                open={!!archProject}
                onClose={() => setArchProject(null)}
                data={archProject ? architectureData[archProject] : null}
            />
        </section>
    );
};

export default WebTemp;