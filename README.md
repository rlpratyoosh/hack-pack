# ⚡ HackPack - Next.js Hackathon Boilerplate

HackPack is a minimal, scalable, and lightning-fast boilerplate designed for rapid prototyping during hackathons. Built with **Next.js 15**, **TypeScript**, **Prisma**, and **TailwindCSS v4**, it comes pre-configured with essential features so you can start building your project right away.

## 🚀 Features

-   🔩 **Next.js 15.4** with App Router and TypeScript
-   🎨 **TailwindCSS v4** + **Shadcn/UI** for modern UI components
-   🔐 **NextAuth v5 Authentication** with credentials provider, login/signup pages and protected routes
-   ⚙️ **Prisma 6.12** ORM with PostgreSQL support
-   🧠 **Zod v4** schema validation
-   �️ **Middleware-based route protection** for authenticated pages
-   �🗂️ Scalable project structure with path aliases
-   ⚡ Minimal, clean, and fast — made for hackathons
-   🎭 **React 19** with latest features
-   📊 **React Icons** library with popular icon sets
-   🎞️ **Framer Motion** for smooth animations and micro-interactions
-   📝 **React Hook Form** with Zod resolvers for powerful form handling
-   🎣 **Custom useAuth hook** for authentication state management
-   📧 **Email verification system** with secure token-based verification

---

## 📦 Tech Stack

| Tech            | Version | Purpose                         |
| --------------- | ------- | ------------------------------- |
| Next.js         | 15.4.2  | Fullstack React Framework       |
| React           | 19.1.0  | UI Library                      |
| TypeScript      | 5.x     | Type Safety & DX                |
| TailwindCSS     | 4.1.11  | Styling Framework               |
| Shadcn/UI       | Latest  | Pre-built Accessible Components |
| NextAuth        | 5.0.0   | Authentication System           |
| Prisma          | 6.12.0  | Database ORM                    |
| Zod             | 4.0.5   | Schema Validation               |
| React Icons     | Latest  | Icon Library                    |
| Framer Motion   | Latest  | Animation Library               |
| React Hook Form | Latest  | Form Handling & Validation      |
| BCrypt          | 6.0.0   | Password Hashing                |
| Nodemailer      | 6.10.1  | Email Service                   |
| PostgreSQL      | -       | Database                        |

---

## 🛠️ Quick Start

```bash
# Clone the repository
git clone https://github.com/rlpratyoosh/hack-pack.git
cd hack-pack

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials and email service

# Set up the database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app running.

### 🔐 Authentication Setup

1. Set up your PostgreSQL database
2. Configure your email service (SMTP or email provider)
3. Add the required environment variables to your `.env` file
4. Run `npx prisma db push` to create the database tables
5. The authentication system is ready to use with:
    - `/login` - Login page
    - `/signup` - Registration page
    - `/verify` - Email verification page
    - `/dashboard` - Protected dashboard (requires authentication)
    - Automatic redirects for authenticated/unauthenticated users
    - Secure password hashing with bcrypt
    - Email verification tokens for account security

---

## 🔧 Environment Setup

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="your-postgresql-connection-string"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Email Service (for verification emails)
MAIL_USER="your-email@example.com"
MAIL_PASS="your-email-password"
```

---

## 📁 Project Structure

