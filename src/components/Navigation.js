import "../App.css"
import logo from '../assets/logo.png'
import { Outlet, Link } from "react-router-dom";

function Navigation() {

    return (
    <>
    <nav>
        <ul className="dashboardNav">
            <li><img src={logo} height={100}/></li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li>Login</li>
        </ul>
    </nav>
    <Outlet/>
    </>
    )


}
export default Navigation