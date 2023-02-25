import React, {useState, useContext} from 'react'
import UserMenu from './UserMenu';
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder';

function Header() {

  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);
  const [toggleOrders, setToggleOrders] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
    toggleOrders ? setToggleOrders(!toggleOrders) : null
  }

  const handleOrdersToggle = () => {
    setToggleOrders(!toggleOrders)
    toggle ? setToggle(!toggle) : null
  }

  return (
    <header className="w-full flex items-center min-h-[9vh] shadow-sm fixed z-20 bg-gray-50">
      <nav className="flex w-full h-full justify-center">
          <ul className="flex w-[90%] h-full gap-[1rem] justify-center items-center">
              <li className="w-[20%]">
                  <a href="/" className="text-center">
                      <h1 className="text-3xl hover:text-[#4762fc] transition-colors font-montserrat font-bold">BLUEBYTE</h1> 
                  </a>
              </li>
              <li className="w-[40%]"> 
                <div className='max-w-md mx-auto border-[1px] rounded-lg'>
                    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden transition-shadow border-0">
                        <div className="grid place-items-center h-full w-12 text-gray-300 bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-50 b-2 border-0"
                        type="text"
                        id="search"
                        placeholder="Buscar un producto..."/> 
                    </div>
                </div>
              </li>
              <li className="w-[25%] flex justify-between">
                  <div className="mx-auto flex gap-6 items-center">
                    <a href="/products" className="text-xl font-montserrat font-bold hover:text-[#4762fc]">Products</a>
                    <a href="#" className="flex items-center gap-2 hover:text-[#4762fc] transition-colors" onClick={handleToggle}>
                        <i className="fa-solid fa-circle-user text-2xl"></i>
                        <p className="text-xl font-montserrat font-bold">Entrar</p>
                    </a>
                  </div>
              </li>
              <li>
                <a href="#" className="flex items-center"><i className="fa-solid fa-cart-shopping text-2xl hover:text-[#4762fc] transition-colors" onClick={handleOrdersToggle}></i>
                {state.cart.length > 0 ? <div className='absolute top-2 bg-[#4762fc] px-[5px] rounded-full text-xs right-[7.5rem] text-white'>{state.cart.length}</div> : null}
                </a>
              </li>
              {toggle ? <UserMenu/> : null}
              {toggleOrders ? <MyOrder/> : null}
          </ul>
        
      </nav>
    </header>
    )
}

export default Header




