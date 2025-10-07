# 🌟 Portfolio Website

> A modern, responsive portfolio website showcasing full-stack development skills. Built with both vanilla HTML/CSS/JS and React components for maximum flexibility and performance.

![Portfolio Website](https://img.shields.io/badge/Portfolio-Website-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge)

## ✨ Features

- **🎨 Modern Design** - Clean, professional UI with smooth animations
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast Performance** - Lightweight and optimized for speed
- **🎭 Smooth Animations** - Powered by Framer Motion and CSS transitions
- **📧 Contact Form** - Functional contact form with validation
- **🌐 Cross-Browser** - Compatible with all modern browsers
- **♿ Accessible** - WCAG compliant and screen reader friendly

## 🛠️ Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- React 18.2.0
- Framer Motion 10.16.4
- Font Awesome Icons

**Tools:**
- Node.js & npm
- React Scripts
- VS Code

## 📁 Project Structure

```
Portfolio-Website/
├── 📦 package.json            # Dependencies and scripts
├── 📁 public/
│   ├── index.html             # React app entry point
│   ├── profile.jpg            # Profile image
│   └── 📁 images/             # Project screenshots and assets
└── 📁 src/                    # React components
    ├── App.js                 # Main React app
    ├── index.js               # React entry point
    └── 📁 components/         # Reusable components
        ├── Header.js          # Navigation component
        ├── Hero.js            # Landing section
        ├── About.js           # About section
        ├── Education.js       # Education background
        ├── Skills.js          # Technical skills
        ├── Projects.js        # Project showcase
        ├── Achievements.js    # Awards and achievements
        ├── Contact.js         # Contact form
        └── Footer.js          # Footer component
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sonamnimje/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Visit [http://localhost:3000](http://localhost:3000)
   - For vanilla HTML version, open `index.html` directly

### Build for Production

```bash
npm run build
```

## 📱 Sections Overview

| Section | Description | Features |
|---------|-------------|----------|
| **🏠 Hero** | Landing section with introduction | Animated text, call-to-action buttons |
| **👤 About** | Personal background and statistics | Achievement counters, personal story |
| **🎓 Education** | Educational background | Timeline format, institution details |
| **💻 Skills** | Technical skills and proficiencies | Categorized skill sets, visual indicators |
| **🚀 Projects** | Featured project showcase | Live demos, GitHub links, tech stacks |
| **🏆 Achievements** | Awards and recognitions | Achievement cards, certificates |
| **📧 Contact** | Contact form and information | Working form, social media links |

## 🎨 Customization

### Personal Information
Update the following files with your information:

**For HTML version:**
```html
<!-- index.html -->
<h1>Hi, I'm <span class="highlight">Your Name</span></h1>
<p>Your professional description...</p>
```

**For React version:**
```javascript
// src/components/Hero.js
const heroData = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description..."
};
```

### Adding Projects
```javascript
// src/components/Projects.js or update index.html
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/yourusername/project"
  }
  // Add more projects...
];
```

### Styling
```css
/* styles.css - Update color scheme */
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run eject` | Eject from Create React App |

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/Portfolio-Website",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

npm run deploy
```

## 🔧 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile | Latest | ✅ Full |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/sonamnimje/Portfolio-Website/issues)
- **Email**: Replace with your email in the contact section
- **LinkedIn**: Add your LinkedIn profile link

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ for the developer community

</div>