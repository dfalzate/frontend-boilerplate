import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <div>
      <div>By Diego</div>
      Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
    </div>
  )
}

export default App
