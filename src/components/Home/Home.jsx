import React from 'react'
import userimage from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <>
     <div className=' text-white text-center flex justify-center items-center' style={{backgroundColor:"#1abc9c"}} >
      <div className=' xl:pt-32 md:pt-32  pt-52 '>
        <img src={userimage} className='mb-4 ml-12' style={{width:"250px"}}  alt="" />

        <div className='text-center pt-5'>
      <h2 className='uppercase mb-3 text-4xl font-bold'>start Framework
      </h2>
      <div className='flex items-center justify-center mb-4'>
        <div className='me-4 bg-white' style={{width:"80px" , height:"4px"}}></div>
        <i class="fa-solid fa-star mr-4"></i>
        <div className='me-4 bg-white' style={{ width:"80px" , height:"4px"}}></div>
      </div>
    </div>

    <div className='mb-4'>
    Graphic Artist - Web Designer - Illustrator
    </div>
      </div>
     </div>
    </>
  )
}
