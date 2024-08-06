import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import Footer from './Componets/Footer';
import ProductState from './Context/Product/ProductState';
import Register from './Componets/Register';
import Login from './Componets/Login';
import CheckVeriation from './Componets/CheckVeriation';


function App() {
  return (
  <ProductState>
      <Router>

    <>
    <Navbar/>
   <div className="container">
   <Routes>
   <Route exect path='/home' element={<Home/>}/>
   <Route exect path='/Reg' element={<Register/>}/>
   <Route exect path='/login' element={<Login/>}/>
  <Route exect path='/checkprocess' element={<CheckVeriation/>}/> 

   </Routes>
   </div>
   <Footer/>
   </>
   </Router>
   </ProductState>
  );
}

export default App;
