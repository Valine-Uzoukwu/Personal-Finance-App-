# Personal Finance App

A personal finance dashboard that helps you track income, assets, and expenses in one place—while securely connecting to external financial accounts (without storing or exposing sensitive credentials).

---

## Table of Contents

- [MVP](#mvp)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Development & Testing](#development--testing)
- [Deployment](#deployment)


---

## MVP

The minimum viable product for this app should focus on tracking and summarizing manually uploaded financial info

### Core goals
- Allow manual expense uploads/imports
- Display a simple dashboard with current balances and spending totals based on a monthly period 
- Store and show account information for checking, savings, and investment accounts
- Record transactions and categorize expenses

- Provide basic API endpoints to fetch accounts, transactions, expenses, and dashboard summaries


---

## Features

### Frontend (UI)

- **Dashboard**
  - High-level overview of money
  - Summary cards (cash, investments, total spending, etc.)

- **Income**
  - Checking accounts

 **Assets**
  - Savings accounts
  - Investments

- **Expenses**
  - Credit card purchases
  - Spending categories (grouping + breakdowns)

### Backend (API)

- Endpoints to support:
  - Fetching and aggregating account balances
  - Ingesting transactions (credit card + manual uploads)
  - Categorizing expenses
  - Powering dashboard summaries and charts

---

## Additional Goals / Roadmap

- **Bank + Investment Integrations**
  - Connect to banks and investment accounts via a secure provider/API
  - Sync balances and transactions

- **Security & Authentication**
  - Implement strong authentication and authorization
  - Never upload passwords, tokens, or private keys to GitHub
  - Use environment variables and secrets management for all sensitive config

  - **Additional Customization**
  - More categories for expenses and income 
  - Savings Goals
  - Animations and User Effects 



---

## Tech Stack

### Frontend

- React
- Charting: Recharts / Chart.js
- Styling: Tailwind CSS or CSS Modules

### Backend

- Node.js + Express
- Database: PostgreSQL
- Auth: JWT sessions or an auth provider (e.g., Auth0/Clerk)

### Financial Account Connections

- Use a trusted aggregator/provider (don't build direct bank credential handling yourself)

---

## Prerequisites

- Node.js v14+ and npm/yarn
- PostgreSQL v12+
- Git

---

## Getting Started

### Installation

*Instructions for cloning, installing dependencies, and running locally*

```bash
# Clone the repository
git clone https://github.com/yourusername/personal-finance-app.git
cd personal-finance-app

# Install dependencies
npm install

# Set up environment variables (see Environment Variables section)

# Run the app
npm start
```

---

## Project Structure

*Overview of folder organization, key directories, and file structure*

```
personal-finance-app/
├── public/              # Static files
├── src/                 # Frontend React code
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   └── style/           # Stylesheets
├── backend/             # Node.js/Express server
│   ├── routes/          # API endpoints
│   ├── models/          # Database models
│   └── config/          # Configuration files
└── README.md
```

---

## Environment Variables

*List of required environment variables and configuration*

Create a `.env` file in the root directory with the following variables:

```
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/finance_db

# Authentication
JWT_SECRET=your_jwt_secret_here

# API Keys (for financial integrations)
FINANCIAL_API_KEY=your_api_key_here

# Server
PORT=5000
NODE_ENV=development
```

⚠️ **Never commit `.env` to Git. Add it to `.gitignore`.**

---

## API Documentation

*Overview of available endpoints and usage examples*

### Key Endpoints

- `GET /api/accounts` - Fetch user account balances
- `POST /api/transactions` - Add a new transaction
- `GET /api/expenses` - Retrieve expenses with filters
- `POST /api/expenses/upload` - Upload expense file
- `GET /api/dashboard` - Get dashboard summary data

*More detailed documentation to follow*

---

## Development & Testing

### Running the Development Server

```bash
# Frontend
npm start

# Backend
npm run server
```

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

---

## Deployment

*Instructions for deploying to production*

- **Frontend**: Vercel, Netlify
- **Backend**: Heroku, AWS, DigitalOcean
- **Database**: AWS RDS, Heroku Postgres, or managed PostgreSQL service

---


