interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  iconBg: string;
}

export default function StatCard({ label, value, icon, trend, iconBg }: StatCardProps) {
  return (
    <div
      className="rounded-xl p-[18px] border transition-all hover:-translate-y-0.5"
      style={{
        background: 'var(--s)',
        borderColor: 'var(--bl)',
        boxShadow: 'var(--sh)',
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div className="text-[0.7rem] font-bold uppercase tracking-wide mb-1" style={{ color: 'var(--t2)' }}>
        {label}
      </div>
      <div className="text-3xl font-extrabold leading-none" style={{ color: 'var(--t)' }}>
        {value}
      </div>
      {trend && (
        <div
          className="flex items-center gap-1 text-[0.72rem] font-semibold mt-1.5"
          style={{ color: trend.isPositive ? 'var(--g)' : 'var(--r)' }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
          >
            {trend.isPositive ? (
              <polyline points="18 15 12 9 6 15" />
            ) : (
              <polyline points="6 9 12 15 18 9" />
            )}
          </svg>
          {trend.value}
        </div>
      )}
    </div>
  );
}
