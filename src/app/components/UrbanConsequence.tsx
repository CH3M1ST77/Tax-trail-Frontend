interface UrbanConsequenceProps {
  positive: boolean;
  title: string;
  description: string;
  onContinue: () => void;
}

export function UrbanConsequence({
  positive,
  title,
  description,
  onContinue
}: UrbanConsequenceProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Split background - developed vs struggling */}
      <div className="absolute inset-0 flex">
        {/* Left half */}
        <div className="w-1/2 relative" style={{
          background: positive
            ? 'linear-gradient(180deg, #8FA8BE 0%, #6B8299 100%)'
            : 'linear-gradient(180deg, #4A5A6A 0%, #3A4553 100%)'
        }}>
          {/* Buildings on left */}
          <div className="absolute bottom-20 left-1/4">
            {/* Developed building */}
            <div
              className="w-20 h-40"
              style={{
                backgroundColor: positive ? '#3D4A58' : '#4A5A6A',
                border: `1px solid ${positive ? '#5A6F84' : '#3A4553'}`,
                opacity: positive ? 1 : 0.6
              }}
            >
              <div className="grid grid-cols-3 gap-1 p-2">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-2"
                    style={{
                      backgroundColor: positive ? '#D4A574' : '#3A4553',
                      opacity: positive ? (Math.random() > 0.5 ? 0.9 : 0.4) : 0.3
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Street level */}
          <div className="absolute bottom-0 w-full h-20" style={{
            backgroundColor: positive ? '#3A4553' : '#2A3644'
          }}>
            {positive && (
              <div className="absolute top-0 left-0 right-0 flex justify-around">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1 h-12" style={{ backgroundColor: '#5A6570' }}></div>
                    <div className="w-4 h-2 rounded-full" style={{ backgroundColor: '#F5DDB0', opacity: 0.8 }}></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right half - opposite state */}
        <div className="w-1/2 relative" style={{
          background: !positive
            ? 'linear-gradient(180deg, #8FA8BE 0%, #6B8299 100%)'
            : 'linear-gradient(180deg, #4A5A6A 0%, #3A4553 100%)'
        }}>
          {/* Buildings on right */}
          <div className="absolute bottom-20 right-1/4">
            <div
              className="w-20 h-40 relative"
              style={{
                backgroundColor: !positive ? '#3D4A58' : '#4A5A6A',
                border: `1px solid ${!positive ? '#5A6F84' : '#3A4553'}`,
                opacity: !positive ? 1 : 0.6
              }}
            >
              <div className="grid grid-cols-3 gap-1 p-2">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-2"
                    style={{
                      backgroundColor: !positive ? '#D4A574' : '#3A4553',
                      opacity: !positive ? (Math.random() > 0.5 ? 0.9 : 0.4) : 0.3
                    }}
                  ></div>
                ))}
              </div>

              {/* Cracks for struggling side */}
              {positive && (
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }}>
                  <line x1="30%" y1="0%" x2="35%" y2="100%" stroke="#2A3644" strokeWidth="2" />
                  <line x1="70%" y1="20%" x2="65%" y2="80%" stroke="#2A3644" strokeWidth="2" />
                </svg>
              )}
            </div>
          </div>

          {/* Street level */}
          <div className="absolute bottom-0 w-full h-20" style={{
            backgroundColor: !positive ? '#3A4553' : '#2A3644'
          }}>
            {!positive && (
              <div className="absolute top-0 left-0 right-0 flex justify-around">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-1 h-12" style={{ backgroundColor: '#5A6570' }}></div>
                    <div className="w-4 h-2 rounded-full" style={{ backgroundColor: '#F5DDB0', opacity: 0.8 }}></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div
          style={{
            backgroundColor: '#F5F7FA',
            width: '100%',
            maxWidth: '480px',
            padding: '36px',
            border: '1px solid #CBD5E0',
            borderRadius: '6px',
            boxShadow: '0 16px 64px rgba(0,0,0,0.3)'
          }}
        >
          {/* Result Title */}
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontSize: '1.75rem',
              fontWeight: 600,
              color: positive ? '#3A4A5A' : '#5A6F84'
            }}
          >
            {title}
          </h2>

          {/* Description */}
          <p
            className="text-center mb-8"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              lineHeight: 1.7,
              color: '#5A6F84'
            }}
          >
            {description}
          </p>

          {/* Continue Button */}
          <button
            onClick={onContinue}
            className="w-full px-6 py-2.5 transition-all hover:brightness-110"
            style={{
              backgroundColor: '#8B9BAA',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
