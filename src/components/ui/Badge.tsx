interface BadgeProps {
  children: React.ReactNode;
  variant: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
}

export default function Badge({ children, variant }: BadgeProps) {
  const variantStyles = {
    success: { background: 'var(--gl)', color: 'var(--g)' },
    warning: { background: 'var(--yl)', color: 'var(--yd)' },
    danger: { background: 'var(--rl)', color: 'var(--r)' },
    info: { background: 'var(--ul)', color: 'var(--u)' },
    neutral: { background: '#f3f4f6', color: '#6b7280' },
  };

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.68rem] font-semibold"
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
}
