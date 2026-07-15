# SICA Platform - Science, Innovation & Collaboration Alliance

**"Where Minds Meet, Science Moves."**

## Overview

SICA is a pan-African digital ecosystem designed to discover, equip, mentor, connect, and empower young people in science, technology, innovation, entrepreneurship, and research.

### Vision
Building Africa's next generation of scientists, innovators, researchers, and institution builders through a world-class digital platform inspired by Aspire Leaders Institute, Coursera, LinkedIn Learning, MIT Media Lab, and Y Combinator Startup School.

## Tech Stack

### Frontend
- **Next.js 15** - React framework with app router
- **TypeScript** - Type safety and better developer experience
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality React components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

### Backend
- **Supabase** - BaaS with PostgreSQL database
- **Authentication** - Email/password, OAuth
- **Real-time** - Supabase real-time subscriptions
- **Storage** - File storage for images and documents

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── page.tsx           # Home page
│   ├── programs/          # Programs page
│   ├── dashboard/         # User dashboard
│   └── ...
├── components/
│   ├── common/            # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ...
├── config/
│   └── design-system.ts   # Design tokens and system
├── hooks/
│   ├── useAuth.ts         # Authentication hook
│   └── ...
├── lib/
│   └── supabase.ts        # Supabase client
├── types/
│   └── index.ts           # TypeScript type definitions
└── ...
```

## Key Features

### 1. **Programs**
- Research Circles
- Builders Fellowship
- Innovation Challenges
- Science-to-Society Projects
- Community Science Labs
- Leadership Development Program
- Startup Incubation Program

### 2. **Learning Experience**
- Interactive courses
- Video lessons
- Reading materials
- Assignments
- Progress tracking
- Certificates

### 3. **Community**
- Member directory
- Discussion forums
- Cohort groups
- Project teams
- Mentor circles

### 4. **Mentorship**
- Browse mentors
- Book sessions
- Join mentor circles
- Receive guidance

### 5. **Opportunities Hub**
- Scholarships
- Grants
- Internships
- Competitions
- Fellowships
- Research opportunities

### 6. **Innovation Showcase**
- Display research projects
- Showcase startups
- Community projects
- Scientific innovations

## Brand System

### Colors
- **Primary**: Deep Blue (#0B1F3A)
- **Secondary**: Science Cyan (#00A8E8)
- **Accent**: Emerald (#2EC4B6)
- **Background**: White & Light Gray

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Design Principles
- Clean and minimal
- Elegant and premium
- Human-centered
- Inspirational
- Professional

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sica-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Database Schema (Coming Soon)

Key tables to be created:
- `users` - User profiles
- `programs` - Program information
- `enrollments` - User program enrollments
- `courses` - Course content
- `progress` - User progress
- `mentors` - Mentor profiles
- `sessions` - Mentorship sessions
- `opportunities` - Scholarship/grant opportunities
- `projects` - User projects
- `communities` - Community groups
- `certificates` - User certificates

## Future Features

- [ ] AI Mentor System
- [ ] Skill Recommendation Engine
- [ ] Opportunity Recommendation System
- [ ] Collaboration Matching Algorithm
- [ ] Mobile App (React Native)
- [ ] Multi-country Expansion
- [ ] Advanced Analytics & Insights
- [ ] Video Conferencing Integration
- [ ] Payment Processing
- [ ] Email Notifications

## Contributing

We welcome contributions! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Code Style

- TypeScript for type safety
- ESLint for linting
- Prettier for formatting
- Component-based architecture
- Utility-first CSS with Tailwind

## License

MIT License - See LICENSE file for details

## Contact

For questions or inquiries:
- Email: hello@sicaplatform.com
- Website: https://sicaplatform.com
- Twitter: @SICAplatform

---

**Building Africa's Future. One Innovator at a Time.**
