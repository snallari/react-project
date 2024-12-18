//import logo from  '../../public/logo192.png'
import Button from '@mui/material/Button';
import img from '../assets/book.png';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate=useNavigate()
    const reserve=()=>{
        navigate("/reserve")
    }

    return <main className="main">
        <section>
            <article className='ll'>
                <aside>
                    <div className='frow'>
                        <div className='fcolumn'>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>We are family owned
                                Mediterranean restaurant,
                                focused on traditional
                                recipes served with a modern
                                twist.</p>
                            <Button variant="contained" onClick={reserve}>Reserve a Table</Button>
                        </div>
                        <div className='fcolumn'>
                            <img src={img} />
                        </div>
                    </div>

                </aside>
            </article>
        </section>
    </main>
}
export default Main