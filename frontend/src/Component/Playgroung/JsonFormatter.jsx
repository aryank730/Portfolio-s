import React, { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

const JsonFormatter = () => {
    const [input, setInput] = useState('{"name":"Aryan","stack":["React","Node","MongoDB"],"experience":2}');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false);

    const format = () => {
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
            setError('');
        } catch (e) {
            setError(e.message);
            setOutput('');
        }
    };

    const minify = () => {
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed));
            setError('');
        } catch (e) {
            setError(e.message);
            setOutput('');
        }
    };

    const copyOutput = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">JSON Formatter</h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Input</p>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            rows={16}
                            spellCheck={false}
                            className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-text font-mono text-sm focus:border-accent focus:outline-none transition resize-none"
                        />
                        <div className="flex gap-3 mt-3">
                            <button
                                onClick={format}
                                className="px-4 py-2 bg-accent text-ink rounded-sm text-sm font-medium hover:brightness-110 transition"
                            >
                                Format
                            </button>
                            <button
                                onClick={minify}
                                className="px-4 py-2 border border-line text-text rounded-sm text-sm font-medium hover:border-accent transition"
                            >
                                Minify
                            </button>
                        </div>
                        {error && (
                            <p className="text-sm text-[#D9534F] mt-3 font-mono">{error}</p>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-xs text-muted uppercase tracking-wide font-mono">Output</p>
                            {output && (
                                <button onClick={copyOutput} className="text-xs text-muted hover:text-accent flex items-center gap-1">
                                    {copied ? <FaCheck className="text-live" /> : <FaRegCopy />}
                                    {copied ? 'Copied' : 'Copy'}
                                </button>
                            )}
                        </div>
                        <pre className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-text font-mono text-sm h-[400px] overflow-auto whitespace-pre-wrap">
                            {output || 'Formatted JSON will appear here'}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JsonFormatter;