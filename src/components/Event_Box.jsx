import React from 'react'

function Event_Box({pic="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fHww", topic="หัวข้อกิจกรรม", date="1 ตุลาคม 2566", host="คณะบริหารธุรกิจ", check=false, text="รายละเอียด"}) {
  return (
	<div className='flex w-full border font-kanit'>
		<div className='w-1/4'>
			<img src={pic} className='mt-5 max-w-[5rem] w-3/4 aspect-square m-auto rounded-[100%]'/>
		</div>
		<div className='w-3/4 p-2 mr-6'>
			<h1 className='py-2 font-bold'>{topic}</h1>
			<h3 >วันที่: {date}</h3>
			<div className='flex w-full justify-between'>
				<h3>ผู้จัด: {host}</h3>
				{check ?<h3>มีหน่วยกิต</h3> : <h3>ไม่มีหน่วยกิต</h3>}
			</div>
			<div className='w-full py-2'>
				<p className=''>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur soluta in vitae accusamus ea voluptatem quisquam a nostrum nobis alias. Dolore voluptatem, quisquam odio recusandae quidem nam hic temporibus ea!
				</p>
			</div>

		</div>
	</div>
  )
}

export default Event_Box