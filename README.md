# ⚡ HackPack - Next.js Hackathon Boilerplate

HackPack is a minimal, scalable, and lightning-fast boilerplate designed for rapid prototyping during hackathons. Built with **Next.js 15**, **TypeScript**, **Prisma**, and **TailwindCSS v4**, it comes pre-configured with essential features so you can start building your project right away.

## 🚀 Features

- 🔩 **Next.js 15.4** with App Router and TypeScript
- 🎨 **TailwindCSS v4** + **Shadcn/UI** for modern UI components
- 🔐 **Supabase Authentication** with login/signup pages and protected routes
- ⚙️ **Prisma 6.12** ORM with PostgreSQL support
- 🧠 **Zod v4** schema validation
- �️ **Middleware-based route protection** for authenticated pages
- �🗂️ Scalable project structure with path aliases
- ⚡ Minimal, clean, and fast — made for hackathons
- 🎭 **React 19** with latest features
- 📊 **React Icons** library with popular icon sets
- 🎞️ **Framer Motion** for smooth animations and micro-interactions
- 📝 **React Hook Form** with Zod resolvers for powerful form handling
- 🎣 **Custom useAuth hook** for authentication state management

---

## 📦 Tech Stack

| Tech                    | Version | Purpose                         |
|-------------------------|---------|----------------------------------|
| Next.js                 | 15.4.2  | Fullstack React Framework       |
| React                   | 19.1.0  | UI Library                      |
| TypeScript              | 5.x     | Type Safety & DX                |
| TailwindCSS             | 4.1.11  | Styling Framework               |
| Shadcn/UI               | Latest  | Pre-built Accessible Components |
| Supabase                | 2.53.0  | Authentication & Backend        |
| Prisma                  | 6.12.0  | Database ORM                    |
| Zod                     | 4.0.5   | Schema Validation               |
| React Icons             | Latest  | Icon Library                    |
| Framer Motion           | Latest  | Animation Library               |
| React Hook Form         | Latest  | Form Handling & Validation      |
| PostgreSQL              | -       | Database                        |

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
# Edit .env with your database and Supabase credentials

# Set up the database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app running.

### 🔐 Authentication Setup

1. Create a [Supabase](https://supabase.com) project
2. Get your project URL and anon key from the Supabase dashboard
3. Add them to your `.env` file
4. **Run the SQL commands** from the "Database Schema" section in your Supabase SQL Editor
5. The authentication system is ready to use with:
   - `/login` - Login page
   - `/signup` - Registration page  
   - `/dashboard` - Protected dashboard (requires authentication)
   - Automatic redirects for authenticated/unauthenticated users
   - Automatic profile creation for new users

---

## 🔧 Environment Setup

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="your-postgresql-connection-string"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

---

## 📁 Project Structure

```
hack-pack/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Authentication pages
│   │   │   ├── login/          # Login page
│   │   │   └── signup/         # Signup page
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
│   │   ├── prisma.ts           # Prisma client setup
│   │   ├── prisma-db.ts        # Database operations
│   │   ├── supabase.ts         # Supabase client setup
│   │   └── utils.ts            # Utility functions (cn helper)
│   ├── utils/                  # Client-side utilities
│   ├── middleware.ts           # Route protection middleware
│   └── generated/              # Prisma generated files
├── prisma/
│   └── schema.prisma           # Database schema
├── public/                     # Static assets
└── components.json             # Shadcn/UI configuration
```

---

## 🗄️ Database Schema

The included Prisma schema has a profile model designed to work with Supabase Auth:

```prisma
model profile {
  id        String @id @default(cuid())
  fullname  String?
  avatarurl String?
}
```

### 🔄 Supabase Database Setup

To automatically create user profiles when users sign up, run these SQL commands in your Supabase SQL Editor:

```sql
-- Create function to handle new user registration
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profile (id, fullname)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Create trigger to automatically call the function
create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();
```

This setup ensures that every time a user signs up through Supabase Auth, a corresponding profile record is automatically created.

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

1. **Set up Supabase triggers** - Run the SQL commands in the Database Schema section
2. **Design your database schema** in `prisma/schema.prisma` (extend the profile model as needed)
3. **Customize authentication flow** - pages are ready in `src/app/(auth)/`
4. **Build protected features** in `src/app/dashboard/` or create new protected routes
5. **Create your UI components** in `src/components/`
6. **Add server actions** in `src/lib/action.ts`
7. **Build your pages** in `src/app/`
8. **Style with TailwindCSS** and Shadcn/UI components
9. **Add animations** with Framer Motion for better UX
10. **Use the `useAuth` hook** to manage authentication state in your components

---

## 🔐 Authentication Features

- **Supabase Auth** integration with email/password
- **Route protection** via middleware - unauthenticated users are redirected to login
- **Custom `useAuth` hook** for managing authentication state
- **Form validation** with React Hook Form and Zod (email validation only, passwords handled separately)
- **Automatic redirects** - logged-in users can't access login/signup pages
- **Clean, modern UI** with dark theme authentication forms

---

## 🧠 Hackathon Tips

- Use server actions for form handling and database operations
- Keep components modular and reusable
- Use the `cn()` utility for conditional styling
- Take advantage of TypeScript for better development experience
- Add subtle animations with Framer Motion to make your app feel polished
- **Authentication is pre-built** - focus on your core features
- Use the `useAuth` hook to get user data and authentication state
- Protected routes are handled automatically by middleware
- Customize the dashboard page in `src/app/dashboard/page.tsx`

---

## 📜 License

MIT — Use it, modify it, build something amazing.

---

## ✨ Built for speed, built for hackers.

Happy hacking! 🚀