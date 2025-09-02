import React from 'react';

const CircularProgress = ({ percent, color, label, value }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percent / 1) * circumference;

  return (
    <div className="flex items-center flex-wrap mb  px-6 bg-white shadow-xl rounded-2xl h-full">
      <div className="relative flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
        <svg className="w-32 h-32 transform translate-x-1 translate-y-1" aria-hidden="true">
          <circle
            className="text-gray-300"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className={`text-${color}-600`}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
        </svg>
        <span className={`absolute text-2xl text-${color}-700`}>
          {percent}+
        </span>
      </div>
      <p className="ml-10 font-medium text-gray-600 sm:text-xl">{label}</p>
      {value && (
        <span className={`ml-auto text-xl font-medium text-${color}-600 hidden sm:block`}>
          {value}
        </span>
      )}
    </div>
  );
};

const Rank = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-20 space-x-auto justify-around lg:gap-10">
        
       <div><CircularProgress percent={5} color="blue" label="Major Projects" value="" /></div>
        <div><CircularProgress percent={1} color="red" label="Experience" value="" /></div>
       <div> <CircularProgress percent={7} color="blue" label="Lang. & Library" value="" /></div>
      </div>
    </div>
  );
};

export default Rank;
