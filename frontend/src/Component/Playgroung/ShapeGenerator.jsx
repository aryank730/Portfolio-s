import React, { useMemo, useState } from 'react';
import { FaRegCopy, FaCheck, FaRandom } from 'react-icons/fa';

// Catmull-Rom to cubic-bezier conversion, so a handful of random
// points turn into a smooth, natural-looking curve.
const catmullRomToPath = (points, closed) => {
    const p = points;
    const n = p.length;
    if (n < 2) return '';

    const get = (i) => {
        if (closed) return p[(i + n) % n];
        if (i < 0) return p[0];
        if (i >= n) return p[n - 1];
        return p[i];
    };

    let d = `M ${p[0].x.toFixed(2)} ${p[0].y.toFixed(2)} `;
    const segments = closed ? n : n - 1;

    for (let i = 0; i < segments; i++) {
        const p0 = get(i - 1);
        const p1 = get(i);
        const p2 = get(i + 1);
        const p3 = get(i + 2);

        const cp1x = p1.x + (p2.x - p0.x) / 6;
        const cp1y = p1.y + (p2.y - p0.y) / 6;
        const cp2x = p2.x - (p3.x - p1.x) / 6;
        const cp2y = p2.y - (p3.y - p1.y) / 6;

        d += `C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} `;
    }

    if (closed) d += 'Z';
    return d;
};

const WAVE_WIDTH = 1200;

const generateWavePoints = (segments, height, amplitude) => {
    const step = WAVE_WIDTH / segments;
    const points = [];
    for (let i = 0; i <= segments; i++) {
        const x = i * step;
        const y = height / 2 + (Math.random() - 0.5) * amplitude;
        points.push({ x, y });
    }
    return points;
};

const generateBlobPoints = (n, baseRadius, randomness) => {
    const points = [];
    for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2;
        const r = baseRadius * (1 + (Math.random() - 0.5) * 2 * randomness);
        points.push({
            x: 150 + r * Math.cos(angle),
            y: 150 + r * Math.sin(angle),
        });
    }
    return points;
};

