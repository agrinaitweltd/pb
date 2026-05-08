import { FileText, Clock, CheckCircle, DollarSign, Plus, Calendar } from 'lucide-react';
import StatCard from '@/components/ui/StatCard';
import { Card, CardHeader, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import EmptyState from '@/components/ui/EmptyState';

export default function DashboardHome() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-start justify-between mb-6 gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-extrabold leading-tight" style={{ color: 'var(--t)' }}>
            Dashboard <span style={{ color: 'var(--g)' }}>Overview</span>
          </h1>
          <p className="text-[0.83rem] mt-0.5" style={{ color: 'var(--t2)' }}>
            Welcome back, John. Here's what's happening today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" icon={<Calendar className="w-4 h-4" />}>
            May 2026
          </Button>
          <Button variant="primary" size="sm" icon={<Plus className="w-4 h-4" />}>
            New Booking
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 mb-3.5">
        {/* Booking Trends */}
        <Card className="lg:col-span-2">
          <CardHeader title="Booking Trends" subtitle="Monthly booking & revenue analytics" />
          <CardBody>
            <EmptyState
              icon="package"
              title="No Analytics Data Yet"
              description="Booking trends and analytics will appear here once you start receiving bookings. Connect your backend API to display real-time data."
            />
          </CardBody>
        </Card>

        {/* Destinations */}
        <Card>
          <CardHeader title="Destinations" subtitle="Bookings by location" />
          <CardBody>
            <EmptyState
              icon="package"
              title="No Destination Data"
              description="Popular destinations and statistics will be displayed here once bookings start coming in."
            />
          </CardBody>
        </Card>
      </div>

      {/* Recent Activity & Upcoming Tours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 mb-3.5">
        <Card>
          <CardHeader
            title="Recent Activity"
            action={
              <Button variant="outline" size="sm">
                View All
              </Button>
            }
          />
          <CardBody className="!p-0">
            <EmptyState
              icon="inbox"
              title="No Recent Activity"
              description="Customer bookings, payments, and enquiries will appear here as they happen."
            />
          </CardBody>
        </Card>

        <Card>
          <CardHeader
            title="Upcoming Tours"
            action={
              <Button variant="outline" size="sm">
                View All
              </Button>
            }
          />
          <CardBody className="!p-0">
            <EmptyState
              icon="package"
              title="No Upcoming Tours"
              description="Scheduled tours and safari packages will be listed here once bookings are confirmed."
            />
          </CardBody>
        </Card>
      </div>

      {/* Notifications */}
      <Card>
        <CardHeader
          title="Notifications"
          action={
            <span
              className="px-2 py-0.5 rounded-full text-[0.68rem] font-semibold"
              style={{ background: 'var(--gl)', color: 'var(--g)' }}
            >
              0 New
            </span>
          }
        />
        <CardBody>
          <EmptyState
            icon="inbox"
            title="No Notifications"
            description="You're all caught up! New bookings, enquiries, and system alerts will appear here."
          />
        </CardBody>
      </Card>
    </div>
  );
}
