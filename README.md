# Pearl Land Safaris - Admin Dashboard

A professional tourism operations dashboard for managing bookings, tour packages, payments, and customer communications.

## Features

- **Dashboard Overview** - Real-time analytics and booking insights
- **Booking Management** - View, accept, reject, and manage tour bookings
- **Tour Package Management** - Create, edit, and manage safari packages
- **Customer Management** - Track customer profiles and booking history
- **Payment Tracking** - Monitor payments, refunds, and transactions
- **Messages & Enquiries** - Inbox-style communication system
- **Settings** - Configure integrations and admin accounts

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/agrinaitweltd/pb.git
cd pb
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pb/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Layout components
│   ├── utils/            # Utility functions
│   └── styles/           # Global styles
├── public/               # Static assets
└── ...config files
```

## Deployment

This project is optimized for Vercel deployment:

```bash
npm run build
```

Push to GitHub and connect to Vercel for automatic deployments.

## Future Integrations

- Backend API connections
- Payment gateway integration (Stripe, PayPal, M-Pesa)
- Email service integration
- WhatsApp Business API
- Real-time notifications
- Analytics dashboard

## License

Proprietary - Pearl Land Safaris

## Contact

Pearl Land Safaris Team
