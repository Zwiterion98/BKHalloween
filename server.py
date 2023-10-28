from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from utils import get_qr, update_qr, insert_qr
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://whopperparanormal.uy",
    "http://www.whopperparanormal.uy",
    "https://whopperparanormal.uy",
    "https://www.whopperparanormal.uy"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/", StaticFiles(directory="public", html=True), name="public")

@app.get("/qr")
def get_qr_route():

    try:
        qr = get_qr()

        if len(qr) == 0:
            return {"error": "no qr available"}
        qr = qr[0]
        update_qr(qr["id"])
        return {"qr": qr}
    except Exception as e:
        print(e)
        return {"error": "error"}

