import React from 'react'
import "./ask.css"

function Ask() {
  return (
    <div className='contain  '>
        <div className='pl-6  pt-[5rem] pb-[1rem] flex justify-center'>
            <h1><b>Ntushobora kubuna ikintu?</b></h1><br/>      
        </div>
        <div className='flex justify-center text-center pb-2 '>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>
        <div className='grid md:grid-cols-3  p-6 gap-[2rem] pl-9'>
        <div className=" ibibazo p-3 rounded overflow-hidden  text-black">
            
            <h1 className='pb-3'><b>Ibibazo bijyanye na Konte</b></h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>
        <div className=' ibibazo p-3'>
        <h1 className='pb-3'><b>Umutekano</b></h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>
        <div className=' flex flex-col justify-center help'>
            <p className='pb-3'><b>Need More Help?</b></p>
            <p>Check out ourFAQ you may<br/>
             Find some Useful Tips</p>

             <div className='pt-3'>
                
             <button className=' p-1 px-2 rounded-sm border border-solid border-solid border-blue-500 border-2 '>
                <div className='flex items-center'>
                    <div className='px-1'>
                    <svg className='' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H6.5A.5.5 0 016 8zm-2.5 6a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div>Ibikunze kubazwa</div>
                </div>
                </button>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Ask