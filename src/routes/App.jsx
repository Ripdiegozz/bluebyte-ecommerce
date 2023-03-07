import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Register from '../pages/Register'
import Login from '../pages/Login'
import CheckoutPage from '../pages/Checkout'
import ProductDetail from '../pages/ProductDetail'

import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

import './App.css'

function App() {  

  const initialState = useInitialState();  

  return (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/checkout' element={<CheckoutPage/>}/>
              <Route exact path="/product/:id" element={<ProductDetail/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
  )
}

export default App
