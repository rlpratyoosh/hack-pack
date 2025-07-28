# ⚡ HackPack - Next.js Hackathon Boilerplate

HackPack is a minimal, scalable, and lightning-fast boilerplate designed for rapid prototyping during hackathons. Built with **Next.js 15**, **TypeScript**, **Prisma**, and **TailwindCSS v4**, it comes pre-configured with essential features so you can start building your project right away.

## 🚀 Features

- 🔩 **Next.js 15.4** with App Router and TypeScript
- 🎨 **TailwindCSS v4** + **Shadcn/UI** for modern UI components
- ⚙️ **Prisma 6.12** ORM with PostgreSQL support
- 🧠 **Zod v4** schema validation
- 🗂️ Scalable project structure with path aliases
- ⚡ Minimal, clean, and fast — made for hackathons
- 🎭 **React 19** with latest features
- 📊 **React Icons** library with popular icon sets
- 🎞️ **Framer Motion** for smooth animations and micro-interactions
- 📝 **React Hook Form** with Zod resolvers for powerful form handling

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
| Zod            | 4.0.5   | Schema Validation               |
| React Icons    | Latest  | Icon Library                    |
| Framer Motion  | Latest  | Animation Library               |
| React Hook Form| Latest  | Form Handling & Validation      |
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
# Edit .env with your database credentials

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
```

---

## 📁 Project Structure

```
hack-pack/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles with Tailwind
│   │   ├── layout.tsx          # Root layout
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