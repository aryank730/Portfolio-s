import React, { useMemo, useState } from 'react';
import { FaRegCopy, FaCheck, FaPlus, FaTrash } from 'react-icons/fa';

const GradientGenerator = () => {
    const [type, setType] = useState('linear');
    const [angle, setAngle] = useState(135);
    const [stops, setStops] = useState([
        { color: '#0B1D2B', pos: 0 },
        { color: '#D4A72C', pos: 100 },
    ]);
    const [copied, setCopied] = useState(false);

    const updateStop = (i, field, value) => {
        setStops((prev) => prev.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)));
    };
    const addStop = () => setStops((prev) => [...prev, { color: '#5FB88F', pos: 50 }]);
    const removeStop = (i) => setStops((prev) => (prev.length > 2 ? prev.filter((_, idx) => idx !== i) : prev));

    const stopsCss = useMemo(
        () => stops.map((s) => `${s.color} ${s.pos}%`).join(', '),
        [stops]
    );

    const css = useMemo(
        () =>
            type === 'linear'
                ? `linear-gradient(${angle}deg, ${stopsCss})`
                : `radial-gradient(circle, ${stopsCss})`,
        [type, angle, stopsCss]
    );

    const copyCss = () => {
        navigator.clipboard.writeText(`background: ${css};`);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">CSS Gradient Generator</h2>

                <div className="h-48 rounded-sm border border-line mb-6" style={{ background: css }} />

                <div className="flex gap-3 mb-6">
                    <button
                        onClick={() => setType('linear')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${type === 'linear' ? 'bg-accent text-ink border-accent' : 'border-line text-muted'}`}
                    >
                        Linear
                    </button>
                    <button
                        onClick={() => setType('radial')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${type === 'radial' ? 'bg-accent text-ink border-accent' : 'border-line text-muted'}`}
                    >
                        Radial
                    </button>
                </div>

                {type === 'linear' && (
                    <div className="mb-6">
                        <label className="block text-sm text-muted mb-1.5">Angle: {angle}°</label>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            value={angle}
                            onChange={(e) => setAngle(Number(e.target.value))}
                            className="w-full accent-[#D4A72C]"
                        />
                    </div>
                )}

                <div className="mb-6">
                    <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Color stops</p>
                    <div className="space-y-2">
                        {stops.map((s, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={s.color}
                                    onChange={(e) => updateStop(i, 'color', e.target.value)}
                                    className="w-10 h-10 rounded-sm border border-line bg-transparent cursor-pointer"
                                />
                                <input
                                    value={s.color}
                                    onChange={(e) => updateStop(i, 'color', e.target.value)}
                                    className="w-28 bg-surface border border-line rounded-sm px-2 py-2 text-text font-mono text-sm focus:border-accent focus:outline-none"
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={s.pos}
                                    onChange={(e) => updateStop(i, 'pos', Number(e.target.value))}
                                    className="flex-1 accent-[#D4A72C]"
                                />
                                <span className="text-xs text-muted w-10 font-mono">{s.pos}%</span>
                                <button onClick={() => removeStop(i)} className="text-muted hover:text-[#D9534F]">
                                    <FaTrash className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                        <button onClick={addStop} className="flex items-center gap-1.5 text-xs text-accent mt-1">
                            <FaPlus className="w-3 h-3" /> Add stop
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between bg-surface border border-line rounded-sm px-4 py-3">
                    <code className="text-sm text-text font-mono break-all">background: {css};</code>
                    <button onClick={copyCss} className="text-muted hover:text-accent flex-shrink-0 ml-3">
                        {copied ? <FaCheck className="text-live" /> : <FaRegCopy />}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GradientGenerator;