import React, { useEffect, useRef, useState } from 'react';

const sentences = [
    'The quick brown fox jumps over the lazy dog while the sun sets slowly.',
    'Building full-stack systems requires patience, precision, and a lot of debugging.',
    'React components render efficiently when state updates are handled correctly.',
    'A well-designed API is intuitive, consistent, and easy for other developers to use.',
    'Great products are shipped iteratively, tested constantly, and improved relentlessly.',
];

const TypingTest = () => {
    const [target, setTarget] = useState(sentences[0]);
    const [input, setInput] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [finished, setFinished] = useState(false);
    const [stats, setStats] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [target]);

    const handleChange = (e) => {
        const value = e.target.value;
        if (finished) return;

        if (!startTime) setStartTime(Date.now());
        setInput(value);

        if (value.length >= target.length) {
            const elapsedMin = (Date.now() - (startTime || Date.now())) / 60000;
            const words = target.trim().split(/\s+/).length;
            const wpm = elapsedMin > 0 ? Math.round(words / elapsedMin) : words;

            let correctChars = 0;
            for (let i = 0; i < target.length; i++) {
                if (value[i] === target[i]) correctChars++;
            }
            const accuracy = Math.round((correctChars / target.length) * 100);

            setStats({ wpm, accuracy, time: Math.max(1, Math.round(elapsedMin * 60)) });
            setFinished(true);
        }
    };

    const restart = () => {
        const next = sentences[Math.floor(Math.random() * sentences.length)];
        setTarget(next);
        setInput('');
        setStartTime(null);
        setFinished(false);
        setStats(null);
    };

    const renderTarget = () =>
        target.split('').map((char, i) => {
            let cls = 'text-muted';
            if (i < input.length) {
                cls = input[i] === char ? 'text-live' : 'text-[#D9534F] underline';
            }
            return (
                <span key={i} className={cls}>
                    {char}
                </span>
            );
        });

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-2xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">Typing Speed Test</h2>

                <div className="bg-surface border border-line rounded-sm p-6 mb-5">
                    <p className="text-lg leading-relaxed font-mono">{renderTarget()}</p>
                </div>

                <textarea
                    ref={inputRef}
                    value={input}
                    onChange={handleChange}
                    disabled={finished}
                    rows={3}
                    placeholder="Start typing here…"
                    spellCheck={false}
                    className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-text font-mono text-sm focus:border-accent focus:outline-none transition resize-none disabled:opacity-60"
                />

                {stats && (
                    <div className="grid grid-cols-3 gap-4 mt-6">
                        <div className="text-center border border-line rounded-sm py-4">
                            <p className="font-display text-2xl text-text">{stats.wpm}</p>
                            <p className="text-xs text-muted mt-1">WPM</p>
                        </div>
                        <div className="text-center border border-line rounded-sm py-4">
                            <p className="font-display text-2xl text-text">{stats.accuracy}%</p>
                            <p className="text-xs text-muted mt-1">Accuracy</p>
                        </div>
                        <div className="text-center border border-line rounded-sm py-4">
                            <p className="font-display text-2xl text-text">{stats.time}s</p>
                            <p className="text-xs text-muted mt-1">Time</p>
                        </div>
                    </div>
                )}

                <button
                    onClick={restart}
                    className="mt-6 px-5 py-2.5 bg-accent text-ink rounded-sm font-medium hover:brightness-110 transition"
                >
                    {finished ? 'Try again' : 'New sentence'}
                </button>
            </div>
        </section>
    );
};

export default TypingTest;