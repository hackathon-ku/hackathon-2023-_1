from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import connect_to_mongodb, convert_to_json
import pymongo
import json


class CustomJSONEncoder(json.JSONEncoder):
    def default(self, o):
        return jsonable_encoder(o)

def gethour(number) :
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



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/{number}")
async def root(number):
	return gethour(number)