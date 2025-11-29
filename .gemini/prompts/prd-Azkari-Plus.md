# Product Requirements Document: Azkari Plus

## 1. EXECUTIVE SUMMARY

This document outlines the product requirements for **Azkari Plus**, a simple, elegant, and mobile-first SaaS web application designed to help Muslims recite their daily morning and evening prayers (dhikr and duas). The application will provide authentic content in a clean, distraction-free interface, encouraging consistency in users' spiritual practices. The key business impact is to drive user engagement and build a loyal user base through a high-quality, focused spiritual tool. Success will be measured by Monthly Active Users (MAU), user retention rates, and high ratings for content quality. The initial MVP is planned for a 3-month timeline, with a full-featured version 1.0 release within 4-6 months.

## 2. PROBLEM STATEMENT

Many Muslims, particularly young professionals, students, and new converts, struggle to maintain a consistent routine of daily dhikr due to busy schedules and a lack of accessible, user-friendly tools. While the desire for spiritual connection is strong, they often lack a practical way to integrate these important recitations into their daily lives.

- **Who:** This problem is experienced daily by a wide range of Muslims, from those learning the prayers for the first time to those who are already familiar with them but need help with consistency and tracking.
- **Impact:** Not solving this problem leads to a missed opportunity for spiritual growth and tranquility. Users may feel disconnected from their faith and frustrated by the lack of tools that fit their modern lifestyle.
- **Current Alternatives:**
  - **Physical Books (e.g., Hisn al-Muslim):** Authentic but not easily portable, lack interactive features like counters, and can be difficult to navigate quickly.
  - **Generic Note Apps/PDFs:** Require manual setup, offer a poor user experience, and lack features like audio or progress tracking.
  - **Existing Mobile Apps:** Often cluttered with ads, feature-bloated, have a distracting user interface, or contain content from unverified sources, which is a major concern for users seeking authenticity.

## 3. GOALS & SUCCESS METRICS

### Primary Objective

To become the leading mobile web application for daily Adhkar by providing a beautiful, simple, and authentic user experience that users love and trust. Success is defined as creating a sticky product that becomes an indispensable part of our users' daily spiritual routine.

### Key Performance Indicators (KPIs)

| Metric                         | Target (6 Months Post-Launch)           |
| :----------------------------- | :-------------------------------------- |
| **Monthly Active Users (MAU)** | 10,000                                  |
| **30-Day User Retention**      | > 40%                                   |
| **60-Day User Retention**      | > 30%                                   |
| **Feature Usage (Tasbih)**     | > 50% of MAU use the counter weekly     |
| **Feature Usage (Reminders)**  | > 30% of MAU set at least one reminder  |
| **Content Quality Feedback**   | > 90% positive rating from user surveys |

### Secondary Goals

- Achieve an average user session duration of 5-10 minutes.
- Encourage organic growth through word-of-mouth, measured by a k-factor > 0.2.
- Maintain a high level of technical performance and app stability.

### Measurement Plan

- **30 Days:** Track initial adoption, MAU, and session duration. Collect qualitative feedback on the core user experience and content.
- **60 Days:** Analyze the first retention cohort (30-day retention) and feature adoption rates (Tasbih, Favorites).
- **90 Days:** Measure 60-day retention and begin to see patterns in long-term engagement. Assess the impact of any v1.1 updates.

## 4. USER PERSONAS & USE CASES

### Primary User Persona

- **Fatima, the Busy Professional (28):** A marketing manager who grew up practicing her faith. She knows most of the daily Adhkar but struggles to find time and focus amidst her demanding schedule.
  - **Needs:** A quick, easy-to-use tool to guide her through the morning and evening dhikr, a counter (tasbih) to track recitations, and gentle reminders to stay consistent.
  - **Frustrations:** Other apps are too complicated or distracting. She worries about the authenticity of the content she finds online.

### Secondary User Personas

- **Adam, the New Convert (22):** A university student who recently embraced Islam. He is eager to learn but feels overwhelmed.
  - **Needs:** A simple guide with clear Arabic text, transliteration, and translation. He values authenticity and wants to learn the correct pronunciations.
- **Aisha, the Mother (35):** A mother of two young children. She wants to instill the habit of dhikr in her family.
  - **Needs:** An app that is easy for her and her children to use. She values the ability to share specific duas with friends and family.

### Core User Journeys

