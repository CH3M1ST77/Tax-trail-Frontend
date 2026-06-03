interface DecisionOption {
  text: string;
  id: string;
  color: 'green' | 'orange' | 'red';
}

interface DecisionCardProps {
  icon: 'market' | 'payslip' | 'office';
  title: string;
  description: string;
  options: DecisionOption[];
  onChoice: (id: string) => void;
}

export function DecisionCard({ icon, title, description, options, onChoice }: DecisionCardProps) {
  return (
    <div className="min-h-screen relative flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      {/* Blurred town background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #87CEEB 0%, #9CAF88 60%, #8B7355 100%)',
        filter: 'blur(8px)',
        opacity: 0.6
      }}></div>

      {/* Decision Card */}
      <div
        className="relative z-10 rounded-2xl mx-8"
        style={{
          backgroundColor: '#FFF5E6',
          width: '100%',
          maxWidth: '600px',
          padding: '48px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          {icon === 'market' && (
            <div className="relative">
              {/* Market stall */}
              <div className="w-20 h-4 mx-auto" style={{ backgroundColor: '#8B4513' }}></div>
              <div className="flex justify-between px-2">
                <div className="w-2 h-16" style={{ backgroundColor: '#654321' }}></div>
                <div className="w-2 h-16" style={{ backgroundColor: '#654321' }}></div>
              </div>
              <div className="w-20 h-8" style={{ backgroundColor: '#8B6F47' }}></div>
            </div>
          )}

          {icon === 'payslip' && (
            <div className="w-16 h-20 rounded" style={{ backgroundColor: '#E8E8E8', border: '2px solid #4A3428', padding: '8px' }}>
              {/* Paper lines */}
              <div className="space-y-2">
                <div className="h-1 w-full rounded" style={{ backgroundColor: '#4A3428' }}></div>
                <div className="h-1 w-3/4 rounded" style={{ backgroundColor: '#4A3428' }}></div>
                <div className="h-1 w-full rounded" style={{ backgroundColor: '#4A3428' }}></div>
                <div className="h-1 w-2/3 rounded" style={{ backgroundColor: '#4A3428' }}></div>
              </div>
            </div>
          )}

          {icon === 'office' && (
            <div>
              {/* Building */}
              <div className="w-24 h-20 rounded-lg" style={{ backgroundColor: '#C8B BA' }}>
                {/* Windows grid */}
                <div className="grid grid-cols-3 gap-2 p-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded" style={{ backgroundColor: '#6B9BD1' }}></div>
                  ))}
                </div>
              </div>
              {/* Door */}
              <div className="mx-auto w-8 h-10 -mt-2 rounded-t" style={{ backgroundColor: '#654321' }}></div>
            </div>
          )}
        </div>

        {/* Title */}
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: 'Fredoka, sans-serif',
            fontSize: '2rem',
            fontWeight: 600,
            color: '#2C1810'
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

        {/* Decision Options */}
        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onChoice(option.id)}
              className="w-full px-6 py-4 rounded-lg transition-all hover:scale-102 text-left"
              style={{
                backgroundColor: option.color === 'green' ? '#5EAF6E' : option.color === 'orange' ? '#F39C12' : '#E74C3C',
                color: '#FFFFFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
