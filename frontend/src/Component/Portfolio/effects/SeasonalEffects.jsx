import Snowfall from 'react-snowfall';

// Indian seasons mapping
export const INDIAN_SEASONS = {
  WINTER: { months: [12, 1, 2], name: 'Winter', effect: 'snow', color: '#82C3D9' },
  SPRING: { months: [3, 4], name: 'Spring', effect: 'springBreeze', color: '#9ACD32' },
  SUMMER: { months: [5, 6, 7, 8, 9], name: 'Summer', effect: 'summer', color: '#FFD700' },
  AUTUMN: { months: [10, 11], name: 'Autumn', effect: 'autumn', color: '#8B4513' },
};

export const getIndianSeason = () => {
  const currentMonth = new Date().getMonth() + 1;
  for (const [key, data] of Object.entries(INDIAN_SEASONS)) {
    if (data.months.includes(currentMonth)) {
      return { key, name: data.name, effect: data.effect, color: data.color };
    }
  }
  return { key: 'WINTER', ...INDIAN_SEASONS.WINTER };
};

const SnowEffect = () => (
  <Snowfall
    color="#82C3D9"
    style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: 10, pointerEvents: 'none' }}
  />
);

const SpringBreezeEffect = () => (
  <>
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={`petal-${i}`}
          className="absolute text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: '#FFB6C1',
            opacity: 0.4 + Math.random() * 0.4,
            animation: `float ${15 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${0.5 + Math.random() * 0.5})`,
          }}
        >
          ❀
        </div>
      ))}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`breeze-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(144, 238, 144, 0.3), transparent)',
            animation: `breezeFlow ${8 + Math.random() * 12}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
    <style>{`
      @keyframes float {
        0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10% { opacity: 0.7; }
        90% { opacity: 0.7; }
        100% { transform: translateY(-50vh) translateX(20vw) rotate(360deg); opacity: 0; }
      }
      @keyframes breezeFlow {
        0%, 100% { transform: translateX(0) scaleX(1); opacity: 0.3; }
        50% { transform: translateX(100px) scaleX(1.5); opacity: 0.6; }
      }
    `}</style>
  </>
);

const SummerEffect = () => (
  <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
    {Array.from({ length: 60 }).map((_, i) => (
      <div
        key={`sunray-${i}`}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 3}px`,
          height: `${1 + Math.random() * 3}px`,
          backgroundColor: '#FFD700',
          opacity: 0.3 + Math.random() * 0.4,
          animation: `sunrayFall ${8 + Math.random() * 12}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
    <style>{`
      @keyframes sunrayFall {
        0% { transform: translateY(-100%) translateX(0); opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { transform: translateY(100vh) translateX(20px); opacity: 0; }
      }
    `}</style>
  </div>
);

const AutumnEffect = () => {
  const leaves = ['🍁', '🍂'];
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`leaf-${i}`}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-5%',
            animation: `leafFall ${15 + Math.random() * 20}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {leaves[Math.floor(Math.random() * leaves.length)]}
        </div>
      ))}
      <style>{`
        @keyframes leafFall {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh) translateX(30vw) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Single exported component that decides which effect to show
const SeasonalEffect = ({ effect }) => {
  switch (effect) {
    case 'springBreeze': return <SpringBreezeEffect />;
    case 'summer': return <SummerEffect />;
    case 'autumn': return <AutumnEffect />;
    case 'snow':
    default: return <SnowEffect />;
  }
};

export default SeasonalEffect;