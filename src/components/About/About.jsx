import React from 'react'

export default function About() {
  return (
    <>
    <div className=' text-white' style={{backgroundColor:"#1abc9c"}} >
    <div className='text-center pt-60' >
      <h2 className='uppercase mb-3 text-4xl font-bold'>about component</h2>
      <div className='flex items-center justify-center mb-4'>
        <div className='me-4 bg-white' style={{ width:"80px" , height:"4px"}}></div>
        <i class="fa-solid fa-star mr-4"></i>
        <div className='me-4 bg-white' style={{ width:"80px" , height:"4px"}}></div>
      </div>
    </div>

    <div className=' container'>
      <div className='row px-12'>
        <div className='w-1/2 pb-28'>
        <p className=' text-left ml-20  mb-16'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className='w-1/2 pb-28'>
        <p className=' text-left ml-20  mb-16'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
    </div>

    
    </>
  )
}
