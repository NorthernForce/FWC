import './css/NavbarStyles.css'
import {Component} from "react";

class Navbar extends Component<{ active: "auto" | "teleop" | "service" }> {
    render() {
        let {active} = this.props;
        return (
            <>
                <ul>
                    <li><a href="/auto" className={active == "auto" ? "active" : ""}>Auto</a></li>
                    <li><a href="/teleop" className={active == "teleop" ? "active" : ""}>Teleop</a></li>
                    <li><a href="/service" className={active == "service" ? "active" : ""}>Service</a></li>
                </ul>
            </>
        )
    }
}

export default Navbar;