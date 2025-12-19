# The History of Visual Storytelling

An immersive, parallax-scrolling website that explores the history of visual storytelling from prehistoric cave paintings to modern AI-generated art. Inspired by [Shorthand's "The Craft"](https://shorthand.com/the-craft/history-visual-storytelling/index.html).

## 🎨 Design

This project features a dark, editorial aesthetic with:

- **Typography**: Playfair Display (serif) for headings, Source Sans 3 (sans-serif) for body text
- **Color Scheme**: Dark background with warm cream/off-white text and amber accents
- **Animations**: Smooth parallax scrolling, fade-in effects, and scroll-triggered animations
- **Layout**: Full-bleed hero images, timeline entries with alternating image positions

## 🛠 Technologies Used

### Core Framework
- **React 18** - UI library
- **Vite** - Build tool and development server
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **tailwindcss-animate** - Animation utilities

### Animations
- **Framer Motion** - Production-ready motion library for React
  - Scroll-linked animations
  - Parallax effects
  - Viewport-triggered animations
  - Smooth transitions

### UI Components
- **Shadcn/ui** - Beautifully designed components
- **Lucide React** - Icon library

### Other Dependencies
- **React Router DOM** - Client-side routing
- **TanStack React Query** - Data fetching and caching
- **class-variance-authority** - Component variants
- **clsx / tailwind-merge** - Conditional class utilities

## 📁 Project Structure

```
src/
├── assets/                 # Generated images
│   ├── hero-collage.jpg
│   ├── prehistoric-cave.jpg
│   ├── egyptian-hieroglyphics.jpg
│   ├── medieval-cathedral.jpg
│   ├── renaissance-workshop.jpg
│   ├── victorian-photography.jpg
│   ├── twentieth-century-tv.jpg
│   └── digital-future.jpg
│
├── components/
│   ├── Navigation.tsx      # Sticky navigation with scroll detection
│   ├── HeroSection.tsx     # Full-screen hero with parallax
│   ├── IntroSection.tsx    # Opening paragraph
│   ├── EraSection.tsx      # Era wrapper with parallax background
│   ├── TimelineEntry.tsx   # Individual timeline entries
│   ├── ReferencesSection.tsx
│   ├── Footer.tsx
│   └── ui/                 # Shadcn components
│
├── pages/
│   └── Index.tsx           # Main page composition
│
├── index.css               # Design system & custom styles
└── App.tsx                 # Router setup
```

## 🎯 Key Features

### Parallax Scrolling
- Hero image moves at a different rate than scroll
- Era backgrounds create depth with scroll-linked transforms
- Timeline images have subtle vertical parallax

### Scroll-Triggered Animations
- Navigation bar appearance changes based on scroll position
- Content fades in as it enters the viewport
- Timeline entries animate with staggered delays

### Responsive Design
- Mobile-first approach
- Collapsible mobile navigation
- Adaptive typography scales
- Grid layouts adjust for different screen sizes

### Design System
- CSS custom properties for consistent theming
- Semantic color tokens (foreground, background, accent, etc.)
- Custom font family variables
- Reusable component classes

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173)

## 📦 Build

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🎨 Customization

### Colors
Edit the CSS custom properties in `src/index.css`:
```css
:root {
  --background: 15 10% 6%;
  --foreground: 40 30% 92%;
  --accent: 35 70% 45%;
  /* ... */
}
```

### Typography
Fonts are loaded from Google Fonts. Update the `@import` in `index.css` and `fontFamily` in `tailwind.config.ts`.

### Content
Edit the timeline entries in `src/pages/Index.tsx`. Each era section contains multiple `TimelineEntry` components with:
- Title
- Date
- Description
- Optional image with caption

## 📖 Content Credits

Historical information inspired by Shorthand's "The Craft" article on visual storytelling history. Images are AI-generated using Flux models.

## 📄 License

MIT License - Feel free to use this project as a template for your own visual storytelling experiences.
