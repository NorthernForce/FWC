import './App.css';
import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Teleop from "./routes/teleop.tsx";
import Auto from "./routes/auto.tsx";
import Service from "./routes/service.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Teleop />
    },
    {
        path: '/teleop',
        element: <Teleop />
    },
    {
        path: '/auto',
        element: <Auto />
    },
    {
        path: '/service',
        element: <Service />
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
