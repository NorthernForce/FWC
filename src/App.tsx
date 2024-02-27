import './App.css';
import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.tsx";
import Teleop from "./routes/teleop.tsx";
import Auto from "./routes/auto.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
    },
    {
        path: '/teleop/',
        element: <Teleop />
    },
    {
        path: '/auto/',
        element: <Auto />
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
