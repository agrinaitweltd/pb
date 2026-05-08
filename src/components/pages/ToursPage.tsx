import { Plus, Globe } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import StatCard from '@/components/ui/StatCard';

export default function ToursPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-6 gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight" style={{ color: 'var(--t)' }}>
            Tour <span style={{ color: 'var(--g)' }}>Packages</span>
          </h1>
          <p className="text-[0.83rem] mt-0.5" style={{ color: 'var(--t2)' }}>
            Manage and publish your safari packages.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
          Add Package
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Total Packages</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--t)' }}>0</div>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Featured</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--y)' }}>0</div>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Active</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--g)' }}>0</div>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Avg Rating</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--u)' }}>—</div>
        </div>
      </div>

      {/* Tour Packages Grid */}
      <Card>
        <div className="p-6">
          <EmptyState
            icon="package"
            title="No Tour Packages Yet"
            description="Create your first safari package to get started. You can add destinations, pricing, itineraries, and images. Packages will be displayed here once created."
            action={
              <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
                Create First Package
              </Button>
            }
          />
        </div>
      </Card>
    </div>
  );
}
