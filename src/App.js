
import './App.css';
import Navbar from './compent/navbar/navbar'
import Main from './compent/Main/Main'
import OurService from './compent/OurService/ourService'
import Product from './compent/Product/Product'
import Sponser from './compent/Sponser/Sponser'
import {BrowserRouter ,Route} from 'react-router-dom'
import Login from './compent/Auth/Login'
import Security from './compent/OurService/Security'
import Catgory from './compent/Catgory/Catgory'
import Map from './compent/Map/Map'
import OurService2 from './compent/OurService2/OurService2'
import OurService03 from './compent/OurService2/OurService03'


function App() {
  return (
    <div >
      <BrowserRouter>

      <Route exact path="/login" render={()=><Login/>}></Route>
      {/* Security */}
      
      <Route exact path="/" render={()=><Navbar/>}></Route>
      <Route exact path="/" render={()=><Main/>}></Route>
      <Route exact path="/" render={()=> <OurService/>}></Route>
      <Route exact path="/" render={()=> <Security/>}></Route>
      {/* Catgory */}
      <Route exact path="/" render={()=> <Catgory/>}></Route>
      <Route exact path="/" render={()=>  <Product/>}></Route>
      {/* Map */}
      <Route exact path="/" render={()=><OurService2/>}></Route>
      <Route exact path="/" render={()=><OurService03/>}></Route>
      <Route exact path="/" render={()=>  <Map/>}></Route>
      <Route exact path="/" render={()=> <Sponser/>}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
