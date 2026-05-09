# Yash Chhangani Portfolio

A modern personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.  
This site is fully data-driven from one file, so you can update personal info, projects, and social links quickly.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Features

- Responsive single-page portfolio
- Smooth section-based navigation
- About, Skills, Achievements, Projects, and Contact sections
- Reusable component structure
- Data-driven content from `src/data/site.ts`
- Easy to deploy static build

## Project Structure

```txt
src/
  components/       # UI sections and shared pieces
  data/site.ts      # All editable portfolio content
  hooks/            # Custom hooks
  theme/            # Theme context/provider
  App.tsx           # Main page layout
  main.tsx          # Entry point
public/
  thumbnails/       # Project thumbnails
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

### 5. Lint the project

```bash
npm run lint
```

## Customize Your Content

Edit `src/data/site.ts` to update:

- Meta title, description, and SEO settings
- Name, role, tagline, email, and resume link
- Social media links
- Navigation items
- About section paragraphs and stats
- Skills groups
- Achievements
- Projects (title, description, tags, links, thumbnail)
- Contact section text

## Deployment

This is a static Vite app and can be deployed easily on:

- Vercel
- Netlify
- GitHub Pages

After running `npm run build`, deploy the generated `dist/` folder.

## Author

**Yash Chhangani**  
Java Full Stack Developer  
GitHub: https://github.com/yashchhangani  
LinkedIn: https://www.linkedin.com/in/yashchhangani/
