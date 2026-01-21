# Portfolio Website

A modern, responsive portfolio page to highlight my skillset and projects.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Font Awesome, React Icons
- **Containerization**: Docker, Docker Compose

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

## 👤 Author

**Simon Carlsson**

- LinkedIn: [simonalexcarlsson](https://www.linkedin.com/in/simonalexcarlsson/)
- GitHub: [@SiCarlsson](https://github.com/SiCarlsson)
