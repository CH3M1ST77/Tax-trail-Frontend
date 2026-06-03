interface TaxTrailStartProps {
  onStart: () => void;
  onHowToPlay: () => void;
}

export function TaxTrailStart({ onStart, onHowToPlay }: TaxTrailStartProps) {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FF9F5A 0%, #FFD27F 50%, #FFA577 100%)' }}>
      {/* Illustrated Background */}
      <div className="absolute inset-0 flex items-end justify-center pb-32">
        {/* Sky/Background - already handled by gradient */}

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-48" style={{ backgroundColor: '#C17A5F' }}></div>

        {/* Market stall - left */}
        <div className="absolute bottom-48 left-1/4 -translate-x-1/2">
          {/* Roof */}
          <div className="w-32 h-4" style={{ backgroundColor: '#8B4513', transform: 'perspective(100px) rotateX(45deg)' }}></div>
          {/* Support poles */}
          <div className="flex justify-between px-2">
            <div className="w-2 h-20" style={{ backgroundColor: '#654321' }}></div>
            <div className="w-2 h-20" style={{ backgroundColor: '#654321' }}></div>
          </div>
          {/* Counter */}
          <div className="w-32 h-8" style={{ backgroundColor: '#8B6F47' }}></div>
        </div>

        {/* School building - center */}
        <div className="absolute bottom-48 left-1/2 -translate-x-1/2">
          {/* Roof */}
          <div className="w-40 h-6" style={{ backgroundColor: '#C13B2E', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
          {/* Building */}
          <div className="w-40 h-32" style={{ backgroundColor: '#E8C4A0' }}>
            {/* Windows */}
            <div className="flex gap-2 justify-center pt-4">
              <div className="w-8 h-8" style={{ backgroundColor: '#6B9BD1' }}></div>
              <div className="w-8 h-8" style={{ backgroundColor: '#6B9BD1' }}></div>
            </div>
            {/* Door */}
            <div className="mx-auto mt-4 w-10 h-16" style={{ backgroundColor: '#654321' }}></div>
          </div>
        </div>

        {/* Water point - right */}
        <div className="absolute bottom-48 right-1/4 translate-x-1/2">
          {/* Roof */}
          <div className="w-20 h-3" style={{ backgroundColor: '#7A5C3D' }}></div>
          {/* Posts */}
          <div className="flex justify-between px-1">
            <div className="w-2 h-16" style={{ backgroundColor: '#654321' }}></div>
            <div className="w-2 h-16" style={{ backgroundColor: '#654321' }}></div>
          </div>
          {/* Pump */}
          <div className="mx-auto w-8 h-12" style={{ backgroundColor: '#4A90E2' }}></div>
        </div>

        {/* Dirt road */}
        <div className="absolute bottom-0 w-full h-24 opacity-30" style={{
          background: 'repeating-linear-gradient(90deg, #8B7355 0px, #8B7355 20px, transparent 20px, transparent 40px)'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pb-20">
        <div className="text-center">
          {/* Title */}
          <h1
            className="mb-4 tracking-tight"
            style={{
              fontFamily: 'Fredoka, sans-serif',
              fontSize: '5rem',
              fontWeight: 700,
              color: '#2C1810',
              textShadow: '0 4px 12px rgba(0,0,0,0.15)',
              lineHeight: 1
            }}
          >
            The Tax Trail
          </h1>

          {/* Tagline */}
          <p
            className="mb-16 tracking-wide"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 500,
              color: '#4A3428'
            }}
          >
            Build your community. Pay your taxes.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={onStart}
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
              Start Game
            </button>

            <button
              onClick={onHowToPlay}
              className="px-8 py-3 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: 'transparent',
                color: '#4A3428',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 600,
                border: '2px solid #4A3428'
              }}
            >
              How to Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
