interface PageIntroProps {
  title: string;
  accent: string;
  description: string;
  actions?: React.ReactNode;
  label?: string;
}

export default function PageIntro({
  title,
  accent,
  description,
  actions,
  label = 'Operations',
}: PageIntroProps) {
  return (
    <section
      className="rounded-xl border px-5 py-5 md:px-6 md:py-6 flex items-start justify-between gap-4 flex-wrap"
      style={{
        borderColor: 'var(--bl)',
        boxShadow: 'var(--sh)',
        background:
          'linear-gradient(135deg, color-mix(in srgb, var(--g) 16%, var(--s)) 0%, color-mix(in srgb, var(--y) 10%, var(--s)) 100%)',
      }}
    >
      <div className="max-w-2xl">
        <p className="text-[0.7rem] uppercase tracking-[0.14em] font-bold" style={{ color: 'var(--gd)' }}>
          {label}
        </p>
        <h1 className="text-2xl font-extrabold leading-tight mt-1" style={{ color: 'var(--gd)' }}>
          {title} <span style={{ color: 'var(--g)' }}>{accent}</span>
        </h1>
        <p className="text-[0.86rem] mt-1.5" style={{ color: 'var(--t2)' }}>
          {description}
        </p>
      </div>
      {actions && <div className="flex gap-2 flex-wrap">{actions}</div>}
    </section>
  );
}