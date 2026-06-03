import { motion } from 'motion/react';

interface Scene2DProps {
  biome: 'plains' | 'village' | 'forest' | 'mountains' | 'desert';
  characterPosition: number; // 0-100
  weather: 'sunny' | 'cloudy' | 'rainy';
}

export function Scene2D({ biome, characterPosition, weather }: Scene2DProps) {
  const getBiomeElements = () => {
    switch (biome) {
      case 'plains':
        return { 
          bgGradient: 'from-gray-900 to-black',
          groundGradient: 'from-gray-800 to-gray-900',
          elements: [
            <svg key="1" width="25" height="35"><polygon points="12,3 2,25 22,25" fill="#4b5563" opacity="0.5" /><rect x="10" y="25" width="4" height="10" fill="#6b7280" opacity="0.5" /></svg>,
            <svg key="2" width="20" height="30"><polygon points="10,2 2,22 18,22" fill="#4b5563" opacity="0.4" /><rect x="8" y="22" width="4" height="8" fill="#6b7280" opacity="0.4" /></svg>,
            <svg key="3" width="25" height="35"><polygon points="12,3 2,25 22,25" fill="#4b5563" opacity="0.5" /><rect x="10" y="25" width="4" height="10" fill="#6b7280" opacity="0.5" /></svg>,
          ]
        };
      case 'village':
        return { 
          bgGradient: 'from-gray-900 to-black',
          groundGradient: 'from-gray-800 to-gray-900',
          elements: [
            <div key="1" className="w-6 h-10 bg-gray-600 border border-gray-700 opacity-50" />,
            <div key="2" className="w-8 h-14 bg-gray-600 border border-gray-700 opacity-50" />,
            <div key="3" className="w-5 h-8 bg-gray-600 border border-gray-700 opacity-50" />,
          ]
        };
      case 'forest':
        return { 
          bgGradient: 'from-gray-900 to-black',
          groundGradient: 'from-gray-800 to-gray-900',
          elements: [
            <svg key="1" width="30" height="45"><polygon points="15,3 2,32 28,32" fill="#4b5563" opacity="0.6" /><rect x="13" y="32" width="4" height="13" fill="#6b7280" opacity="0.6" /></svg>,
            <svg key="2" width="30" height="45"><polygon points="15,3 2,32 28,32" fill="#4b5563" opacity="0.6" /><rect x="13" y="32" width="4" height="13" fill="#6b7280" opacity="0.6" /></svg>,
            <svg key="3" width="30" height="45"><polygon points="15,3 2,32 28,32" fill="#4b5563" opacity="0.6" /><rect x="13" y="32" width="4" height="13" fill="#6b7280" opacity="0.6" /></svg>,
          ]
        };
      case 'mountains':
        return { 
          bgGradient: 'from-gray-900 to-black',
          groundGradient: 'from-gray-700 to-gray-800',
          elements: [
            <svg key="1" width="45" height="65"><polygon points="22,8 4,65 40,65" fill="#374151" opacity="0.7" /></svg>,
            <svg key="2" width="55" height="75"><polygon points="27,5 4,75 50,75" fill="#374151" opacity="0.6" /></svg>,
            <svg key="3" width="45" height="65"><polygon points="22,8 4,65 40,65" fill="#374151" opacity="0.7" /></svg>,
          ]
        };
      case 'desert':
        return { 
          bgGradient: 'from-gray-900 to-black',
          groundGradient: 'from-gray-750 to-gray-850',
          elements: [
            <div key="1" className="w-px h-10 bg-gray-600 opacity-60 relative"><div className="absolute -left-1 top-3 w-3 h-px bg-gray-600" /><div className="absolute -right-1 top-5 w-3 h-px bg-gray-600" /></div>,
            <div key="2" className="w-3 h-3 bg-gray-600 opacity-40" />,
            <div key="3" className="w-px h-8 bg-gray-600 opacity-60 relative"><div className="absolute -left-1 top-2 w-3 h-px bg-gray-600" /><div className="absolute -right-1 top-4 w-3 h-px bg-gray-600" /></div>,
          ]
        };
    }
  };

  const biomeData = getBiomeElements();

  return (
    <div className="relative w-full h-72 overflow-hidden border-2 border-gray-600">
      {/* Sky/Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${biomeData.bgGradient} opacity-60`} />
      
      {/* Horizon */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gray-700 opacity-50" />

      {/* Weather effects */}
      {weather === 'rainy' && (
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-3 bg-white"
              style={{ 
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, 80],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 1 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}

      {/* Ground */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b ${biomeData.groundGradient} border-t border-gray-800`} />

      {/* Road/Path with perspective */}
      <div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 h-16 bg-gray-700 opacity-40"
        style={{ 
          width: '180px',
          clipPath: 'polygon(45% 0%, 55% 0%, 58% 100%, 42% 100%)'
        }}
      />

      {/* Road center line */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 h-16 flex flex-col justify-around items-center">
        <div className="w-px h-2 bg-gray-500" />
        <div className="w-px h-2 bg-gray-500" />
        <div className="w-px h-2 bg-gray-500" />
      </div>

      {/* Scenery Items */}
      <div className="absolute bottom-24 left-[15%]">{biomeData.elements[0]}</div>
      <div className="absolute bottom-28 left-[45%]">{biomeData.elements[1]}</div>
      <div className="absolute bottom-24 right-[20%]">{biomeData.elements[2]}</div>

      {/* Character - simple geometric figure */}
      <motion.div
        className="absolute bottom-20"
        animate={{
          left: `${characterPosition}%`,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
        }}
      >
        <svg width="24" height="36" viewBox="0 0 24 36">
          <rect x="9" y="3" width="6" height="6" fill="#9ca3af" />
          <rect x="7" y="9" width="10" height="14" fill="#6b7280" />
          <rect x="7" y="23" width="4" height="13" fill="#6b7280" />
          <rect x="13" y="23" width="4" height="13" fill="#6b7280" />
        </svg>
      </motion.div>

      {/* Distance markers */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-6 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-px h-2 bg-gray-500" />
        ))}
      </div>
    </div>
  );
}
