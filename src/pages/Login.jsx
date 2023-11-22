import { useState } from 'react'

function Login() {
	const [user, setUser] = useState({ username: "", password: "" });

	const handleUsername = (event) => {
		setUser({ username: event.target.value, password: user.password })
	}
	const handlePassword = (event) => {
		setUser({ username: user.username, password: event.target.value })
	}
	const clearUser = () => {
		setUser({ username: "", password: "" });
	}


	return (
		<>
			<div>
				<div className='card'>
					<h2 className='m-4 text-3xl'>Login</h2>
					<div className='form'>
						<h2>username :</h2>
						<input className="input" type="text" value={user.username} onChange={handleUsername} />
					</div>
					<div className='form'>
						<h2>password :</h2>
						<input className="input" type="password" value={user.password} onChange={handlePassword} />
					</div>
					{/* <h1>{user.username}</h1>
					<h1>{user.password}</h1> */}
					<div className='flex justify-evenly w-full  mt-4'>
						<button type="submit" className=' w-14 bg-[#86A789] text-[#EBF3E8]'>Login</button>
						<button type="submit" className=' w-14 bg-[#86A789] text-[#EBF3E8]' onClick={clearUser}>Clear</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
