import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

//Form Validation
//Interact api
//Unit Testing


function BookingForm() {
    const [booking, setBooking] = useState({ date: "", time: "", guests: "", occasion: ["Birthday", "Anniversary"] })
    const [isSubmit, setSubmit] = useState(false)
    const occassion = ["Birthday", "Anniversary"]
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    const navigate = useNavigate();
    const options = {
        method: 'POST',
        body: booking.date,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    };
    console.log("setbooking", booking)



    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js', options)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    // } , [booking.date])

    const submitAPI = (formData)=> {
        console.log("inside",formData)
        return true;
    };

    function jsonToFormData(json) {
        const formData = new FormData();

        for (const key in json) {
            formData.append(key, json[key]);
        }

        return formData;
    }

    useEffect(() => {
        const jsonObject = booking;
        const formData = jsonToFormData(jsonObject);
        submitAPI(formData)
    }, isSubmit)




    const getBooking = () => {
        setSubmit(true)
        console.log("Booking", booking)
        navigate('/BookingConfirm')
    }
    return (
        <form className="frow">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => setBooking((prev) => ({ ...prev, date: e.target.value }))} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={(e) => { setBooking((prev) => ({ ...prev, time: e.target.value })) }}>
                {times.map((t) =>
                    <option value={t}>{t}</option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => { setBooking((prev) => ({ ...prev, guests: e.target.value })) }} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => { setBooking((prev) => ({ ...prev, occasion: e.target.value })) }}>
                {occassion.map((o) =>
                    <option value={o}>{o}</option>
                )}
            </select>
            <input type="button" value="Make Your reservation" aria-label="On Click" onClick={getBooking}></input>
        </form>)
}

export default BookingForm