import React from 'react'
export default function Contact() {
  return (
    <>
    
    <div className='text-center xl:pt-32 md:pt-32  pt-52' style={{color:"#2c3e50"}}>
      <h2 className='uppercase mb-3 text-4xl font-bold'>conatct section</h2>
      <div className='flex items-center justify-center mb-4'>
        <div className='me-4' style={{backgroundColor:"#2c3e50" , width:"80px" , height:"4px"}}></div>
        <i class="fa-solid fa-star mr-4"></i>
        <div className='me-4' style={{backgroundColor:"#2c3e50" , width:"80px" , height:"4px"}}></div>
      </div>
    </div>

<form className="max-w-xl xl:mx-auto md:mx-auto mx-10 my-28">
<div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_text" id="floating_text" className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 mb-4 peer" placeholder=""/>
      <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500 text-base  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
  </div>
<div className="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_age" id="floating_age" className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0  peer" placeholder=""/>
      <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500 text-base  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type='email' name="floating_email" id="floating_email" className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0  peer" placeholder=""/>
      <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500 text-base  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type='password' name="floating_password" id="floating_password" className="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0  peer" placeholder=""/>
      <label htmlFor="floating_email" className="left-0 peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-500 text-base  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
  </div>
  <button type="submit" className=" flex text-white  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto mt-4 px-5 py-2.5 text-center" style={{backgroundColor:"#1abc9c"}}>Send Message</button>
</form>

    </>
  )
}
