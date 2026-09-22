from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Launchpad API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/hello")
def hello() -> dict[str, str]:
    return {"message": "Your Python API is ready for the next idea."}


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
