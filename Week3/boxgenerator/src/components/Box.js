import React from 'react'

const Box = (props) => {
    const {box} = props;

  return (
    <div style = {{backgroundColor: box.backgroundColor, height:`${box.height}px`, width: `${box.width}px`}} >
        
    </div>
  )
}

export default Box