//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Main from './components/Main';
import Profile from './components/Profile';
import Footer from './components/Footer'


function App() {
  return (
    <div className='home'>
    <Header></Header>
    <Main></Main>
    <Highlights></Highlights>
    <Profile></Profile>
    <Main></Main>
    <Footer></Footer>
    </div>
  );
}

export default App;
