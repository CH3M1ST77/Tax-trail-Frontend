import { motion } from 'motion/react';

interface EventCardProps {
  title: string;
  description: string;
  choices: Array<{
    text: string;
    id: string;
  }>;
  onChoice: (id: string) => void;
}

export function EventCard({ title, description, choices, onChoice }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900 border-2 border-gray-600 p-6"
    >
      <h3 className="text-lg mb-3 text-white font-mono tracking-wide uppercase">{title}</h3>
      <p className="text-gray-300 mb-6 font-mono leading-relaxed text-sm">{description}</p>
      
      <div className="flex gap-3 justify-center">
        {choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onChoice(choice.id)}
            className="w-36 h-36 bg-gray-800 hover:bg-gray-700 text-gray-200 border-2 border-gray-600 hover:border-gray-500 transition-all font-mono text-xs flex items-center justify-center px-2 text-center"
          >
            {choice.text.toUpperCase()}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
