import './css/style.css';
import {useState} from 'react';

function Instagram() {
    const [isSigned,setIsSigned] = useState(true);
  return (
    <>
      <form className="form">
            <img src="https://imgs.search.brave.com/gM3GItHhH_N8-Ir7yhsfl4qKoSj_qTnnCGfgQy7tkX8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9JbnN0YWdy/YW0vSW5zdGFncmFt/LVdvcmRtYXJrLUJs/YWNrLUxvZ28ud2lu/ZS5zdmc.svg"/>
            
            {
                isSigned?<>
                 <input 
                type="text" 
                 placeholder='mobile number or email'
                    />
                </>
                :<>
                    <input 
                 type="text" 
                placeholder='Full Name'
                    />
                 <input 
                type="text" 
                 placeholder='mobile number or email'
                    />
             
                </>
            }
           
           <input 
             type="text" 
             placeholder='password'
             />
             <button 
             className='btn'
             type='submit'
             onClick={(e)=>{
                e.preventDefault();
                setIsSigned(!isSigned);
             }}
             >
                {isSigned?"Sign in":"Sign up"} 
             </button>
             <h3>have an account? <span 
             className='link'
             onClick={()=>setIsSigned(!isSigned)}
             >
               {isSigned?"Sign up":"Login"}
               </span></h3>
        </form>
    </>
  )
}

export default Instagram