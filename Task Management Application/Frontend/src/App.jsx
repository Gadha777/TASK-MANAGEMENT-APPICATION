import React from 'react'
import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'; // Adjust the path as needed
import Tasks from './pages/Tasks';

const App = () => {
  const router=createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<Tasks />} />

    </>
  ))
  return (
  <RouterProvider router={router}/>
  )

};

export default App;










// import React from 'react'
// import Navbar from './components/Navbar'
// import Body from './components/Body'

// const App = () => {
//   return (
// <>

//       <Navbar />
//       <Body/>

// </>
//   )
// }

// export default App