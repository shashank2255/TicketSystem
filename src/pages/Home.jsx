// import '../App'
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainDash from '../components/MainDash/MainDash';

import Sidebar  from '../components/sidebar/Sidebar';
const Home = () => {
  return (
    <div className="App">
    <div className="AppGlass">

     <Sidebar/>
     <MainDash/>
    
    </div>
   </div>
  ) 
}

export default Home
