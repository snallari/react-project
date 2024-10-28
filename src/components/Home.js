import Highlights from './Highlights';
import Main from './Main';
import Profile from './Profile';
import Footer from './Footer';
import Header from './Header'

function Home(){
    return(
    <div className='home'>
    <Header></Header>
    <Main></Main>
    <Highlights></Highlights>
    <Profile></Profile>
    <Main></Main>
    <Footer></Footer>
    </div>
    )
}
export default Home