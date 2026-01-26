# Portfolio Website

A modern, responsive portfolio page to highlight my skillset and projects. Deployed using GitHub pages and GitHub Actions.

🌐 **Live Site**: [www.simoncarlsson.se](https://www.simoncarlsson.se)

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Font Awesome, React Icons
- **Containerization**: Docker, Docker Compose
- **GitHub Pages**: Deployment of application
- **GitHub Actions**: CI/CD, automatically updates deployed codebase

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Build and start
docker compose up -d --build

# Stop
docker compose down
```

Access at [http://localhost:8080](http://localhost:8080)

### Using Docker directly

```bash
# Build
docker build -t portfolio-app .

# Run
docker run -d -p 8080:80 --name portfolio portfolio-app
```