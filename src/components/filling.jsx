import { list } from 'postcss';
import React, { useState, useEffect } from 'react';






function filling( {list, color,ans,setAns}) {
	const [dropDown, setDropDown] = useState(false);
	//const [list, setList] = useState([]);
	//const list= ["kuhk","b","c","d","e"];
	const s = color + " border m-1 pl-2 pr-2 rounded-md relative" ;
	// const [ans, setAns] = useState(['Select...']);
	const ShowList = () => {
		const handleAns = (e) => {
		  console.log(e.target.textContent);
		  if(ans[0]==='Select...'){
			setAns([e.target.textContent]);
		  }
		  else if (ans.includes(e.target.textContent)){
			const newans = ans.filter(item => item != e.target.textContent);
			setAns(newans);
			if (newans.length === 0) {
				setAns(['Select...']);
		  	}
		  }
		  else {
		  setAns([...ans,e.target.textContent]);
		  
		}
		};
	  
		return (
		  <div className='max-h-[100px] overflow-auto'>
			{Object.entries(list).map(([index, value]) => (
			  <p className={ans.includes(value) ? color : "border bg-white"} key={index} onClick={handleAns}>
				{value}
			  </p>
			))}
		  </div>
		);
	  };

	return(
		<div className='shadow-xs w-full mx-auto ' onMouseLeave={() => {setDropDown(false)}}>
			<div className="border p-2 rounded-md w-full flex" onClick={()=>{setDropDown(true)}}>
				{Object.entries(ans).map(([index, value]) => (
					<div className={s}>
						<p>{value}</p>
					</div>
				))}
			</div>
			{dropDown && <ShowList/>}
		</div>
	)
}

export default filling