import React, { useState } from 'react'
import checkMark from './picture/image.png'


const Activity = ({ Title, required, activityList }) => {

	const count = Object.keys(activityList).length;
	let textColor = (count < required) ? false : true;
	const [showBox, setShowBox] = useState(false);
	const [toggleIcon, setToggleIcon] = useState("+");

	const toggleBox = () => {
		setShowBox(!showBox);
		{toggleIcon == '+' ? setToggleIcon('x') : setToggleIcon('+')}
	}

	const List = () =>{

		const sumOfValues = Object.values(activityList).reduce((sum, value) => sum + value, 0);

		return(
			<div className='pt-2 pb-2'>
				{Object.entries(activityList).map(([key, value]) => (
					<div  className='flex justify-between pl-5 pr-5'>
						<p className='w-fit'>{key}</p> <p className='w-fit'>{value} ชั่วโมง</p>
					</div>
				))}
				{textColor 
					? <p className='text-center pt-3'>รวม {count} กิจกรรม {sumOfValues} ชั่วโมง</p>  
					: 	<div className='text-center pt-3'>
							<p>ต้องการอีก {required-count} กิจกรรม</p>
							<a className=' text-[#ff0000] underline'>ค้นหากิจกรรม</a>
						</div>
				}
			</div>
		)
	}

	return (
		<div className='p-2'>
			<div className={textColor ? 'bg-[#b6c7bb] flex justify-between' : 'bg-[#ffd1d1] flex justify-between'}>
				<h4 className='pl-2'>{Title}</h4>
				<div className='flex w-fit justify-between pr-2'>
					{!textColor ? <p className="text-[#ff0000]">ไม่ผ่าน</p> : <p className="text-[#023b05]">ผ่าน</p>}
					<button className="pl-3" onClick={toggleBox}>{toggleIcon}</button>
				</div>				
			</div>
			{ showBox && (
				<div className={textColor ? 'bg-[#b6c7bb] bg-opacity-50' :' bg-[#e5c8c8] bg-opacity-50'} >
					<List className="w-full"/>
				</div>
			)}
		</div>
	)
}

const Info = ({ studentNumber, name, faculty }) => {
	return (
		<div className='grid grid-cols-2 w-fit mr-auto ml-auto mb-3'>
			<h3>รหัสนิสิต :</h3>		<h3>{studentNumber}</h3>
			<h3>ชื่อ นามสกุล :</h3>	<h3>{name}</h3>
			<h3>คณะ :</h3>		 <h3>{faculty}</h3>
		</div>
	)
}


function newtranscript() {

	const [studentNumber, setStudentNumber] = useState("6510503409")
	const [name, setname] = useState("ธนภรณ์ กิจวรเกียรติ")
	const [faculty, setfaculty] = useState("วิศวกรรมคอมพิวเตอร์")
	const [check, setcheck] = useState("")
	const [activityList1,setActivityList1] = useState({
		'Pround to be KU':4,
		'โครงการปฐมนิเทศนิสิตใหม่':4
	})
	const [activityList2,setActivityList2] = useState({
		'Pround to be KU':4,
		'โครงการปฐมนิเทศนิสิตใหม่':4
	})
	const [activityList3,setActivityList3] = useState({
		'Pround to be KU':4,
		'โครงการปฐมนิเทศนิสิตใหม่':4
	})

	return (
	<div className="flex justify-space-around">
	<div className="bg-white w-1/3 min-h-screen flex items-center justify-center border sm:hidden">
	  <img 
		src= { checkMark }
		alt="Your Alt Text"
		className="max-w-40 max-h-40 "
	  />
	</div>
	<div className="p-5 min-h-screen m-auto flex flex-col w-2/3 sm:w-full">
	  <h1 className='text-[#38804e] text-center  text-2xl p-5'>Activity Transcript</h1>
	  <Info studentNumber={studentNumber} name={name} faculty={faculty}/>
	  <Activity Title='กิจกรรมมหาวิทยาลัย' required={3} activityList={activityList1}/>
	  <Activity Title='กิจกรรมเพื่อเสริมสร้างสมรรถนะ' required={4} activityList={activityList2}/>
	  <Activity Title='กิจกรรมเพื่อสังคม' required={1} activityList={activityList3}/>
	  <div className='text-center mt-auto mb-auto'>
		<button className='bg-[#6acb87] text-white text-center text-xl rounded-lg pt-1 pb-1 w-1/2'>กลับ</button>
	  </div>
	</div>
  </div>
  
	)
}

export default newtranscript