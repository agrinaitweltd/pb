'use client';

import { useState } from 'react';
import { Search, Bell, Sun, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <header
      className="h-16 bg-white border-b sticky top-0 z-40 flex items-center px-6 gap-3.5 shadow-sm"
      style={{ background: 'var(--s)', borderColor: 'var(--bl)' }}
    >
      {/* Mobile Menu Button */}
      <button className="lg:hidden p-1.5">
        <Menu className="w-5 h-5" style={{ stroke: 'var(--t)' }} />
      </button>

      {/* Title */}
      <div className="flex-1">
        <h1 className="text-base font-bold" style={{ color: 'var(--t)' }}>
          {title}{' '}
          {subtitle && <span className="font-normal text-[0.83rem]" style={{ color: 'var(--t2)' }}>{subtitle}</span>}
        </h1>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-[300px] relative hidden md:block">
        <Search
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px]"
          style={{ stroke: 'var(--t3)' }}
          strokeWidth={2}
        />
        <input
          type="text"
          placeholder="Search bookings, tours, customers..."
          className="w-full py-2 px-3 pl-9 border rounded-lg text-[0.82rem] outline-none transition-colors"
          style={{
            background: 'var(--s2)',
            borderColor: 'var(--b)',
            color: 'var(--t)',
          }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--g)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--b)')}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5">
        {/* Notifications */}
        <button
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-green-light hover:text-green-primary relative"
          style={{ color: 'var(--t2)' }}
        >
          <Bell className="w-[17px] h-[17px]" strokeWidth={2} />
          <span
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full border-2"
            style={{ background: 'var(--r)', borderColor: 'var(--s)' }}
          />
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-green-light hover:text-green-primary"
          style={{ color: 'var(--t2)' }}
        >
          <Sun className="w-[17px] h-[17px]" strokeWidth={2} />
        </button>

        {/* Avatar */}
        <div
          className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-bold text-[0.75rem] text-white cursor-pointer border-2"
          style={{ background: 'var(--g)', borderColor: 'var(--b)' }}
        >
          JO
        </div>
      </div>
    </header>
  );
}
