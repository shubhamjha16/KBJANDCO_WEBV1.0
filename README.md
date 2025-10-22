# KBJ & CO Law Firm Website

A modern, full-stack website for KBJ & CO Law Firm built with React, TypeScript, Node.js, Express, and PostgreSQL.

## Project Structure

```
my-website/
├── frontend/          # React + TypeScript frontend
│   ├── src/          # React components and source code
│   ├── public/       # Static assets (images, PDFs, HTML pages)
│   ├── package.json  # Frontend dependencies
│   └── webpack.config.cjs  # Webpack configuration
│
├── backend/          # Node.js + Express + TypeScript backend
│   ├── server/       # Express server and API routes
│   ├── database/     # PostgreSQL schema
│   ├── package.json  # Backend dependencies
│   └── .env          # Environment variables
│
└── README.md         # This file
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Hero Slider**: Automatic slideshow showcasing key services
- **Practice Areas**: Detailed sections for different legal practices
- **Team Section**: Professional profiles of legal practitioners
- **Contact Form**: Easy way for clients to get in touch
- **Floating Action Buttons**: Quick access to WhatsApp and phone contact
- **Smooth Scrolling**: Enhanced navigation experience

## Project Structure

```
my-website/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── index.ts           # Application entry point
│   ├── components/        # All UI components
│   │   ├── Header.ts
│   │   ├── Hero.ts
│   │   ├── About.ts
│   │   ├── Team.ts
│   │   ├── PracticeAreas.ts
│   │   ├── Judgements.ts
│   │   ├── Clients.ts
│   │   ├── Contact.ts
│   │   ├── Footer.ts
│   │   └── index.ts
│   ├── styles/
│   │   └── main.css       # All styles
│   └── types/
│       └── index.ts       # TypeScript type definitions
├── package.json
├── tsconfig.json
└── README.md
```

## Prerequisites

Before running this project, make sure you have:

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **npm** (comes with Node.js)

## Setup Instructions

1. **Install Node.js** from https://nodejs.org/ if not already installed

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Run the project:**
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Development

### Watch Mode

To automatically rebuild when you make changes:
```bash
npm run watch
```

In another terminal, run:
```bash
npm start
```

## Customization Guide

### Update Company Information

1. **Header Contact**: Edit `src/components/Header.ts` - Update phone and email
2. **Hero Slides**: Edit `src/components/Hero.ts` - Modify the slides array
3. **About Section**: Edit `src/components/About.ts` - Update firm description
4. **Team Members**: Edit `src/components/Team.ts` - Add/modify team member information
5. **Practice Areas**: Edit `src/components/PracticeAreas.ts` - Update legal practice descriptions
6. **Contact Details**: Edit `src/components/Contact.ts` - Update office addresses and contact info
7. **Footer**: Edit `src/components/Footer.ts` - Update links and social media

### Styling

All styles are in `src/styles/main.css`. Key customization areas:

- **Colors**: Search for color codes (e.g., `#e74c3c`, `#667eea`) and replace
- **Fonts**: Modify the `font-family` in the `body` selector
- **Spacing**: Adjust padding and margins in section classes

## Technologies Used

- **TypeScript**: Type-safe JavaScript
- **CSS3**: Modern styling with animations
- **HTML5**: Semantic markup
- **lite-server**: Development server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is licensed under the MIT License.

---

**KBJ & CO** - Legal Excellence & Professional Service