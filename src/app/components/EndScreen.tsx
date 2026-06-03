interface Badge {
  name: string;
  icon: string;
}

interface EndScreenProps {
  score: number;
  compliance: number;
  badges: Badge[];
  grade: 'Tax Champion' | 'Civic Contributor' | 'Needs Improvement';
  message: string;
  townQuality: 'thriving' | 'struggling';
  onPlayAgain: () => void;
  onShare?: () => void;
}

export function EndScreen({
  score,
  compliance,
  badges,
  grade,
  message,
  townQuality,
  onPlayAgain,
  onShare
}: EndScreenProps) {
  const gradeColors = {
    'Tax Champion': '#5EAF6E',
    'Civic Contributor': '#F39C12',
    'Needs Improvement': '#E74C3C'
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - thriving or struggling town */}
      <div className="absolute inset-0" style={{
        background: townQuality === 'thriving'
          ? 'linear-gradient(180deg, #87CEEB 0%, #9CAF88 60%, #8B7355 100%)'
          : 'linear-gradient(180deg, #6B6B6B 0%, #7A7A7A 60%, #5A5A5A 100%)'
      }}>
        {/* Town buildings in background */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-16 opacity-40">
          {/* School */}
          <div>
            <div className="w-24 h-6" style={{
              backgroundColor: townQuality === 'thriving' ? '#C13B2E' : '#666',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
            }}></div>
            <div className="w-24 h-32" style={{
              backgroundColor: townQuality === 'thriving' ? '#E8C4A0' : '#888'
            }}>
              {townQuality === 'thriving' && (
                <div className="flex gap-2 justify-center pt-4">
                  <div className="w-6 h-6" style={{ backgroundColor: '#6B9BD1' }}></div>
                  <div className="w-6 h-6" style={{ backgroundColor: '#6B9BD1' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Clinic */}
          <div>
            <div className="w-20 h-5" style={{
              backgroundColor: townQuality === 'thriving' ? '#C13B2E' : '#666',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
            }}></div>
            <div className="w-20 h-28 flex items-center justify-center" style={{
              backgroundColor: townQuality === 'thriving' ? '#E8C4A0' : '#888'
            }}>
              {townQuality === 'thriving' && (
                <div style={{ fontSize: '40px', color: '#E74C3C' }}>+</div>
              )}
            </div>
          </div>

          {/* Market */}
          <div>
            <div className="w-28 h-5" style={{ backgroundColor: townQuality === 'thriving' ? '#8B4513' : '#555' }}></div>
            <div className="flex justify-between px-2">
              <div className="w-2 h-24" style={{ backgroundColor: townQuality === 'thriving' ? '#654321' : '#444' }}></div>
              <div className="w-2 h-24" style={{ backgroundColor: townQuality === 'thriving' ? '#654321' : '#444' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-12">
        <div
          className="rounded-2xl relative"
          style={{
            backgroundColor: '#FFF5E6',
            width: '100%',
            maxWidth: '600px',
            padding: '48px',
            boxShadow: '0 24px 72px rgba(0,0,0,0.5)'
          }}
        >
          {/* Decorative stars */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F39C12' }}>
                <svg viewBox="0 0 24 24" fill="#FFF" className="w-8 h-8">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-center mb-2 mt-8"
            style={{
              fontFamily: 'Fredoka, sans-serif',
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#2C1810'
            }}
          >
            Game Complete!
          </h1>

          {/* Final Score */}
          <div className="text-center mb-6">
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B5D52', marginBottom: '8px' }}>
              Final Score
            </div>
            <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '3.5rem', fontWeight: 700, color: '#5EAF6E' }}>
              {score.toLocaleString()}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center px-4 py-3 rounded-lg" style={{ backgroundColor: '#F5E6D3' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B5D52', marginBottom: '4px' }}>
                Compliance
              </div>
              <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.75rem', fontWeight: 600, color: '#5EAF6E' }}>
                {compliance}%
              </div>
            </div>

            <div className="text-center px-4 py-3 rounded-lg" style={{ backgroundColor: '#F5E6D3' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B5D52', marginBottom: '4px' }}>
                Badges Earned
              </div>
              <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.75rem', fontWeight: 600, color: '#F39C12' }}>
                {badges.length}
              </div>
            </div>
          </div>

          {/* Grade */}
          <div className="text-center mb-4 px-6 py-4 rounded-xl" style={{
            backgroundColor: gradeColors[grade] + '20',
            border: `3px solid ${gradeColors[grade]}`
          }}>
            <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '2rem', fontWeight: 700, color: gradeColors[grade] }}>
              {grade}
            </div>
          </div>

          {/* Message */}
          <p
            className="text-center mb-6"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              color: '#4A3428'
            }}
          >
            {message}
          </p>

          {/* Badges Display */}
          {badges.length > 0 && (
            <div className="mb-8">
              <div className="text-center mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#6B5D52', fontWeight: 600 }}>
                Your Badges
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                {badges.map((badge, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: '#F39C12' }}>
                      <span style={{ fontSize: '2rem' }}>{badge.icon}</span>
                    </div>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#6B5D52', textAlign: 'center' }}>
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            {onShare && (
              <button
                onClick={onShare}
                className="px-6 py-3 rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: 'transparent',
                  color: '#5EAF6E',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  border: '2px solid #5EAF6E'
                }}
              >
                Share
              </button>
            )}

            <button
              onClick={onPlayAgain}
              className="px-8 py-3 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: '#5EAF6E',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
