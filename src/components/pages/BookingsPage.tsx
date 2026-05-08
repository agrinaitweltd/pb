import { Plus, Search, Filter } from 'lucide-react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';

export default function BookingsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-6 gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight" style={{ color: 'var(--t)' }}>
            Bookings <span style={{ color: 'var(--g)' }}>Management</span>
          </h1>
          <p className="text-[0.83rem] mt-0.5" style={{ color: 'var(--t2)' }}>
            View, search, and manage all tour bookings.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
          New Booking
        </Button>
      </div>

      {/* Bookings Card */}
      <Card>
        <CardHeader title="All Bookings" subtitle="0 total bookings" />
        <CardBody>
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex-1 min-w-[200px] max-w-[280px] relative">
              <Search
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ stroke: 'var(--t3)' }}
                strokeWidth={2}
              />
              <input
                type="text"
                placeholder="Search by ID, name, tour..."
                className="w-full py-2 px-3 pl-9 border rounded-lg text-[0.82rem] outline-none transition-colors"
                style={{
                  background: 'var(--s)',
                  borderColor: 'var(--b)',
                  color: 'var(--t)',
                }}
              />
            </div>
            
            <div className="flex gap-1 p-0.5 border rounded-lg" style={{ background: 'var(--s2)', borderColor: 'var(--bl)' }}>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold transition-all text-white" style={{ background: 'var(--g)' }}>
                All
              </button>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold transition-all" style={{ color: 'var(--t2)' }}>
                Pending
              </button>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold transition-all" style={{ color: 'var(--t2)' }}>
                Confirmed
              </button>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold transition-all" style={{ color: 'var(--t2)' }}>
                Completed
              </button>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold transition-all" style={{ color: 'var(--t2)' }}>
                Cancelled
              </button>
            </div>

            <select
              className="px-3 py-2 border rounded-lg text-[0.8rem] outline-none"
              style={{ background: 'var(--s)', borderColor: 'var(--b)', color: 'var(--t)' }}
            >
              <option value="">All Destinations</option>
              <option>Bwindi Forest</option>
              <option>Queen Elizabeth</option>
              <option>Murchison Falls</option>
              <option>Kidepo Valley</option>
            </select>
          </div>

          {/* Empty State */}
          <EmptyState
            icon="inbox"
            title="No Bookings Yet"
            description="Customer tour bookings will appear here. Use the 'New Booking' button to manually create a booking or wait for customers to submit booking requests."
            action={
              <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
                Create First Booking
              </Button>
            }
          />
        </CardBody>
      </Card>
    </div>
  );
}
