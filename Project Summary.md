# Project Summary
Miktsoan is a modern marketplace platform designed for professionals, enabling users to explore, filter, and connect with service providers across various industries. This front-end only application leverages mocked data for dynamic interactions, ensuring a seamless user experience without backend integration.

# Project Module Description
The platform features multiple functional modules:
1. **Stories Section**: Displays professional stories with an Instagram-style horizontal scroll.
2. **Chatbot Section**: Interactive chatbot design for user assistance.
3. **Collections Section**: Lists professional categories for easy navigation.
4. **Professionals Grid**: Allows filtering and sorting of professionals based on user criteria.
5. **Professional Modal**: Detailed view of individual professionals with their services and contact options.

# Directory Tree
```
shadcn-ui/
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   │   ├── ChatbotSection.tsx
│   │   ├── CollectionsSection.tsx
│   │   ├── ProfessionalModal.tsx
│   │   ├── ProfessionalsGrid.tsx
│   │   └── StoriesSection.tsx
│   ├── data/
│   │   └── mockData.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   └── Index.tsx
│   └── vite-env.d.ts
├── tailwind.config.ts
├── template_config.json
├── todo.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

# File Description Inventory
- **README.md**: Project documentation and setup instructions.
- **index.html**: Main HTML file for the application.
- **package.json**: Project dependencies and scripts.
- **src/**: Contains all source code files including components, hooks, and styles.
- **src/data/mockData.ts**: Mock data for professionals and categories.
- **src/components/**: Contains functional components for different sections of the application.
- **src/pages/Index.tsx**: Main entry point for the application's UI.

# Technology Stack
- **React.js**: Front-end library for building user interfaces.
- **TypeScript**: For type safety and improved code quality.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **shadcn/ui**: UI component library for consistent design.
- **Framer Motion**: For smooth animations and transitions.

# Usage
1. Install dependencies:
   ```bash
   cd /workspace/shadcn-ui
   pnpm install
   ```
2. Add Framer Motion:
   ```bash
   pnpm add framer-motion
   ```
3. Build the project:
   ```bash
   pnpm run build
   ```
4. Run lint checks:
   ```bash
   pnpm run lint
   ```
