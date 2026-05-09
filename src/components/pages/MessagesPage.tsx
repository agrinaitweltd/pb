import { MessageSquare, Search } from 'lucide-react';
import EmptyState from '@/components/ui/EmptyState';
import PageIntro from '@/components/ui/PageIntro';

export default function MessagesPage() {
  return (
    <div className="space-y-4">
      <PageIntro
        label="Support Desk"
        title="Messages"
        accent="Inbox"
        description="Manage enquiries, booking conversations, and customer communication threads in one inbox workflow."
      />

      {/* Messages Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-xl border overflow-hidden" style={{ background: 'var(--s)', borderColor: 'var(--bl)', boxShadow: 'var(--sh)' }}>
        {/* Inbox List */}
        <div className="border-r lg:col-span-1" style={{ borderColor: 'var(--bl)' }}>
          <div className="p-4 border-b" style={{ borderColor: 'var(--bl)' }}>
            <h3 className="text-[0.87rem] font-bold mb-2" style={{ color: 'var(--t)' }}>
              Inbox
            </h3>
            <div className="relative">
              <Search
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5"
                style={{ stroke: 'var(--t3)' }}
                strokeWidth={2}
              />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full py-1.5 px-2.5 pl-8 border rounded-lg text-[0.75rem] outline-none"
                style={{
                  background: 'var(--s2)',
                  borderColor: 'var(--b)',
                  color: 'var(--t)',
                }}
              />
            </div>
          </div>
          
          <div className="p-4">
            <EmptyState
              icon="inbox"
              title="No Messages"
              description="Customer enquiries will appear here."
            />
          </div>
        </div>

        {/* Message View */}
        <div className="lg:col-span-2 flex flex-col" style={{ background: 'var(--s2)' }}>
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center max-w-sm">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--gl)' }}>
                <MessageSquare className="w-8 h-8" style={{ stroke: 'var(--g)' }} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--t)' }}>
                Select a Message
              </h3>
              <p className="text-sm" style={{ color: 'var(--t2)' }}>
                Choose a conversation from the inbox to view messages and respond to customer enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
