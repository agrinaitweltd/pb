import { Plus, Globe } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import StatCard from '@/components/ui/StatCard';
import PageIntro from '@/components/ui/PageIntro';

export default function ToursPage() {
  return (
    <div className="space-y-4">
      <PageIntro
        label="Catalog Ops"
        title="Tour"
        accent="Packages"
        description="Create and manage safari packages, itineraries, destinations, pricing, and media assets."
        actions={
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            Add Package
          </Button>
        }
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <StatCard label="Total Packages" value="—" icon={<Globe className="w-5 h-5" style={{ stroke: 'var(--g)' }} />} iconBg="var(--gl)" />
        <StatCard label="Featured" value="—" icon={<Globe className="w-5 h-5" style={{ stroke: 'var(--yd)' }} />} iconBg="var(--yl)" />
        <StatCard label="Active" value="—" icon={<Globe className="w-5 h-5" style={{ stroke: 'var(--u)' }} />} iconBg="var(--ul)" />
        <StatCard label="Avg Rating" value="—" icon={<Globe className="w-5 h-5" style={{ stroke: 'var(--r)' }} />} iconBg="var(--rl)" />
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
