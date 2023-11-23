import React from 'react'

function Event_Box({
    pic="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww", 
    topic="หัวข้อกิจกรรม", 
    date="ไม่พบข้อมูลวันที่", 
    host="ไม่พบข้อมูลคณะ/ชมรม",  
    text="ไม่พบข้อมูลรายละเอียด",
    activitytype="`ไม่พบข้อมูลกิจกรรม",
    campus="ไม่พบรายละเอียดวิทยาเขต",
    hour="-",
}) {
    const Color =()=>{
        if (campus === "บางเขน"){
            return <h1 className="border border-black bg-[#fad34f] rounded-t-lg text-lg font-bold p-1 pl-3">{campus}</h1>
        } 
        else if(campus === "กำแพงแสน"){
            return <h1 className="border border-black bg-[#f188a2] rounded-t-lg text-lg font-bold p-1 pl-3">{campus}</h1>
        }
    }

  return (
    <div className='flex flex-col font-kanit w-[500px] sm:w-[400px] sm:h-[700px]'>
       <Color/>
        <div className='flex border border-black font-kanit'>
            <div className='w-1/4'>
                <img src={pic} className='mt-5 max-w-[5rem] w-3/4 aspect-square m-auto rounded-[100%]'/>
            </div>
            <div className='w-3/4 p-2 mr-6'>
                <h1 className='py-2 font-bold'>{topic}</h1>
                <h3 >วันที่: {date}</h3>
                <div className='flex w-full justify-between'>
                    <h3>ผู้จัด: {host}</h3>
                    <h3>{hour} ชั่วโมง</h3>
                </div>
                <div className='w-full py-2'>
                    <p className=''>
                        {text}
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Event_Box