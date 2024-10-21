import "../App.css"
import logo from '../assets/logo.png'

function Navigation() {
    return <nav>
        <ul className="dashboardNav">
            <li><img src={logo} height={100}/></li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
}
export default Navigation