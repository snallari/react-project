import Stack from '@mui/material/Stack';
import "../App.css";
import Review from '../components/Review.js'

function Profile() {
    var profile = [{
        id: 1,
        name: "Shruti",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
    },
    {
        id: 2,
        name: "Sai",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
 
    },
    {
        id: 3,
        name: "Ram",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
    },
    {
        id: 4,
        name: "Ram",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
    },{
        id: 5,
        name: "Shruti",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
    },
    {
        id: 6,
        name: "Sai",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
 
    },
    {
        id: 7,
        name: "Ram",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
    },
    {
        id: 8,
        name: "Ram",
        ratings: 4,
        review: "I have now been twice with my fiancee. The first time we also brought my brother. If I based my opinion on my first visit, I probably wouldn't have come back despite how delicious the wings were. I felt (as a female) our waitress…"
    }]
    return <>
      <h1>Testimonals</h1>
    <div className='frow'>
            {profile.map((v) =>

                <Review v={v} key={v.id}></Review>
            )}
   </div>
   </>
}

export default Profile