# ⚡ HackPack - Next.js Hackathon Boilerplate

HackPack is a minimal, scalable, and lightning-fast boilerplate designed for rapid prototyping during hackathons. Built with **Next.js 15**, **TypeScript**, **Prisma**, **Clerk Authentication**, and **TailwindCSS v4**, it comes pre-configured with essential features so you can start building your project right away.

## 🚀 Features

- 🔩 **Next.js 15.4** with App Router and TypeScript
- 🎨 **TailwindCSS v4** + **Shadcn/UI** for modern UI components
- ⚙️ **Prisma 6.12** ORM with PostgreSQL support
- 🔐 **Clerk Authentication** pre-configured and ready
- 🧠 **Zod v4** schema validation
- 🗂️ Scalable project structure with path aliases
- ⚡ Minimal, clean, and fast — made for hackathons
- 🎭 **React 19** with latest features
- 📊 **React Icons** library with popular icon sets
- 🎞️ **Framer Motion** for smooth animations and micro-interactions

---

## 📦 Tech Stack

| Tech           | Version | Purpose                         |
|----------------|---------|----------------------------------|
| Next.js        | 15.4.2  | Fullstack React Framework       |
| React          | 19.1.0  | UI Library                      |
| TypeScript     | 5.x     | Type Safety & DX                |
| TailwindCSS    | 4.1.11  | Styling Framework               |
| Shadcn/UI      | Latest  | Pre-built Accessible Components |
| Prisma         | 6.12.0  | Database ORM                    |
| Clerk          | 6.25.4  | Authentication Provider         |
| Zod            | 4.0.5   | Schema Validation               |
| React Icons    | Latest  | Icon Library                    |
| Framer Motion  | Latest  | Animation Library               |
| PostgreSQL     | -       | Database                        |

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
# Edit .env with your database and Clerk credentials

# Set up the database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app running.

---

## 🔧 Environment Setup

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="your-postgresql-connection-string"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

---

## 📁 Project Structure

```
hack-pack/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles with Tailwind
│   │   ├── layout.tsx          # Root layout with Clerk
│   │   └── page.tsx            # Landing page
│   ├── components/             # Reusable UI components
│   │   └── ui/                 # Shadcn/UI components
│   ├── lib/                    # Server-side utilities
│   │   ├── action.ts           # Server actions
│   │   ├── prisma.ts           # Prisma client setup
│   │   ├── prisma-db.ts        # Database operations
│   │   └── utils.ts            # Utility functions (cn helper)
│   ├── utils/                  # Client-side utilities
│   └── generated/              # Prisma generated files
├── prisma/
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
└── components.json             # Shadcn/UI configuration
```

---

## 🗄️ Database Schema

The included Prisma schema has a basic User model:

```prisma
model User {
  id        String @id @default(cuid())
  userName  String @unique
  email     String @unique
}
```

**Prisma Commands:**
```bash
npx prisma generate    # Generate Prisma client
npx prisma db push     # Push schema to database
npx prisma studio      # Open Prisma Studio
```

---

## 🔐 Authentication

Clerk authentication is pre-configured in the root layout. The setup includes:

- User management and sign-in/sign-up flows
- Session handling
- Protected routes capability
- Integration with Prisma for user data

---

## 🎨 Styling

**TailwindCSS v4** with:
- Custom color variables for theming
- Dark mode support (enabled by default)
- Shadcn/UI component library
- CSS animations with `tw-animate-css`

**Framer Motion** for:
- Smooth page transitions
- Component animations
- Gesture handling
- Layout animations

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

1. **Design your database schema** in `prisma/schema.prisma`
2. **Create your UI components** in `src/components/`
3. **Add server actions** in `src/lib/action.ts`
4. **Build your pages** in `src/app/`
5. **Style with TailwindCSS** and Shadcn/UI components
6. **Add animations** with Framer Motion for better UX

---

## 🧠 Hackathon Tips

- Use server actions for form handling and database operations
- Leverage Clerk's pre-built components for authentication flows
- Keep components modular and reusable
- Use the `cn()` utility for conditional styling
- Take advantage of TypeScript for better development experience
- Add subtle animations with Framer Motion to make your app feel polished

---

## 📜 License

MIT — Use it, modify it, build something amazing.

---

## ✨ Built for speed, built for hackers.

Happy hacking! 🚀