# 🚀 Quick Start Guide

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
pb/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Dashboard Home
│   │   ├── bookings/          # Bookings page
│   │   ├── tours/             # Tour packages page
│   │   ├── customers/         # Customers page
│   │   ├── payments/          # Payments page
│   │   ├── messages/          # Messages/Inbox page
│   │   └── settings/          # Settings page
│   │
│   ├── components/
│   │   ├── layout/            # Header, Sidebar
│   │   ├── pages/             # Page-specific components
│   │   └── ui/                # Reusable UI components
│   │
│   └── layouts/               # Dashboard layout wrapper
│
├── public/                     # Static assets (images, etc.)
├── .env.example               # Environment variables template
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── vercel.json                # Vercel deployment config
```

---

## 🎨 Key Components

### Reusable UI Components
- `<Button>` - Primary, secondary, outline, danger variants
- `<Card>` - Content containers with header/body
- `<Badge>` - Status badges (success, warning, danger, etc.)
- `<EmptyState>` - Placeholder for empty data
- `<StatCard>` - Dashboard statistics cards

### Layout Components
- `<Sidebar>` - Navigation sidebar
- `<Header>` - Top navigation bar
- `<DashboardLayout>` - Main layout wrapper

---

## 🔗 Navigation Routes

| Page | Route | Purpose |
|------|-------|---------|
| Dashboard | `/` | Home overview |
| Bookings | `/bookings` | Manage tour bookings |
| Tours | `/tours` | Manage tour packages |
| Customers | `/customers` | Customer management |
| Payments | `/payments` | Payment tracking |
| Messages | `/messages` | Customer communications |
| Settings | `/settings` | System configuration |

---

## 🎯 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🔌 Future API Integration Points

### Dashboard Home
- Total bookings count
- Pending bookings count
- Revenue statistics
- Recent activity feed
- Upcoming tours list

### Bookings Management
- Fetch all bookings
- Create new booking
- Update booking status
- Search/filter bookings

### Tour Packages
- CRUD operations for tours
- Image uploads
- Pricing management
- Itinerary builder

### Customers
- Customer profiles
- Booking history
- Contact information

### Payments
- Transaction records
- Payment status updates
- Refund processing

### Messages
- Customer enquiries
- Two-way messaging
- Conversation threads

### Settings
- Payment gateway integration
- Email service config
- WhatsApp API setup
- User management

---

## 🎨 Theming

### Custom CSS Variables

All colors are defined in `src/app/globals.css`:

```css
--g: #1a6b3c    /* Primary Green */
--y: #f5c518    /* Yellow Accent */
--bg: #f0f4f1   /* Background */
--s: #fff       /* Surface/Card */
```

### Dark Mode

Toggle dark mode by adding `dark` class to `<body>`:
```javascript
document.body.classList.toggle('dark');
```

---

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1199px
- **Desktop**: ≥ 1200px

All components are fully responsive.

---

## 🔒 Security Checklist (Before Production)

- [ ] Add authentication system
- [ ] Implement API route protection
- [ ] Set up environment variables
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Configure CORS policies
- [ ] Add rate limiting
- [ ] Implement input validation
- [ ] Set up logging/monitoring

---

## 📝 Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your message"

# Push to GitHub (auto-deploys to Vercel)
git push origin main
```

---

## 🆘 Common Issues

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

**Happy coding! 🎉**
