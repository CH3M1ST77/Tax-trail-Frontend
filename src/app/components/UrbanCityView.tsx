interface Building {
  name: string;
  maintained: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface UrbanCityViewProps {
  onNextDecision: () => void;
  buildings?: Building[];
}

export function UrbanCityView({
  onNextDecision,
  buildings = [
    { name: 'Apartment Complex', maintained: true, x: 80, y: 60, width: 100, height: 180 },
    { name: 'Office Building', maintained: true, x: 220, y: 60, width: 90, height: 200 },
    { name: 'Shopping Center', maintained: false, x: 350, y: 60, width: 110, height: 160 },
    { name: 'Public Services', maintained: true, x: 500, y: 60, width: 80, height: 140 },
  ]
}: UrbanCityViewProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#5D6F82' }}>
      {/* City Map - Top Section */}
      <div className="flex-1 relative overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Sky - early evening */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #8FA8BE 0%, #6B8299 50%, #5D6F82 100%)'
        }}></div>

        {/* Road - warmer asphalt */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ backgroundColor: '#3A4553' }}>
          {/* Road markings */}
          <div className="absolute inset-x-0 top-1/2 h-0.5 flex gap-6 px-8">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-8 h-0.5" style={{ backgroundColor: '#F5DDB0', opacity: 0.5 }}></div>
            ))}
          </div>

          {/* Sidewalk */}
          <div className="absolute bottom-0 left-0 right-0 h-8" style={{ backgroundColor: '#4A5A6A' }}></div>
        </div>

        {/* Intersection lines */}
        <div className="absolute bottom-32 left-1/3 w-0.5 h-20" style={{ backgroundColor: '#F7FAFC', opacity: 0.2 }}></div>
        <div className="absolute bottom-32 right-1/3 w-0.5 h-20" style={{ backgroundColor: '#F7FAFC', opacity: 0.2 }}></div>

        {/* Buildings */}
        <div className="absolute inset-0">
          {buildings.map((building, idx) => (
            <div
              key={idx}
              className="absolute transition-all duration-700"
              style={{
                left: `${building.x}px`,
                bottom: `${building.y}px`,
                width: `${building.width}px`,
                height: `${building.height}px`,
                backgroundColor: building.maintained ? '#3D4A58' : '#4A5A6A',
                border: `1px solid ${building.maintained ? '#5A6F84' : '#3A4553'}`,
                opacity: building.maintained ? 1 : 0.7,
                boxShadow: building.maintained ? '2px 0 12px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              {/* Windows grid */}
              <div className="grid gap-2 p-3" style={{
                gridTemplateColumns: `repeat(${Math.floor(building.width / 20)}, 1fr)`
              }}>
                {[...Array(Math.floor((building.height / 20) * (building.width / 20)))].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm"
                    style={{
                      backgroundColor: building.maintained
                        ? (Math.random() > 0.3 ? '#D4A574' : '#5A6F84')
                        : '#3A4553',
                      opacity: building.maintained ? (Math.random() > 0.5 ? 0.9 : 0.3) : 0.3,
                      boxShadow: building.maintained && Math.random() > 0.5 ? '0 0 4px rgba(212, 165, 116, 0.3)' : 'none'
                    }}
                  ></div>
                ))}
              </div>

              {/* Cracks/damage overlay for neglected buildings */}
              {!building.maintained && (
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" style={{ opacity: 0.5 }}>
                    <line x1="20%" y1="0%" x2="25%" y2="100%" stroke="#2A3644" strokeWidth="2" />
                    <line x1="70%" y1="10%" x2="75%" y2="80%" stroke="#2A3644" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Street lights - warmer glow */}
        <div className="absolute bottom-32 left-0 right-0 flex justify-around px-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-1 h-16" style={{ backgroundColor: '#5A6570' }}></div>
              <div className="w-6 h-3 rounded-full" style={{ backgroundColor: '#F5DDB0', opacity: 0.8, boxShadow: '0 0 12px rgba(245, 221, 176, 0.4)' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom UI - Minimal */}
      <div className="h-auto py-8 px-8" style={{ backgroundColor: '#3A4553', minHeight: '30vh' }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
          {/* Minimal label */}
          <p
            className="mb-8 text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              color: '#CBD5E0',
              letterSpacing: '0.02em'
            }}
          >
            The city runs on contributions. Some people follow the system. Others take shortcuts.
          </p>

          {/* Next Decision Button */}
          <button
            onClick={onNextDecision}
            className="px-8 py-2.5 transition-all hover:brightness-110"
            style={{
              backgroundColor: '#8B9BAA',
              color: '#FFFFFF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 500,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            Next Decision
          </button>
        </div>
      </div>
    </div>
  );
}
