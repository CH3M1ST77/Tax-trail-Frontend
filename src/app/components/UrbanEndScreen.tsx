interface UrbanEndScreenProps {
  outcome: 'City Builder' | 'Balanced Player' | 'Risk Taker';
  message: string;
  cityQuality: 'developed' | 'struggling';
  onPlayAgain: () => void;
  onShare?: () => void;
}

export function UrbanEndScreen({
  outcome,
  message,
  cityQuality,
  onPlayAgain,
  onShare
}: UrbanEndScreenProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - city reflects outcome */}
      <div className="absolute inset-0" style={{
        background: cityQuality === 'developed'
          ? 'linear-gradient(180deg, #8FA8BE 0%, #6B8299 100%)'
          : 'linear-gradient(180deg, #5D6F82 0%, #3A4553 100%)'
      }}>
        {/* City skyline in background */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2 opacity-35">
          {/* Building 1 */}
          <div
            className="w-24 h-48"
            style={{
              backgroundColor: cityQuality === 'developed' ? '#3D4A58' : '#4A5A6A',
              border: `1px solid ${cityQuality === 'developed' ? '#5A6F84' : '#3A4553'}`
            }}
          >
            <div className="grid grid-cols-4 gap-1 p-2">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-2"
                  style={{
                    backgroundColor: cityQuality === 'developed' ? '#D4A574' : '#3A4553',
                    opacity: cityQuality === 'developed' ? (Math.random() > 0.5 ? 0.9 : 0.4) : 0.3
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Building 2 */}
          <div
            className="w-32 h-56"
            style={{
              backgroundColor: cityQuality === 'developed' ? '#3D4A58' : '#4A5A6A',
              border: `1px solid ${cityQuality === 'developed' ? '#5A6F84' : '#3A4553'}`
            }}
          >
            <div className="grid grid-cols-5 gap-1 p-2">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-2"
                  style={{
                    backgroundColor: cityQuality === 'developed' ? '#D4A574' : '#3A4553',
                    opacity: cityQuality === 'developed' ? (Math.random() > 0.5 ? 0.9 : 0.4) : 0.3
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Building 3 */}
          <div
            className="w-28 h-52"
            style={{
              backgroundColor: cityQuality === 'developed' ? '#3D4A58' : '#4A5A6A',
              border: `1px solid ${cityQuality === 'developed' ? '#5A6F84' : '#3A4553'}`
            }}
          >
            <div className="grid grid-cols-4 gap-1 p-2">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-2"
                  style={{
                    backgroundColor: cityQuality === 'developed' ? '#D4A574' : '#3A4553',
                    opacity: cityQuality === 'developed' ? (Math.random() > 0.5 ? 0.9 : 0.4) : 0.3
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-16">
        <div
          style={{
            backgroundColor: '#F5F7FA',
            width: '100%',
            maxWidth: '540px',
            padding: '48px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            boxShadow: '0 20px 80px rgba(0,0,0,0.4)'
          }}
        >
          {/* Outcome Title */}
          <h1
            className="text-center mb-6"
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontSize: '2.25rem',
              fontWeight: 600,
              color: '#2A3644',
              letterSpacing: '-0.02em'
            }}
          >
            {outcome}
          </h1>

          {/* Message */}
          <p
            className="text-center mb-12"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#5A6F84'
            }}
          >
            {message}
          </p>

          {/* Visual separator */}
          <div className="w-full h-px mb-8" style={{ backgroundColor: '#CBD5E0' }}></div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            {onShare && (
              <button
                onClick={onShare}
                className="px-6 py-2.5 transition-all hover:bg-opacity-10"
                style={{
                  backgroundColor: 'rgba(139, 155, 170, 0.1)',
                  color: '#5A6F84',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  border: '1px solid #8B9BAA'
                }}
              >
                Share
              </button>
            )}

            <button
              onClick={onPlayAgain}
              className="px-8 py-2.5 transition-all hover:brightness-110"
              style={{
                backgroundColor: '#8B9BAA',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
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
