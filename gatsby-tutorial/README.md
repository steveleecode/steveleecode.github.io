# Steve Lee's Portfolio Website

A modern, responsive portfolio website built with Gatsby and TypeScript, showcasing my projects and skills as a student developer.

## 🌟 Key Features

### 1. Smart Project Showcase
- **Intelligent Project Selection Algorithm**
  - Automatically ranks and selects the best projects to showcase
  - Considers multiple factors:
    - Technical complexity (35% weight)
    - Project impact and popularity (30% weight)
    - Maintenance and recency (20% weight)
    - Category diversity (15% weight)
  - Ensures a balanced representation of different project types

### 2. Modern UI/UX
- **Responsive Design**
  - Fully responsive layout that works on all devices
  - Smooth animations and transitions
  - Dark mode support with automatic system preference detection
  - Interactive hover effects and micro-interactions

### 3. Performance Optimized
- **Built with Gatsby**
  - Fast page loads and navigation
  - Optimized images and assets
  - SEO-friendly structure
  - Progressive Web App capabilities

### 4. Project Categories
- **Diverse Project Types**
  - Hardware Projects (e.g., TOF Sensor)
  - AI/ML Projects (e.g., ShakespeareGPT)
  - Data Analysis (e.g., Price Tracker)
  - Web Applications (e.g., Lease Tracker)
  - Financial Tools (e.g., Interest Calculator)

### 5. Technical Stack
- **Frontend**
  - React with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Custom CSS animations

### 6. Notable Projects
1. **ShakespeareGPT**
   - AI-powered text generation
   - Natural Language Processing
   - High GitHub engagement (25 stars, 8 forks)

2. **TOF Sensor Project**
   - Hardware integration
   - Real-time data processing
   - Complex technical implementation

3. **Price Tracker**
   - Web scraping capabilities
   - Data analysis features
   - Live demo available

## 🚀 Getting Started

1. **Prerequisites**
   ```bash
   node >= 14.0.0
   npm >= 6.0.0
   ```

2. **Installation**
   ```bash
   git clone https://github.com/steveleecode/portfolio.git
   cd portfolio
   npm install
   ```

3. **Development**
   ```bash
   npm run develop
   ```

4. **Build**
   ```bash
   npm run build
   ```

## 🛠️ Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── utils/         # Utility functions
│   └── projectScorer.ts  # Project ranking algorithm
├── data/          # Static data
│   └── projects.ts       # Project information
└── styles/        # Global styles
```

## 📊 Project Scoring System

The portfolio uses a sophisticated scoring system to determine which projects to showcase:

```typescript
const totalScore = (
  technicalScore * 0.35 +    // Technical complexity
  impactScore * 0.30 +       // GitHub stars, forks, impact
  maintenanceScore * 0.20 +  // Recent updates
  diversityScore * 0.15      // Category diversity
);
```

## 🎨 Customization

1. **Projects**
   - Edit `src/data/projects.ts` to update project information
   - Adjust scoring weights in `src/utils/projectScorer.ts`

2. **Styling**
   - Modify Tailwind configuration in `tailwind.config.js`
   - Update global styles in `src/styles/`

3. **Content**
   - Edit page components in `src/pages/`
   - Update components in `src/components/`

## 📱 Contact

- **Email:** stevelee_2008@outlook.com
- **GitHub:** [steveleecode](https://github.com/steveleecode)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Gatsby team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters
