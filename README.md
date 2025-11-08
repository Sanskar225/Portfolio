# Sanskar Sinha - Portfolio
![alt text](<Screenshot 2025-11-07 221253.png>)
A modern, responsive portfolio website showcasing my skills, experience, projects, and educational background as a Full Stack Developer.

## Overview

This portfolio is built with React and features a sleek, professional design with smooth animations, parallax effects, and an intuitive user interface. It includes sections for About, Skills, Experience, Projects, Education, and Contact information.

## Features

- **Responsive Design**: Fully responsive layout optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, sophisticated design with purple gradient accents and blur effects
- **Smooth Animations**: Parallax tilt effects, smooth scrolling, and hover animations
- **Dynamic Typing Effect**: Animated text showcasing roles and skills
- **Project Showcase**: Interactive project cards with detailed modals
- **Contact Form**: Functional contact form integrated with EmailJS
- **Dark Theme**: Modern dark theme with grid background and blur blobs

## Tech Stack
![alt text](<Screenshot 2025-11-07 221253-1.png>)
### Frontend
- **React 18.3.1** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Navigation
- **React Icons** - Icon library

### Additional Libraries
- **@emailjs/browser** - Email service integration
- **react-parallax-tilt** - Parallax tilt effects
- **react-typing-effect** - Typing animation
- **react-toastify** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing


## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── company_logo/      # Company/organization logos
│   │   ├── education_logo/    # Educational institution logos
│   │   ├── tech_logo/         # Technology stack logos
│   │   ├── work_logo/         # Project screenshots
│   │   └── profile2.png       # Profile picture
│   ├── components/
│   │   ├── About/             # About section component
│   │   ├── Contact/           # Contact form component
│   │   ├── Education/         # Education timeline component
│   │   ├── Experience/        # Experience timeline component
│   │   ├── Footer/            # Footer component
│   │   ├── Navbar/            # Navigation bar component
│   │   ├── Skills/            # Skills showcase component
│   │   ├── Work/              # Projects showcase component
│   │   └── BlurBlob.jsx       # Decorative blur effect component
│   ├── App.jsx                # Main application component
│   ├── constants.js           # Data constants (skills, experience, education, projects)
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Configuration

### EmailJS Setup

To enable the contact form, configure EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the credentials in `src/components/Contact/Contact.jsx`:
   - Service ID
   - Template ID
   - Public Key

### Customization

Update the following files to customize content:

- **src/constants.js** - Update personal information, skills, experience, education, and projects
- **src/assets/** - Replace images with your own
- **index.html** - Update page title and favicon

## Sections

### About
- Introduction with animated typing effect
- Profile picture with parallax tilt effect
- CV download button

### Skills
- Frontend technologies
- Backend technologies
- Programming languages
- Development tools

### Experience
- Professional experience timeline
- Company logos and descriptions
- Skills used in each role

### Projects
- Interactive project cards
- Detailed project modals
- Technology tags
- Live demo and GitHub links

### Education
- Educational timeline
- Institution logos
- Degrees and grades

### Contact
- Functional contact form
- Email integration via EmailJS
- Toast notifications for feedback

## Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via GitHub
- **GitHub Pages**: Use `gh-pages` package for deployment

## Performance

- Optimized bundle size with Vite
- Lazy loading of images
- Smooth animations with CSS transforms
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: sanskarsinha225@example.com
- **LinkedIn**: [linkedin.com/in/sanskar-sinha-185a36326](https://www.linkedin.com/in/sanskar-sinha-185a36326)
- **GitHub**: [github.com/Sanskar225](https://github.com/Sanskar225)
- **Instagram**: [@__sanskar225](https://www.instagram.com/__sanskar225/)

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
- Email service by [EmailJS](https://www.emailjs.com/)

---

Made with dedication by Sanskar Sinha
