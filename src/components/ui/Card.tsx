interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-xl border overflow-hidden ${className}`}
      style={{
        background: 'var(--s)',
        borderColor: 'var(--bl)',
        boxShadow: 'var(--sh)',
      }}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function CardHeader({ title, subtitle, action }: CardHeaderProps) {
  return (
    <div
      className="px-4.5 py-4 pb-3 flex items-center justify-between border-b"
      style={{ borderColor: 'var(--bl)' }}
    >
      <div>
        <h3 className="text-[0.9rem] font-bold" style={{ color: 'var(--t)' }}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-[0.72rem] mt-0.5" style={{ color: 'var(--t2)' }}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return <div className={`p-4.5 ${className}`}>{children}</div>;
}
