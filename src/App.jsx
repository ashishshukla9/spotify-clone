import React from 'react'
import Sidebar from './Components/Sidebar'
import Players from './Components/Players'
import Display from './Components/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Players />

    </div>

  )
}

export default App
