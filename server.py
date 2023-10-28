from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from utils import get_qr, update_qr, insert_qr
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from datetime import datetime

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

app.mount("/public", StaticFiles(directory="public", html=True), name="public")

@app.get("/")
def get_html():
    try:
        with open("public/index.html", "rb") as file:
            html_content = file.read()
        return HTMLResponse(content=html_content)
    except Exception as e:
        print(e)
        return {"error": "error"}
    

@app.get("/qr")
def get_qr_route():

    try:
        current_date = datetime.now()
        target_date = datetime(current_date.year, 10, 31)

        if current_date < target_date:
            return {"error": "error"}

        qr = get_qr()

        if len(qr) == 0:
            return {"error": "no qr available"}
        qr = qr[0]
        update_qr(qr["id"])
        return {"qr": qr}
    except Exception as e:
        print(e)
        return {"error": "error"}

