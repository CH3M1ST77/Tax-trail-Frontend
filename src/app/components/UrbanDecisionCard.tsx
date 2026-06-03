interface DecisionOption {
  text: string;
  id: string;
}

interface UrbanDecisionCardProps {
  icon: 'building' | 'document' | 'office';
  title: string;
  description: string;
  options: DecisionOption[];
  onChoice: (id: string) => void;
}

export function UrbanDecisionCard({ icon, title, description, options, onChoice }: UrbanDecisionCardProps) {
  return (
    <div className="min-h-screen relative flex items-center justify-center" style={{ backgroundColor: 'rgba(58, 69, 83, 0.9)' }}>
      {/* Blurred city background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #8FA8BE 0%, #5D6F82 100%)',
        filter: 'blur(12px)',
        opacity: 0.6
      }}></div>

      {/* Decision Card */}
      <div
        className="relative z-10 mx-8"
        style={{
          backgroundColor: '#F5F7FA',
          width: '100%',
          maxWidth: '520px',
          padding: '40px',
          border: '1px solid #CBD5E0',
          borderRadius: '6px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.3)'
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          {icon === 'building' && (
            <div className="w-16 h-20" style={{ backgroundColor: '#6B8299', border: '1px solid #5A6F84' }}>
              <div className="grid grid-cols-3 gap-1 p-2">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-3 h-2" style={{ backgroundColor: '#D4A574', opacity: Math.random() > 0.5 ? 0.8 : 0.3 }}></div>
                ))}
              </div>
            </div>
          )}

          {icon === 'document' && (
            <div className="w-14 h-18 rounded-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #CBD5E0', padding: '8px' }}>
              <div className="space-y-2">
                <div className="h-1 w-full rounded" style={{ backgroundColor: '#5A6F84' }}></div>
                <div className="h-1 w-3/4 rounded" style={{ backgroundColor: '#5A6F84' }}></div>
                <div className="h-1 w-full rounded" style={{ backgroundColor: '#5A6F84' }}></div>
                <div className="h-1 w-2/3 rounded" style={{ backgroundColor: '#5A6F84' }}></div>
                <div className="h-1 w-full rounded" style={{ backgroundColor: '#5A6F84' }}></div>
              </div>
            </div>
          )}

          {icon === 'office' && (
            <div className="w-16 h-20" style={{ backgroundColor: '#6B8299', border: '1px solid #5A6F84' }}>
              <div className="grid grid-cols-2 gap-1 p-2">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="w-5 h-3 rounded-sm" style={{ backgroundColor: '#D4A574', opacity: 0.7 }}></div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: 'Work Sans, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#2A3644',
            letterSpacing: '-0.01em'
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
            lineHeight: 1.6,
            color: '#5A6F84'
          }}
        >
          {description}
        </p>

        {/* Decision Options */}
        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onChoice(option.id)}
              className="w-full px-5 py-3 transition-all hover:brightness-95 text-left"
              style={{
                backgroundColor: '#E8EDF2',
                color: '#3A4A5A',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid #CBD5E0'
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
