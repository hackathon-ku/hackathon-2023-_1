import React from 'react'
import { useState, useEffect } from 'react'




const Activity = ({ activityTitle, activityCount }) => {
	return (
		<div className='w-50 p-[10px]'>
			<div className='flex justify-between'>
				<h2>{activityTitle}</h2>
				<h2>{activityCount} ชั่วโมง</h2>
			</div>
		</div>
	)
}

function transcript() {
	const [obj, setobj] = useState({ name: "", activityCount1: "0", activityCount2: "0", activityCount3: "0", faculty: "" })
	const [studentNumber, setStudentNumber] = useState("");
	const [loading, setLoading] = useState(false);
	const handlestudentNumberchange = (e) => {
		setStudentNumber(e.target.value)
	}
	useEffect(() => {
		console.log(studentNumber)
		if (studentNumber.length == 10) {
			getHour();
		}
	}, [studentNumber])
	const getHour = async () => {
		setLoading(true)
		const response = await fetch(`http://localhost:8000/${studentNumber}`)
		console.log(response)
		const newobj = await response.json()
		console.log(newobj)
		setobj({ name: newobj.name, activityCount1: newobj.activity1, activityCount2: newobj.activity2, activityCount3: newobj.activity3, faculty: newobj.faculty })
		setLoading(false)
	}


	return (
		<div>
			<div className=' w-[500px] border p-[20px]'>
				<h1 className='text-lg p-[]] text-center'>Activity Transcript</h1>
				<div className='flex justify-center m-5'>
					<p>รหัสนิสิต : </p>
					<input type="text" className='w-2/3 ml-4 pl-1' value={studentNumber} onChange={handlestudentNumberchange} />
				</div>
				<h1 className='w-full p-[10px]'>ชื่อ-นามสกุล  : {obj.name}</h1>
				<h1 className='w-full p-[10px]'>คณะ : {obj.faculty}</h1>
				<Activity activityTitle="กิจกรรมมหาวิทยาลัย" activityCount={obj.activityCount1} />
				<Activity activityTitle="กิจกรรมเพื่อเสริมสร้างสมรรถนะ" activityCount={obj.activityCount2} />
				<Activity activityTitle="กิจกรรมเพื่อสังคม" activityCount={obj.activityCount3} />
			</div>
			{loading &&
				<div className='top-0 left-0 absolute h-screen w-screen bg-black opacity-80 justify-center items-center flex'>
					<div className="animate-spin rounded-full @apply border-t-4 border-solid border-green-500 h-16 w-16"></div>
				</div>
			}
		</div>
	)
}

export default transcript