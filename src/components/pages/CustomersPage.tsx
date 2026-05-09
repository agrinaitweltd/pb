import { Search, UserPlus } from 'lucide-react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import PageIntro from '@/components/ui/PageIntro';

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <PageIntro
        label="CRM"
        title="Customers"
        accent="Management"
        description="Track customer profiles, communication history, and reservation lifecycle in one CRM-ready workspace."
        actions={
          <Button variant="primary" size="sm" icon={<UserPlus className="w-4 h-4" />}>
            Add Customer
          </Button>
        }
      />

      {/* Customers Card */}
      <Card>
        <CardHeader title="All Customers" subtitle="No customer records yet" />
        <CardBody>
          {/* Search Bar */}
          <div className="mb-6 max-w-md rounded-lg border p-3" style={{ background: 'var(--s2)', borderColor: 'var(--bl)' }}>
            <div className="relative">
              <Search
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ stroke: 'var(--t3)' }}
                strokeWidth={2}
              />
              <input
                type="text"
                placeholder="Search customers by name, email, phone..."
                className="w-full py-2 px-3 pl-9 border rounded-lg text-[0.82rem] outline-none"
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
