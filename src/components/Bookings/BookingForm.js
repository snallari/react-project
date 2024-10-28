import { useState } from "react"

function BookingForm() {
    const [booking, setBooking] = useState({date:"", time:"",guests:"", occasion:["Birthday", "Anniversary"]})
    console.log("setbooking", booking)

    const getBooking=()=>{
        console.log("Booking", booking)
        setBooking({})
    }
    return (
        <form className="fcolumn">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => { setBooking((prev) => ({ ...prev, date: e.target.value })) }} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={(e) => { setBooking((prev) => ({ ...prev, time: e.target.value })) }}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => { setBooking((prev) => ({ ...prev, guests: e.target.value })) }} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => { setBooking((prev) => ({ ...prev, occasion: e.target.value })) }}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="button" value="Make Your reservation" onClick={getBooking}></input>
        </form>)
}

export default BookingForm