1.  **Daily Recitation:** Fatima receives a reminder after sunrise. She opens the app, selects "Morning Adhkar," and recites each dhikr, using the integrated tasbih counter for repeated phrases. The app guides her seamlessly from one dhikr to the next.
2.  **Learning a New Dhikr:** Adam opens the app and explores the list of evening Adhkar. He finds a dhikr he doesn't know, reads the translation to understand its meaning, and listens to the audio to learn the pronunciation. He marks it as a "favorite" to practice later.
3.  **Sharing a Dua:** Aisha finds a beautiful dua for protection within the app. She uses the share feature to send it to her sister via WhatsApp, including the Arabic text and translation.

## 5. FUNCTIONAL REQUIREMENTS

| ID       | Feature                  | Priority | Description & Acceptance Criteria                                                                                                                                                                                                                                                                                                        |
| :------- | :----------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **C-01** | **Core Content Display** | P0       | **Must-have.** The app must display morning and evening Adhkar. <br> **AC:** 1. Each dhikr must show Arabic text, translation, and transliteration. 2. The source/reference for each dhikr must be clearly cited. 3. Content must be easily readable and well-formatted.                                                                 |
| **C-02** | **Tasbih (Counter)**     | P0       | **Must-have.** A counter for dhikr that require multiple recitations. <br> **AC:** 1. A tappable area increments the counter. 2. The counter displays the current count vs. the target count (e.g., 33/100). 3. The app provides haptic/visual feedback on tap. 4. The counter automatically advances to the next dhikr upon completion. |
| **C-03** | **Simple Navigation**    | P0       | **Must-have.** Intuitive navigation between core sections. <br> **AC:** 1. Users can easily switch between Morning and Evening Adhkar lists. 2. A clear navigation structure (e.g., bottom tabs) provides access to Home, Favorites, and Settings.                                                                                       |
| **F-01** | **Favorites**            | P1       | **Important.** Users can save specific dhikr for quick access. <br> **AC:** 1. A user can tap an icon to add/remove a dhikr from their favorites list. 2. A dedicated "Favorites" section displays all saved dhikr.                                                                                                                      |
| **F-02** | **Reminders**            | P1       | **Important.** Users can set notifications for their practice. <br> **AC:** 1. Users can enable/disable daily reminders for morning and evening Adhkar. 2. Reminder times should be configurable (e.g., 30 mins after sunrise).                                                                                                          |
| **S-01** | **Settings**             | P1       | **Important.** Users can customize their experience. <br> **AC:** 1. Users can adjust the font size. 2. Users can choose to show/hide translation and/or transliteration.                                                                                                                                                                |
| **S-02** | **Sharing**              | P2       | **Nice-to-have.** Users can share content with others. <br> **AC:** 1. A share button on each dhikr card. 2. Sharing generates a clean text output (Arabic + Translation) to the native share sheet.                                                                                                                                     |
| **A-01** | **Audio Recitation**     | P2       | **Nice-to-have.** Audio playback for each dhikr. <br> **AC:** 1. A play button streams the audio for the selected dhikr. 2. Audio is clear and professionally recorded.                                                                                                                                                                  |

## 6. NON-FUNCTIONAL REQUIREMENTS

- **Performance:**
  - **First Contentful Paint (FCP):** < 1.5 seconds.
  - **Time to Interactive (TTI):** < 3 seconds on a standard 4G connection.
  - **Animations/Transitions:** Must run at a smooth 60fps.
- **Security & Privacy:**
  - The app will not require user registration for MVP. All user data (like favorites) will be stored locally on the device.
  - All dhikr content must be vetted for authenticity from reliable sources (e.g., Quran, authentic Sunnah).
- **Scalability:**
  - The backend (for content delivery) must be architected to handle at least 100,000 MAU.
  - Use a Content Delivery Network (CDN) to serve all static assets (content, audio).
- **Accessibility:**
  - Must be compliant with **WCAG 2.1 Level AA**.
  - This includes high-contrast color schemes, support for screen readers (VoiceOver, TalkBack), and fully keyboard-navigable interface.
- **Compatibility:**
  - The Progressive Web App (PWA) must be fully functional on the latest two versions of Chrome, Safari, Firefox, and Edge.
  - The UI must be fully responsive for mobile, tablet, and desktop screen sizes.

## 7. USER EXPERIENCE (UX) SPECIFICATIONS

- **Information Architecture:**
  - `/home`: Main screen with cards for "Morning Adhkar" and "Evening Adhkar".
  - `/dhikr/{category}`: The main recitation view, presenting a list of dhikr for the selected category.
  - `/favorites`: A list of all user-favorited dhikr.
  - `/settings`: A page for all user-configurable options.
- **UI/UX:**
  - **Design:** A minimalist, clean, and serene design aesthetic. The focus must be entirely on the content. No clutter, no distractions.
  - **Color Palette:** Use a calming color palette (e.g., soft blues, greens, warm grays).
  - **Typography:** Prioritize readability with a clear, legible Arabic font (e.g., Noto Naskh Arabic) and a complementary Latin font (e.g., Inter, Lato).
