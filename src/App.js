
import './App.css';
import React from 'react';
import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Products';
import Error from './pages/Error';
import SharedLayout from './components/SharedLayout';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashbord';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedProductLayout from './pages/SharedProductLayout';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
     <BrowserRouter>
     
        <Routes>
          <Route path ="/" element={<SharedLayout />} >
            <Route index element ={<Home />}/>
            <Route path="about" element={<About />} />
            <Route path='product' element={<SharedProductLayout />}>
              <Route index element={<Product />} />
              <Route path=':productId' element={<SingleProduct />} />
          </Route>
            
            <Route path='login' element={<Login setUser={setUser}></Login>} />
            <Route path='dashboard' element={<ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute> } />
            <Route path='*' element ={<Error />}/>
           </Route>



        </Routes>
    
     </BrowserRouter>
    
    
      
    </>
  );
}

export default App;
