from fastapi import FastAPI,BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from db import connect_to_mongodb, convert_to_json
import pymongo
import json
from pydantic import BaseModel
from typing import List
from fastapi.responses import JSONResponse

class Event(BaseModel):
    name: str
    date: List[str]
    host: List[str]
    activitytype: List[str]
    hour: str
    image: str
    detail :str
    campus :str

class CustomJSONEncoder(json.JSONEncoder):
    def default(self, o):
        return jsonable_encoder(o)

def gethour(number) :
    # print(number)
    client, database = connect_to_mongodb()
    collection_name = "fastapi"
    collection = database[collection_name]
    result = collection.find({"id":number})
    # print(result)
    data = []
    for doc in result :
        data.append(doc)
    # print(data[0])
    result_json = [convert_to_json(data[0])]
    client.close()
    return result_json

def getcalendar() :
    client, database = connect_to_mongodb()
    collection_name = "calendar"
    collection = database[collection_name]
    result = collection.find()
    # print(result)
    data = []
    for doc in result :
        data.append(doc)
    # print(data[0])
    result_json = [convert_to_json(d) for d in data]
    client.close()
    return result_json

def postevent(event:Event):
    client, database = connect_to_mongodb()
    collection_name = "calendar"
    collection = database[collection_name]
    event_dict = event.dict()
    result = collection.insert_one(event_dict)
    return "success"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/transcript/{number}")
async def root(number):
	return gethour(number)

@app.get("/calendar/")
async def calendar():
    return getcalendar()

@app.post("/addevent/")
async def addevent(event: Event, background_tasks: BackgroundTasks):
    background_tasks.add_task(postevent, event)
    return JSONResponse(content=event.dict(), status_code=201)