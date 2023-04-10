import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import JobDetails from './Components/JobDetails/JobDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobFeatures.json')
      },
      // {
      //   path: 'jobDetails',
      //   element: <JobDetails></JobDetails>
      // },fetch(`jobFeatures.json/${params.jobDetailsId}`)
      {
        path: 'jobDetails/:jobDetailsId',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`jobFeatures.json/${params.jobDetailsId}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