const ShapeGenerator = () => {
    const [mode, setMode] = useState('wave');

    // wave state
    const [segments, setSegments] = useState(5);
    const [waveHeight, setWaveHeight] = useState(120);
    const [amplitude, setAmplitude] = useState(60);
    const [waveColor, setWaveColor] = useState('#D4A72C');
    const [flipY, setFlipY] = useState(false);
    const [wavePoints, setWavePoints] = useState(() => generateWavePoints(5, 120, 60));

    // blob state
    const [blobPoints, setBlobPoints] = useState(6);
    const [blobRadius, setBlobRadius] = useState(100);
    const [blobRandomness, setBlobRandomness] = useState(0.35);
    const [blobColor, setBlobColor] = useState('#D4A72C');
    const [blobShape, setBlobShape] = useState(() => generateBlobPoints(6, 100, 0.35));

    const [copied, setCopied] = useState(false);

    const wavePath = useMemo(() => {
        const path = catmullRomToPath(wavePoints, false);
        const closing = `L ${WAVE_WIDTH} ${waveHeight} L 0 ${waveHeight} Z`;
        return `${path} ${closing}`;
    }, [wavePoints, waveHeight]);

    const blobPath = useMemo(() => catmullRomToPath(blobShape, true), [blobShape]);

    const randomizeWave = () => setWavePoints(generateWavePoints(segments, waveHeight, amplitude));
    const randomizeBlob = () => setBlobShape(generateBlobPoints(blobPoints, blobRadius, blobRandomness));

    const waveSvg = `<svg viewBox="0 0 ${WAVE_WIDTH} ${waveHeight}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style="width:100%;height:${waveHeight}px;${flipY ? 'transform:scaleY(-1);' : ''}">
  <path d="${wavePath}" fill="${waveColor}" />
</svg>`;

    const blobSvg = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
  <path d="${blobPath}" fill="${blobColor}" />
</svg>`;

    const copyCode = (code) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-2">Shape Generator</h2>
                <p className="text-muted text-sm mb-6">
                    Wave dividers for footers and sections, or organic blob shapes — randomize until one feels right.
                </p>

                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setMode('wave')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${mode === 'wave' ? 'bg-accent text-ink border-accent' : 'border-line text-muted'}`}
                    >
                        Wave Divider
                    </button>
                    <button
                        onClick={() => setMode('blob')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${mode === 'blob' ? 'bg-accent text-ink border-accent' : 'border-line text-muted'}`}
                    >
                        Blob Shape
                    </button>
                </div>

                {mode === 'wave' ? (
                    <>
                        <div className="bg-surface border border-line rounded-sm overflow-hidden mb-6">
                            <div className="h-40 bg-ink relative overflow-hidden flex items-end">
                                <svg
                                    viewBox={`0 0 ${WAVE_WIDTH} ${waveHeight}`}
                                    preserveAspectRatio="none"
                                    className="w-full"
                                    style={{ height: Math.min(waveHeight, 160), transform: flipY ? 'scaleY(-1)' : 'none' }}
                                >
                                    <path d={wavePath} fill={waveColor} />
                                </svg>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Points</span><span className="font-mono text-text">{segments}</span>
                                </label>
                                <input type="range" min="3" max="10" value={segments} onChange={(e) => setSegments(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Height</span><span className="font-mono text-text">{waveHeight}px</span>
                                </label>
                                <input type="range" min="40" max="300" value={waveHeight} onChange={(e) => setWaveHeight(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Roughness</span><span className="font-mono text-text">{amplitude}</span>
                                </label>
                                <input type="range" min="0" max="150" value={amplitude} onChange={(e) => setAmplitude(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div className="flex items-end gap-3">
                                <input type="color" value={waveColor} onChange={(e) => setWaveColor(e.target.value)} className="w-10 h-10 rounded-sm border border-line bg-transparent cursor-pointer" />
                                <label className="flex items-center gap-2 text-sm text-muted">
                                    <input type="checkbox" checked={flipY} onChange={(e) => setFlipY(e.target.checked)} className="accent-[#D4A72C]" />
                                    Flip vertically
                                </label>
                            </div>
                        </div>

                        <button
                            onClick={randomizeWave}
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-ink rounded-sm text-sm font-medium hover:brightness-110 transition mb-6"
                        >
                            <FaRandom className="w-3 h-3" /> Randomize
                        </button>

                        <p className="text-xs text-muted mb-2 font-mono">
                            Tip: for a footer, wrap this in a container with{' '}
                            <code className="text-accent">position: absolute; bottom: 0; width: 100%;</code>
                        </p>

                        <div className="flex items-start justify-between bg-surface border border-line rounded-sm px-4 py-3">
                            <pre className="text-xs text-text font-mono whitespace-pre-wrap break-all">{waveSvg}</pre>
                            <button onClick={() => copyCode(waveSvg)} className="text-muted hover:text-accent flex-shrink-0 ml-3 mt-0.5">
                                {copied ? <FaCheck className="text-live" /> : <FaRegCopy />}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="bg-surface border border-line rounded-sm flex items-center justify-center h-80 mb-6">
                            <svg viewBox="0 0 300 300" className="w-56 h-56">
                                <path d={blobPath} fill={blobColor} />
                            </svg>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Points</span><span className="font-mono text-text">{blobPoints}</span>
                                </label>
                                <input type="range" min="4" max="14" value={blobPoints} onChange={(e) => setBlobPoints(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Size</span><span className="font-mono text-text">{blobRadius}</span>
                                </label>
                                <input type="range" min="40" max="140" value={blobRadius} onChange={(e) => setBlobRadius(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Randomness</span><span className="font-mono text-text">{blobRandomness.toFixed(2)}</span>
                                </label>
                                <input type="range" min="0" max="0.6" step="0.01" value={blobRandomness} onChange={(e) => setBlobRandomness(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div className="flex items-end">
                                <input type="color" value={blobColor} onChange={(e) => setBlobColor(e.target.value)} className="w-10 h-10 rounded-sm border border-line bg-transparent cursor-pointer" />
                            </div>
                        </div>

                        <button
                            onClick={randomizeBlob}
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-ink rounded-sm text-sm font-medium hover:brightness-110 transition mb-6"
                        >
                            <FaRandom className="w-3 h-3" /> Randomize
                        </button>

                        <div className="flex items-start justify-between bg-surface border border-line rounded-sm px-4 py-3">
                            <pre className="text-xs text-text font-mono whitespace-pre-wrap break-all">{blobSvg}</pre>
                            <button onClick={() => copyCode(blobSvg)} className="text-muted hover:text-accent flex-shrink-0 ml-3 mt-0.5">
                                {copied ? <FaCheck className="text-live" /> : <FaRegCopy />}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ShapeGenerator;