- **Mobile Responsiveness:**
  - The experience must be mobile-first. On mobile devices, it should feel like a native application (leveraging PWA capabilities).
- **Error States:**
  - **Offline:** A clear, non-intrusive banner indicating the user is offline. The app should remain functional thanks to service workers.
  - **Content Load Failure:** A simple, user-friendly message with a "Retry" button if the dhikr content fails to load.

## 8. TECHNICAL SPECIFICATIONS

- **Frontend:**
  - **Framework:** Angular (v20+).
  - **Architecture:** Single Page Application (SPA) architected as a Progressive Web App (PWA) to enable offline access and "Add to Home Screen" functionality.
- **Backend/Data:**
  - For MVP, dhikr content can be stored in a version-controlled JSON file bundled with the application.
  - For V1, a headless CMS or a simple database (e.g., Firestore, Supabase) accessed via a RESTful or GraphQL API will be used to allow for easier content updates.
- **Data Model:**
  ```json
  {
    "dhikr": [
      {
        "id": "ma01",
        "category": "morning",
        "arabic": "...",
        "translation": "...",
        "transliteration": "...",
        "repetitions": 100,
        "source": "Sahih al-Bukhari 6306",
        "audioUrl": "..."
      }
    ]
  }
  ```
- **Deployment:**
  - The frontend will be deployed to a modern static hosting provider with CDN capabilities (e.g.,GitHub Pages, Vercel, Netlify, or AWS S3/CloudFront).

## 9. CONSTRAINTS & ASSUMPTIONS

- **Constraints:**
  - The project must be built using Angular.
  - The total timeline for V1 is 4-6 months.
  - The budget is limited, favoring cost-effective cloud services and open-source technologies.
- **Assumptions:**
  - We can procure a complete and verified set of morning and evening Adhkar, along with their translations and sources, before development begins.
  - A skilled Angular developer and a UX/UI designer will be available for the duration of the project.
  - Target users are willing to use a PWA and the "Add to Home Screen" feature for a native-like experience, mitigating the need for separate native app builds initially.

## 10. TIMELINE & MILESTONES

- **Phase 1: MVP (Months 1-3)**
  - **Scope:** C-01, C-02, C-03. A functional, deployed PWA with core morning/evening dhikr and a tasbih counter.
  - **Milestone 1 (Month 1):** Finalized UI/UX designs, technical architecture, and complete, verified content in JSON format.
  - **Milestone 2 (Month 3):** MVP deployed to production for a soft launch.
- **Phase 2: V1 Launch (Months 4-6)**
  - **Scope:** F-01, F-02, S-01. Integration of favorites, reminders, and settings.
  - **Milestone 3 (Month 5):** All V1 features implemented and undergoing QA.
  - **Milestone 4 (Month 6):** V1 publicly launched and marketed.

## 11. RISKS & MITIGATION

| Risk                       | Category  | Impact | Mitigation Strategy                                                                                                                      |
| :------------------------- | :-------- | :----- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Content Authenticity**   | Technical | High   | Partner with a trusted Islamic scholar or organization for content verification. Only use widely accepted sources.                       |
| **Low User Adoption**      | Business  | High   | Conduct user testing with prototypes before writing code. Focus marketing on the app's core values: simplicity and authenticity.         |
| **PWA Experience Gap**     | Technical | Medium | Invest heavily in performance optimization, service workers for robust offline mode, and high-quality animations to mimic a native feel. |
| **Developer Availability** | Resource  | Medium | Maintain detailed documentation and a clean, well-structured codebase to facilitate easy handover if necessary.                          |

## 12. SUCCESS CRITERIA & LAUNCH PLAN

- **Definition of Done:**
  - **MVP:** All P0 features are implemented, tested across all target browsers, and meet performance/accessibility standards. The app is stable and provides immediate value.
  - **V1:** All P0 and P1 features are complete and deployed. The app fulfills all requirements outlined in this PRD for the V1 launch.
- **Launch Plan:**
  1.  **Internal Alpha:** Team-wide testing.
  2.  **Closed Beta (Soft Launch):** Invite a small group of ~50 users from our target personas to use the MVP and provide feedback.
  3.  **Public Launch (V1):** Announce the public release on social media, in online Muslim communities, and through targeted ads.
- **Post-Launch Monitoring:**
  - Continuously monitor analytics for KPIs and user behavior.
  - Actively collect user feedback via a simple, non-intrusive in-app link.
  - Plan the V1.1 roadmap based on post-launch data and user requests (e.g., prioritizing P2 features like audio or sharing).
