import React from 'react'

import { RouterProvider } from 'react-router-dom'
import { router } from './components/Route/Route'

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App