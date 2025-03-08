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

- Color Palette: Primary colors (#222222, #045757, #044343) with accent (#E4E4E4)
- Typography: Inter font (clean, sans-serif)
- Responsive layout: Mobile-first approach with adaptive designs for larger screens
- Interactive elements: Subtle animations and hover effects

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
```
git clone https://github.com/your-username/thegigspace-landing.git
cd thegigspace-landing
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
│   │   ├── ProductBrief.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ScreenshotGallery.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.css
│   └── tailwind.config.js
└── DesignConfigs.md
```

## Customization

To customize this landing page for your needs:

1. Replace placeholder content in component files
2. Add actual app screenshots to the `/public/assets/images/` directory
3. Update the color scheme in `tailwind.config.js` to match your brand
4. Modify the navigation links and CTA buttons as needed

## License

[MIT License](LICENSE)
