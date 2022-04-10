import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Inventory/Login/Login';
import Orders from './Components/Orders/Orders';
import Error from './Components/PageNotFound/Error';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/home' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
