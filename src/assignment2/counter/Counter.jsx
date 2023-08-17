import {useState} from 'react'
import './style.css';

function Counter() {
const [counter,setCounter] = useState(0);
  return (
    <div className='counter'>
        {counter}
        <div className="btn-section">
            <button className='btn'
            onClick={()=>setCounter(counter+1)}
            >Increment</button> 
            <button className='btn'
              onClick={()=>setCounter(counter-1)}
            >Decrement</button>
        </div>
    </div>
  )
}

export default Counter