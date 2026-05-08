'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Globe, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  User,
  DollarSign
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: any;
  badge?: number;
}

const navItems: { [key: string]: NavItem[] } = {
  Main: [
    { label: 'Dashboard', href: '/', icon: LayoutDashboard },
    { label: 'Bookings', href: '/bookings', icon: FileText, badge: 0 },
    { label: 'Tour Packages', href: '/tours', icon: Globe },
    { label: 'Customers', href: '/customers', icon: Users },
    { label: 'Payments', href: '/payments', icon: DollarSign },
  ],
  Communication: [
    { label: 'Messages', href: '/messages', icon: MessageSquare, badge: 0 },
  ],
  System: [
    { label: 'Settings', href: '/settings', icon: Settings },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-green-dark z-50 flex flex-direction-col transition-transform lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--gd)' }}
      >
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--y)' }}
            >
              <svg
                viewBox="0 0 32 32"
                width="28"
                height="28"
                fill="none"
              >
                <circle cx="16" cy="16" r="14" fill="var(--gd)" opacity=".15" />
                <path
                  d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4z"
                  fill="var(--gd)"
                  opacity=".3"
                />
                <path
                  d="M10 20c0-3.31 2.69-6 6-6s6 2.69 6 6"
                  stroke="var(--gd)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="16" cy="11" r="3" fill="var(--gd)" />
                <path d="M8 22h16" stroke="var(--gd)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[0.55rem] font-bold tracking-widest uppercase" style={{ color: 'var(--y)' }}>
                Pearl Land
              </span>
              <span className="text-[0.95rem] font-extrabold text-white mt-0.5 tracking-tight">
                Safaris Admin
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2.5 py-3.5 overflow-y-auto">
          {Object.entries(navItems).map(([section, items]) => (
            <div key={section} className="mb-1">
              <div className="text-[0.6rem] font-bold text-white/35 tracking-widest uppercase px-2 mb-1.5 mt-3.5">
                {section}
              </div>
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-2.5 py-2.5 rounded-lg text-[0.85rem] font-medium mb-0.5 transition-all ${
                      isActive
                        ? 'text-green-dark'
                        : 'text-white/65 hover:bg-white/10 hover:text-white'
                    }`}
                    style={isActive ? { background: 'var(--y)', color: 'var(--gd)' } : {}}
                  >
                    <Icon className="w-[17px] h-[17px]" strokeWidth={2} />
                    <span>{item.label}</span>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span
                        className={`ml-auto text-[0.62rem] font-bold px-1.5 py-0.5 rounded-full ${
                          isActive ? 'bg-green-dark text-yellow-primary' : 'bg-red-500 text-white'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3.5 py-3.5 border-t border-white/10">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-[0.78rem] flex-shrink-0"
              style={{ background: 'var(--y)', color: 'var(--gd)' }}
            >
              JO
            </div>
            <div>
              <div className="text-[0.78rem] font-semibold text-white">John Okello</div>
              <div className="text-[0.68rem] text-white/45">Super Admin</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
