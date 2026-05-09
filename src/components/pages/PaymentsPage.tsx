import { DollarSign, Search, Download } from 'lucide-react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';
import PageIntro from '@/components/ui/PageIntro';
import StatCard from '@/components/ui/StatCard';

export default function PaymentsPage() {
  return (
    <div className="space-y-4">
      <PageIntro
        label="Finance Ops"
        title="Payments"
        accent="Tracking"
        description="Monitor payment lifecycle, status updates, transaction records, and refund workflow from one place."
        actions={
          <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />}>
            Export Report
          </Button>
        }
      />

      {/* Payment Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <StatCard label="Total Revenue" value="—" icon={<DollarSign className="w-5 h-5" style={{ stroke: 'var(--g)' }} />} iconBg="var(--gl)" />
        <StatCard label="Pending Payments" value="—" icon={<DollarSign className="w-5 h-5" style={{ stroke: 'var(--yd)' }} />} iconBg="var(--yl)" />
        <StatCard label="Completed" value="—" icon={<DollarSign className="w-5 h-5" style={{ stroke: 'var(--u)' }} />} iconBg="var(--ul)" />
        <StatCard label="Refunds" value="—" icon={<DollarSign className="w-5 h-5" style={{ stroke: 'var(--r)' }} />} iconBg="var(--rl)" />
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader title="Transaction History" subtitle="All payment transactions" />
        <CardBody>
          {/* Filters */}
          <div
            className="flex flex-wrap gap-3 mb-6 rounded-lg border p-3"
            style={{ background: 'var(--s2)', borderColor: 'var(--bl)' }}
          >
            <div className="flex-1 min-w-[200px] max-w-[280px] relative">
              <Search
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ stroke: 'var(--t3)' }}
                strokeWidth={2}
              />
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-full py-2 px-3 pl-9 border rounded-lg text-[0.82rem] outline-none"
                style={{
                  background: 'var(--s)',
                  borderColor: 'var(--b)',
                  color: 'var(--t)',
                }}
              />
            </div>

            <div className="flex gap-1 p-0.5 border rounded-lg" style={{ background: 'var(--s)', borderColor: 'var(--bl)' }}>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold text-white" style={{ background: 'var(--g)' }}>
                All
              </button>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold" style={{ color: 'var(--t2)' }}>
                Paid
              </button>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold" style={{ color: 'var(--t2)' }}>
                Pending
              </button>
              <button className="px-2.5 py-1.5 rounded-md text-[0.75rem] font-semibold" style={{ color: 'var(--t2)' }}>
                Refunded
              </button>
            </div>
          </div>

          {/* Empty State */}
          <EmptyState
            icon="inbox"
            title="No Payment Records"
            description="Payment transactions will be recorded here once customers start making payments. Connect your payment gateway (Stripe, PayPal, M-Pesa) to start accepting payments."
          />
        </CardBody>
      </Card>
    </div>
  );
}
