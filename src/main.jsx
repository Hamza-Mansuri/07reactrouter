import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

import Github, {githubInfoLoader} from './components/Github/Github.jsx'

//Creating the Router
//IMP method createBrowserRouter

// const router = createBrowserRouter([
//   //created array array

//   //creating object
//   {
//     //Home ke andr AboutUs he, Home ke andr ontactUs he, to nesting ho rahi he.
//     path: '/',
//     element: <Layout />,
//     //parent layout
//     //andr children
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'github',
//         element: <Github />
//       }
//     ]
//   }
// ])

//second method

const router = createBrowserRouter(

  //Methods to be remembered
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}> 
    {/* parent ke andr children */}

      {/* Home me path EMPTY */}
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} >

        <Route path='secondpath'/>

      </Route>
      <Route path='contact' element={<Contact/>} />

                  {/* :ke baad ki value VERY IMP */}
                  {/* bcz facebook pe login kte he to id ke base pe data aata he, aur layout same hi rehta he. */}
      <Route path='user/:userid' element={<User />} />

      <Route 

      // agar kuch bhi API se call krna he, yaha se direct kr sakte he.
      loader = {githubInfoLoader}

      path='github' 
      element={<Github/>}
      
      />

    </Route>
  )
  
)

//steps:-
//1 mainme router create krna, aur niche router method ko return krna
//2 Header me link include krna

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* ek mthod aati he IMP to remmeber */}

    <RouterProvider router={router}/>

    {/* hum yaha pe app return nahi karegenge */}
    {/* <App /> */}
  </StrictMode>,
)
