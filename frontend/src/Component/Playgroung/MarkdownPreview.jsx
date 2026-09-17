import React, { useMemo, useState } from 'react';

// Lightweight markdown -> HTML renderer covering common syntax,
// no external dependency needed for this playground demo.
const renderMarkdown = (md) => {
    const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    let html = escape(md);

    // code blocks
    html = html.replace(/```([\s\S]*?)```/g, (_, code) => `<pre><code>${code.trim()}</code></pre>`);
    // inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    // headers
    html = html.replace(/^###### (.*$)/gm, '<h6>$1</h6>');
    html = html.replace(/^##### (.*$)/gm, '<h5>$1</h5>');
    html = html.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    // bold / italic
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // links
    html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    // unordered lists
    html = html.replace(/(^|\n)((?:- .*(?:\n|$))+)/g, (_, lead, block) => {
        const items = block.trim().split('\n').map((l) => `<li>${l.replace(/^- /, '')}</li>`).join('');
        return `${lead}<ul>${items}</ul>`;
    });
    // blockquote
    html = html.replace(/^&gt; (.*$)/gm, '<blockquote>$1</blockquote>');
    // paragraphs (wrap remaining bare lines)
    html = html
        .split('\n')
        .map((line) => {
            const trimmed = line.trim();
            if (!trimmed) return '';
            if (/^<(h\d|ul|li|pre|blockquote)/.test(trimmed)) return trimmed;
            return `<p>${trimmed}</p>`;
        })
        .join('');

    return html;
};

const sample = `# Aryan Katiyar

MERN Stack Developer with **2+ years** of experience.

## Skills
- React.js & Redux
- Node.js & Express.js
- MongoDB

Check out my [GitHub](https://github.com/aryank730).

> Building systems that ship, and stay up.

\`npm run build\``;

const MarkdownPreview = () => {
    const [text, setText] = useState(sample);
    const html = useMemo(() => renderMarkdown(text), [text]);

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">Markdown Live Preview</h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Markdown</p>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows={20}
                            spellCheck={false}
                            className="w-full bg-surface border border-line rounded-sm px-4 py-3 text-text font-mono text-sm focus:border-accent focus:outline-none transition resize-none"
                        />
                    </div>
                    <div>
                        <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Preview</p>
                        <div
                            className="bg-surface border border-line rounded-sm px-5 py-4 text-text h-[480px] overflow-auto
                                [&_h1]:font-display [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:mb-3
                                [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-4 [&_h2]:mb-2
                                [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-3 [&_h3]:mb-2
                                [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-3
                                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-muted [&_ul]:mb-3
                                [&_a]:text-accent [&_a]:underline
                                [&_code]:font-mono [&_code]:text-accent [&_code]:bg-ink [&_code]:px-1 [&_code]:rounded-sm
                                [&_pre]:bg-ink [&_pre]:border [&_pre]:border-line [&_pre]:rounded-sm [&_pre]:p-3 [&_pre]:mb-3 [&_pre_code]:bg-transparent [&_pre_code]:px-0
                                [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-3 [&_blockquote]:text-muted [&_blockquote]:italic [&_blockquote]:mb-3"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarkdownPreview;