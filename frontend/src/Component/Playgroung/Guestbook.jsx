import React, { useEffect, useState } from 'react';
import { FaFeatherAlt } from 'react-icons/fa';

const STORAGE_KEY = 'portfolio-guestbook-entries';

const seedEntries = [
    { name: 'Aryan', message: 'Welcome — leave a note if you stopped by!', date: new Date().toISOString() },
];

const Guestbook = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            setEntries(saved ? JSON.parse(saved) : seedEntries);
        } catch {
            setEntries(seedEntries);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        const next = [{ name: name.trim(), message: message.trim(), date: new Date().toISOString() }, ...entries];
        setEntries(next);
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
            // storage full or unavailable — entry still shows for this session
        }
        setName('');
        setMessage('');
    };

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-2xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-2">Guestbook</h2>
                <p className="text-muted text-sm mb-2">
                    Leave a note — anything from feedback to just saying hi.
                </p>
                <p className="text-xs text-muted/70 font-mono mb-6">
                    Note: entries are saved to your own browser only for now, not shared with other visitors yet —
                    this becomes a real shared wall once the backend is live.
                </p>

                <form onSubmit={handleSubmit} className="bg-surface border border-line rounded-sm p-5 mb-8">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        maxLength={40}
                        className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition mb-3"
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Leave a message..."
                        required
                        maxLength={280}
                        rows={3}
                        className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition resize-none mb-3"
                    />
                    <button
                        type="submit"
                        className="px-5 py-2.5 bg-accent text-ink rounded-sm font-medium hover:brightness-110 transition"
                    >
                        Sign the guestbook
                    </button>
                </form>

                <div className="space-y-4">
                    {entries.map((entry, i) => (
                        <div key={i} className="border border-line rounded-sm p-4">
                            <div className="flex items-center gap-2 mb-1.5">
                                <FaFeatherAlt className="text-accent w-3 h-3" />
                                <span className="text-text font-medium text-sm">{entry.name}</span>
                                <span className="text-muted text-xs font-mono ml-auto">
                                    {new Date(entry.date).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-muted text-sm leading-relaxed">{entry.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guestbook;