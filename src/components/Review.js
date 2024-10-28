import { Rating, Box } from '@mui/material';
import { useState } from 'react';
import logo from '../assets/logo.png'
import '../App.css'

function Review(props) {
    const { name, rating, review } = props.v
    const [intialRating, setRating] = useState(rating)
    return <>
        <Box component="section" sx={{ p: 2}} className='cards'>
            <div className='fcolumn'>
                <Rating name="simple-controlled" value={intialRating} onChange={(event, newValue) => { setRating(newValue); }} />
                <div className='frow'><strong>{name}</strong> <img src={logo} /></div>
                <div className='fhorizonal'><p>{name}</p></div>
            </div>
        </Box>
    </>
}

export default Review