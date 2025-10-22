# KBJ & CO - Frontend

React + TypeScript frontend for KBJ & CO Law Firm website.

## Structure

```
frontend/
├── src/
│   ├── components/    # React components
│   ├── styles/        # CSS stylesheets
│   ├── types/         # TypeScript type definitions
│   ├── index.tsx      # React entry point
│   └── index.ts       # Main export
├── public/
│   ├── images/        # Static images
│   │   ├── hero/      # Hero slider images
│   │   ├── news/      # News report images
│   │   ├── practice/  # Practice area images
│   │   └── team/      # Team member photos
│   ├── pdfs/          # PDF documents
│   │   ├── judgements/
│   │   └── public-info/
│   ├── index.html     # Main page
│   ├── judgements.html
│   ├── news-reports.html
│   └── public-info.html
└── webpack.config.cjs # Webpack configuration
```

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Opens at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Output in `dist/` folder

## Components

- **Header**: Navigation with dropdown menu for courts
- **Hero**: Full-screen slider with 4 images
- **About**: Company information section
- **PracticeAreas**: Legal practice areas
- **Team**: Team member cards with hover effects
- **Clients**: Client showcase
- **Judgements**: Info cards for document categories
- **Contact**: Contact form
- **Footer**: Site footer with links

## Design System

### Colors
- Primary: `#1d1d1f` (Dark)
- Text: `#86868b` (Grey)
- Accent: `#6e6e73` (Medium Grey)
- Background: `#fff` (White)

### Typography
- Font Stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`
- Weights: 300 (Light), 400 (Regular), 600 (Semi-bold)

### Effects
- Glassmorphism: `backdrop-filter: blur(20px)`
- Hover animations: `transform: translateY(-10px)`
- Smooth transitions: `all 0.3s ease`

## API Integration

The frontend connects to the backend API at `http://localhost:5000/api/`

### Endpoints Used
- `/api/judgements` - Fetch judgements
- `/api/judgements/by-court/:id` - Fetch by court
- `/api/news` - Fetch news reports
- `/api/public-info` - Fetch public information
- `/api/courts` - Fetch courts list

## Adding Content

### Images
Place images in respective folders:
- Hero images: `public/images/hero/`
- Team photos: `public/images/team/`
- News images: `public/images/news/`

See `IMAGE_GUIDE.md` for details.

### PDFs
Use the backend API to upload PDFs. See `HOW_TO_ADD_PDFS.md` for instructions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT - KBJ & CO
