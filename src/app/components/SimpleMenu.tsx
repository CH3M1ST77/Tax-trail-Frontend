import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SimpleMenuProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    health: number;
    supplies: number;
    distance: number;
  };
}

export function SimpleMenu({ isOpen, onClose, stats }: SimpleMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 border-gray-600 z-50 p-8 min-w-[320px]"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1 hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <h2 className="text-xl mb-8 text-white border-b-2 border-gray-700 pb-3 font-mono tracking-widest">
              STATUS
            </h2>

            <div className="space-y-5 font-mono text-sm">
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-300">HEALTH</span>
                <span className="text-white tracking-wider">{stats.health}%</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-300">SUPPLIES</span>
                <span className="text-white tracking-wider">{stats.supplies}%</span>
              </div>

              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-300">DISTANCE</span>
                <span className="text-white tracking-wider">{stats.distance} KM</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full mt-8 bg-gray-700 hover:bg-gray-600 text-white py-3 border-2 border-gray-500 transition-colors font-mono text-sm tracking-wider"
            >
              CONTINUE
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
