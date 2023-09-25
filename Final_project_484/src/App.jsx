import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const imageUrl = 'https://example.com/image.jpg'

  return (
    <div>
      <h1>Tech Stack</h1>
      <img src={imageUrl} alt="Description of the image" />
    </div> 
  )
}

export default App
