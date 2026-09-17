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

const SkillCard = ({ title, badgeLetter, badgeColor, bg, description, percentage, progressColor }) => (
    <div className={`${bg} rounded-3xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300`}>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                <span className={`${badgeColor} font-bold text-md`}>{badgeLetter}</span>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex-1 pr-4">
                <p className="text-sm text-gray-600 mb-2">{description}</p>
            </div>
            <div>
                <CircularProgress percentage={percentage} color={progressColor} />
            </div>
        </div>
    </div>
);

const technicalSkills = [
    {
        title: 'HTML',
        badgeLetter: 'H',
        badgeColor: 'text-blue-700',
        bg: 'bg-blue-50',
        description: 'Markup language used for structuring web pages and applications.',
        percentage: 95,
        progressColor: 'blue',
    },
    {
        title: 'React',
        badgeLetter: 'R',
        badgeColor: 'text-blue-700',
        bg: 'bg-amber-100',
        description: 'JavaScript library for building user interfaces efficiently and declaratively.',
        percentage: 80,
        progressColor: 'orange',
    },
    {
        title: 'JavaScript',
        badgeLetter: 'J',
        badgeColor: 'text-green-600',
        bg: 'bg-green-50',
        description: 'Programming language that enables dynamic and interactive behavior on websites.',
        percentage: 80,
        progressColor: 'green',
    },
    {
        title: 'CSS',
        badgeLetter: 'C',
        badgeColor: 'text-purple-600',
        bg: 'bg-purple-50',
        description: 'Style sheet language used for describing the visual presentation of web documents.',
        percentage: 80,
        progressColor: 'purple',
    },
];

const professionalSkills = [
    {
        title: 'Problem Solving',
        badgeLetter: 'P',
        badgeColor: 'text-orange-400',
        bg: 'bg-purple-50',
        description: 'Ability to analyze challenges and implement effective, practical solutions.',
        percentage: 80,
        progressColor: 'orange',
    },
    {
        title: 'Communication',
        badgeLetter: 'C',
        badgeColor: 'text-purple-400',
        bg: 'bg-purple-50',
        description: 'Clearly conveys ideas and listens actively to ensure mutual understanding.',
        percentage: 80,
        progressColor: 'purple',
    },
    {
        title: 'Teamwork',
        badgeLetter: 'T',
        badgeColor: 'text-blue-400',
        bg: 'bg-purple-50',
        description: 'Collaborates effectively within diverse teams to achieve shared goals.',
        percentage: 80,
        progressColor: 'blue',
    },
];

const Performence = () => {
    return (
        <div className="w-full py-12 bg-white">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-medium text-gray-700 text-center mb-4">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {technicalSkills.map((skill) => (
                        <SkillCard key={skill.title} {...skill} />
                    ))}
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl font-medium text-gray-700 text-center mb-4">Professional Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {professionalSkills.map((skill) => (
                            <SkillCard key={skill.title} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performence;