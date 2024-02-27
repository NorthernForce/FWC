import './css/NavbarStyles.css'
import {Component} from "react";
import {NavLink} from "react-router-dom";

class Navbar extends Component<{ active: "auto" | "teleop" }> {
    render() {
        let {active} = this.props;
        return (
            <>
                <ul>
                    <li><NavLink to="/auto" className={active == "auto" ? "active" : ""}>Auto</NavLink></li>
                    <li><NavLink to="/teleop" className={active == "teleop" ? "active" : ""}>Teleop</NavLink></li>
                </ul>
            </>
        )
    }
}

export default Navbar;