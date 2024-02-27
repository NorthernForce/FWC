import Navbar from "../components/Navbar.tsx";
import AutoDashboard from "../components/AutoDashboard.tsx";

export default function Auto() {
    return (
        <>
            <Navbar active={"auto"}/>
            <div className="main-container">
                <AutoDashboard />
            </div>
        </>
    )
}