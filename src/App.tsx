import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

interface IApp {}

const App: React.FC<IApp> = () => {

  return (
    <div className='main'>
      <div className='title'><h1>By Diego Alzate</h1></div>
      <div>
        Your <FontAwesomeIcon icon={faCoffee} className='faCoffee' /> is hot and ready!
      </div>
    </div>
  )
}

export default App
