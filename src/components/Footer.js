import '../App.css'
import food from '../assets/mussles.png'
function Footer() {

    const values = [{
        id:1,
        title: "DoorMat Navigation",
        subTitle: ["Home", "About", "Menu", "Reservations", "Order Online", "Login"],
    },
    {
        id:2,
        title: "Contact"
    },
    {
        id:3,
        title: "Social Media Links"
    }]
    return <footer>
        <div className="frow">
             <div className="fcolumn">
                <img src={food}/>
             </div>
            {values.map((v) => (
                <div className="fcolumn" key={v.id}>
                   {v.title}
                   <p>Address</p>
                   <p>phone number</p>
                   <p>email</p>
                </div>
            ))}
        </div>
    </footer>
}
export default Footer