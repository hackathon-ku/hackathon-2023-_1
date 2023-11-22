import React, { useState ,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Filling from '../components/filling';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContinuousCalendar() {
	const [selectedDate, setSelectedDate] = useState(null);
    const [isload,setisload] = useState(false);
	const [events, setEvents] = useState([
		{ date: '2023-11-15', title: 'Event 1', Faculty: 'Engineer' },
		{ date: '2023-11-15', title: 'Event 2', Faculty: 'Economy' },
		{ date: '2023-11-16', title: 'Event 3', Faculty: 'Sci' },
		// Add more events as needed
	]);
    const fetchevent = async() => {
        const response = await fetch(`http://127.0.0.1:8000/calendar/`);
        const data = await response.json();
        setEvents(data);
        setisload(true);
        console.log(data);
    }
    useEffect(() => {
        fetchevent();
    },[])
	const [showfilter, setShowfilter] = useState(false);
	// const [showFilterFac, setshowFilterFac] = useState(false);
	// const [showFilterActi, setshowFilterActi] = useState(false);
	// const [showFilterCampus, setshowFilterCampus] = useState(false);
	//const Faculty = ["Sci", "Engineer", "Econ"];
	const [Faculty, setFaculty] = useState(["Sci", "Engineer", "Econ",'a', 'b', 'c', 'd', 'e']);
	const [Acti, setActi] = useState(["สังคม", "มหาลัย"]);
	const [Campus, setCampus] = useState(["บางเขน", "กำแพงแสน"]);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
    const tileContent = ({ date, view }) => {
        const eventDates = events
          .flatMap((event) => event.date.map((date) => moment(date).toDate()));
      
        if (view === 'month' && eventDates.some((eventDate) => moment(eventDate).isSame(date, 'day'))) {
          return 'highlight';
        }
      
        return null;
      };

    const formattedSelectedDate = selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : null;

    const filteredEvents = events.filter((event) =>
        event.date && event.date.includes(formattedSelectedDate)
    );

	// const FilterList =({list, setShow})=>{
	// 	return(
	// 		<div className='flex top-0 left-0 absolute w-screen h-screen justify-center items-center  bg-black bg-opacity-70'>
	// 			<div className='bg-white'>
	// 				<button onClick={() => { setShow(false) }} className="bg-red-600 border">x</button>
	// 				{list.map((item, index) => (
	// 					<p>{item}</p>
	// 				))}
	// 			</div>
				
	// 		</div>	
	// 	)
	// }

	const Filter =()=>{
		return(
			<div className='flex top-0 left-0 absolute w-screen h-screen justify-center items-center   bg-black bg-opacity-70'>
				<div className=' w-[40em] h-[40em] sm:w-[25rem] bg-white rounded-[20px]'>
					<div className='header flex justify-evenly'>
						<div className='flex-col justify-evenly'>
							<div className='w-[400px] sm:w-[250px] h-[140px] flex flex-col justify-center items-center'>
								{/* <div className='w-12 h-12 bg-yellow-500 rounded-full hover:bg-yellow-900 hover:duration-500 duration-500 cursor-pointer'  ></div> */}
								<h1>วิทยาเขต</h1>
								<Filling list={Campus} color="bg-yellow-100" />
								<h1></h1>
							</div>
							<div className='w-[400px] sm:w-[250px] h-[140px] flex flex-col justify-center items-center'>
								{/* <div className='w-12 h-12 bg-pink-500 rounded-full hover:bg-pink-900 hover:duration-500 duration-500 cursor-pointer'  onClick={() => { setshowFilterActi(true) }}></div> */}
								<h1>กิจกรรม</h1>
								<Filling list={Acti} color="bg-pink-100" />
								<h1></h1>
							</div>
							<div className='w-[400px] sm:w-[250px] h-[140px] flex flex-col justify-center items-center'>
								{/* <div className='w-12 h-12 bg-green-500 rounded-full hover:bg-green-900 hover:duration-500 duration-500 cursor-pointer' onClick={() => { setshowFilterFac(true) }}></div> */}
								<h1>ชมรม/คณะ</h1>
								<Filling list={Faculty} color="bg-green-100" />
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
				{/* <button className='top-[-300px] right-8 relative bg-red-600 rounded-full w-6 h-6 float-right hover:bg-red-800 hover:duration-500 duration-500' onClick={() => { setShowfilter(false) }}>x</button> */}
				<button
                        className="top-[-300px] right-8 relative text-gray-500 hover:text-gray-700"
                        onClick={() => setShowfilter(false)}
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
			</div>
		)
	}


	return (
		<div className='font-kanit'>
			<div className='w-screen flex sm:justify-center '>
				<div className='w-screen flex sm:flex-col sm:justify-normal justify-evenly h-screen'>
					<div>
                    {isload && <div className='mt-[180px] sm:w-screen sm:items-center sm:justify-center'>
						<Calendar className="" onChange={handleDateChange} value={selectedDate} tileClassName={tileContent}/>
					</div>}
                    </div>
					<div className='flex-item'>
						<button className=' bg-pink-400 w-20 rounded' onClick={() => {
							setShowfilter(true);
							console.log(showfilter);
						}}>Filter</button>
						{selectedDate && (
							<div>
								<h3>Events for {moment(selectedDate).format('MMMM DD, YYYY')}</h3>
								{filteredEvents.length > 0 ? (
									<ul>
										{filteredEvents.map((event, index) => (
											<li key={index}>
                                                <a href= {event.detail} className='w-[300px] h-[300px] bg-slate-200 block mb-[10px]'>
                                                <img src={event.image} className='w-[300px] h-[200px] object-cover' alt="" />
                                                <p>{event.name}</p> 
                                                <p>From {event.host.join(', ')}</p>
                                                <p>Activity Type : {event.activitytype}</p>
                                                <p>Hour : {event.hour}</p>
                                                </a>
                                                </li>
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
			{/* {showFilterFac && (<FilterList list={Faculty} setShow={setshowFilterFac}/>)}
			{showFilterActi && (<FilterList list={Faculty} setShow={setshowFilterActi}/>)}
			{showFilterCampus && (<FilterList list={Faculty} setShow={setshowFilterCampus}/>)} */}
		</div>
	);
};

export default ContinuousCalendar;
