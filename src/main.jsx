import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import JobDetails from './Components/JobDetails/JobDetails'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Statistics from './Components/Statistics/Statistics'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import { productsAndCartData } from './Components/Loader/GetCart&loadData'
import ApplyJob from './Components/ApplyJobs/ApplyJob'
import Blog from './Components/Blog/Blog'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobFeatures.json')
      },
      {
        path: 'jobDetails',
        element: <JobDetails></JobDetails>
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/jobFeatures.json')
      },
      {
        path: 'appliedJobs/:id',
        element: <AppliedJobs></AppliedJobs>,
        loader: productsAndCartData
      },
      {
        path: 'appliedJobs',
        element: <ApplyJob></ApplyJob>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
