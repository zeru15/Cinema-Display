import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import  Home  from './Pages/Home';
import Cinemas from './Pages/Cinemas'
import Movies from './Pages/Movies';
import Schedule from './Pages/Schedule'
import Tickets from './Pages/Tickets'
import FoodsAndDrinks from './Pages/FoodsAndDrinks'
import ContactUS from './Pages/ContactUS';
import ErrorPage from './Pages/ErrorPage';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Routes>
        <Route path= '/' element= {<Home/>}/>
        <Route path= '/home' element= {<Home/>}/>
        <Route path= '/movies' element= {<Movies/>}/>
        <Route path= 'schedule' element= {<Schedule/>} />
        <Route path= 'tickets' element= {<Tickets/>}/>
        <Route path= 'cinemas' element= {<Cinemas/>}/>
        <Route path= 'foodsanddrinks' element= {<FoodsAndDrinks/>}/>
        <Route path= 'contactus' element= {<ContactUS/>}/>
        <Route path= '*' element= {<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


