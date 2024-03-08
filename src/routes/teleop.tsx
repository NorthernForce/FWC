import Navbar from "../components/Navbar.tsx";
import TeleDashboard from "../components/TeleDashboard.tsx";

export default function Teleop() {
    return (
        <>
            <Navbar active="teleop"/>
            <div className="main-container">
                <TeleDashboard />
            </div>
        </>
    )
}