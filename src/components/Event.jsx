import React from "react";
import backicon from '../picture/backred.png'
import holder from '../picture/ProfileHolder.jpg'

const event = () => {

    return(
        <div className="flex-col">
            <div className="flex sm:flex-col font-kanit">
                <button className="fixed top-2 left-2">
                    <img
                    src = { backicon }
                    alt="return"
                    className="rounded-full h-8 w-8 hover:bg-current"/>
                </button>
                <div className="p-5 pb-0 w-1/3 sm:w-full mt-10">
                    <h>หัวข้อกิจกรรม</h> 
                    <img 
                    className="p-5 sm:w-full "
                    src = {holder} />
                </div>
                <div className="flex-col w-2/3 sm:w-full">
                    <div className="p-5 flex sm:w-full h-3/4 items-center">
                        <div className="p-5 relative left-5 bg-teal-500 hover:bg-teal-700 transition ease-in-out duration-100 delay-100 h-40 w-1 rounded-full border border-black border-opacity-100"> </div>
                        <div className="flex-col relative left-10 ">
                            <p> date: </p>
                            <p> Activity-hours: </p>
                            <p> Host: </p>
                        </div>
                    </div>
                    <div className="flex p-5 relative h-1/4 ml-5 ">
                        <p>
                            &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quaerat corrupti molestiae facilis odio dicta blanditiis consequatur amet ea unde autem eos asperiores, facere aspernatur soluta velit doloremque voluptas quod?
                        </p>
                        
                    </div>
                    </div>
                </div>
            <div className="p-5 relative bottom-1 left-10 bg-yellow-300 hover:bg-yellow-500 transition ease-in-out duration-100 delay-100 h-40 w-1 rounded-full border border-black border-opacity-100 mb-5"> </div>
        </div>
    )
}

export default event;