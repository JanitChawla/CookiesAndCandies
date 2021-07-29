import React, { useState } from "react";
import Button from '@material-ui/core/Button';
  
  
const Counter = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
  const [count, setCount] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }

  const handleClick2 = () => {
    // Counter state is incremented
    setCounter(counter + 5)
  }
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'grey',
      justifyContent: 'center',
      position: 'relative',
      width: '100%',
    marginTop: "-10px"
    }}>
      Current Bid
      <div style={{
        fontSize: '120%',
        marginTop: '1px'
      }}>
        {counter}
      </div>
          <Button style={{marginTop: '25px'}} onClick={handleClick1} variant="contained" color="primary" >Increase Bid by 1</Button>
          <Button style={{marginTop: '25px'}} onClick={handleClick2} variant="contained" color="primary" >Increase Bid by 5</Button>
          
      </div>
  )
}
  
export default Counter