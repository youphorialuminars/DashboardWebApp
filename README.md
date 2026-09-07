# Luminar's Guide — Dashboard

The multi-stakeholder mentorship web app for **Luminar's Guide** (by Youphoria). Mentors, students, parents, counselors, schools, and admins each get a role-specific dashboard on one shared student profile, built with Next.js 15, TypeScript, Tailwind CSS, and Supabase.

## Roles

- **Students** — sessions, progress tracking, analysis history, parent/network links
- **Parents** — protected summaries and conversation starters (never raw session transcripts)
- **Mentors** — full session history and suggested talking points
- **Counselors** — longitudinal student context
- **Schools** — aggregate, de-identified well-being trends
- **Admins** — account approvals and platform oversight

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your own Supabase and AI provider keys:
   ```bash
   cp .env.example .env
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:4028](http://localhost:4028) in your browser.

## Project structure

```
src/
├── app/                    # Next.js App Router pages, grouped by role
│   ├── student-dashboard/
│   ├── student-parent-dashboard/
│   ├── parents-hub/
│   ├── counselor-dashboard/
│   ├── school-dashboard/
│   ├── admin-dashboard/
│   ├── sign-up-login/
│   ├── settings/
│   ├── new-session/
│   ├── network-links/
│   └── api/                # Server routes (AI analysis, sessions, invites, etc.)
├── components/              # Shared UI components
├── contexts/                 # React contexts (auth, font size/theme)
├── lib/                      # Supabase clients, AI helpers, hooks
└── styles/                   # Tailwind and global styles
supabase/
└── migrations/                # SQL migrations (RLS policies, schema, seed data)
```

## Available scripts

- `npm run dev` — start the development server (port 4028)
- `npm run build` — build for production
- `npm run start` — start the server
- `npm run serve` — start the production server
- `npm run lint` / `npm run lint:fix` — check/fix with ESLint
- `npm run format` — format with Prettier
- `npm run type-check` — TypeScript type checking with no emit

## Environment variables

See `.env.example` for the full list. `NEXT_PUBLIC_*` keys are exposed to the browser (the Supabase anon key is meant to be public and relies on Row Level Security); all other keys are server-only and used inside `src/app/api/*` routes — never commit real values for these.

## Database

Supabase SQL migrations live in `supabase/migrations/`, applied in filename order. They set up role tables, Row Level Security policies, invite codes, and demo seed data.

---

Built with [Rocket.new](https://rocket.new), Next.js, and Supabase.
