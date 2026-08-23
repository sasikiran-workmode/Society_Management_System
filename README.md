# Society Management System

## Overview

This project helps housing societies run day-to-day operations with modern workflows:

- Maintenance billing and payment collection
- Lift emergency alert workflow
- Complaint lifecycle tracking
- Asset and service history management
- Watchman gate log operations

## Tech Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend
- Express.js
- Node.js
- MongoDB Atlas
- Mongoose

### Integrations
- Razorpay
- Brevo
- ImageKit

## Project Structure

```text
Society-Management-System/
├── client/
├── server/
├── .github/
├── ARCHITECTURE.md
├── CONTRIBUTING.md
└── SECURITY.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- MongoDB Atlas account
- Razorpay account
- Brevo account
- ImageKit account

### Installation

1. Clone repository
   ```bash
   git clone https://github.com/sasikiran-workmode/Society-Management-System.git
   cd Society-Management-System
   ```

2. Install dependencies
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Configure environment variables
   ```bash
   cp server/.env.example server/.env.local
   cp client/.env.example client/.env.local
   ```

4. Start services
   ```bash
   cd server && npm run dev
   cd client && npm run dev
   ```

## Core Features

- Automated monthly maintenance with reminder flow
- Role-based access for Manager, Admin, Resident, and Watchman
- Complaint status progression with notifications
- Security-first auth with JWT, httpOnly cookies, and OTP reset
- Emergency escalation workflow for fast incident response

## API Snapshot

- `POST /api/auth/login`
- `GET /api/maintenance`
- `POST /api/payment/create-order`
- `POST /api/emergency/trigger`
- `POST /api/complaints`

See `/ARCHITECTURE.md` for detailed API and design information.

## Security

Key controls include:

- JWT authentication
- bcrypt password hashing
- CORS and Helmet hardening
- Request validation and role checks

Please review `/SECURITY.md` before reporting vulnerabilities.

## Contributing

Contributions are welcome. See `/CONTRIBUTING.md` for development workflow and contribution standards.

## Author

**Sasikiran**

- GitHub: https://github.com/sasikiran-workmode
- Repository: https://github.com/sasikiran-workmode/Society_Management_System
