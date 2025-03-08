# TheGIGSpace Landing Page

This project is a modern, responsive landing page for TheGIGSpace - an innovative app that connects local gig workers with clients in real time.

## Project Overview

TheGIGSpace landing page is designed to be mobile-first, with an emphasis on creating a premium brand aesthetic, intuitive navigation, and driving app downloads. The landing page features:

- Responsive design that works seamlessly on mobile and desktop
- Clear explanation of the app's value proposition
- Detailed "How It Works" section for both clients and gig workers
- App screenshot gallery to showcase the interface
- Call-to-action section for app downloads

## Technology Stack

- **React**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Build tool for fast development and optimized production builds

## Design Specifications

The design follows the specifications outlined in `DesignConfigs.md`, which includes:

- Color Palette: Primary black background with teal accent color (#4ECCA3)
- Typography: Modern sans-serif fonts with appropriate hierarchy
- Responsive layout: Mobile-first approach with adaptive designs for larger screens
- Interactive elements: Subtle animations and hover effects

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
```
git clone https://github.com/TheGiGSpace/LandingPage.git
cd LandingPage
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

4. Build for production
```
npm run build
```

## Project Structure

```
TheGIGSpace-Landing/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── AnimatedLogo.jsx
│   │   ├── ProductBrief.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ScreenshotGallery.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── lib/utils.js
└── DesignConfigs.md
```

## License

[MIT License](LICENSE)
