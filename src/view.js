import React from 'react'
import { incNumber, decNumber } from './action/index'
import { useSelector, useDispatch } from 'react-redux'
export default function View() {
    const Val = useSelector((state)=> state.changeTheNumber);
    const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Increment-Decrement Counter
        </h2>
        <h4>Through React-Redux</h4>
        <div className='Int'>
        <a onClick={()=>dispatch(decNumber(1))}><span>-</span></a>
        <input type="text" value={Val} />
        <a onClick={()=>dispatch(incNumber(1))}><span>+</span></a>
        </div>
      </header>

    </div>
  )
}
