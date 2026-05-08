import { Plus, Search, UserPlus } from 'lucide-react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';

export default function CustomersPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-6 gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight" style={{ color: 'var(--t)' }}>
            Customers <span style={{ color: 'var(--g)' }}>Management</span>
          </h1>
          <p className="text-[0.83rem] mt-0.5" style={{ color: 'var(--t2)' }}>
            Manage customer profiles and booking history.
          </p>
        </div>
        <Button variant="primary" size="sm" icon={<UserPlus className="w-4 h-4" />}>
          Add Customer
        </Button>
      </div>

      {/* Customers Card */}
      <Card>
        <CardHeader title="All Customers" subtitle="0 total customers" />
        <CardBody>
          {/* Search Bar */}
          <div className="mb-6 max-w-md">
            <div className="relative">
              <Search
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ stroke: 'var(--t3)' }}
                strokeWidth={2}
              />
              <input
                type="text"
                placeholder="Search customers by name, email, phone..."
                className="w-full py-2 px-3 pl-9 border rounded-lg text-[0.82rem] outline-none transition-colors"
                style={{
                  background: 'var(--s)',
                  borderColor: 'var(--b)',
                  color: 'var(--t)',
                }}
              />
            </div>
          </div>

          {/* Empty State */}
          <EmptyState
            icon="inbox"
            title="No Customers Yet"
            description="Customer profiles will be created automatically when they make bookings. You can also manually add customers to track their information and booking history."
            action={
              <Button variant="primary" icon={<UserPlus className="w-4 h-4" />}>
                Add First Customer
              </Button>
            }
          />
        </CardBody>
      </Card>
    </div>
  );
}
