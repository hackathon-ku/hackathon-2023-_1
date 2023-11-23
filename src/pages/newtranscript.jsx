import React, { useState, useEffect } from 'react'
import backicon from '../picture/backicon.jpg'
import { useNavigate } from 'react-router-dom';


const Activity = ({ Title, required, activityList }) => {

	const count = Object.keys(activityList).length;
	let textColor = (count < required) ? false : true;
	const [showBox, setShowBox] = useState(false);
	const [toggleIcon, setToggleIcon] = useState("+");
	const navigate = useNavigate();

	const toggleBox = () => {
		setShowBox(!showBox);
		{ toggleIcon == '+' ? setToggleIcon('x') : setToggleIcon('+') }
	}

	const List = () => {

		const sumOfValues = Object.values(activityList).reduce((sum, value) => sum + value, 0);

		return (
			<div className='pt-2 pb-2'>
				{Object.entries(activityList).map(([key, value]) => (
					<div className='flex justify-between pl-5 pr-5'>
						<p className='w-fit'>{key}</p> <p className='w-fit'>{value} ชั่วโมง</p>
					</div>
				))}
				{textColor
					? <p className='text-center pt-3'>รวม {count} กิจกรรม {sumOfValues} ชั่วโมง</p>
					: <div className='text-center pt-3'>
			
						<p>ต้องการอีก {required - count} กิจกรรม</p>
						<button className=' text-[#ff0000] underline' onClick={() => navigate('/NisitKU/CalendarKU')}>ค้นหากิจกรรม</button>
					</div>
				}
			</div>
		)
	}

	return (
		<div className='p-2'>
			<div className={textColor ? 'bg-[#2ec28c] flex justify-between rounded-t-lg' : 'bg-[#f188a2] flex justify-between rounded-t-lg'}>
				<h4 className='pl-2 text-white'>{Title}</h4>
				<div className='flex w-fit justify-between pr-2'>
					{!textColor ? <p className="text-[#ffffff]">ไม่ผ่าน</p> : <p className="text-[#ffffff]">ผ่าน</p>}
					<button className="pl-3 text-white" onClick={toggleBox}>{toggleIcon}</button>
				</div>
			</div>
			{showBox && (
				<div className={textColor ? 'bg-[#2bb482] bg-opacity-20' : ' bg-[#f188A2] bg-opacity-20 '} >
					<List className="w-full" />
				</div>
			)}
		</div>
	)
}

const Info = ({ studentNumber, name, faculty }) => {
	return (
		<div className='grid grid-cols-2 w-fit mr-auto ml-auto mb-3'>
			<h3 className=' font'>รหัสนิสิต :</h3>		<h3>{studentNumber}</h3>
			<h3>ชื่อ นามสกุล :</h3>	<h3>{name}</h3>
			<h3>คณะ :</h3>		 <h3>{faculty}</h3>
		</div>
	)
}

const Result = ({ a, b, c }) => {
	const counta = Object.keys(a).length;
	const countb = Object.keys(b).length;
	const countc = Object.keys(c).length;
	let pass = (counta >= 3 && countb >= 4 && countc >= 1) ? true : false;
	return (
		<div className='p-2'>
			<div className={pass ? 'bg-[#2ec28c] flex justify-between rounded-t-lg' : 'bg-[#f188a2] flex justify-between rounded-t-lg'}>
				<h4 className='pl-2 text-white'>Transcript กิจกรรมนิสิต</h4>
			</div>
			<div className={pass ? 'p-2 bg-[#2bb482] bg-opacity-20 text-[#2bb482] text-center text-2xl' : 'p-2 bg-[#f188A2] bg-opacity-20 text-[#f188A2] text-center text-2xl'} >
				{pass ? <p>PASS</p> : <p>NOT PASS</p>}
			</div>
		</div>

	)
}


function newtranscript() {
	const navigate = useNavigate();
	const [studentNumber, setStudentNumber] = useState("6510503409")
	const [name, setname] = useState("")
	const [faculty, setfaculty] = useState("วิศวกรรมคอมพิวเตอร์")
	const [check, setcheck] = useState("")
	const [activityList1, setActivityList1] = useState({
		'Pround to be KU': 4,
		'โครงการปฐมนิเทศนิสิตใหม่': 4,
	})
	const [activityList2, setActivityList2] = useState({
		'Pround to be KU': 4,
		'โครงการปฐมนิเทศนิสิตใหม่': 4,
		'a': 4,
		'b': 4
	})
	const [activityList3, setActivityList3] = useState({
		'Pround to be KU': 4,
		'โครงการปฐมนิเทศนิสิตใหม่': 4
	})
	const fetchdata = async () => {
		const response = await fetch(`http://localhost:8000/transcript/${studentNumber}`);
		const data = await response.json();
		setActivityList2(data[0].activity.activity2);
		setActivityList1(data[0].activity.activity1);
		setActivityList3(data[0].activity.activity3);
		setname(data[0].name);
		setfaculty(data[0].Faculty);
		// console.log(data[0].name)
	}
	useEffect(() => {
		fetchdata();
	}, [])

	return (
		<div className="bg-[#f8f8f8] flex font-kanit sm:flex-col">
			<div className="h-screen p-5 flex-col bg-[#f8f8f8] w-1/2 sm:w-full sm:h-full">
				<button onClick={() => navigate('/NisitKU')}>
					<img
						src={backicon}
						className="rounded-full h-8 w-8 mr-2"
					/>
				</button>
                <div className='flex flex-col h-full justify-center sm:justify-normal'>
                <div>
				<h1 className='bg-[#fad34f] text-black text-center  text-2xl p-5 rounded '>Activity Transcript</h1>
				<br></br>
				<Info studentNumber={studentNumber} name={name} faculty={faculty} />
				<Result a={activityList1} b={activityList2} c={activityList3} />
                </div>
                </div>
			</div>
			<div className="p-5 min-h-screen m-auto flex flex-col justify-center w-1/2 sm:w-full sm:justify-normal">
				<Activity Title='กิจกรรมมหาวิทยาลัย' required={3} activityList={activityList1} />
				<Activity Title='กิจกรรมเพื่อเสริมสร้างสมรรถนะ' required={4} activityList={activityList2} />
				<Activity Title='กิจกรรมเพื่อสังคม' required={1} activityList={activityList3} />
			</div>
		</div>

	)
}

export default newtranscript