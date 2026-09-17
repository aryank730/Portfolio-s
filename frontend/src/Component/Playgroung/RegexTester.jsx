import React, { useMemo, useState } from 'react';

const escapeHtml = (str) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const RegexTester = () => {
    const [pattern, setPattern] = useState('\\b[A-Z][a-z]+\\b');
    const [flags, setFlags] = useState('g');
    const [text, setText] = useState('Aryan Katiyar builds full-stack Systems using React and Node.');

    const { highlighted, matches, err } = useMemo(() => {
        if (!pattern) return { highlighted: escapeHtml(text), matches: [], err: '' };
        try {
            const re = new RegExp(pattern, flags.includes('g') ? flags : flags + 'g');
            let lastIndex = 0;
            let result = '';
            const found = [];
            let m;
            re.lastIndex = 0;
            while ((m = re.exec(text)) !== null) {
                found.push({ match: m[0], index: m.index, groups: m.slice(1) });
                result += escapeHtml(text.slice(lastIndex, m.index));
                result += `<mark>${escapeHtml(m[0])}</mark>`;
                lastIndex = m.index + m[0].length;
                if (m[0].length === 0) re.lastIndex++;
                if (found.length > 500) break;
            }
            result += escapeHtml(text.slice(lastIndex));
            return { highlighted: result, matches: found, err: '' };
        } catch (e) {
            return { highlighted: escapeHtml(text), matches: [], err: e.message };
        }
    }, [pattern, flags, text]);

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">Regex Tester</h2>

                <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-1 min-w-[240px]">
                        <label className="block text-xs text-muted uppercase tracking-wide font-mono mb-1.5">
                            Pattern
                        </label>
                        <div className="flex items-center bg-surface border border-line rounded-sm px-3">
                            <span className="text-muted font-mono">/</span>
                            <input
                                value={pattern}
                                onChange={(e) => setPattern(e.target.value)}
                                spellCheck={false}
                                className="w-full bg-transparent py-2.5 px-1 text-text font-mono text-sm focus:outline-none"
                            />
                            <span className="text-muted font-mono">/{flags}</span>
                        </div>
                    </div>
                    <div className="w-28">
                        <label className="block text-xs text-muted uppercase tracking-wide font-mono mb-1.5">
                            Flags
                        </label>
                        <input
                            value={flags}
                            onChange={(e) => setFlags(e.target.value.replace(/[^gimsuy]/g, ''))}
                            className="w-full bg-surface border border-line rounded-sm px-3 py-2.5 text-text font-mono text-sm focus:border-accent focus:outline-none transition"
                        />
                    </div>
                </div>

                {err && <p className="text-sm text-[#D9534F] font-mono mb-4">Invalid pattern: {err}</p>}

                <label className="block text-xs text-muted uppercase tracking-wide font-mono mb-1.5">
                    Test string
                </label>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                    spellCheck={false}
                    className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-text font-mono text-sm focus:border-accent focus:outline-none transition resize-none mb-6"
                />

                <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Preview</p>
                <div
                    className="bg-surface border border-line rounded-sm px-4 py-3 text-text text-sm leading-relaxed mb-6 [&_mark]:bg-accent [&_mark]:text-ink [&_mark]:rounded-sm [&_mark]:px-0.5"
                    dangerouslySetInnerHTML={{ __html: highlighted || '&nbsp;' }}
                />

                <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">
                    {matches.length} match{matches.length !== 1 ? 'es' : ''}
                </p>
                {matches.length > 0 && (
                    <div className="space-y-2">
                        {matches.slice(0, 20).map((m, i) => (
                            <div key={i} className="flex gap-4 text-sm font-mono border border-line rounded-sm px-3 py-2">
                                <span className="text-muted">#{i + 1}</span>
                                <span className="text-accent">{m.match}</span>
                                <span className="text-muted ml-auto">index {m.index}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default RegexTester;