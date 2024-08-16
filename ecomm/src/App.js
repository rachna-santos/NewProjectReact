import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import Footer from './Componets/Footer';
import ProductState from './Context/Product/ProductState';
import Register from './Componets/Register';
import Login from './Componets/Login';
import Checkpro from './Componets/Checkpro';

function App() {
  return (
  <ProductState>
    <Router>
    <>
    <Navbar/>
   <div className="container-fluid">
   <Routes>
   <Route exect path='/home' element={<Home/>}/>
   <Route exect path='/Reg' element={<Register/>}/>
   <Route exect path='/login' element={<Login/>}/>
   <Route exect path="/check/:ProductId" element={<Checkpro/>}/>
   </Routes>
   </div>
   <Footer/>
   </> 
   </Router>
   </ProductState>
  );
}

  export default App;
