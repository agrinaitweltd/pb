'use client';

import { usePathname } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const pageTitles: { [key: string]: { title: string; subtitle?: string } } = {
  '/': { title: 'Dashboard', subtitle: 'Overview' },
  '/bookings': { title: 'Bookings', subtitle: 'Management' },
  '/tours': { title: 'Tour Packages', subtitle: 'Management' },
  '/customers': { title: 'Customers', subtitle: 'Management' },
  '/payments': { title: 'Payments', subtitle: 'Tracking' },
  '/messages': { title: 'Messages', subtitle: 'Inbox' },
  '/settings': { title: 'Settings', subtitle: 'Configuration' },
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const pageInfo = pageTitles[pathname] || { title: 'Dashboard' };

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg)' }}>
      <Sidebar />
      
      <div className="flex-1 ml-0 lg:ml-64 flex flex-col min-h-screen">
        <Header title={pageInfo.title} subtitle={pageInfo.subtitle} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
