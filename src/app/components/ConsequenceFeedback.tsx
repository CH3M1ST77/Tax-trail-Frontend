interface StatChange {
  label: string;
  change: number;
}

interface ConsequenceFeedbackProps {
  success: boolean;
  title: string;
  description: string;
  statChanges: StatChange[];
  onContinue: () => void;
}

export function ConsequenceFeedback({
  success,
  title,
  description,
  statChanges,
  onContinue
}: ConsequenceFeedbackProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Split background - thriving vs struggling */}
      <div className="absolute inset-0 flex">
        {/* Left half - state based on success */}
        <div className="w-1/2 relative" style={{
          background: success
            ? 'linear-gradient(180deg, #87CEEB 0%, #9CAF88 70%, #8B7355 100%)'
            : 'linear-gradient(180deg, #6B6B6B 0%, #7A7A7A 70%, #5A5A5A 100%)'
        }}>
          {/* Buildings on left */}
          <div className="absolute bottom-32 left-1/4">
            {/* Thriving school */}
            <div className="w-16 h-4" style={{
              backgroundColor: success ? '#C13B2E' : '#666',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
            }}></div>
            <div className="w-16 h-24" style={{ backgroundColor: success ? '#E8C4A0' : '#888' }}>
              {success && (
                <div className="flex gap-1 justify-center pt-2">
                  <div className="w-4 h-4" style={{ backgroundColor: '#6B9BD1' }}></div>
                  <div className="w-4 h-4" style={{ backgroundColor: '#6B9BD1' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Ground */}
          <div className="absolute bottom-0 w-full h-32" style={{
            backgroundColor: success ? '#9CAF88' : '#6B6B6B'
          }}></div>

          {success && (
            <>
              {/* Happy citizens */}
              <div className="absolute bottom-32 right-1/4">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#8B6F47' }}></div>
                <div className="w-10 h-12 rounded-t-full" style={{ backgroundColor: '#4A90E2' }}></div>
              </div>
            </>
          )}
        </div>

        {/* Right half - opposite state */}
        <div className="w-1/2 relative" style={{
          background: !success
            ? 'linear-gradient(180deg, #87CEEB 0%, #9CAF88 70%, #8B7355 100%)'
            : 'linear-gradient(180deg, #6B6B6B 0%, #7A7A7A 70%, #5A5A5A 100%)'
        }}>
          {/* Buildings on right */}
          <div className="absolute bottom-32 right-1/4">
            <div className="w-16 h-4" style={{
              backgroundColor: !success ? '#C13B2E' : '#666',
              clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
            }}></div>
            <div className="w-16 h-24 relative" style={{ backgroundColor: !success ? '#E8C4A0' : '#888' }}>
              {!success ? (
                <div className="flex gap-1 justify-center pt-2">
                  <div className="w-4 h-4" style={{ backgroundColor: '#6B9BD1' }}></div>
                  <div className="w-4 h-4" style={{ backgroundColor: '#6B9BD1' }}></div>
                </div>
              ) : (
                // Cracks
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }}>
                  <line x1="30%" y1="10%" x2="50%" y2="90%" stroke="#000" strokeWidth="2" />
                  <line x1="70%" y1="20%" x2="60%" y2="80%" stroke="#000" strokeWidth="2" />
                </svg>
              )}
            </div>
          </div>

          {/* Ground */}
          <div className="absolute bottom-0 w-full h-32" style={{
            backgroundColor: !success ? '#9CAF88' : '#6B6B6B'
          }}></div>

          {!success && (
            <>
              {/* Clinic */}
              <div className="absolute bottom-32 left-1/4">
                <div className="w-12 h-3" style={{ backgroundColor: '#C13B2E', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
                <div className="w-12 h-16" style={{ backgroundColor: '#E8C4A0' }}>
                  <div className="text-center pt-1" style={{ fontSize: '20px' }}>+</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Result Popup Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div
          className="rounded-2xl"
          style={{
            backgroundColor: '#FFF5E6',
            width: '100%',
            maxWidth: '500px',
            padding: '40px',
            boxShadow: '0 24px 72px rgba(0,0,0,0.4)'
          }}
        >
          {/* Result Title */}
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: 'Fredoka, sans-serif',
              fontSize: '2.25rem',
              fontWeight: 700,
              color: success ? '#5EAF6E' : '#E74C3C'
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="text-center mb-8"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.0625rem',
              lineHeight: 1.6,
              color: '#4A3428'
            }}
          >
            {description}
          </p>

          {/* Stat Changes */}
          <div className="space-y-4 mb-8">
            {statChanges.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between px-4 py-3 rounded-lg" style={{ backgroundColor: '#F5E6D3' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#2C1810' }}>
                  {stat.label}
                </span>
                <div className="flex items-center gap-2">
                  {stat.change > 0 ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4L10 16M10 4L6 8M10 4L14 8" stroke="#5EAF6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: '#5EAF6E' }}>
                        +{stat.change}
                      </span>
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 16L10 4M10 16L14 12M10 16L6 12" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 700, color: '#E74C3C' }}>
                        {stat.change}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={onContinue}
            className="w-full px-8 py-3 rounded-lg transition-all hover:scale-105"
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
    </div>
  );
}
