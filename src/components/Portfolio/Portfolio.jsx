import React from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'

export default function Portfolio() {
  return (
    <>
    <div className='text-center xl:pt-32 md:pt-32  pt-52' style={{color:"#2c3e50"}}>
      <h2 className='uppercase mb-3 text-4xl font-bold'>portfolio component</h2>
      <div className='flex items-center justify-center mb-4'>
        <div className='me-4' style={{backgroundColor:"#2c3e50" , width:"80px" , height:"4px"}}></div>
        <i className="fa-solid fa-star mr-4"></i>
        <div className='me-4' style={{backgroundColor:"#2c3e50" , width:"80px" , height:"4px"}}></div>
      </div>
    </div>
    

    <div className=' mx-auto' style={{width:"1200px"}}>
    <div className='row'>
      <div className='xl:w-1/3 md:w-1/2 w-96 xl:p-6 md:p-4 p-2'>
      <div className=' relative'>
      <img src={port1} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='xl:w-1/3 md:w-1/2 w-96 xl:p-6 md:p-4 p-2'>
      <div className=' relative'>
      <img src={port2} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='xl:w-1/3 md:w-1/2 w-96 xl:p-6 md:p-4 p-2'>
      <div className=' relative'>
      <img src={port3} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='xl:w-1/3 md:w-1/2 w-96 xl:p-6 md:p-4 p-2'>
      <div className=' relative'>
      <img src={port1} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='xl:w-1/3 md:w-1/2 w-96 xl:p-6 md:p-4 p-2'>
      <div className=' relative'>
      <img src={port2} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
      <div className='xl:w-1/3 md:w-1/2 w-96 xl:p-6 md:p-4 p-2'>
      <div className=' relative'>
      <img src={port3} className='w-full rounded-lg ' alt="" />
      <div className=' absolute h-full w-full bg-teal-500/85 rounded-lg flex items-center justify-center -bottom-0 opacity-0 hover:opacity-100 transition-allc duration-500'>
      <i className="fa-solid fa-plus text-white font-extrabold text-8xl"></i>
      </div>
      </div>
      </div>
    </div>
    </div>


    

    
    </>
  )
}
