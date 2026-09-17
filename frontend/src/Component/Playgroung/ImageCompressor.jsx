import React, { useRef, useState } from 'react';
import { FaUpload, FaDownload } from 'react-icons/fa';

const formatBytes = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const ImageCompressor = () => {
    const [original, setOriginal] = useState(null); // { url, size, width, height }
    const [compressed, setCompressed] = useState(null); // { url, blob, size }
    const [quality, setQuality] = useState(0.8);
    const [maxWidth, setMaxWidth] = useState(1200);
    const [format, setFormat] = useState('image/webp');
    const [dragOver, setDragOver] = useState(false);
    const [processing, setProcessing] = useState(false);
    const fileInputRef = useRef(null);
    const imgRef = useRef(null);

    const loadFile = (file) => {
        if (!file || !file.type.startsWith('image/')) return;
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
            imgRef.current = img;
            setOriginal({ url, size: file.size, width: img.width, height: img.height, name: file.name });
            setCompressed(null);
        };
        img.src = url;
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        loadFile(e.dataTransfer.files[0]);
    };

    const compress = () => {
        if (!imgRef.current) return;
        setProcessing(true);

        const img = imgRef.current;
        const scale = Math.min(1, maxWidth / img.width);
        const w = Math.round(img.width * scale);
        const h = Math.round(img.height * scale);

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        canvas.toBlob(
            (blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    setCompressed({ url, blob, size: blob.size, width: w, height: h });
                }
                setProcessing(false);
            },
            format,
            quality
        );
    };

    const download = () => {
        if (!compressed) return;
        const a = document.createElement('a');
        a.href = compressed.url;
        const ext = format === 'image/webp' ? 'webp' : format === 'image/png' ? 'png' : 'jpg';
        a.download = `compressed.${ext}`;
        a.click();
    };

    const savings = original && compressed
        ? Math.round((1 - compressed.size / original.size) * 100)
        : null;

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-2">Image Compressor</h2>
                <p className="text-muted text-sm mb-6">
                    Everything happens in your browser — nothing is uploaded anywhere.
                </p>

                {!original ? (
                    <div
                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-sm flex flex-col items-center justify-center h-64 cursor-pointer transition ${
                            dragOver ? 'border-accent bg-surface' : 'border-line'
                        }`}
                    >
                        <FaUpload className="text-3xl text-muted mb-3" />
                        <p className="text-text font-medium">Drop an image, or click to browse</p>
                        <p className="text-muted text-sm mt-1">JPG, PNG or WebP</p>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => loadFile(e.target.files[0])}
                        />
                    </div>
                ) : (
                    <>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Original</p>
                                <img src={original.url} alt="Original" className="w-full rounded-sm border border-line mb-2 max-h-56 object-contain bg-surface" />
                                <p className="text-sm text-text font-mono">{formatBytes(original.size)}</p>
                                <p className="text-xs text-muted">{original.width} × {original.height}px</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted uppercase tracking-wide font-mono mb-2">Compressed</p>
                                {compressed ? (
                                    <>
                                        <img src={compressed.url} alt="Compressed" className="w-full rounded-sm border border-line mb-2 max-h-56 object-contain bg-surface" />
                                        <p className="text-sm text-live font-mono">{formatBytes(compressed.size)}</p>
                                        <p className="text-xs text-muted">{compressed.width} × {compressed.height}px</p>
                                    </>
                                ) : (
                                    <div className="w-full h-56 rounded-sm border border-line bg-surface flex items-center justify-center text-muted text-sm">
                                        Adjust settings and compress
                                    </div>
                                )}
                            </div>
                        </div>

                        {savings !== null && (
                            <div className="mb-6 flex items-center gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-live" />
                                <span className="text-live font-medium">{savings}% smaller</span>
                            </div>
                        )}

                        <div className="grid sm:grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Quality</span><span className="font-mono text-text">{Math.round(quality * 100)}%</span>
                                </label>
                                <input type="range" min="0.1" max="1" step="0.05" value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div>
                                <label className="flex justify-between text-sm text-muted mb-1.5">
                                    <span>Max width</span><span className="font-mono text-text">{maxWidth}px</span>
                                </label>
                                <input type="range" min="200" max="2400" step="100" value={maxWidth} onChange={(e) => setMaxWidth(Number(e.target.value))} className="w-full accent-[#D4A72C]" />
                            </div>
                            <div>
                                <label className="block text-sm text-muted mb-1.5">Format</label>
                                <select
                                    value={format}
                                    onChange={(e) => setFormat(e.target.value)}
                                    className="w-full bg-surface border border-line rounded-sm px-3 py-2 text-text text-sm focus:border-accent focus:outline-none"
                                >
                                    <option value="image/webp">WebP</option>
                                    <option value="image/jpeg">JPEG</option>
                                    <option value="image/png">PNG</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={compress}
                                disabled={processing}
                                className="px-5 py-2.5 bg-accent text-ink rounded-sm font-medium hover:brightness-110 transition disabled:opacity-60"
                            >
                                {processing ? 'Compressing…' : 'Compress'}
                            </button>
                            {compressed && (
                                <button
                                    onClick={download}
                                    className="flex items-center gap-2 px-5 py-2.5 border border-line text-text rounded-sm font-medium hover:border-accent transition"
                                >
                                    <FaDownload className="w-3 h-3" /> Download
                                </button>
                            )}
                            <button
                                onClick={() => { setOriginal(null); setCompressed(null); }}
                                className="px-5 py-2.5 text-muted hover:text-text transition text-sm"
                            >
                                Start over
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ImageCompressor;