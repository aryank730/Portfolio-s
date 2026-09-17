import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const RADIUS = 130;
const CENTER = 200;

const polarToCartesian = (angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        x: CENTER + RADIUS * Math.cos(rad),
        y: CENTER + RADIUS * Math.sin(rad),
    };
};

const ArchitectureModal = ({ open, onClose, data }) => {
    const [view, setView] = useState('access');
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedStep, setSelectedStep] = useState(0);

    // Reset to a sane state whenever a different project's data is opened
    useEffect(() => {
        if (data) {
            setView('access');
            setSelectedRole(data.roles?.[0]?.id ?? null);
            setSelectedStep(0);
        }
    }, [data]);

    if (!open || !data) return null;

    const { hubLabel, hubSublabel, title, subtitle, roleLabel, roles, flowSteps, flowNote } = data;
    const activeRole = roles.find((r) => r.id === selectedRole) || roles[0];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-ink border border-line rounded-sm w-full max-w-3xl max-h-[85vh] overflow-y-auto">
                <div className="flex items-center justify-between p-5 border-b border-line sticky top-0 bg-ink z-10">
                    <div>
                        <p className="font-mono text-xs text-muted mb-1">{title}</p>
                        <h3 className="font-display text-xl text-text font-semibold">{subtitle}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 border border-line rounded-sm text-muted hover:text-text hover:border-accent transition"
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className="flex gap-2 p-5 pb-0">
                    <button
                        onClick={() => setView('access')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${
                            view === 'access'
                                ? 'bg-accent text-ink border-accent'
                                : 'border-line text-muted hover:text-text'
                        }`}
                    >
                        {roleLabel || 'Access View'}
                    </button>
                    <button
                        onClick={() => setView('flow')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${
                            view === 'flow'
                                ? 'bg-accent text-ink border-accent'
                                : 'border-line text-muted hover:text-text'
                        }`}
                    >
                        Request Flow View
                    </button>
                </div>

                {view === 'access' ? (
                    <div className="p-5 grid md:grid-cols-[auto_1fr] gap-6 items-start">
                        <svg width="280" height="280" viewBox="0 0 400 400" className="mx-auto">
                            {roles.map((role) => {
                                const pos = polarToCartesian(role.angle);
                                return (
                                    <line
                                        key={`line-${role.id}`}
                                        x1={CENTER}
                                        y1={CENTER}
                                        x2={pos.x}
                                        y2={pos.y}
                                        stroke={role.id === selectedRole ? '#D4A72C' : '#24435C'}
                                        strokeWidth="1.5"
                                    />
                                );
                            })}

                            <circle cx={CENTER} cy={CENTER} r="48" fill="#122A3D" stroke="#24435C" />
                            <text x={CENTER} y={CENTER - 4} textAnchor="middle" fontSize="13" fill="#EAF1F5" fontWeight="600">
                                {hubLabel}
                            </text>
                            <text x={CENTER} y={CENTER + 14} textAnchor="middle" fontSize="9" fill="#7691A3">
                                {hubSublabel}
                            </text>

                            {roles.map((role) => {
                                const pos = polarToCartesian(role.angle);
                                const active = role.id === selectedRole;
                                return (
                                    <g
                                        key={role.id}
                                        onClick={() => setSelectedRole(role.id)}
                                        className="cursor-pointer"
                                    >
                                        <circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="34"
                                            fill={active ? '#D4A72C' : '#122A3D'}
                                            stroke={active ? '#D4A72C' : '#24435C'}
                                            strokeWidth="1.5"
                                        />
                                        <text
                                            x={pos.x}
                                            y={pos.y + 4}
                                            textAnchor="middle"
                                            fontSize="11"
                                            fontWeight="600"
                                            fill={active ? '#0B1D2B' : '#EAF1F5'}
                                        >
                                            {role.label}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>

                        <div className="border border-line rounded-sm p-5 bg-surface">
                            <p className="font-mono text-xs text-accent uppercase tracking-wide mb-2">
                                {activeRole.label}
                            </p>
                            <p className="text-text leading-relaxed text-sm">{activeRole.access}</p>
                        </div>
                    </div>
                ) : (
                    <div className="p-5">
                        <div className="flex flex-wrap gap-2 mb-5">
                            {flowSteps.map((step, i) => (
                                <React.Fragment key={step.title}>
                                    <button
                                        onClick={() => setSelectedStep(i)}
                                        className={`px-3 py-2 rounded-sm text-xs font-mono border transition ${
                                            selectedStep === i
                                                ? 'border-accent text-accent bg-surface'
                                                : 'border-line text-muted hover:text-text'
                                        }`}
                                    >
                                        {i + 1}. {step.title}
                                    </button>
                                    {i < flowSteps.length - 1 && (
                                        <span className="text-muted self-center">→</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="border border-line rounded-sm p-5 bg-surface">
                            <p className="font-mono text-xs text-accent uppercase tracking-wide mb-2">
                                Step {selectedStep + 1}
                            </p>
                            <h4 className="text-text font-medium mb-2">{flowSteps[selectedStep].title}</h4>
                            <p className="text-muted text-sm leading-relaxed">{flowSteps[selectedStep].detail}</p>
                        </div>

                        {flowNote && selectedStep === flowSteps.length - 1 && (
                            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-live">
                                <span className="w-1.5 h-1.5 rounded-full bg-live" />
                                {flowNote}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ArchitectureModal;