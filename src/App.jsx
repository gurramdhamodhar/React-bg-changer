import { useState } from 'react'
import './App.css'

function App() {

  const [color,setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div class="bg-white rounded-lg p-6 shadow-lg">
        <div class="flex space-x-4 items-center justify-center">
          <button class=" text-white rounded-full px-4 py-2" style={{backgroundColor:'red'}} onClick={() => setColor('red')}>red</button>
          <button class=" text-white rounded-full px-4 py-2"  style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}>blue</button>
          <button class=" text-white rounded-full px-4 py-2"  style={{backgroundColor:'green'}} onClick={() => setColor('green')}>green</button>
          <button class=" text-white rounded-full px-4 py-2"  style={{backgroundColor:'black'}} onClick={() => setColor('black')}>black</button>
          <button class=" text-black rounded-full px-4 py-2"  style={{backgroundColor:'yellow'}} onClick={() => setColor('yellow')}>yellow</button>
        </div>
  </div>
      </div>
    </>
  )
}

export default App
