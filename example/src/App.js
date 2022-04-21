import React from 'react'

import { Button } from 'kodtestui'
import 'kodtestui/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        alignItems: 'center'
      }}
    >
      <div style={{ margin: '10px' }}>
        <Button type='primary'>Primary</Button>
      </div>
      <div style={{ margin: '10px' }}>
        <Button type='dashed'>Dashed</Button>
      </div>
      <div style={{ margin: '10px' }}>
        <Button type='text'>Text</Button>
      </div>
      <div style={{ margin: '10px' }}>
        <Button type='link'>Link</Button>
      </div>
    </div>
  )
}

export default App
