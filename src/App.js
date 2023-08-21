import React, { Component, useState } from 'react'
// import React from 'react'
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'

const App = () => {

    const [lightmode,setlightMode]=useState(true);
    const myStyle={
        backgroundColor:"white",
    }
    const myStyle2={
        backgroundColor:"black",
        color:"white"
    }
    
  return (
    <div style={lightmode===true?myStyle:myStyle2} className='min-h-[100vh] w-full h-fit'>

    <NavBar lightmode={lightmode} setlightMode={setlightMode}/>

    <TextForm lightmode={lightmode} setlightMode={setlightMode} />
      
    </div>
  )
}

export default App

