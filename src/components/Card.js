import { Box, Button, Stack } from '@mui/material';
import food from '../assets/food.jpg';
import { useNavigate } from "react-router-dom";


function Card(props) {
    const navigate = useNavigate();
    const { title, description, price} = props.v
    console.log(`title ${title}`)

    const goToDelivery=()=>{
        navigate("/order")
    }

    return (<Box component="section" sx={{ p: 3}} className='cards'>
       <Stack><h1>{title} <span> ${price} </span></h1> 
        <img src={food}/>
        <h4>{description}</h4>
        <Button variant="text" onClick={goToDelivery}>Order a Delivery</Button>
        </Stack> 
    </Box>
    )
}
export default Card