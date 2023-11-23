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
	const [Faculty, setFaculty] = useState(["KUTech", "KUStartUP", "KU",'Engineer', 'b', 'c', 'd', 'e']);
	const [Acti, setActi] = useState(["กิจกรรมเพิ่อเสริมสร้างสมรรถนะ", "กิจกรรมมหาวิทยาลัย","กิจกรรมเพื่อสังคม"]);
	const [Campus, setCampus] = useState(["บางเขน", "กำแพงแสน"]);
    const [filFac,setfilFac] = useState(["Select..."]);
    const [filActi,setfilActi] = useState(["Select..."]);
    const [filCampus,setfilCampus] = useState(["Select..."]);

    const checkhighlightFac = (event) => {
        if (filFac.length == 1 && filFac[0] === "Select..."){
            return true;
        }
        return event.some((event) => event.host.some((host) => filFac.includes(host)));
        // return false;
    }
    const checkhighlightActi = (event) => {
        if (filActi.length == 1 && filActi[0] === "Select..."){
            return true;
        }
        // console.log(event.some((event) => event.activitytype.some((host) => filActi.includes(host))));
        return event.some((event) => event.activitytype.some((host) => filActi.includes(host)));
        // return false;
    }
    const checkhighlightCampus = (event) => {
        if (filCampus.length == 1 && filCampus[0] === "Select..."){
            return true;
        }
        // console.log(event.some((event) => event.activitytype.some((host) => filActi.includes(host))));
        return event.some((event) => filCampus.includes(event.campus));
        // return false;
    }
    const checkeventacti = (event) => {
        if (filActi.length == 1 && filActi[0] === "Select..."){
            return true;
        }
        return filActi.some(e => event.activitytype.includes(e));
    }
    const checkeventhost = (event) => {
        if (filFac.length == 1 && filFac[0] === "Select..."){
            return true;
        }
        return filFac.some(e => event.host.includes(e));
    }
    const checkeventcampus = (event) => {
        if (filCampus.length == 1 && filCampus[0] === "Select..."){
            return true;
        }
        return filCampus.includes(event.campus);
    }
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
    const tileContent = ({ date, view }) => {
        const eventDates = events
          .flatMap((event) => event.date.map((date) => moment(date).toDate()));
        
        const eventsOnDate = events.filter((event) =>
          event.date.some((eventDate) => moment(eventDate).isSame(date, 'day'))
        );
        if (view === 'month' && eventDates.some((eventDate) => moment(eventDate).isSame(date, 'day')) && checkhighlightFac(eventsOnDate) && checkhighlightActi(eventsOnDate) && checkhighlightCampus(eventsOnDate)) {
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
								<Filling list={Campus} color="bg-yellow-100" ans={filCampus} setAns={setfilCampus}/>
								<h1></h1>
							</div>
							<div className='w-[400px] sm:w-[250px] h-[140px] flex flex-col justify-center items-center'>
								{/* <div className='w-12 h-12 bg-pink-500 rounded-full hover:bg-pink-900 hover:duration-500 duration-500 cursor-pointer'  onClick={() => { setshowFilterActi(true) }}></div> */}
								<h1>กิจกรรม</h1>
								<Filling list={Acti} color="bg-pink-100" ans = {filActi} setAns={setfilActi}/>
								<h1></h1>
							</div>
							<div className='w-[400px] sm:w-[250px] h-[140px] flex flex-col justify-center items-center'>
								{/* <div className='w-12 h-12 bg-green-500 rounded-full hover:bg-green-900 hover:duration-500 duration-500 cursor-pointer' onClick={() => { setshowFilterFac(true) }}></div> */}
								<h1>ชมรม/คณะ</h1>
								<Filling list={Faculty} color="bg-green-100" ans={filFac} setAns={setfilFac}/>
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
		<div className='font-kanit w-screen h-screen overflow-hidden'>
			<div className='w-screen flex sm:flex-col '>
				<div className='justify-center sm:w-full w-1/2 sm:h-1/2'>
					<div>
						{isload && 
							<div className='border p-10'>
								<Calendar className="mx-auto" onChange={handleDateChange} value={selectedDate} tileClassName={tileContent}/>
							</div>
						}
					</div>
					<div className='flex justify-between px-3 w-[500px] mx-auto sm:w-full sm:px-10'>
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none" onClick={() => {
								setShowfilter(true);
								console.log(showfilter);
							}}>
							<path d="M24.2188 19.7693H7.8125V18.8707C7.8125 18.3765 7.46094 17.9721 7.03125 17.9721H5.46875C5.03906 17.9721 4.6875 18.3765 4.6875 18.8707V19.7693H0.78125C0.351562 19.7693 0 20.1737 0 20.6679V22.4651C0 22.9594 0.351562 23.3637 0.78125 23.3637H4.6875V24.2623C4.6875 24.7566 5.03906 25.1609 5.46875 25.1609H7.03125C7.46094 25.1609 7.8125 24.7566 7.8125 24.2623V23.3637H24.2188C24.6484 23.3637 25 22.9594 25 22.4651V20.6679C25 20.1737 24.6484 19.7693 24.2188 19.7693ZM24.2188 10.7833H20.3125V9.88466C20.3125 9.39042 19.9609 8.98605 19.5312 8.98605H17.9688C17.5391 8.98605 17.1875 9.39042 17.1875 9.88466V10.7833H0.78125C0.351562 10.7833 0 11.1876 0 11.6819V13.4791C0 13.9733 0.351562 14.3777 0.78125 14.3777H17.1875V15.2763C17.1875 15.7705 17.5391 16.1749 17.9688 16.1749H19.5312C19.9609 16.1749 20.3125 15.7705 20.3125 15.2763V14.3777H24.2188C24.6484 14.3777 25 13.9733 25 13.4791V11.6819C25 11.1876 24.6484 10.7833 24.2188 10.7833ZM24.2188 1.79721H14.0625V0.898605C14.0625 0.404372 13.7109 0 13.2812 0H11.7188C11.2891 0 10.9375 0.404372 10.9375 0.898605V1.79721H0.78125C0.351562 1.79721 0 2.20158 0 2.69582V4.49303C0 4.98726 0.351562 5.39163 0.78125 5.39163H10.9375V6.29024C10.9375 6.78447 11.2891 7.18884 11.7188 7.18884H13.2812C13.7109 7.18884 14.0625 6.78447 14.0625 6.29024V5.39163H24.2188C24.6484 5.39163 25 4.98726 25 4.49303V2.69582C25 2.20158 24.6484 1.79721 24.2188 1.79721Z" fill="#2EC28C"/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="39" height="44" viewBox="0 0 39 44" fill="none">
						<path d="M10.9535 8.30237H6.53489C4.58262 8.30237 3 9.88499 3 11.8373V36.5815C3 38.5338 4.58262 40.1164 6.53489 40.1164H17.1396" stroke="#F188A2" stroke-width="5" stroke-linecap="round"/>
						<path d="M23.3257 8.30237H27.7443C29.6966 8.30237 31.2792 9.88499 31.2792 11.8373V27.7443" stroke="#F188A2" stroke-width="5" stroke-linecap="round"/>
						<path d="M10.0698 12.5442V9.18605C10.0698 8.69799 10.4655 8.30233 10.9535 8.30233C11.4416 8.30233 11.8447 7.9065 11.9283 7.42564C12.1902 5.9193 13.2053 3 17.1396 3C21.0739 3 22.089 5.9193 22.3509 7.42564C22.4345 7.9065 22.8377 8.30233 23.3257 8.30233C23.8136 8.30233 24.2094 8.69799 24.2094 9.18605V12.5442C24.2094 13.1299 23.7346 13.6047 23.1489 13.6047H11.1303C10.5446 13.6047 10.0698 13.1299 10.0698 12.5442Z" stroke="#F188A2" stroke-width="5" stroke-linecap="round"/>
						<path d="M23.3257 37.4651L26.8606 40.9999L35.6978 32.1627" stroke="#F188A2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						{/* <button className=' bg-pink-400 w-20 rounded' onClick={() => {
							setShowfilter(true);
							console.log(showfilter);
						}}>Filter</button> */}
					</div>	
				</div>
				{/* <div className='w-screen flex sm:flex-col sm:justify-normal justify-evenly h-screen'> */}
				<div className='flex sm:flex-col max-h-screen sm:w-screen '>
						
					<div className='max-h-full sm:max-h-1/2 sm:w-screen'>
						{selectedDate && (
							<div className=''>
								<h3>Events for {moment(selectedDate).format('MMMM DD, YYYY')}</h3>
								{filteredEvents.length > 0 ? (
                                    <div className=' sm:w-screen flex overflow-auto '>
                                        <ul className='w-screen sm:flex'> 
                                            {filteredEvents.map((event, index) => (
                                                (checkeventacti(event) && checkeventcampus(event) && checkeventhost(event) &&
                                                <li key={index} className='m-3'>
                                                    <a href= {event.detail} className='w-[300px] h-[340px] bg-slate-200 block mb-[10px]'>
                                                    <img src={event.image} className='w-[300px] h-[200px] object-cover' alt="" />
                                                    <p>{event.name}</p> 
                                                    <p>From {event.host.join(', ')}</p>
                                                    <p>Activity Type : {event.activitytype.join(',')}</p>
                                                    <p>Hour : {event.hour}</p>
                                                    <p>campus : {event.campus}</p>
                                                    </a>
                                                    </li>
                                                )
                                            ))}
                                        </ul>
                                    </div>
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
