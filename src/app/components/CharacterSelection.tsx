import { useState } from 'react';

interface Character {
  id: string;
  name: string;
  description: string;
}

interface CharacterSelectionProps {
  onContinue: (characterId: string) => void;
}

const characters: Character[] = [
  {
    id: 'student',
    name: 'Student',
    description: 'Just starting out. Learn about PAYE.'
  },
  {
    id: 'worker',
    name: 'Employed Worker',
    description: 'Working hard. Understand tax deductions.'
  },
  {
    id: 'trader',
    name: 'Informal Trader',
    description: 'Running a business. Navigate tax compliance.'
  }
];

export function CharacterSelection({ onContinue }: CharacterSelectionProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<string>('student');

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FFF5E6' }}>
      {/* Village backdrop */}
      <div className="absolute inset-0 flex items-end justify-center pb-32 opacity-20">
        <div className="flex gap-12">
          {/* Simple house shapes */}
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="w-16 h-4" style={{ backgroundColor: '#8B4513', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
              <div className="w-16 h-20" style={{ backgroundColor: '#D4A574' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-12">
        <h1
          className="mb-12 text-center"
          style={{
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '3rem',
            fontWeight: 600,
            color: '#4A3428'
          }}
        >
          Choose Your Character
        </h1>

        {/* Character Cards */}
        <div className="flex gap-8 mb-12">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => setSelectedCharacter(character.id)}
              className="relative rounded-xl transition-all hover:scale-105"
              style={{
                width: '280px',
                height: '360px',
                backgroundColor: '#FFFFFF',
                border: selectedCharacter === character.id ? '4px solid #5EAF6E' : '2px solid #E0D5C7',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                padding: '24px'
              }}
            >
              {/* Character Illustration */}
              <div className="mb-6 flex items-center justify-center">
                {character.id === 'student' && (
                  <div className="relative">
                    {/* Head */}
                    <div className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: '#8B6F47' }}></div>
                    {/* Body */}
                    <div className="w-24 h-32 mx-auto mt-2 rounded-t-full" style={{ backgroundColor: '#4A90E2' }}></div>
                    {/* Backpack */}
                    <div className="absolute top-24 right-4 w-12 h-16 rounded" style={{ backgroundColor: '#E74C3C' }}></div>
                  </div>
                )}

                {character.id === 'worker' && (
                  <div className="relative">
                    {/* Head */}
                    <div className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: '#A67C52' }}></div>
                    {/* Body - work shirt */}
                    <div className="w-24 h-32 mx-auto mt-2 rounded-t-full" style={{ backgroundColor: '#F39C12' }}></div>
                    {/* Tool belt */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-4" style={{ backgroundColor: '#654321' }}></div>
                  </div>
                )}

                {character.id === 'trader' && (
                  <div className="relative">
                    {/* Head */}
                    <div className="w-20 h-20 rounded-full mx-auto" style={{ backgroundColor: '#6F4E37' }}></div>
                    {/* Body */}
                    <div className="w-24 h-32 mx-auto mt-2 rounded-t-full" style={{ backgroundColor: '#27AE60' }}></div>
                    {/* Market basket */}
                    <div className="absolute top-20 -right-2 w-16 h-12 rounded-lg" style={{ backgroundColor: '#8B4513', opacity: 0.8 }}></div>
                  </div>
                )}
              </div>

              {/* Character Info */}
              <div className="text-center">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'Fredoka, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: '#2C1810'
                  }}
                >
                  {character.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    color: '#6B5D52',
                    lineHeight: 1.5
                  }}
                >
                  {character.description}
                </p>
              </div>

              {/* Selection indicator */}
              {selectedCharacter === character.id && (
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#5EAF6E' }}
                >
                  <div className="w-3 h-5 border-white border-r-2 border-b-2 transform rotate-45 -mt-1"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={() => onContinue(selectedCharacter)}
          className="px-10 py-3 rounded-lg transition-all hover:scale-105"
          style={{
            backgroundColor: '#5EAF6E',
            color: '#FFFFFF',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.125rem',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
