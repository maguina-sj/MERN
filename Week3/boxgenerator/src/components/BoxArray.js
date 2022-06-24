import React from 'react'
import Box from './Box'

const BoxArray = (props) => {
  const {boxArray} = props;
  return (
    <div>
      {boxArray.map((box, i) =>(
        <Box key={i} box={box} />
      ))}
    </div>
  )
}

export default BoxArray