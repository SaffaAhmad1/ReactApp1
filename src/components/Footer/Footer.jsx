import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='py-16 text-white' style={{backgroundColor:"#2C3E50"}}>
    <div className=' container mx-auto'>
      <div className='row'>
        <div className='w-1/3 p-6'>
        <h3 className=' uppercase font-semibold text-3xl' >location</h3>
        <p className='py-4'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
        </div>
        <div className='w-1/3 p-6'>
        <h3 className=' uppercase font-semibold text-3xl' >AROUND THE WEB</h3>
        <div className='py-3'>
        <i className="fa-brands fa-facebook mx-1 p-2 " style={{border:"1px white solid" , borderRadius:"50%"}}></i>
        <i className="fa-brands fa-twitter mx-1 p-2 " style={{border:"1px white solid" , borderRadius:"50%"}}></i>
        <i className="fa-brands fa-linkedin-in mx-1 p-2 " style={{border:"1px white solid" , borderRadius:"50%"}}></i>
        <i className="fa-solid fa-globe mx-1 p-2 " style={{border:"1px white solid" , borderRadius:"50%"}}></i>
        </div>
        </div>
        <div className='w-1/3 p-6'>
        <h3 className=' uppercase font-semibold text-3xl' >ABOUT FREELANCER</h3>
        <p className='py-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
    </div>
    <div className='py-6 text-white' style={{backgroundColor:"#1A252F"}}>
      <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
