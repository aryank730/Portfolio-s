import React, { useMemo, useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

const hexToRgba = (hex, alpha) => {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const backdrops = [
    { name: 'Sunset', css: 'linear-gradient(135deg, #ff9a56, #ff6a88, #845ec2)' },
    { name: 'Ocean', css: 'linear-gradient(135deg, #005c97, #363795)' },
    { name: 'Forest', css: 'linear-gradient(135deg, #0f9b0f, #00b09b)' },
    { name: 'Sunrise gold', css: 'linear-gradient(135deg, #D4A72C, #7691A3, #0B1D2B)' },
];

const GlassGenerator = () => {
    const [width, setWidth] = useState(280);
    const [height, setHeight] = useState(180);
    const [blur, setBlur] = useState(12);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [bgOpacity, setBgOpacity] = useState(0.15);
    const [radius, setRadius] = useState(20);
    const [borderWidth, setBorderWidth] = useState(1);
    const [borderColor, setBorderColor] = useState('#ffffff');
    const [borderOpacity, setBorderOpacity] = useState(0.3);
    const [shadowX, setShadowX] = useState(0);
    const [shadowY, setShadowY] = useState(8);
    const [shadowBlur, setShadowBlur] = useState(32);
    const [shadowSpread, setShadowSpread] = useState(0);
    const [shadowColor, setShadowColor] = useState('#000000');
    const [shadowOpacity, setShadowOpacity] = useState(0.25);
    const [backdrop, setBackdrop] = useState(backdrops[0].css);
    const [copied, setCopied] = useState(false);

    const glassStyle = useMemo(
        () => ({
            width: `${width}px`,
            height: `${height}px`,
            background: hexToRgba(bgColor, bgOpacity),
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            borderRadius: `${radius}px`,
            border: `${borderWidth}px solid ${hexToRgba(borderColor, borderOpacity)}`,
            boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${hexToRgba(shadowColor, shadowOpacity)}`,
        }),
        [width, height, blur, bgColor, bgOpacity, radius, borderWidth, borderColor, borderOpacity, shadowX, shadowY, shadowBlur, shadowSpread, shadowColor, shadowOpacity]
    );

    const cssCode = `.glass {
  width: ${width}px;
  height: ${height}px;
  background: ${hexToRgba(bgColor, bgOpacity)};
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border-radius: ${radius}px;
  border: ${borderWidth}px solid ${hexToRgba(borderColor, borderOpacity)};
  box-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${hexToRgba(shadowColor, shadowOpacity)};
}`;

    const copyCss = () => {
        navigator.clipboard.writeText(cssCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const Slider = ({ label, value, onChange, min, max, step = 1, unit = '' }) => (
        <div className="mb-4">
            <label className="flex justify-between text-sm text-muted mb-1.5">
                <span>{label}</span>
                <span className="font-mono text-text">{value}{unit}</span>
            </label>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full accent-[#D4A72C]"
            />
        </div>
    );

    const ColorRow = ({ label, color, onColor, opacity, onOpacity }) => (
        <div className="mb-4">
            <label className="block text-sm text-muted mb-1.5">{label}</label>
            <div className="flex items-center gap-2 mb-2">
                <input type="color" value={color} onChange={(e) => onColor(e.target.value)} className="w-9 h-9 rounded-sm border border-line bg-transparent cursor-pointer" />
                <input value={color} onChange={(e) => onColor(e.target.value)} className="flex-1 bg-surface border border-line rounded-sm px-2 py-1.5 text-text font-mono text-sm focus:border-accent focus:outline-none" />
            </div>
            {onOpacity && (
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={opacity}
                    onChange={(e) => onOpacity(Number(e.target.value))}
                    className="w-full accent-[#D4A72C]"
                />
            )}
        </div>
    );

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">Glassmorphism Generator</h2>

                <div className="grid md:grid-cols-[1fr_320px] gap-8">
                    <div>
                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Preview</p>
                        <div
                            className="rounded-sm border border-line flex items-center justify-center min-h-[420px] p-8"
                            style={{ background: backdrop }}
                        >
                            <div style={glassStyle} />
                        </div>

                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2 mt-5">Preview backdrop</p>
                        <div className="flex flex-wrap gap-2">
                            {backdrops.map((b) => (
                                <button
                                    key={b.name}
                                    onClick={() => setBackdrop(b.css)}
                                    className={`px-3 py-1.5 rounded-sm text-xs border transition ${backdrop === b.css ? 'border-accent text-accent' : 'border-line text-muted'}`}
                                >
                                    {b.name}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between bg-surface border border-line rounded-sm px-4 py-3 mt-5">
                            <code className="text-xs text-text font-mono whitespace-pre overflow-x-auto">{cssCode}</code>
                            <button onClick={copyCss} className="text-muted hover:text-accent flex-shrink-0 ml-3">
                                {copied ? <FaCheck className="text-live" /> : <FaRegCopy />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-3">Box size</p>
                        <Slider label="Width" value={width} onChange={setWidth} min={80} max={600} unit="px" />
                        <Slider label="Height" value={height} onChange={setHeight} min={60} max={500} unit="px" />
                        <Slider label="Border radius" value={radius} onChange={setRadius} min={0} max={80} unit="px" />

                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-3 mt-6">Glass</p>
                        <Slider label="Blur" value={blur} onChange={setBlur} min={0} max={40} unit="px" />
                        <ColorRow label="Fill color / opacity" color={bgColor} onColor={setBgColor} opacity={bgOpacity} onOpacity={setBgOpacity} />

                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-3 mt-6">Border</p>
                        <Slider label="Width" value={borderWidth} onChange={setBorderWidth} min={0} max={6} unit="px" />
                        <ColorRow label="Color / opacity" color={borderColor} onColor={setBorderColor} opacity={borderOpacity} onOpacity={setBorderOpacity} />

                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-3 mt-6">Shadow</p>
                        <Slider label="Offset X" value={shadowX} onChange={setShadowX} min={-40} max={40} unit="px" />
                        <Slider label="Offset Y" value={shadowY} onChange={setShadowY} min={-40} max={40} unit="px" />
                        <Slider label="Blur" value={shadowBlur} onChange={setShadowBlur} min={0} max={80} unit="px" />
                        <Slider label="Spread" value={shadowSpread} onChange={setShadowSpread} min={-20} max={20} unit="px" />
                        <ColorRow label="Color / opacity" color={shadowColor} onColor={setShadowColor} opacity={shadowOpacity} onOpacity={setShadowOpacity} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlassGenerator;