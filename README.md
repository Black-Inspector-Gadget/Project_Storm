# Project Storm

A comprehensive medical-grade support platform migrated from Google Sites into a responsive, highly interactive React Single Page Application. The purpose of this tool is to empower those living with or caring for people with Epilepsy also known as recurring seizures. Features a beautifully designed custom Medical Directory with real-time search filtering.

## Live Demo

- [View the Live Platform](https://Black-Inspector-Gadget.github.io/Project_Storm/)
- [Interact with the AI Chat (NotebookLM)](https://notebooklm.google.com/notebook/c854ac82-267d-41a9-ba07-1796598deabc)

## Tech Stack & Tools

This platform was engineered for performance, accessibility, and clean design using the following modern tools:

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) - For lightning-fast Hot Module Replacement (HMR) and optimized production builds.
- **Routing**: [React Router](https://reactrouter.com/) - Implemented with `HashRouter` to ensure stable, single-page navigation on static hosting environments.
- **Styling**: Vanilla CSS - Utilizing modern design principles like CSS variables, glassmorphism, responsive grid/flex layouts, and custom typography, without relying on heavy UI frameworks.
- **Iconography**: [Lucide React](https://lucide.dev/) - Beautiful, consistent, and customizable SVG icons used for all visual indicators.
- **Deployment & Hosting**: [GitHub Pages](https://pages.github.com/) (automated production build and deployment via the `gh-pages` module).

## Features

- **Seizure First Aid & Action Plans**: Critical, easily accessible steps for providing care during medical emergencies.
- **Support Pathways**: Tailored resources for both newly diagnosed individuals and their caregivers.
- **Interactive Medical Directory**: A robust hub containing three comprehensive datasets (Seizure Types, Epilepsy Syndromes, and Symptoms).
  - Built-in **real-time search filtering** allowing users to instantly navigate and find dense medical terminology.
  - Custom pill-badges dynamically displaying data like "Age of Onset" or "Scientific Medical Terms".
  - Tabbed interface to separate complex data sets for an optimal user experience.

## Running Locally

To run this project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/Black-Inspector-Gadget/Project_Storm.git
   ```
2. Navigate into the directory:
   ```bash
   cd Project_Storm
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
