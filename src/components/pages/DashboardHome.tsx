import {
  FileText,
  Clock,
  CheckCircle,
  DollarSign,
  Plus,
  Calendar,
  MessageSquare,
  CreditCard,
  MapPin,
  Users,
} from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';

export default function DashboardHome() {
  return (
    <div className="space-y-4">
      <section className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight" style={{ color: 'var(--t)' }}>
            Dashboard <span style={{ color: 'var(--g)' }}>Overview</span>
          </h1>
          <p className="text-[0.84rem] mt-1" style={{ color: 'var(--t2)' }}>
            Central workspace for bookings, payments, enquiries, reservations, and team follow-ups.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" icon={<Calendar className="w-4 h-4" />}>
            May 2026
          </Button>
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            Create Booking
          </Button>
        </div>
      </section>

      <Card>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
            <QuickAction icon={<FileText className="w-4 h-4" />} title="Booking Queue" subtitle="Review new requests" />
            <QuickAction icon={<CreditCard className="w-4 h-4" />} title="Payment Desk" subtitle="Track payment statuses" />
            <QuickAction icon={<MessageSquare className="w-4 h-4" />} title="Customer Inbox" subtitle="Reply to enquiries" />
            <QuickAction icon={<MapPin className="w-4 h-4" />} title="Tour Catalog" subtitle="Update package details" />
          </div>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <StatCard
          label="Total Bookings"
          value="—"
          icon={<FileText className="w-5 h-5" style={{ stroke: 'var(--g)' }} strokeWidth={2} />}
          iconBg="var(--gl)"
        />
        <StatCard
          label="Pending Bookings"
          value="—"
          icon={<Clock className="w-5 h-5" style={{ stroke: 'var(--yd)' }} strokeWidth={2} />}
          iconBg="var(--yl)"
        />
        <StatCard
          label="Completed Tours"
          value="—"
          icon={<CheckCircle className="w-5 h-5" style={{ stroke: 'var(--g)' }} strokeWidth={2} />}
          iconBg="var(--gl)"
        />
        <StatCard
          label="Total Revenue"
          value="—"
          icon={<DollarSign className="w-5 h-5" style={{ stroke: 'var(--u)' }} strokeWidth={2} />}
          iconBg="var(--ul)"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
        <Card className="lg:col-span-2">
          <CardHeader title="Recent Bookings" subtitle="No bookings available yet" />
          <CardBody className="!p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead style={{ background: 'var(--s2)' }}>
                  <tr>
                    <th className="text-left px-4 py-3 text-[0.72rem] uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Booking Ref</th>
                    <th className="text-left px-4 py-3 text-[0.72rem] uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Customer</th>
                    <th className="text-left px-4 py-3 text-[0.72rem] uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Tour</th>
                    <th className="text-left px-4 py-3 text-[0.72rem] uppercase tracking-wide" style={{ color: 'var(--t2)' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="px-4 py-12">
                      <EmptyState
                        icon="inbox"
                        title="No bookings available yet"
                        description="Bookings will appear here once customers submit requests or your team creates reservations."
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader title="Booking Activity" subtitle="Live pipeline status" />
          <CardBody>
            <div className="space-y-3">
              <ActivityRow label="New" value="—" color="var(--u)" />
              <ActivityRow label="Pending Review" value="—" color="var(--yd)" />
              <ActivityRow label="Confirmed" value="—" color="var(--g)" />
              <ActivityRow label="Completed" value="—" color="var(--t2)" />
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        <Card>
          <CardHeader
            title="Notifications"
            action={
              <Button variant="outline" size="sm">
                Manage
              </Button>
            }
          />
          <CardBody className="!p-0">
            <EmptyState
              icon="inbox"
              title="No notifications yet"
              description="System alerts, booking updates, payment events, and enquiry notifications will appear here."
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="Team Workspace"
            action={
              <Button variant="outline" size="sm">
                Open Board
              </Button>
            }
          />
          <CardBody className="!p-0">
            <EmptyState
              icon="question"
              title="No internal notes yet"
              description="Use this space later for assignment notes, follow-ups, and internal communication linked to bookings."
            />
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader title="Customers & Communications" subtitle="No customer activity yet" />
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <MiniPanel
              icon={<Users className="w-4 h-4" />}
              title="Customer Profiles"
              description="No profiles yet. Customer records will appear after first bookings are created."
            />
            <MiniPanel
              icon={<MessageSquare className="w-4 h-4" />}
              title="Enquiries"
              description="No enquiries yet. Incoming web and WhatsApp messages will appear here."
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function QuickAction({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <button
      className="text-left rounded-lg border p-3.5 hover:-translate-y-0.5"
      style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}
    >
      <div className="w-8 h-8 rounded-md flex items-center justify-center mb-2" style={{ background: 'var(--gl)', color: 'var(--g)' }}>
        {icon}
      </div>
      <p className="text-[0.84rem] font-bold" style={{ color: 'var(--t)' }}>{title}</p>
      <p className="text-[0.75rem] mt-0.5" style={{ color: 'var(--t2)' }}>{subtitle}</p>
    </button>
  );
}

function ActivityRow({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border px-3 py-2" style={{ borderColor: 'var(--bl)', background: 'var(--s2)' }}>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
        <span className="text-[0.8rem] font-semibold" style={{ color: 'var(--t)' }}>{label}</span>
      </div>
      <span className="text-[0.78rem]" style={{ color: 'var(--t2)' }}>{value}</span>
    </div>
  );
}

function MiniPanel({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border p-4" style={{ borderColor: 'var(--bl)', background: 'var(--s2)' }}>
      <div className="w-8 h-8 rounded-md flex items-center justify-center mb-2" style={{ background: 'var(--gl)', color: 'var(--g)' }}>
        {icon}
      </div>
      <p className="text-[0.86rem] font-bold" style={{ color: 'var(--t)' }}>{title}</p>
      <p className="text-[0.78rem] mt-1" style={{ color: 'var(--t2)' }}>{description}</p>
    </div>
  );
}
