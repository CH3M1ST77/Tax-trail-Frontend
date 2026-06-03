import { motion } from 'motion/react';
import { ArrowLeft, Map, Heart, Package } from 'lucide-react';

interface TutorialScreenProps {
  onBack: () => void;
}

export function TutorialScreen({ onBack }: TutorialScreenProps) {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="tracking-wide">Back to Start</span>
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gray-900 border border-gray-700 p-8 md:p-12"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-12 text-center font-light tracking-widest">
            HOW TO PLAY
          </h1>

          <div className="space-y-8 text-gray-300">
            {/* Objective */}
            <div className="bg-black border border-gray-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 border-2 border-gray-500" />
                <h2 className="text-2xl font-light tracking-wide">Your Goal</h2>
              </div>
              <p className="text-lg leading-relaxed font-light">
                Travel through Prosperity Town while learning about life choices, community responsibility, 
                and how contributing to society helps everyone thrive.
              </p>
            </div>

            {/* Gameplay */}
            <div className="bg-black border border-gray-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Map className="w-8 h-8 text-gray-500" />
                <h2 className="text-2xl font-light tracking-wide">Gameplay</h2>
              </div>
              <ul className="space-y-3 text-lg font-light">
                <li className="flex gap-3">
                  <span className="text-gray-500">—</span>
                  <span>Press "Continue Journey" to move forward</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500">—</span>
                  <span>Make choices when events appear</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500">—</span>
                  <span>Each decision affects your resources and standing in the community</span>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="bg-black border border-gray-700 p-6">
              <div className="flex items-center gap-4 mb-5">
                <Package className="w-8 h-8 text-gray-500" />
                <h2 className="text-2xl font-light tracking-wide">Resources</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-700">
                  <Heart className="w-6 h-6 text-gray-400" />
                  <div>
                    <div className="font-light tracking-wide">Health</div>
                    <div className="text-sm text-gray-500 font-light">Keep yourself strong</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-700">
                  <Package className="w-6 h-6 text-gray-400" />
                  <div>
                    <div className="font-light tracking-wide">Supplies</div>
                    <div className="text-sm text-gray-500 font-light">Essential for your journey</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Choices Matter */}
            <div className="bg-black border border-gray-700 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 border-2 border-gray-500 rounded-full" />
                <h2 className="text-2xl font-light tracking-wide">Choices Matter</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4 font-light">
                Throughout your journey, you'll face decisions about:
              </p>
              <ul className="space-y-3 text-lg font-light">
                <li className="flex gap-3">
                  <span className="text-gray-500">—</span>
                  <span>How you earn and use your resources</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500">—</span>
                  <span>Whether you contribute to the community</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-500">—</span>
                  <span>Supporting shared services (schools, roads, healthcare)</span>
                </li>
              </ul>
            </div>

            {/* Learning Goal */}
            <div className="bg-gray-800 border border-gray-600 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400" />
                </div>
                <h2 className="text-2xl font-light tracking-wide">What You'll Learn</h2>
              </div>
              <p className="text-lg leading-relaxed font-light">
                Discover how contributing to your community through taxes helps build schools, maintain roads, 
                fund hospitals, and support those in need. See both the benefits of participation and the 
                consequences when people don't contribute their fair share.
              </p>
            </div>
          </div>

          <motion.button
            onClick={onBack}
            className="w-full mt-10 bg-white hover:bg-gray-200 text-black px-8 py-4 text-xl font-light tracking-wide transition-all border border-gray-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ready to Begin
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
