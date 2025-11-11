# Miktsoan - Frontend (MGX)

**What's included**
- React + TypeScript project scaffold
- Tailwind CSS + shadcn/ui
- Framer Motion for animations
- Mock data and a small fake API layer (`src/lib/mockData.ts`, `src/lib/api.ts`)
- i18n files for English and Hebrew (`src/i18n/en.json`, `src/i18n/he.json`)
- Notes and TODOs where to wire up a real backend

## How to run
1. `npm install` (or `pnpm install`)
2. `npm run dev` (or `pnpm dev`)
3. Open `http://localhost:5173` (or the port your dev script prints)

## Mock data
All data is mocked under `src/lib`. Replace with real API endpoints by editing `src/lib/api.ts`.

## Project structure (recommended)
- `src/components/` - reusable UI components
- `src/features/` - Stories, Chatbot, Collections, Professionals implementations
- `src/lib/` - mock data, api layer, hooks
- `src/i18n/` - localization files

## TODOs
- Implement full Home layout (Stories → Chatbot → Collections → Professionals)
- Add images to `/public/avatars` and `/public/stories`
- Add RTL support tests and adjust Tailwind config for `dir="rtl"`
- Add E2E tests (optional)

### מה נוספה בקובץ ZIP הזה
- עמוד בית מלא ב-RTL עם Stories, Chatbot, Collections ו-Professionals
- mock data של 30 מקצוענים
- תמונות דמו ב-/public/avatars ו-/public/stories
- components עם Framer Motion
