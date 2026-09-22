# Launchpad

A basic full-stack starter with an Angular frontend and a Python FastAPI backend.

## Structure

- `frontend/` Angular 21 standalone application
- `backend/` FastAPI application

## Run the backend

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000
```

The API docs are available at http://localhost:8000/docs.

## Run the frontend

Open a second terminal:

```powershell
cd frontend
npm start
```

Open http://localhost:4200. The status panel should show `API connected` when both servers are running.

## Run with Docker

From the repository root:

```powershell
docker compose up --build
```

Open http://localhost:4200 for the frontend. The API is available at http://localhost:8000 and its docs are at http://localhost:8000/docs.

Stop the containers with `Ctrl+C`, or run `docker compose down` from another terminal.

## Ideas to build next

1. Portfolio builder: add projects, skills, and resume versions with a database.
2. Team notes: add authentication, notes, assignments, and due dates.
3. Job tracker: add applications, interview stages, contacts, and reminders.

A sensible next backend step is to add SQLite with SQLModel, then create one feature end to end before adding authentication.

