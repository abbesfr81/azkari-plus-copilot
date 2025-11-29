# GEMINI.md: Azkari Plus Development Context

## 1. PROJECT OVERVIEW

Azkari Plus is a mobile-first Progressive Web App (PWA) designed to help Muslims recite their daily morning and evening prayers (dhikr). The core technical value is providing an authentic, simple, and distraction-free user experience with offline capabilities. Core functionality includes displaying authentic dhikr content, a tasbih counter for recitations, and user-specific settings and favorites.

## 2. ARCHITECTURE & TECH STACK

- **Framework:** Angular (v20+)
- **Architecture:** Single Page Application (SPA) built as a Progressive Web App (PWA) for offline functionality.
- **Backend/Data:**
  - **MVP:** Dhikr content is stored in a version-controlled JSON file bundled with the application.
  - **V1:** A headless CMS or a simple database (Firestore, Supabase) will be used, accessed via a RESTful or GraphQL API.
- **Deployment:** Static hosting provider with CDN (e.g., GitHub Pages, Vercel, Netlify, AWS S3/CloudFront).
- **Third-Party Integrations:** None for MVP.

## 3. CODING STANDARDS & PREFERENCES

### Angular Best Practices

- **Components:** Follow the single responsibility principle.
- **Signals:** Use signals for state management.
- **Templates:** Use modern template syntax.
- **Dependency Injection:** Leverage Angular's DI system.

### TypeScript Best Practices

- **Types:**
  - Use `type` for type definitions over `interface`.
  - Use `Readonly<T>` and `ReadonlyArray<T>` for immutability.
  - Avoid `any`; use `unknown` for type safety.
  - Use discriminated unions for complex optional properties/arguments.
  - Use the generic syntax for arrays: `Array<T>`.
  - Separate type imports from runtime imports: `import type { MyType } from './types';`
- **Functions:**
  - Adhere to single responsibility, statelessness, and purity.
  - For functions with multiple parameters, use a single object as an argument.
- **Variables:**
  - Prefer `const` assertions for immutable constants.
  - Avoid `enum`; use literal types instead (e.g., `type Category = 'morning' | 'evening';`).
- **Naming:**
  - Use named exports.
  - Variables and functions in `camelCase`.
  - Types and generics in `PascalCase`.
  - Booleans should be prefixed with `is`, `has`, `can`, etc. (e.g., `isSettingsVisible`).

### General

- **Testing:** All features must have corresponding unit tests.
- **Performance:**
  - First Contentful Paint (FCP): < 1.5 seconds.
  - Time to Interactive (TTI): < 3 seconds.
  - Animations must run at 60fps.
- **Accessibility:** WCAG 2.1 Level AA compliance is mandatory. This includes high-contrast colors, screen reader support, and keyboard navigation.
- **Compatibility:** Must be fully functional on the latest two versions of Chrome, Safari, Firefox, and Edge.

## 4. CORE BUSINESS RULES

- **Content:** Each dhikr must display Arabic text, translation, transliteration, and its source/reference.
- **Tasbih Counter:**
  - The counter increments on tap.
  - It displays the current count vs. the target count (e.g., `33/100`).
  - Upon completion, it automatically advances to the next dhikr.
- **User Data:** For MVP, all user data (favorites, settings) is stored locally on the device. No user registration is required.
- **Settings:** Users must be able to adjust font size and toggle the visibility of translation and transliteration.

## 5. DATA MODELS & API STRUCTURE

### Data Models

The core data structure for a dhikr item is as follows:

```typescript
interface Dhikr {
  readonly id: string;
  readonly category: 'morning' | 'evening';
  readonly arabic: string;
  readonly translation: string;
  readonly transliteration: string;
  readonly repetitions: number;
  readonly source: string;
  readonly audioUrl?: string; // Optional for V1+
}
```

User settings will be managed via a local settings object:

```typescript
interface AppSettings {
  fontSize: number; // e.g., 16, 18, 20
  showTranslation: boolean;
  showTransliteration: boolean;
}
```

### API Structure (Client-Side Routing)

- `/home`: Main screen with navigation to morning and evening Adhkar.
- `/dhikr/:category`: The main recitation view for a given category (`morning` or `evening`).
- `/favorites`: A list of all user-favorited dhikr.
- `/settings`: Page for user-configurable options.

## 6. FILE STRUCTURE & ORGANIZATION

The project follows a standard Angular CLI structure, with features organized by component.

```
src/
└── app/
    ├── components/
    │   ├── home/            # Home screen component
    │   ├── dhikr-list/      # Displays the list of Adhkar
    │   ├── dhikr-detail/    # Displays a single Dhikr with counter
    │   ├── favorites/       # Favorites list component
    │   ├── settings/        # Settings component
    │   └── tasbih-counter/  # Reusable counter component
    ├── services/
    │   ├── adhkar.ts        # Service to fetch and manage dhikr data
    │   └── settings.ts      # Service to manage user settings
    ├── interfaces/
    │   ├── adhkar.interface.ts
    │   └── settings.interface.ts
    ├── app.routes.ts
    └── app.config.ts
```

- **Testing:** Spec files (`.spec.ts`) are co-located with their corresponding component, service, or pipe.

## 7. DEVELOPMENT PRIORITIES

The current development phase is the **MVP (Months 1-3)**.

- **Core Focus:**
  - **C-01: Core Content Display:** Display morning/evening Adhkar from a local JSON file.
  - **C-02: Tasbih (Counter):** Implement the interactive counter for recitations.
  - **C-03: Simple Navigation:** Build the basic navigation between Home, Morning, and Evening sections.
- **Out of Scope for MVP:**
  - Favorites (F-01)
  - Reminders (F-02)
  - Settings (S-01)
  - Sharing (S-02)
  - Audio Recitation (A-01)

## 8. TECHNICAL CONSTRAINTS

- **Technology:** The project **must** be built using Angular.
- **Resources:** The budget is limited, so cost-effective solutions (static site hosting, local storage) are preferred for the MVP.
- **Platform:** The primary target is the mobile web, delivered as a PWA. A native-like feel is expected, but it will not be a native app initially.
- **Security:** No user accounts or server-side storage of personal data for MVP. All user-specific data must be stored on the client.
