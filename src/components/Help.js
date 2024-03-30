import React from 'react'

const Help = () => {
  return (
    <div>
    <h1 className='m-2 font-bold text-xl'>Help</h1>
        <form className='text-center border-2 border-gray-100 ml-auto mr-auto my-20 w-1/3 p-3 rounded-md shadow-md'>
            <input className='border-2 border-gray-100 px-2 rounded-md m-1 shadow-md' type='text' placeholder='Enter name'/><br/>
            <input className='border-2 border-gray-100 px-2 rounded-md m-1 shadow-md' type='number' placeholder='Enter Phone Number'/><br/>
            <input className='border-2 border-gray-100 px-2 rounded-md m-1 shadow-md' type='email' placeholder='Enter Email id'/><br/>
            <input className='border-2 border-gray-100 px-2 rounded-md m-1 shadow-md' type='text' placeholder='Enter Query'/><br/>
            <button className='border-2 border-gray-100 text-white bg-black px-1 m-1 rounded-md'>Submit</button>
        </form>
    </div>
  )
}

export default Help