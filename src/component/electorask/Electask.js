import React from 'react'
import "./electask.css"

function Electask() {
  return (
    <div className='p-4'>
    <div className='grid gap-7 md:grid-cols-2 p-6'>
    <div className='card11'>
        <div>
        <h1 className='pb-2'><b>Turakumva</b></h1>
        <h2 className='pb-1'><i>Turakworohereza ubuzima!</i></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        </div>
        <div className='pt-[1rem] '>
            <button className='bg-blue-500 p-1 px-3 rounded-sm btn'>SOmabyinshi</button>
        </div>
    </div>
    <div className='card11'>
    <div>
    <h1 className='pb-2'><b>Kuki waduhitamo?</b></h1>
        <h2 className='pb-1'><i>Ntabwo arukukurikirana ibikoresho byawe gusa?</i></h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
    </div>
    <div className='pt-[1rem] pb-[2rem]'>
    <button className='bg-blue-500 p-1 px-3 rounded-sm btn'>SOmabyinshi</button>
    </div>
    </div>
   
    </div>
    
    </div>
    
  )
}

export default Electask