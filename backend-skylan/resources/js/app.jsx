import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = [
    {
        path: '/',
        element: <div>Hey</div>,      
    },
    {
        path: '/gog',
        element: <div>Gog pussy</div>,      
    }
];

createRoot(document.getElementById('root')).render(
    <RouterProvider router={createBrowserRouter(routes)}/>
)