interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-lg font-semibold transition-all cursor-pointer';

  const variantStyles = {
    primary: 'text-white hover:opacity-90',
    secondary: 'border hover:border-green-primary',
    outline: 'border hover:bg-green-light hover:text-green-primary hover:border-green-primary',
    danger: 'hover:text-white',
    yellow: 'text-green-dark hover:opacity-90',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-[0.76rem]',
    md: 'px-4 py-2 text-[0.82rem]',
    lg: 'px-6 py-3 text-[0.9rem]',
  };

  const variantColors = {
    primary: { background: 'var(--g)' },
    secondary: { background: 'transparent', color: 'var(--t2)', borderColor: 'var(--b)' },
    outline: { background: 'transparent', color: 'var(--t2)', borderColor: 'var(--b)' },
    danger: { background: 'var(--rl)', color: 'var(--r)' },
    yellow: { background: 'var(--y)' },
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={variantColors[variant]}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
