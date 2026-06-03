import { motion } from 'motion/react';

interface ConsequenceScreenProps {
  narration: string;
  onContinue: () => void;
  sceneType?: 'town' | 'road' | 'business';
}

export function ConsequenceScreen({ narration, onContinue, sceneType = 'road' }: ConsequenceScreenProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl text-white font-mono tracking-wider">THE PROSPERITY TRAIL</h2>
        </div>

        {/* Main Scene Area */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative bg-black border-2 border-gray-600 overflow-hidden mb-4"
          style={{ height: '280px' }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50" />

          {/* Horizon */}
          <div className="absolute top-20 left-0 right-0 h-px bg-gray-700" />

          {/* Scene based on type */}
          {sceneType === 'town' && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1 opacity-50">
              <div className="w-8 h-14 bg-gray-600 border border-gray-700" />
              <div className="w-10 h-20 bg-gray-600 border border-gray-700" />
              <div className="w-9 h-16 bg-gray-600 border border-gray-700" />
              <div className="w-6 h-12 bg-gray-600 border border-gray-700" />
            </div>
          )}

          {sceneType === 'road' && (
            <>
              {/* Road with perspective */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 bg-gray-800"
                style={{ 
                  width: '200px',
                  clipPath: 'polygon(45% 0%, 55% 0%, 60% 100%, 40% 100%)'
                }}
              />
              {/* Road markings */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-4 bg-gray-600" />
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-px h-4 bg-gray-600" />
            </>
          )}

          {sceneType === 'business' && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-50">
              <div className="w-16 h-24 bg-gray-600 border border-gray-700 relative">
                <div className="absolute top-2 left-2 w-3 h-3 bg-gray-800" />
                <div className="absolute top-2 right-2 w-3 h-3 bg-gray-800" />
                <div className="absolute top-8 left-2 w-3 h-3 bg-gray-800" />
                <div className="absolute top-8 right-2 w-3 h-3 bg-gray-800" />
              </div>
            </div>
          )}

          {/* Player character */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <svg width="24" height="36" viewBox="0 0 24 36">
              <rect x="9" y="3" width="6" height="6" fill="#9ca3af" />
              <rect x="7" y="9" width="10" height="14" fill="#6b7280" />
              <rect x="7" y="23" width="4" height="13" fill="#6b7280" />
              <rect x="13" y="23" width="4" height="13" fill="#6b7280" />
            </svg>
          </motion.div>

          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-900 border-t border-gray-800" />
        </motion.div>

        {/* Text Narration Panel */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gray-900 border-2 border-gray-600 p-6 mb-4"
        >
          <p className="text-gray-300 text-base font-mono leading-relaxed mb-6">
            {narration}
          </p>

          {/* Continue Button */}
          <div className="flex justify-center">
            <motion.button
              onClick={onContinue}
              className="px-12 py-4 bg-gray-700 hover:bg-gray-600 text-white border-2 border-gray-500 font-mono text-sm tracking-wider transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              CONTINUE JOURNEY
            </motion.button>
          </div>
        </motion.div>

        {/* Status bar */}
        <div className="text-center text-gray-600 text-xs font-mono">
          THE JOURNEY CONTINUES...
        </div>
      </motion.div>
    </div>
  );
}
