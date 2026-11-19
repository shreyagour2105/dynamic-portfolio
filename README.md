# Dynamic Portfolio

A full-stack portfolio with a responsive public site and authenticated content dashboard. Portfolio content is served from an Express REST API and persisted to a JSON file.

## Features

- Dynamic profile, projects, skills, and achievements
- Responsive editorial portfolio with loading, empty, and error states
- JWT-protected admin dashboard with complete content CRUD
- Profile and password management
- Input validation, consistent JSON errors, and atomic file writes
- Node test suite covering public access, authentication, CRUD, validation, and persistence
- Single-service production deployment: Express serves the Vite build

The included people, projects, and achievements are clearly labeled demo content and should be replaced in the dashboard.

## Local setup

Requirements: Node.js 20 or newer and npm.

```bash
cp backend/.env.example backend/.env
npm --prefix backend install
npm --prefix frontend install
```

Run both processes in separate terminals:

```bash
npm --prefix backend run dev
npm --prefix frontend run dev
```

- Portfolio: http://localhost:5173
- Admin: http://localhost:5173/admin
- API: http://localhost:5000/api
- Health check: http://localhost:5000/api/health

Default local sign-in (change immediately outside local development):

- Email: `admin@portfolio.dev`
- Password: `ChangeMe123!`

The default credentials are used only when no admin environment variables exist. For any shared environment, set `ADMIN_PASSWORD` before the data file is created and set a strong `JWT_SECRET`.

## Commands

```bash
npm --prefix backend test
npm --prefix backend start
npm --prefix frontend run lint
npm --prefix frontend run build
```

## API

Public routes:

- `GET /api/health`
- `GET /api/portfolio`
- `GET /api/profile`
- `GET /api/projects`, `/api/skills`, `/api/achievements`
- `POST /api/auth/login`

Authenticated routes require `Authorization: Bearer <token>`:

- `POST`, `PUT`, `DELETE` for projects, skills, and achievements
- `PUT /api/profile`
- `PUT /api/auth/password`

## Persistence

Local data is created on first backend start at `backend/data/portfolio.json`. Writes use a temporary file and atomic rename. Back up this file before large content changes. JSON storage is appropriate for a single-instance personal portfolio; use a database when adding multiple administrators, concurrent writers, audit history, or high availability.

## Production build

```bash
npm --prefix frontend run build
NODE_ENV=production JWT_SECRET='replace-me' ADMIN_PASSWORD='replace-me' npm --prefix backend start
```

The app is then available from the backend port (default `5000`). SPA routes fall back to `frontend/dist/index.html`.

## Deployment

`render.yaml` configures a single Render web service and a persistent disk for the JSON data. Before creating the service, set the secret `ADMIN_PASSWORD`; Render generates `JWT_SECRET`. The free plan and persistent-disk availability may vary, so review current Render plan requirements before deployment.

No deployment or Git remote is created by this repository.

## Current limitations

- JSON persistence supports one application instance, not horizontal scaling.
- Project visuals are generated editorial mockups; image upload is not implemented.
- JWT logout is client-side; server-side token revocation is not implemented.
- The API has no rate limiter. Add one before exposing the login route to sustained public traffic.
