import { DollarSign, Search, Download } from 'lucide-react';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';

export default function PaymentsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-6 gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight" style={{ color: 'var(--t)' }}>
            Payments <span style={{ color: 'var(--g)' }}>Tracking</span>
          </h1>
          <p className="text-[0.83rem] mt-0.5" style={{ color: 'var(--t2)' }}>
            Monitor payments, refunds, and transaction history.
          </p>
        </div>
        <Button variant="outline" size="sm" icon={<Download className="w-4 h-4" />}>
          Export Report
        </Button>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Total Revenue</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--t)' }}>—</div>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Pending Payments</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--y)' }}>—</div>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Completed</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--g)' }}>—</div>
        </div>
        <div className="rounded-xl p-4 border" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
          <div className="text-[0.7rem] font-bold uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Refunds</div>
          <div className="text-2xl font-extrabold mt-1" style={{ color: 'var(--r)' }}>—</div>
        </div>
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader title="Transaction History" subtitle="All payment transactions" />
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
                placeholder="Search transactions..."
                className="w-full py-2 px-3 pl-9 border rounded-lg text-[0.82rem] outline-none transition-colors"
                style={{
                  background: 'var(--s)',
                  borderColor: 'var(--b)',
                  color: 'var(--t)',
                }}
              />
            </div>

            <div className="flex gap-1 p-0.5 border rounded-lg" style={{ background: 'var(--s2)', borderColor: 'var(--bl)' }}>
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
