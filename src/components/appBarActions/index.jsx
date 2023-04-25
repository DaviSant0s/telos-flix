import React from 'react'

export default function AppBarActions({ actions }) {
  return (
    <div 
      style={{display: "flex",
      flexDirection: "row",
      gap: "30px"}
    }>

      {/* {texts.map((text) => (<h1>{text}</h1>))} */}
      {actions.map((element) => element)}

    </div>
  )
}
