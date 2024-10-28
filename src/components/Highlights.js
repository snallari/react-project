import {Button, Stack} from '@mui/material';
import food from '../assets/food.jpg';
import Card from './Card.js';
import "../App.css";

function HighLights() {
    var menu = [{
        id: 1,
        title: "Greek Salad",
        description: "Quarter Chicken Marinated with PERi-PERi Sauce and GrilledThe famous greek salad of crispy lettuce, peppers",
        image: '../assets/food.jpg',
        price: 9
    },
    {
        id: 2,
        title: "Greek Salad",
        description: "Quarter Chicken Marinated with PERi-PERi Sauce and GrilledThe famous greek salad of crispy lettuce, peppers",
        image:'../assets/food.jpg',
        price: 9
    },
    {
        id: 3,
        title: "Greek Salad",
        description: "Quarter Chicken Marinated with PERi-PERi Sauce and GrilledThe famous greek salad of crispy lettuce, peppers",
        image: '../assets/food.jpg',
        price: 9
    },
    {
        id: 4,
        title: "Greek Salad",
        description: "Quarter Chicken Marinated with PERi-PERi Sauce and GrilledThe famous greek salad of crispy lettuce, peppers",
        price: 9
    }]
    return <>
    <div className='frow'><h1>Specials!</h1>  <Button variant="contained" >Reserve a Table</Button></div>
        <div className='frow'>
            {menu.map((v) =>
            <Card v={v} key={v.id}></Card>
            )}
        </div></>
}

export default HighLights