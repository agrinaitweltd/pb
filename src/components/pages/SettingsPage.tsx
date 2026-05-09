'use client';

import { useState } from 'react';
import { 
  Settings as SettingsIcon, 
  CreditCard, 
  Mail, 
  MessageCircle, 
  Users, 
  Bell,
  Save
} from 'lucide-react';
import Button from '@/components/ui/Button';
import PageIntro from '@/components/ui/PageIntro';

const settingsSections = [
  { id: 'general', label: 'General Settings', icon: SettingsIcon },
  { id: 'payment', label: 'Payment Gateways', icon: CreditCard },
  { id: 'email', label: 'Email Configuration', icon: Mail },
  { id: 'whatsapp', label: 'WhatsApp Integration', icon: MessageCircle },
  { id: 'users', label: 'Admin & Staff', icon: Users },
  { id: 'notifications', label: 'Notifications', icon: Bell },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="space-y-4">
      <PageIntro
        label="System"
        title="Settings"
        accent="Configuration"
        description="Manage integrations, notifications, and operational preferences for the admin platform."
      />

      {/* Settings Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 rounded-xl border overflow-hidden" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
        {/* Sidebar Navigation */}
        <div className="lg:border-r py-3" style={{ borderColor: 'var(--bl)' }}>
          {settingsSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-[0.8rem] font-medium transition-all text-left ${
                  isActive ? 'border-l-3 font-semibold' : ''
                }`}
                style={
                  isActive
                    ? { background: 'var(--gl)', color: 'var(--g)', borderLeft: '3px solid var(--g)' }
                    : { color: 'var(--t2)' }
                }
              >
                <Icon className="w-[15px] h-[15px]" strokeWidth={2} />
                {section.label}
              </button>
            );
          })}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 p-6" style={{ background: 'var(--s2)' }}>
          {activeSection === 'general' && <GeneralSettings />}
          {activeSection === 'payment' && <PaymentSettings />}
          {activeSection === 'email' && <EmailSettings />}
          {activeSection === 'whatsapp' && <WhatsAppSettings />}
          {activeSection === 'users' && <UserSettings />}
          {activeSection === 'notifications' && <NotificationSettings />}
        </div>
      </div>
    </div>
  );
}

function GeneralSettings() {
  return (
    <div>
      <h3 className="text-[0.95rem] font-bold mb-1" style={{ color: 'var(--t)' }}>
        General Settings
      </h3>
      <p className="text-[0.77rem] mb-4" style={{ color: 'var(--t2)' }}>
        Configure basic application settings.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-[0.72rem] font-semibold mb-1.5" style={{ color: 'var(--t2)' }}>
            Company Name
          </label>
          <input
            type="text"
            defaultValue="Pearl Land Safaris"
            className="w-full px-3 py-2 border rounded-lg text-[0.8rem] outline-none"
            style={{ background: 'var(--s)', borderColor: 'var(--b)', color: 'var(--t)' }}
          />
        </div>

        <div>
          <label className="block text-[0.72rem] font-semibold mb-1.5" style={{ color: 'var(--t2)' }}>
            Contact Email
          </label>
          <input
            type="email"
            placeholder="contact@pearlandsafaris.com"
            className="w-full px-3 py-2 border rounded-lg text-[0.8rem] outline-none"
            style={{ background: 'var(--s)', borderColor: 'var(--b)', color: 'var(--t)' }}
          />
        </div>

        <div>
          <label className="block text-[0.72rem] font-semibold mb-1.5" style={{ color: 'var(--t2)' }}>
            Contact Phone
          </label>
          <input
            type="tel"
            placeholder="+256 XXX XXX XXX"
            className="w-full px-3 py-2 border rounded-lg text-[0.8rem] outline-none"
            style={{ background: 'var(--s)', borderColor: 'var(--b)', color: 'var(--t)' }}
          />
        </div>

        <div className="pt-2">
          <Button variant="primary" icon={<Save className="w-4 h-4" />}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

function PaymentSettings() {
  return (
    <div>
      <h3 className="text-[0.95rem] font-bold mb-1" style={{ color: 'var(--t)' }}>
        Payment Gateway Integration
      </h3>
      <p className="text-[0.77rem] mb-4" style={{ color: 'var(--t2)' }}>
        Connect payment providers to accept customer payments.
      </p>

      <div className="space-y-6">
        {/* Stripe */}
        <IntegrationCard
          title="Stripe"
          description="Accept credit cards and online payments"
          isConnected={false}
        />

        {/* PayPal */}
        <IntegrationCard
          title="PayPal"
          description="Accept PayPal payments globally"
          isConnected={false}
        />

        {/* M-Pesa */}
        <IntegrationCard
          title="M-Pesa"
          description="Mobile money for East African customers"
          isConnected={false}
        />
      </div>
    </div>
  );
}

function EmailSettings() {
  return (
    <div>
      <h3 className="text-[0.95rem] font-bold mb-1" style={{ color: 'var(--t)' }}>
        Email Service Configuration
      </h3>
      <p className="text-[0.77rem] mb-4" style={{ color: 'var(--t2)' }}>
        Configure email service for booking confirmations and notifications.
      </p>

      <IntegrationCard
        title="Email Service Provider"
        description="Connect SendGrid, Mailgun, or SMTP"
        isConnected={false}
      />
    </div>
  );
}

function WhatsAppSettings() {
  return (
    <div>
      <h3 className="text-[0.95rem] font-bold mb-1" style={{ color: 'var(--t)' }}>
        WhatsApp Business API
      </h3>
      <p className="text-[0.77rem] mb-4" style={{ color: 'var(--t2)' }}>
        Enable WhatsApp messaging for customer communications.
      </p>

      <IntegrationCard
        title="WhatsApp Business"
        description="Send booking updates via WhatsApp"
        isConnected={false}
      />
    </div>
  );
}

function UserSettings() {
  return (
    <div>
      <h3 className="text-[0.95rem] font-bold mb-1" style={{ color: 'var(--t)' }}>
        Admin & Staff Management
      </h3>
      <p className="text-[0.77rem] mb-4" style={{ color: 'var(--t2)' }}>
        Manage admin users and staff access permissions.
      </p>

      <div className="text-center py-12">
        <p className="text-sm" style={{ color: 'var(--t2)' }}>
          User management interface will be available after backend integration.
        </p>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div>
      <h3 className="text-[0.95rem] font-bold mb-1" style={{ color: 'var(--t)' }}>
        Notification Preferences
      </h3>
      <p className="text-[0.77rem] mb-4" style={{ color: 'var(--t2)' }}>
        Configure how and when to receive notifications.
      </p>

      <div className="space-y-3">
        <NotificationToggle label="New booking notifications" />
        <NotificationToggle label="Payment confirmations" />
        <NotificationToggle label="Customer enquiries" />
        <NotificationToggle label="Booking cancellations" />
      </div>
    </div>
  );
}

function IntegrationCard({
  title,
  description,
  isConnected,
}: {
  title: string;
  description: string;
  isConnected: boolean;
}) {
  return (
    <div
      className="rounded-lg border p-3.5 flex items-center justify-between gap-3 transition-colors hover:border-green-primary"
      style={{ background: 'var(--s)', borderColor: 'var(--bl)' }}
    >
      <div>
        <h4 className="text-[0.82rem] font-bold" style={{ color: 'var(--t)' }}>
          {title}
        </h4>
        <p className="text-[0.7rem]" style={{ color: 'var(--t2)' }}>
          {description}
        </p>
      </div>
      <Button variant={isConnected ? 'outline' : 'primary'} size="sm">
        {isConnected ? 'Configure' : 'Connect'}
      </Button>
    </div>
  );
}

function NotificationToggle({ label }: { label: string }) {
  return (
    <div
      className="rounded-lg border p-3 flex items-center justify-between"
      style={{ background: 'var(--s)', borderColor: 'var(--bl)' }}
    >
      <span className="text-[0.8rem]" style={{ color: 'var(--t)' }}>
        {label}
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-11 h-6 rounded-full peer bg-gray-300 peer-checked:bg-green-primary transition-colors"></div>
        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-5"></div>
      </label>
    </div>
  );
}
