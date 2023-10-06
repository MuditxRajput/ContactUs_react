import React, { useState } from 'react';
const Form=()=>{
    const[Name, setName] = useState("");
    const[Email, setEmail] = useState("");
    // const[Text, setName] = useState("");
    const[submittedData,setSubmittedData] = useState({})
    const[show,setShow] = useState(false);
    const change=(e)=>{

        // setEmail(e.target.value);
        setName(e.target.value);
    }
    const changeE=(e)=>{
        setEmail(e.target.value);
    }
    const submit=(e)=>{
        e.preventDefault();
        setShow(true);
        const formData = {
            name : Name,
            email: Email,
        };
        setSubmittedData(formData);
        
    }
    return(
        <>
       <div>
    {
        show && (
            <>
            <h1>Hello {submittedData.name}</h1>
            <h1>Your Email is: {submittedData.email}</h1>
            </>
        )
    }
</div>
        <form className=' flex flex-col'>
        <input type="text" name="" id="" placeholder='Enter your Name'
        className='border-2 border-black rounded my-2 px-2 py-1'
        onChange={change}
        // value={Name}
        />
        <input type="text" name="" id="" placeholder='Enter your Email'
        className='border-2 border-black rounded my-2 px-2 py-1'
        onChange={changeE}
        />
        <textarea name="" id="" cols="20" rows="7"
        className='border-2 border-black rounded my-2 px-2 py-1'
        
        
        ></textarea>
        <div className='flex justify-center'>

        <button className='bg-red-400 py-1 hover:bg-red-600 px-3 rounded-full text-white '
        onClick={submit}
        >Submit </button>
        </div>
        </form>
        </>
    )
    
}
export default Form;