interface UrbanStartProps {
  onStart: () => void;
  onHowItWorks: () => void;
}

export function UrbanStart({ onStart, onHowItWorks }: UrbanStartProps) {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#4A5A6A' }}>
      {/* City Skyline Background */}
      <div className="absolute inset-0 flex items-end justify-center">
        {/* Sky gradient - early evening dusk */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #7B8FA3 0%, #5D6F82 50%, #4A5A6A 100%)'
        }}></div>

        {/* Skyline silhouettes - with variation and warm tones */}
        <div className="absolute bottom-0 w-full h-96 flex items-end justify-center gap-1 opacity-50">
          {/* Building 1 - tall, warm grey */}
          <div className="w-24 h-80" style={{ backgroundColor: '#3D4A58', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
            <div className="grid grid-cols-4 gap-1 p-2">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="w-4 h-3" style={{ backgroundColor: '#D4A574', opacity: Math.random() > 0.5 ? 0.8 : 0.2 }}></div>
              ))}
            </div>
          </div>

          {/* Building 2 - medium, teal-grey */}
          <div className="w-32 h-64" style={{ backgroundColor: '#4A5D6A', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
            <div className="grid grid-cols-5 gap-1 p-2">
              {[...Array(35)].map((_, i) => (
                <div key={i} className="w-4 h-3" style={{ backgroundColor: '#C9A870', opacity: Math.random() > 0.5 ? 0.7 : 0.2 }}></div>
              ))}
            </div>
          </div>

          {/* Building 3 - very tall, slate */}
          <div className="w-28 h-96" style={{ backgroundColor: '#3A4A5A', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
            <div className="grid grid-cols-4 gap-1 p-2">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="w-4 h-3" style={{ backgroundColor: '#D8B583', opacity: Math.random() > 0.5 ? 0.8 : 0.2 }}></div>
              ))}
            </div>
          </div>

          {/* Building 4 - medium-short, warm slate */}
          <div className="w-36 h-56" style={{ backgroundColor: '#475665', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
            <div className="grid grid-cols-6 gap-1 p-2">
              {[...Array(30)].map((_, i) => (
                <div key={i} className="w-4 h-3" style={{ backgroundColor: '#CCA366', opacity: Math.random() > 0.5 ? 0.7 : 0.2 }}></div>
              ))}
            </div>
          </div>

          {/* Building 5 - tall, medium grey */}
          <div className="w-24 h-72" style={{ backgroundColor: '#3E4D5C', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
            <div className="grid grid-cols-4 gap-1 p-2">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-4 h-3" style={{ backgroundColor: '#D1AA6E', opacity: Math.random() > 0.5 ? 0.75 : 0.2 }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Street level - warmer tone */}
        <div className="absolute bottom-0 w-full h-20" style={{ backgroundColor: '#3A4553' }}>
          {/* Street lights - warmer glow */}
          <div className="absolute top-0 left-0 right-0 flex justify-around">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-1 h-12" style={{ backgroundColor: '#5A6570' }}></div>
                <div className="w-4 h-2 rounded-full" style={{ backgroundColor: '#F5DDB0', opacity: 0.8, boxShadow: '0 0 8px rgba(245, 221, 176, 0.4)' }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        <div className="text-center mb-32">
          {/* Title */}
          <h1
            className="mb-4"
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontSize: '4rem',
              fontWeight: 600,
              color: '#F5F7FA',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            The Tax Trail
          </h1>

          {/* Tagline */}
          <p
            className="mb-16"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              fontWeight: 400,
              color: '#CBD5E0',
              letterSpacing: '0.01em'
            }}
          >
            Every move you make shapes the city.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={onStart}
              className="px-6 py-2.5 transition-all hover:brightness-110"
              style={{
                backgroundColor: '#8B9BAA',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 500,
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
            >
              Start Journey
            </button>

            <button
              onClick={onHowItWorks}
              className="px-6 py-2.5 transition-all hover:bg-opacity-10"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: '#E2E8F0',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                fontWeight: 500,
                border: '1px solid #7B8FA3'
              }}
            >
              How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
