import React, { useState } from 'react';

const getBmiColor = (bmiValue) => {
    if (bmiValue < 18.5) return '#5B9BD5';   // under-weight - blue
    if (bmiValue <= 24.9) return '#5FB88F';  // healthy - green
    if (bmiValue <= 29.9) return '#D4A72C';  // over-weight - gold
    return '#D9534F';                        // obese range - red
};

const BMIcalc = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const calcBmi = (e) => {
        e.preventDefault();
        setError('');

        if (!height || !weight) {
            setError('Please enter both height and weight.');
            return;
        }

        const heightInMeter = height / 100;
        const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(2);
        setBmi(bmiValue);

        if (bmiValue < 18.5) {
            setMessage('Under-weight');
        } else if (bmiValue <= 24.9) {
            setMessage('Healthy BMI');
        } else if (bmiValue <= 29.9) {
            setMessage('Over-weight');
        } else {
            setMessage('Obese range');
        }
    };

    return (
        <section className="bg-ink min-h-screen pt-28 pb-20 px-6 flex justify-center">
            <div className="w-full max-w-md">
                <p className="font-mono text-sm text-muted mb-2">Playground</p>
                <h2 className="font-display text-2xl text-text font-semibold mb-6">BMI Calculator</h2>

                <form className="bg-surface border border-line rounded-sm p-6" onSubmit={calcBmi}>
                    <label htmlFor="high" className="block text-sm text-muted mb-1.5">Height (cm)</label>
                    <input
                        id="high"
                        type="number"
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                        placeholder="e.g. 175"
                        className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition mb-4"
                    />

                    <label htmlFor="wigh" className="block text-sm text-muted mb-1.5">Weight (kg)</label>
                    <input
                        id="wigh"
                        type="number"
                        onChange={(e) => setWeight(e.target.value)}
                        value={weight}
                        placeholder="e.g. 68"
                        className="w-full bg-ink border border-line rounded-sm px-4 py-2.5 text-text placeholder:text-muted focus:border-accent focus:outline-none transition mb-5"
                    />

                    {error && <p className="text-sm text-[#D9534F] mb-4">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-accent text-ink rounded-sm font-medium hover:brightness-110 transition"
                    >
                        Calculate BMI
                    </button>

                    {bmi && (
                        <div className="text-center mt-6 pt-6 border-t border-line">
                            <svg width="180" height="180" viewBox="0 0 200 200" className="mx-auto">
                                <circle cx="100" cy="100" r="90" stroke="#24435C" strokeWidth="16" fill="none" />
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="90"
                                    stroke={getBmiColor(bmi)}
                                    strokeWidth="16"
                                    fill="none"
                                    strokeDasharray={`${Math.min((bmi / 40) * 565, 565)}, 565`}
                                    strokeLinecap="round"
                                    transform="rotate(-90 100 100)"
                                />
                                <text x="100" y="105" textAnchor="middle" fontSize="14" fill="#7691A3">
                                    BMI
                                </text>
                                <text x="100" y="128" textAnchor="middle" fontSize="20" fontWeight="600" fill="#EAF1F5">
                                    {bmi}
                                </text>
                            </svg>
                            <p className="text-text font-medium mt-3">{message}</p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default BMIcalc;