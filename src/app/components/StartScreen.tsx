import { motion } from 'motion/react';

interface StartScreenProps {
  onStart: () => void;
  onLearnToPlay: () => void;
}

export function StartScreen({ onStart, onLearnToPlay }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full"
      >
        {/* Title */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl md:text-7xl text-white mb-6 font-mono tracking-wider">
            THE PROSPERITY TRAIL
          </h1>
          <div className="text-gray-400 text-lg font-mono tracking-wide">
            A Journey of Choices & Consequences
          </div>
        </motion.div>

        {/* Main Scene */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative bg-black border-2 border-gray-600 overflow-hidden mb-8"
          style={{ height: '300px' }}
        >
          {/* Horizon line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gray-700" />

          {/* Town silhouette */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-1 opacity-40">
            <div className="w-6 h-12 bg-gray-600" />
            <div className="w-8 h-16 bg-gray-600" />
            <div className="w-7 h-14 bg-gray-600" />
            <div className="w-5 h-10 bg-gray-600" />
            <div className="w-6 h-12 bg-gray-600" />
          </div>

          {/* Road */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 bg-gray-800"
            style={{ 
              width: '200px',
              clipPath: 'polygon(45% 0%, 55% 0%, 60% 100%, 40% 100%)'
            }}
          />

          {/* Traveler */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
          >
            <svg width="30" height="40" viewBox="0 0 30 40">
              <rect x="12" y="5" width="6" height="6" fill="#9ca3af" />
              <rect x="10" y="11" width="10" height="16" fill="#6b7280" />
              <rect x="10" y="27" width="4" height="13" fill="#6b7280" />
              <rect x="16" y="27" width="4" height="13" fill="#6b7280" />
            </svg>
          </motion.div>

          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-900" />
        </motion.div>

        {/* Story Box */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gray-900 border-2 border-gray-600 p-6 mb-6"
        >
          <p className="text-gray-300 text-base font-mono leading-relaxed">
            You've just arrived in a growing town. Opportunities are everywhere, but so are responsibilities. Every choice you make will shape your journey.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <button
            onClick={onStart}
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 border-2 border-gray-500 font-mono text-sm tracking-wide transition-colors"
          >
            START JOURNEY
          </button>

          <button
            onClick={onLearnToPlay}
            className="bg-black hover:bg-gray-900 text-gray-300 px-8 py-3 border-2 border-gray-600 font-mono text-sm tracking-wide transition-colors"
          >
            HOW TO PLAY
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
