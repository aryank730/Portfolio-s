import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

const ApiTester = () => {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1');
    const [headers, setHeaders] = useState([{ key: 'Content-Type', value: 'application/json' }]);
    const [body, setBody] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const updateHeader = (i, field, value) => {
        setHeaders((prev) => prev.map((h, idx) => (idx === i ? { ...h, [field]: value } : h)));
    };

    const addHeader = () => setHeaders((prev) => [...prev, { key: '', value: '' }]);
    const removeHeader = (i) => setHeaders((prev) => prev.filter((_, idx) => idx !== i));

    const sendRequest = async () => {
        setLoading(true);
        setError('');
        setResponse(null);

        const headerObj = {};
        headers.forEach((h) => {
            if (h.key) headerObj[h.key] = h.value;
        });

        const start = performance.now();
        try {
            const res = await fetch(url, {
                method,
                headers: headerObj,
                body: method !== 'GET' && method !== 'DELETE' && body ? body : undefined,
            });
            const time = Math.round(performance.now() - start);
            const text = await res.text();
            let parsed = text;
            try {
                parsed = JSON.stringify(JSON.parse(text), null, 2);
            } catch {
                // not JSON, keep as raw text
            }

            const resHeaders = {};
            res.headers.forEach((v, k) => (resHeaders[k] = v));

            setResponse({ status: res.status, ok: res.ok, time, headers: resHeaders, body: parsed });
        } catch (e) {
            setError(
                `${e.message} — this could be a CORS restriction (the target API doesn't allow browser requests from here) or the URL being unreachable.`
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">API Request Tester</h2>

                <div className="flex gap-3 mb-4">
                    <select
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="bg-surface border border-line rounded-sm px-3 py-2.5 text-text font-mono text-sm focus:border-accent focus:outline-none"
                    >
                        {methods.map((m) => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                    <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://api.example.com/endpoint"
                        className="flex-1 bg-surface border border-line rounded-sm px-4 py-2.5 text-text font-mono text-sm focus:border-accent focus:outline-none transition"
                    />
                    <button
                        onClick={sendRequest}
                        disabled={loading || !url}
                        className="px-5 py-2.5 bg-accent text-ink rounded-sm font-medium hover:brightness-110 transition disabled:opacity-60"
                    >
                        {loading ? 'Sending…' : 'Send'}
                    </button>
                </div>

                <div className="mb-6">
                    <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Headers</p>
                    <div className="space-y-2">
                        {headers.map((h, i) => (
                            <div key={i} className="flex gap-2">
                                <input
                                    value={h.key}
                                    onChange={(e) => updateHeader(i, 'key', e.target.value)}
                                    placeholder="Key"
                                    className="flex-1 bg-surface border border-line rounded-sm px-3 py-2 text-text font-mono text-sm focus:border-accent focus:outline-none"
                                />
                                <input
                                    value={h.value}
                                    onChange={(e) => updateHeader(i, 'value', e.target.value)}
                                    placeholder="Value"
                                    className="flex-1 bg-surface border border-line rounded-sm px-3 py-2 text-text font-mono text-sm focus:border-accent focus:outline-none"
                                />
                                <button onClick={() => removeHeader(i)} className="px-3 text-muted hover:text-[#D9534F]">
                                    <FaTrash className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                        <button onClick={addHeader} className="flex items-center gap-1.5 text-xs text-accent mt-1">
                            <FaPlus className="w-3 h-3" /> Add header
                        </button>
                    </div>
                </div>

                {method !== 'GET' && method !== 'DELETE' && (
                    <div className="mb-6">
                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Body (JSON)</p>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            rows={5}
                            placeholder='{"key": "value"}'
                            spellCheck={false}
                            className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-text font-mono text-sm focus:border-accent focus:outline-none transition resize-none"
                        />
                    </div>
                )}

                {error && (
                    <p className="text-sm text-[#D9534F] font-mono border border-line rounded-sm p-3 mb-6">{error}</p>
                )}

                {response && (
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span
                                className={`font-mono text-sm px-2 py-1 rounded-sm ${
                                    response.ok ? 'bg-live/20 text-live' : 'bg-[#D9534F]/20 text-[#D9534F]'
                                }`}
                            >
                                {response.status}
                            </span>
                            <span className="text-muted text-sm font-mono">{response.time}ms</span>
                        </div>
                        <pre className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-text font-mono text-sm max-h-[400px] overflow-auto whitespace-pre-wrap">
                            {response.body}
                        </pre>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ApiTester;