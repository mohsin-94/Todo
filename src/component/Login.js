import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    const [inputVal,setInputVal] = useState({
        username: '',
        password: ''
    })
    const [userErr, setUserErr] = useState('');
    const changeHandler = (e) => {
        setInputVal({
            ...inputVal,
            [e.target.name]: e.target.value
        })
    }
    
    const handleLogin = async (e) =>{
        e.preventDefault();
        
        let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(inputVal.username === ''){
            setUserErr('Username is not blank')
        }else if(inputVal.password === ''){
            setUserErr('Password is not blank')
        }else if(!filter.test(inputVal.username)){
            setUserErr('Please enter valid email')
        }else{
            localStorage.setItem("user-loggedIn", inputVal.username)
            navigate(`/update`)
            setUserErr('')
        }
    }
    
    return (
        <section>
            <div className="ui grid centered container">
                <div className="eight wide column">
                    <div className="ui segment">
                        <h2 className='display-7'>Login</h2>
                        <form className="ui form" onSubmit={handleLogin}>
                            <div className="field">
                                <label htmlFor="username" className="mb-2">
                                    Email address
                                </label>
                                <input type="text" name="username" id="username" className="form-control" value={inputVal.username} onChange={changeHandler} placeholder="Enter your email" />
                            </div>
                            <div className="field">
                                <label htmlFor="password" className="mb-2">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" value={inputVal.password} onChange={changeHandler} className="form-control" placeholder="Enter your password" />
                                <div className='color-red text-right'>
                                    {userErr}
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="ui primary button">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
