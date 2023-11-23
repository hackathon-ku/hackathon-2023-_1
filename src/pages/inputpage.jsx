import React,{useEffect,useState} from 'react';
import Filling from '../components/filling';
// import {ans} from '../components/filling';
function inputpage() {
	const [host, setHost] = useState(['Select...']);
    const [name,setName] = useState("");
    const [startdate,setStartdate] = useState("");
    const [enddate,setEnddate] = useState("");
    const [activity, setActivity] = useState(['Select...']);
    const [hour,setHour] = useState();
    const [link,setLink] = useState();
    const activitytypelist = ["กิจกรรมมหาวิทยาลัย","กิจกรรมเพื่อสังคม","กิจกรรมเสริมสร้างสมรรถภาพ"];
    const postevent = async(e) => {
        e.preventDefault();
        const requestData = {
            name: name,
            dates: [startdate, enddate], // Adjust if both dates are needed
            hosts: host,
            activitytype: activity,
            hour: hour,
            image: "",
            detail:link,
          };
        const response = await fetch('http://127.0.0.1:8000/addevent',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(requestData)
        })
        const responseData = await response.json();
        console.log(responseData);
    }
    return (
        

        <div>
            <p>ชื่อกิจกรรม</p>
            <input type="text"  className='border' value={name} onChange={(e) => {setName(e.target.value)}}/>
            <p>วันที่เริ่ม</p>
            <input type='date' className='border' value={startdate} onChange={(e) => {setStartdate(e.target.value)}}/>
            <p>วันที่สิ้นสุด</p>
            <input type='date' className='border' value={enddate} onChange={(e) => {setEnddate(e.target.value)}}/>
            <p>ผู้จัด</p>
            <Filling className = "border" color="bg-green-300" list = {["Sci","Eng"]} ans={host} setAns={setHost}/>
            <p>ประเภทกิจกรรม</p>
            <Filling className = "border" color="bg-green-300" list = {activitytypelist} ans={activity} setAns={setActivity}/>
            <p>ชั่วโมงกิจกรรม</p>
            <input type="number" className='border' value={hour} onChange={(e) => {setHour(e.target.value)}}/>
            <p>ลิ้งค์กิจกรรม</p>
            <input type="text" className='border w-[400px]' value={link} onChange={(e) => {setLink(e.target.value)}} />
            <br />
            <button type="submit" onClick = {postevent}className='border mt-[50px]'>submit</button>
        </div>
    );
}

export default inputpage;