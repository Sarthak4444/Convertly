import React from 'react'
import { useLocation } from 'react-router-dom'

function Exchange() {
  const location = useLocation();

  // Access the passed state
  const data = location.state;
  console.log(data);
  return (
    <div>Exchange</div>
  )
}

export default Exchange