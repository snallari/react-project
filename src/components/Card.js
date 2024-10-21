import { Box, Button } from '@mui/material';

function Card(props) {
    const { title, description, price, image} = props.v
    console.log(`title ${title}`)
    return (<Box component="section" sx={{ p: 3}} className='cards'>
        <strong>{title}</strong> ${price}
        <img src={image}/>
        <p>{description}</p>
        <Button variant="text">Order a Delivery</Button>
    </Box>
    )
}
export default Card