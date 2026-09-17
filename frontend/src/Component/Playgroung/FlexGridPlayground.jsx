import React, { useMemo, useState } from 'react';
import { FaRegCopy, FaCheck, FaPlus, FaMinus } from 'react-icons/fa';

const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
const alignOptions = ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'];
const wrapOptions = ['nowrap', 'wrap', 'wrap-reverse'];

const Select = ({ label, value, onChange, options }) => (
    <div className="mb-4">
        <label className="block text-sm text-muted mb-1.5">{label}</label>
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-surface border border-line rounded-sm px-3 py-2 text-text text-sm font-mono focus:border-accent focus:outline-none"
        >
            {options.map((o) => (
                <option key={o} value={o}>{o}</option>
            ))}
        </select>
    </div>
);

const ItemCount = ({ count, setCount }) => (
    <div className="mb-4">
        <label className="block text-sm text-muted mb-1.5">Items</label>
        <div className="flex items-center gap-3">
            <button onClick={() => setCount((c) => Math.max(1, c - 1))} className="w-8 h-8 border border-line rounded-sm text-text flex items-center justify-center hover:border-accent">
                <FaMinus className="w-2.5 h-2.5" />
            </button>
            <span className="font-mono text-text w-6 text-center">{count}</span>
            <button onClick={() => setCount((c) => Math.min(12, c + 1))} className="w-8 h-8 border border-line rounded-sm text-text flex items-center justify-center hover:border-accent">
                <FaPlus className="w-2.5 h-2.5" />
            </button>
        </div>
    </div>
);

const Box = ({ i }) => (
    <div className="bg-accent text-ink font-mono text-sm font-medium rounded-sm flex items-center justify-center min-w-[50px] min-h-[50px] px-3 py-2">
        {i + 1}
    </div>
);

const FlexGridPlayground = () => {
    const [mode, setMode] = useState('flex');

    // flex state
    const [direction, setDirection] = useState('row');
    const [justify, setJustify] = useState('flex-start');
    const [align, setAlign] = useState('stretch');
    const [wrap, setWrap] = useState('nowrap');
    const [gap, setGap] = useState(12);
    const [flexItems, setFlexItems] = useState(5);

    // grid state
    const [columns, setColumns] = useState(3);
    const [rows, setRows] = useState(2);
    const [gridGap, setGridGap] = useState(12);
    const [justifyItems, setJustifyItems] = useState('stretch');
    const [alignItems, setAlignItems] = useState('stretch');
    const [gridItems, setGridItems] = useState(6);

    const [copied, setCopied] = useState(false);

    const flexStyle = useMemo(() => ({
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap: `${gap}px`,
    }), [direction, justify, align, wrap, gap]);

    const gridStyle = useMemo(() => ({
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 80px)`,
        gap: `${gridGap}px`,
        justifyItems,
        alignItems,
    }), [columns, rows, gridGap, justifyItems, alignItems]);

    const flexCss = `.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap}px;
}`;

    const gridCss = `.container {
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${rows}, 80px);
  gap: ${gridGap}px;
  justify-items: ${justifyItems};
  align-items: ${alignItems};
}`;

    const copyCss = (css) => {
        navigator.clipboard.writeText(css);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">Flexbox / Grid Playground</h2>

                <div className="flex gap-2 mb-6">
                    <button
                        onClick={() => setMode('flex')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${mode === 'flex' ? 'bg-accent text-ink border-accent' : 'border-line text-muted'}`}
                    >
                        Flexbox
                    </button>
                    <button
                        onClick={() => setMode('grid')}
                        className={`px-4 py-2 rounded-sm text-sm font-medium border transition ${mode === 'grid' ? 'bg-accent text-ink border-accent' : 'border-line text-muted'}`}
                    >
                        Grid
                    </button>
                </div>

                <div className="grid md:grid-cols-[1fr_280px] gap-8">
                    <div>
                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Preview</p>
                        <div className="bg-surface border border-line rounded-sm p-4 min-h-[280px]">
                            <div style={mode === 'flex' ? flexStyle : gridStyle}>
                                {Array.from({ length: mode === 'flex' ? flexItems : gridItems }).map((_, i) => (
                                    <Box key={i} i={i} />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-start justify-between bg-surface border border-line rounded-sm px-4 py-3 mt-5">
                            <pre className="text-xs text-text font-mono whitespace-pre-wrap">{mode === 'flex' ? flexCss : gridCss}</pre>
                            <button onClick={() => copyCss(mode === 'flex' ? flexCss : gridCss)} className="text-muted hover:text-accent flex-shrink-0 ml-3 mt-0.5">
                                {copied ? <FaCheck className="text-live" /> : <FaRegCopy />}
                            </button>
                        </div>
                    </div>

                    <div>
                        {mode === 'flex' ? (
                            <>
                                <ItemCount count={flexItems} setCount={setFlexItems} />
                                <Select label="flex-direction" value={direction} onChange={setDirection} options={flexDirections} />
                                <Select label="justify-content" value={justify} onChange={setJustify} options={justifyOptions} />
                                <Select label="align-items" value={align} onChange={setAlign} options={alignOptions} />
                                <Select label="flex-wrap" value={wrap} onChange={setWrap} options={wrapOptions} />
                                <div>
                                    <label className="flex justify-between text-sm text-muted mb-1.5">
                                        <span>Gap</span><span className="font-mono text-text">{gap}px</span>
                                    </label>
                                    <input type="range" min="0" max="48" value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                                </div>
                            </>
                        ) : (
                            <>
                                <ItemCount count={gridItems} setCount={setGridItems} />
                                <div className="mb-4">
                                    <label className="flex justify-between text-sm text-muted mb-1.5">
                                        <span>Columns</span><span className="font-mono text-text">{columns}</span>
                                    </label>
                                    <input type="range" min="1" max="6" value={columns} onChange={(e) => setColumns(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                                </div>
                                <div className="mb-4">
                                    <label className="flex justify-between text-sm text-muted mb-1.5">
                                        <span>Rows</span><span className="font-mono text-text">{rows}</span>
                                    </label>
                                    <input type="range" min="1" max="5" value={rows} onChange={(e) => setRows(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                                </div>
                                <Select label="justify-items" value={justifyItems} onChange={setJustifyItems} options={['stretch', 'start', 'center', 'end']} />
                                <Select label="align-items" value={alignItems} onChange={setAlignItems} options={['stretch', 'start', 'center', 'end']} />
                                <div>
                                    <label className="flex justify-between text-sm text-muted mb-1.5">
                                        <span>Gap</span><span className="font-mono text-text">{gridGap}px</span>
                                    </label>
                                    <input type="range" min="0" max="48" value={gridGap} onChange={(e) => setGridGap(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlexGridPlayground;