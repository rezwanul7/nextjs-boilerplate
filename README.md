# MicroBlog

Microblogging platform powered by Next.js — lightning-fast, scalable, and beautiful.

## 🚀 Features

Frontend, Backend & Infra — a full-stack microblogging platform with:

* [ ] **Infinite Scroll Pagination** — posts feed with seamless scroll loading
* [x] **Client-Side Caching with React Query** — data synchronization and request deduplication
* [x] **Shadcn DataTable** — server-side sorting, filtering, and pagination
* [x] **Form Validation** — schema validation with **Zod** + handling via **React Hook Form**
* [x] **Type-Safe URL State Management** — **nuqs** for query parameters with search & filter debouncing
* [x] **User Authentication with Clerk** — sign-up, login, and profile management
* [x] **Admin Dashboard** — post creation/editing with markdown support
* [x] **Type-Safe Server Actions** — end-to-end type safety for server logic
* [x] **REST API** — structured endpoints for external integrations
* [x] **Prisma ORM** — type-safe database queries and migrations
* [ ] **Dockerized Deployment** — containerized app for consistent environments
* [ ] **CI/CD Pipeline** — automated testing and deployment workflows

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Database:** [PostgreSQL](https://www.postgresql.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Prisma ORM](https://www.prisma.io/orm)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Validation:** [Zod](https://zod.dev)
- **Form Handling:** [React Hook Form](https://react-hook-form.com)
- **Data Fetching & Caching:** [React Query](https://tanstack.com/query/latest)
- **State Management:** [Nuqs](https://nuqs.dev)

---

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/rezwanul7/micro-blog.git
   ```

2. Install dependencies using npm

   ```bash
   npm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   npm run dev
   ```

5. Push the database schema

   ```bash
   npm run db:push
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically
optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.

## Deploy using Docker

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.