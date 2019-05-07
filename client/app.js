import React from 'react'

import { Navbar } from './components'
import Routes from './routes'

const App = (props) => {
  console.log('THIS IS LOGGING IN THE APPPPPPPPPPPPPPP', props)
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
