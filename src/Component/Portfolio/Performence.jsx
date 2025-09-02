import React from 'react';

const CircularProgress = ({ percentage = 75, size = 80, stroke = 6, color = 'blue' }) => {
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const colorClasses = {
        blue: 'text-blue-500',
        green: 'text-green-500',
        purple: 'text-purple-500',
        orange: 'text-orange-400',
    };

    return (
        <div className="relative w-[80px] h-[80px]">
            <svg width={size} height={size} className="transform -rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={stroke}
                    fill="transparent"
                    className="text-blue-100"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className={`${colorClasses[color]} transition-all duration-700`}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-800">{percentage}%</span>
            </div>
        </div>
    );
};

const Performence = () => {
    return (
        <div className="w-full py-12 bg-white">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-medium text-gray-700 text-center mb-4">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* HTML Card with Circular Progress */}
                    <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-blue-700">HTML</h3>
                            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                <span className="text-blue-700 font-bold text-md">H</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex-1 pr-4">
                                <p className="text-sm text-gray-600 mb-2">Markup language used for structuring web pages and applications.</p>
                            </div>
                            <div>
                                <CircularProgress percentage={95} color="blue" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-amber-100 rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">React</h3>
                            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                <span className="text-blue-700 font-bold text-md">R</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex-1 pr-4">
                                <p className="text-sm text-gray-600 mb-2">JavaScript library for building user interfaces efficiently and declaratively.</p>

                            </div>
                            <div>
                                <CircularProgress percentage={80} color="orange" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">JavaScript</h3>
                            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                <span className="text-green-600 font-bold text-md">J</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex-1 pr-4">
                                <p className="text-sm text-gray-600 mb-2">Programming language that enables dynamic and interactive behavior on websites</p>

                            </div>
                            <div>
                                <CircularProgress percentage={80} color="green" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-50 rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">CSS</h3>
                            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                <span className="text-purple-600 font-bold text-md">C</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex-1 pr-4">
                                <p className="text-sm text-gray-600 mb-2">Style sheet language used for describing the visual presentation of web documents.</p>

                            </div>
                            <div>
                                <CircularProgress percentage={80} color="purple" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Professional Skills Section */}
                <div className="mt-12">
                    <h3 className="text-3xl font-medium text-gray-700 text-center mb-4">Professional Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Problem Solving</h3>
                                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                    <span className="text-orange-400 font-bold text-md">P</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex-1 pr-4">
                                    <p className="text-sm text-gray-600 mb-2">Ability to analyze challenges and implement effective, practical solutions.</p>

                                </div>
                                <div>
                                    <CircularProgress percentage={80} color="orange" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Communication</h3>
                                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                    <span className="text-purple-400 font-bold text-md">C</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex-1 pr-4">
                                    <p className="text-sm text-gray-600 mb-2">Clearly conveys ideas and listens actively to ensure mutual understanding.</p>

                                </div>
                                <div>
                                    <CircularProgress percentage={80} color="purple" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-50 rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Teamwork</h3>
                                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                                    <span className="text-blue-400 font-bold text-md">T</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex-1 pr-4">
                                    <p className="text-sm text-gray-600 mb-2">Collaborates effectively within diverse teams to achieve shared goals.</p>

                                </div>
                                <div>
                                    <CircularProgress percentage={80} color="blue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performence;


