import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './css/router.css'
import './css/techno.css'
import './css/crew.css'
import './css/destination.css'
import './css/home.css'
import Base from './layouts/Base'
import NotFound from './pages/NotFound'
import Technology from './pages/Technology'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
 


const router = createBrowserRouter([
    {
        path: '/',
        element: <Base />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,    
                element: <Home />,
            },
            {
                path: 'teknoloji',
                element: <Technology />
            },
            {
                path: 'ekip',
                element: <Crew />
            },
            {
                path: 'destinasyon',
                element: <Destination />
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
