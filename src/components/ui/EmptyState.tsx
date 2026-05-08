import { AlertCircle, FileQuestion, Inbox, PackageOpen } from 'lucide-react';

interface EmptyStateProps {
  icon?: 'inbox' | 'alert' | 'question' | 'package';
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
}: EmptyStateProps) {
  const icons = {
    inbox: Inbox,
    alert: AlertCircle,
    question: FileQuestion,
    package: PackageOpen,
  };

  const Icon = icons[icon];

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ background: 'var(--gl)' }}
      >
        <Icon className="w-8 h-8" style={{ stroke: 'var(--g)' }} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--t)' }}>
        {title}
      </h3>
      <p className="text-sm mb-6 max-w-md" style={{ color: 'var(--t2)' }}>
        {description}
      </p>
      {action && <div>{action}</div>}
    </div>
  );
}
