import React, { useMemo, useState } from 'react';

const hexToRgb = (hex) => {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean.length === 3
        ? clean.split('').map((c) => c + c).join('')
        : clean, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
};

const rgbToHex = (r, g, b) =>
    '#' + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');

const rgbToHsl = (r, g, b) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            default: h = (r - g) / d + 4;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToRgb = (h, s, l) => {
    h /= 360; s /= 100; l /= 100;
    let r, g, b;
    if (s === 0) { r = g = b = l; }
    else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
};

const relativeLuminance = ({ r, g, b }) => {
    const [rs, gs, bs] = [r, g, b].map((v) => {
        const s = v / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

const contrastRatio = (hex1, hex2) => {
    const l1 = relativeLuminance(hexToRgb(hex1));
    const l2 = relativeLuminance(hexToRgb(hex2));
    const [lighter, darker] = l1 > l2 ? [l1, l2] : [l2, l1];
    return (lighter + 0.05) / (darker + 0.05);
};

const ColorPalette = () => {
    const [base, setBase] = useState('#D4A72C');
    const [fg, setFg] = useState('#EAF1F5');
    const [bg, setBg] = useState('#0B1D2B');

    const shades = useMemo(() => {
        const rgb = hexToRgb(base);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        return [10, 25, 40, 55, 70, 85].map((l) => {
            const c = hslToRgb(hsl.h, hsl.s, l);
            return rgbToHex(c.r, c.g, c.b);
        });
    }, [base]);

    const analogous = useMemo(() => {
        const rgb = hexToRgb(base);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        return [-60, -30, 0, 30, 60].map((offset) => {
            const h = (hsl.h + offset + 360) % 360;
            const c = hslToRgb(h, hsl.s, hsl.l);
            return rgbToHex(c.r, c.g, c.b);
        });
    }, [base]);

    const ratio = useMemo(() => contrastRatio(fg, bg), [fg, bg]);
    const aaNormal = ratio >= 4.5;
    const aaaNormal = ratio >= 7;
    const aaLarge = ratio >= 3;

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-8">Color Palette & Contrast Checker</h2>

                <div className="mb-10">
                    <p className="text-xs text-muted uppercase tracking-wide font-mono mb-3">Base color</p>
                    <div className="flex items-center gap-3 mb-6">
                        <input
                            type="color"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            className="w-12 h-12 rounded-sm border border-line bg-transparent cursor-pointer"
                        />
                        <input
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            className="bg-surface border border-line rounded-sm px-3 py-2 text-text font-mono text-sm w-32 focus:border-accent focus:outline-none"
                        />
                    </div>

                    <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Shades</p>
                    <div className="flex rounded-sm overflow-hidden border border-line mb-6">
                        {shades.map((s) => (
                            <div
                                key={s}
                                onClick={() => navigator.clipboard.writeText(s)}
                                className="flex-1 h-16 flex items-end justify-center pb-1.5 cursor-pointer"
                                style={{ backgroundColor: s }}
                                title="Click to copy"
                            >
                                <span className="text-[10px] font-mono text-ink/80 bg-white/60 rounded px-1">{s}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Analogous</p>
                    <div className="flex rounded-sm overflow-hidden border border-line">
                        {analogous.map((s, i) => (
                            <div
                                key={s + i}
                                onClick={() => navigator.clipboard.writeText(s)}
                                className="flex-1 h-16 flex items-end justify-center pb-1.5 cursor-pointer"
                                style={{ backgroundColor: s }}
                                title="Click to copy"
                            >
                                <span className="text-[10px] font-mono text-ink/80 bg-white/60 rounded px-1">{s}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-line pt-8">
                    <p className="text-xs text-muted uppercase tracking-wide font-mono mb-4">WCAG contrast checker</p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-5">
                        <div>
                            <label className="block text-sm text-muted mb-1.5">Foreground (text)</label>
                            <div className="flex items-center gap-2">
                                <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="w-10 h-10 rounded-sm border border-line bg-transparent cursor-pointer" />
                                <input value={fg} onChange={(e) => setFg(e.target.value)} className="flex-1 bg-surface border border-line rounded-sm px-3 py-2 text-text font-mono text-sm focus:border-accent focus:outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-muted mb-1.5">Background</label>
                            <div className="flex items-center gap-2">
                                <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="w-10 h-10 rounded-sm border border-line bg-transparent cursor-pointer" />
                                <input value={bg} onChange={(e) => setBg(e.target.value)} className="flex-1 bg-surface border border-line rounded-sm px-3 py-2 text-text font-mono text-sm focus:border-accent focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="rounded-sm border border-line p-6 mb-5 text-center"
                        style={{ backgroundColor: bg, color: fg }}
                    >
                        <p className="text-lg font-medium">The quick brown fox jumps over the lazy dog</p>
                        <p className="text-sm mt-1">Sample text at this size</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <p className="font-mono text-text text-lg">{ratio.toFixed(2)}:1</p>
                        <span className={`text-xs font-mono px-2 py-1 rounded-sm ${aaNormal ? 'bg-live/20 text-live' : 'bg-[#D9534F]/20 text-[#D9534F]'}`}>
                            AA normal {aaNormal ? 'Pass' : 'Fail'}
                        </span>
                        <span className={`text-xs font-mono px-2 py-1 rounded-sm ${aaaNormal ? 'bg-live/20 text-live' : 'bg-[#D9534F]/20 text-[#D9534F]'}`}>
                            AAA normal {aaaNormal ? 'Pass' : 'Fail'}
                        </span>
                        <span className={`text-xs font-mono px-2 py-1 rounded-sm ${aaLarge ? 'bg-live/20 text-live' : 'bg-[#D9534F]/20 text-[#D9534F]'}`}>
                            AA large {aaLarge ? 'Pass' : 'Fail'}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorPalette;