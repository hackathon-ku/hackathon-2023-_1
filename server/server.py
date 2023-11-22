from fastapi import FastAPI
from bs4 import BeautifulSoup
from fastapi.middleware.cors import CORSMiddleware
import requests
import json

def gethour(number) :
	url = f"http://nisit-ku.ku.ac.th/WebForm_report_std_B5.aspx?stdid={number}&link=1&ku=1"
	print(url)
	response = requests.get(url)
	soup = BeautifulSoup(response.content, 'html.parser', from_encoding='utf-8')

	name = soup.find(class_ = "header_fname_lname",id="LabelNAME").text
	number = soup.find(id="LabelSTD_IDNO").text
	faculty = soup.find(id="LabelSTD_FACULTY").text
	activity_1 = soup.find(id="Label1_SCORE_SUM").text
	activity_2 = soup.find(id="Label2_SCORE_SUM").text
	activity_3 = soup.find(id="Label3_SCORE_SUM").text
	# activity_4 = soup.find(id="Label4_SCORE_SUM").text
	print(name)
	print(number)
	print(faculty)
	print(activity_1)
	print(activity_2)
	print(activity_3)
	data = {"name" : name,"number":number,"faculty":faculty,"activity1":activity_1,"activity2":activity_2,"activity3":activity_3}
	print(data)
	return data



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