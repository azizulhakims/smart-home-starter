import React from 'react'
import {RouterProvider } from 'react-router-dom'

import { router } from './utils/Routes'


function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App
