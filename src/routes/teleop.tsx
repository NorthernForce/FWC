import Navbar from "../components/Navbar.tsx";
import Dashboard from "../components/Dashboard.tsx";

export default function Teleop() {
    return (
        <>
            <Navbar active="teleop"/>
            <div className="main-container">
                <Dashboard/>
            </div>
        </>
    )
}