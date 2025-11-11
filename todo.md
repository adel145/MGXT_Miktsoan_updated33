# Miktsoan (מקצוען) - Development Todo List

## Project Overview
A modern marketplace platform for professionals with stories, chatbot, collections, and filtering features.

## MVP Implementation Plan (Maximum 8 Files)

### Core Files to Create/Modify:

1. **index.html** - Update title and meta tags for Miktsoan
2. **src/pages/Index.tsx** - Main homepage with all sections (Stories, Chatbot, Collections, Professionals)
3. **src/data/mockData.ts** - All mock data (professionals, categories, stories)
4. **src/components/StoriesSection.tsx** - Instagram-style stories with horizontal scroll
5. **src/components/ChatbotSection.tsx** - Chatbot card with inviting design
6. **src/components/CollectionsSection.tsx** - Category collections display
7. **src/components/ProfessionalsGrid.tsx** - Professionals listing with filtering/sorting
8. **src/components/ProfessionalModal.tsx** - Modal for story/professional details

### Key Features Per File:

**mockData.ts:**
- Professional profiles (name, category, rating, distance, reviews, availability, price, image)
- 6 categories with Hebrew/English names
- Story data for all professionals
- Mock chatbot messages

**Index.tsx:**
- Layout structure: Stories → Chatbot → Collections → Professionals
- State management for filters and selected category
- Responsive grid layout
- Back to top button

**StoriesSection.tsx:**
- Horizontal scrollable stories
- Profile image, name, category, status
- Click to open modal
- Framer Motion animations
- Responsive (swipeable on mobile)

**ChatbotSection.tsx:**
- Gradient card design
- Friendly headline and CTA
- Input field mock-up (non-functional)
- Robot/speech bubble icon
- Hover animations

**CollectionsSection.tsx:**
- 6 category cards with banners
- Click to filter professionals by category
- Smooth transitions
- Responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop)

**ProfessionalsGrid.tsx:**
- Filter bar (category, price, availability, location)
- Sort options (rating, distance, reviews)
- Professional cards with info
- Dynamic filtering (front-end only)
- Responsive grid

**ProfessionalModal.tsx:**
- Full professional details
- Close button
- Smooth open/close animations
- Responsive design

### Design Requirements:
- Wolt-inspired: clean, rounded, minimal, soft blue/white
- Framer Motion for all transitions
- Hover effects and smooth scrolling
- Clear text hierarchy
- Icons for categories and actions
- Mobile-first responsive

### Technical Notes:
- All data mocked locally
- Comments for future API integration
- No backend logic
- TypeScript for type safety
- Tailwind CSS + shadcn/ui components

## Implementation Order:
1. Create mockData.ts with all data structures
2. Update index.html with proper meta tags
3. Create StoriesSection.tsx
4. Create ChatbotSection.tsx
5. Create CollectionsSection.tsx
6. Create ProfessionalsGrid.tsx with filtering
7. Create ProfessionalModal.tsx
8. Integrate all in Index.tsx with layout and state management

## Status: Ready to Start