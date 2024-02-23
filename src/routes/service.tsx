import Navbar from "../components/Navbar.tsx";
import ServiceDashboard from "../components/ServiceDashboard.tsx";

export default function Service() {
    return (
        <>
            <Navbar active="service"/>
            <div className="main-container">
                <ServiceDashboard />
            </div>
        </>
    )
}