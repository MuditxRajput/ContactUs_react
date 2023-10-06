import React from 'react';
import Form from './Form';
const Contact =()=>{
return(
    <>
    
    <div>
        <div className=' text-5xl font-bold font-serif py-4 flex justify-center  items-center'>
            <h2>Contact us</h2>
        </div>
        <div className='mt-3'>
            <p className=' text-slate-700 mx-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Pariatur inventore commodi iste enim. Necessitatibus, 
                 soluta. Nesciunt dolor in accusantium adipisci 
                 ab earum deleniti fugiat?
                 Adipisci autem obcaecati accusamus veniam sequi.</p>
        </div>
        <div className='mx-4 '>
            <Form/>
            
            {/* <Form/> */}
        </div>
    </div>
    </>
)
}
export default Contact;