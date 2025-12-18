import React from 'react';

const RainEffect = () => {
    return (
        <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
            {Array.from({ length: 100 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute top-0 h-8 w-0.5 bg-blue-400 animate-rain"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        opacity: Math.random() * 0.6 + 0.4
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes rain {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(100vh);
                    }
                }
                .animate-rain {
                    animation: rain 1.5s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default RainEffect;