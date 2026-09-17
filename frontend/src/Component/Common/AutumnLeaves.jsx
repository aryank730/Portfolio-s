import React from 'react';

const AutumnLeaves = () => {
    const leaves = ['🍁', '🍂', '🥀', '🌿'];
    
    return (
        <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => {
                const leaf = leaves[Math.floor(Math.random() * leaves.length)];
                return (
                    <div
                        key={i}
                        className="absolute text-2xl animate-autumn-leaf"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: '-10%',
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 10}s`
                        }}
                    >
                        {leaf}
                    </div>
                );
            })}
            <style jsx>{`
                @keyframes autumnLeaf {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
                .animate-autumn-leaf {
                    animation: autumnLeaf linear infinite;
                }
            `}</style>
        </div>
    );
};

export default AutumnLeaves;