interface Building {
  name: string;
  funded: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

interface TownViewProps {
  compliance: number;
  townHealth: number;
  balance: number;
  points: number;
  onNextDecision: () => void;
  buildings?: Building[];
}

export function TownView({
  compliance,
  townHealth,
  balance,
  points,
  onNextDecision,
  buildings = [
    { name: 'School', funded: true, x: 100, y: 150, width: 80, height: 60, color: '#E8C4A0' },
    { name: 'Clinic', funded: true, x: 250, y: 120, width: 70, height: 50, color: '#E8C4A0' },
    { name: 'Market', funded: false, x: 400, y: 140, width: 90, height: 55, color: '#B8A090' },
    { name: 'Water Point', funded: true, x: 550, y: 160, width: 50, height: 40, color: '#D4C4B4' },
  ]
}: TownViewProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#E8DDD0' }}>
      {/* Town Map - Top 2/3 */}
      <div className="flex-1 relative overflow-hidden" style={{ minHeight: '66vh' }}>
        {/* Sky gradient */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #87CEEB 0%, #B8E6F5 100%)'
        }}></div>

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-2/3" style={{ backgroundColor: '#9CAF88' }}></div>

        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ backgroundColor: '#8B7355' }}>
          {/* Road lines */}
          <div className="absolute inset-x-0 top-1/2 h-1 flex gap-8 px-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-12 h-1" style={{ backgroundColor: '#F5E6D3' }}></div>
            ))}
          </div>
        </div>

        {/* Buildings in isometric style */}
        <div className="absolute inset-0">
          {buildings.map((building, idx) => (
            <div
              key={idx}
              className="absolute transition-all duration-500"
              style={{
                left: `${building.x}px`,
                bottom: `${building.y}px`,
                filter: building.funded ? 'drop-shadow(0 0 12px rgba(94, 175, 110, 0.6))' : 'grayscale(0.5)'
              }}
            >
              {/* Roof */}
              <div
                className="relative"
                style={{
                  width: `${building.width}px`,
                  height: `${building.width * 0.3}px`,
                  backgroundColor: building.funded ? '#C13B2E' : '#888',
                  clipPath: 'polygon(50% 0%, 100% 35%, 50% 70%, 0% 35%)',
                  marginBottom: '-10px',
                  zIndex: 2
                }}
              ></div>

              {/* Building body - left face */}
              <div
                className="relative inline-block"
                style={{
                  width: `${building.width * 0.5}px`,
                  height: `${building.height}px`,
                  backgroundColor: building.funded ? building.color : '#999',
                  clipPath: 'polygon(0 20%, 50% 0, 50% 100%, 0 80%)',
                  marginRight: '-2px'
                }}
              >
                {/* Windows on left face */}
                {building.funded && (
                  <>
                    <div
                      className="absolute"
                      style={{
                        top: '30%',
                        left: '25%',
                        width: '20%',
                        height: '15%',
                        backgroundColor: '#6B9BD1'
                      }}
                    ></div>
                  </>
                )}
              </div>

              {/* Building body - right face */}
              <div
                className="relative inline-block"
                style={{
                  width: `${building.width * 0.5}px`,
                  height: `${building.height}px`,
                  backgroundColor: building.funded ? building.color : '#999',
                  clipPath: 'polygon(50% 0, 100% 20%, 100% 80%, 50% 100%)',
                  filter: 'brightness(0.85)'
                }}
              >
                {/* Windows on right face */}
                {building.funded && (
                  <>
                    <div
                      className="absolute"
                      style={{
                        top: '30%',
                        right: '25%',
                        width: '20%',
                        height: '15%',
                        backgroundColor: '#6B9BD1'
                      }}
                    ></div>
                  </>
                )}
              </div>

              {/* Crack overlay for underfunded buildings */}
              {!building.funded && (
                <div className="absolute inset-0">
                  <svg className="w-full h-full" style={{ opacity: 0.3 }}>
                    <line x1="20%" y1="10%" x2="40%" y2="60%" stroke="#000" strokeWidth="2" />
                    <line x1="60%" y1="20%" x2="80%" y2="70%" stroke="#000" strokeWidth="2" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* HUD - Bottom 1/3 */}
      <div className="h-auto py-6 px-8" style={{ backgroundColor: '#2C1810', minHeight: '34vh' }}>
        <div className="max-w-6xl mx-auto">
          {/* Stats Row */}
          <div className="flex items-center justify-between mb-6">
            {/* Compliance Bar */}
            <div className="flex-1 mr-6">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#F5E6D3', fontWeight: 600 }}>
                  Compliance
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#F5E6D3' }}>
                  {compliance}%
                </span>
              </div>
              <div className="w-full h-4 rounded-full overflow-hidden" style={{ backgroundColor: '#4A3428' }}>
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${compliance}%`,
                    backgroundColor: '#5EAF6E',
                    boxShadow: '0 0 8px rgba(94, 175, 110, 0.6)'
                  }}
                ></div>
              </div>
            </div>

            {/* Town Health Bar */}
            <div className="flex-1 mr-6">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#F5E6D3', fontWeight: 600 }}>
                  Town Health
                </span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#F5E6D3' }}>
                  {townHealth}%
                </span>
              </div>
              <div className="w-full h-4 rounded-full overflow-hidden" style={{ backgroundColor: '#4A3428' }}>
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${townHealth}%`,
                    backgroundColor: '#F39C12',
                    boxShadow: '0 0 8px rgba(243, 156, 18, 0.6)'
                  }}
                ></div>
              </div>
            </div>

            {/* Balance */}
            <div className="flex-1 mr-6 text-center">
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#F5E6D3', fontWeight: 600, marginBottom: '8px' }}>
                Balance
              </div>
              <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.5rem', color: '#5EAF6E', fontWeight: 600 }}>
                K{balance.toLocaleString()}
              </div>
            </div>

            {/* Points */}
            <div className="flex-1 text-center">
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#F5E6D3', fontWeight: 600, marginBottom: '8px' }}>
                Points
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 h-6 rounded" style={{ backgroundColor: '#F39C12' }}>
                  <svg viewBox="0 0 24 24" fill="#FFF" className="w-full h-full p-1">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <span style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.5rem', color: '#F39C12', fontWeight: 600 }}>
                  {points}
                </span>
              </div>
            </div>
          </div>

          {/* Next Decision Button */}
          <div className="text-center">
            <button
              onClick={onNextDecision}
              className="px-10 py-3 rounded-lg transition-all hover:scale-105"
              style={{
                backgroundColor: '#5EAF6E',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1.125rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            >
              Next Decision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
