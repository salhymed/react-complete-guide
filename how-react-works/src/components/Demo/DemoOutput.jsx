import React from 'react'
import MyPara from './MyPara'

const DemoOutput = (props) => {
    console.log('demo running')
  return (
    <MyPara show={props.show}>
        {props.children}
    </MyPara>
  )
}

// memo prevent react from re-evaluting the component based on the props changes
// this applies also on the children tree 
export default React.memo(DemoOutput)