```
hack-pack/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Authentication pages
│   │   │   ├── login/          # Login page
│   │   │   ├── signup/         # Signup page
│   │   │   └── verify/         # Email verification page
│   │   ├── api/                # API routes
│   │   │   └── auth/           # NextAuth API routes
│   │   ├── dashboard/          # Protected dashboard page
│   │   ├── globals.css         # Global styles with Tailwind
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/             # Reusable UI components
│   │   └── ui/                 # Shadcn/UI components
│   ├── hooks/                  # Custom React hooks
│   │   └── useAuth.ts          # Authentication hook
│   ├── lib/                    # Server-side utilities
│   │   ├── action.ts           # Server actions
│   │   ├── email.ts            # Email service utilities
│   │   ├── prisma.ts           # Prisma client setup
│   │   ├── prisma-db.ts        # Database operations
│   │   ├── utils.ts            # Utility functions (cn helper)
│   │   └── zod.ts              # Zod schemas for validation
│   ├── utils/                  # Client-side utilities
│   ├── auth.ts                 # NextAuth configuration
│   ├── middleware.ts           # Route protection middleware
│   └── generated/              # Prisma generated files
├── prisma/
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
└── components.json             # Shadcn/UI configuration
```

---

## 🗄️ Database Schema

The included Prisma schema has User and Profile models with email verification:

```prisma
model User {
  id                 String              @id @default(cuid())
  userName           String              @unique
  email              String              @unique
  password           String
  isVerified         Boolean             @default(false)
  profile            Profile?
  createdAt          DateTime            @default(now())
  updatedAt          DateTime            @updatedAt
  verificationTokens VerificationToken[]
}

model Profile {
  id        String   @id @default(cuid())
  userId    String   @unique
  user      User     @relation(fields: [userId], references: [id])
  fullName  String?
  avatarUrl String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model VerificationToken {
  id      String   @id @default(cuid())
  token   String   @unique
  expires DateTime
  userId  String
  user    User     @relation(fields: [userId], references: [id])
}
```

**Features:**

-   **User authentication** with secure password hashing
-   **Email verification** system with expiring tokens
-   **User profiles** with customizable information
-   **Automatic timestamps** for user tracking

**Prisma Commands:**

```bash
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema to database
npx prisma studio      # Open Prisma Studio
```

---

## 🎨 Styling

**TailwindCSS v4** with:

-   Custom color variables for theming
-   Dark mode support (enabled by default)
-   Shadcn/UI component library
-   CSS animations with `tw-animate-css`

**Framer Motion** for:

-   Smooth page transitions
-   Component animations
-   Gesture handling
-   Layout animations

---

## 🚀 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

The project is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

---

## 🧩 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌱 Next Steps for Your Hackathon

1. **Configure your email service** - Set up SMTP or email provider credentials in `.env`
2. **Customize your database schema** in `prisma/schema.prisma` (extend the User/Profile models as needed)
3. **Design your authentication flow** - pages are ready in `src/app/(auth)/`
4. **Build protected features** in `src/app/dashboard/` or create new protected routes
5. **Create your UI components** in `src/components/`
6. **Add server actions** in `src/lib/action.ts`
7. **Build your pages** in `src/app/`
8. **Style with TailwindCSS** and Shadcn/UI components
9. **Add animations** with Framer Motion for better UX
10. **Use the `useAuth` hook** to manage authentication state in your components

---

## 🔐 Authentication Features

-   **NextAuth v5** integration with credentials provider
-   **Email verification** system with secure tokens and expiration
-   **Password hashing** with bcrypt for security
-   **Route protection** via middleware - unauthenticated users are redirected to login
-   **Custom `useAuth` hook** for managing authentication state
-   **Form validation** with React Hook Form and Zod
-   **Automatic redirects** - logged-in users can't access login/signup pages
-   **JWT session management** with NextAuth

---

## 🧠 Hackathon Tips

-   Use server actions for form handling and database operations
-   Keep components modular and reusable
-   Use the `cn()` utility for conditional styling
-   Take advantage of TypeScript for better development experience
-   Add subtle animations with Framer Motion to make your app feel polished
-   **Authentication is pre-built** - focus on your core features
-   Use the `useAuth` hook to get user data and authentication state
-   Protected routes are handled automatically by middleware
-   Customize the dashboard page in `src/app/dashboard/page.tsx`

---

## 📜 License

MIT — Use it, modify it, build something amazing.

---

## ✨ Built for speed, built for hackers.

Happy hacking! 🚀
