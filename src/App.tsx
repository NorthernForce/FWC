import './App.css';
import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.tsx";
import Teleop from "./routes/teleop.tsx";
import Auto from "./routes/auto.tsx";
import Service from "./routes/service.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
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
