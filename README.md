# Ntek Printing

A modern web application for Ntek Printing services built with React, Express, and TypeScript.

## 🚀 Tech Stack

- **Frontend**: React 18, TailwindCSS, Radix UI
- **Backend**: Express.js
- **Language**: TypeScript
- **Build Tool**: Vite
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js
- **State Management**: TanStack Query (React Query)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20 or higher)
- npm (Node Package Manager)
- PostgreSQL (v16 or higher)

## 🛠️ Local Development Setup

1. Clone the repository:

```bash
git clone <your-repo-url>
cd NtekPrinting
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=your_database_connection_string
NODE_ENV=development
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:4000

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📤 Deployment on Vercel

1. Install Vercel CLI globally:

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy to Vercel:

```bash
vercel
```

4. For production deployment:

```bash
vercel --prod
```

### ⚙️ Vercel Configuration

- Frontend will be automatically detected as a Vite application
- Add the following build settings in your Vercel project:
  - Build Command: `npm run build`
  - Output Directory: `dist/public`
  - Install Command: `npm install`

### 🔧 Environment Variables

Make sure to add these environment variables in your Vercel project settings:

- `DATABASE_URL`: Your production database connection string
- `NODE_ENV`: Set to "production"

## 📁 Project Structure

```
NtekPrinting/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── hooks/      # Custom React hooks
│   │   └── lib/        # Utility functions
├── server/              # Backend Express application
│   ├── routes/         # API routes
│   └── storage/        # Database models and queries
├── shared/             # Shared types and utilities
└── public/             # Static assets
```

## 🔑 Features

- Modern, responsive UI with TailwindCSS
- Server-side rendering support
- API endpoints for data management
- Database integration with Drizzle ORM
- Authentication system
- Form handling with React Hook Form
- Toast notifications
- Error boundary implementation

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
