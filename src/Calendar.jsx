import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContinuousCalendar() {
	const [selectedDate, setSelectedDate] = useState(null);
	const [events, setEvents] = useState([
		{ date: '2023-11-15', title: 'Event 1', Faculty: 'Engineer' },
		{ date: '2023-11-15', title: 'Event 2', Faculty: 'Economy' },
		{ date: '2023-11-16', title: 'Event 3', Faculty: 'Sci' },
		// Add more events as needed
	]);
	const [showfilter, setShowfilter] = useState(false);
	const [showFilterFac, setshowFilterFac] = useState(false);
	const [showFilterActi, setshowFilterActi] = useState(false);
	const [showFilterCampus, setshowFilterCampus] = useState(false);
	const Faculty = ["Sci", "Engineer", "Econ"];
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const filteredEvents = events.filter((event) =>
		moment(event.date).isSame(selectedDate, 'day')
	);

	const FilterList =({list, setShow})=>{
		return(
			<div className='flex top-0 left-0 absolute w-screen h-screen justify-center items-center  bg-black bg-opacity-70'>
				<div className='bg-white'>
					<button onClick={() => { setShow(false) }} className="bg-red-600 border">x</button>
					{list.map((item, index) => (
						<p>{item}</p>
					))}
				</div>
				
			</div>	
		)
	}

	const Filter =()=>{
		return(
			<div className='flex top-0 left-0 absolute w-screen h-screen justify-center items-center   bg-black bg-opacity-70'>
				<div className=' w-[40em] h-[40em] sm:w-[25rem] bg-white rounded-[20px]'>
					<div className='header flex justify-evenly'>
						<div className='flex-col justify-evenly'>
							<div className='w-[120px] h-[140px] flex flex-col justify-center items-center'>
								<div className='w-12 h-12 bg-yellow-500 rounded-full hover:bg-yellow-900 hover:duration-500 duration-500 cursor-pointer'  onClick={() => { setshowFilterCampus(true) }}></div>
								<h1>วิทยาเขต</h1>
								<h1></h1>
							</div>
							<div className='w-[120px] h-[140px] flex flex-col justify-center items-center'>
								<div className='w-12 h-12 bg-pink-500 rounded-full hover:bg-pink-900 hover:duration-500 duration-500 cursor-pointer'  onClick={() => { setshowFilterActi(true) }}></div>
								<h1>กิจกรรม</h1>
								<h1></h1>
							</div>
							<div className='w-[120px] h-[140px] flex flex-col justify-center items-center'>
								<div className='w-12 h-12 bg-green-500 rounded-full hover:bg-green-900 hover:duration-500 duration-500 cursor-pointer' onClick={() => { setshowFilterFac(true) }}></div>
								<h1>ชมรม/คณะ</h1>
								<h1></h1>
							</div>
						</div>
					</div>
					<div className='main'></div>
					<div className='footer flex justify-evenly m-10 mt-[120px]'>
						<div className='w-[90px] flex justify-center'>
							<button className='bg-green-500 w-[60px] h-[30px] rounded-[20px] hover:bg-green-600 hover:duration-500'>apply</button>
						</div>
						<div className='w-[90px] flex justify-center'>
							<button className='bg-red-500 w-[60px] h-[30px] rounded-[20px]  hover:bg-red-600 hover:duration-500'>reset</button>
						</div>
					</div>
				</div>
				<button className='top-[-300px] right-8 relative bg-red-600 rounded-full w-6 h-6 float-right hover:bg-red-800 hover:duration-500 duration-500' onClick={() => { setShowfilter(false) }}>x</button>
			</div>
		)
	}


	return (
		<div>
			<div className='top-0 w-screen flex sm:justify-center '>
				<div className='w-screen flex sm:flex-col sm:justify-normal justify-evenly'>
					<div className='flex-item'>
						<Calendar className=" " onChange={handleDateChange} value={selectedDate} />
					</div>
					<div className='flex-item'>
						<button className=' bg-pink-400 w-20' onClick={() => {
							setShowfilter(true);
							console.log(showfilter);
						}}>filter</button>
						{selectedDate && (
							<div>
								<h3>Events for {moment(selectedDate).format('MMMM DD, YYYY')}</h3>
								{filteredEvents.length > 0 ? (
									<ul>
										{filteredEvents.map((event, index) => (
											<li key={index}>{event.title} From {event.Faculty}</li>
										))}
									</ul>
								) : (
									<p>No events for this date.</p>
								)}
							</div>
						)}
					</div>
				</div>
			</div>

			{showfilter && (<Filter/>)}
			{showFilterFac && (<FilterList list={Faculty} setShow={setshowFilterFac}/>)}
			{showFilterActi && (<FilterList list={Faculty} setShow={setshowFilterActi}/>)}
			{showFilterCampus && (<FilterList list={Faculty} setShow={setshowFilterCampus}/>)}
		</div>
	);
};

export default ContinuousCalendar;
