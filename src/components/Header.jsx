import React, {useState, useContext} from 'react'
import UserMenu from './UserMenu';
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder';

function Header() {

  const { state } = useContext(AppContext);
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
    toggleOrders ? setToggleOrders(!toggleOrders) : null
  }

  const handleOrdersToggle = () => {
    setToggleOrders(!toggleOrders)
    toggle ? setToggle(!toggle) : null
  }

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    
    <header className="w-full flex items-center shadow-sm fixed z-20 bg-gray-50">
      <nav className="relative w-full min-h-[9vh] flex flex-wrap items-center justify-between px-2 py-3 bg-white dark:bg-gray-700 dark:text-white">
        <div className="container p-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-3xl hover:text-[#4762fc] transition-colors font-montserrat font-bold"
              href="/"
            >
              BLUEBYTE
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none black:text-white"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-col flex-grow items-center justify-center gap-8" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-12 min-[320px]:max-md:pt-12">
              <li className="nav-item">
                  <div className='max-w-md mx-auto border-[1px] rounded-lg'>
                      <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden transition-shadow border-0">
                          <div className="grid place-items-center h-full w-12 text-gray-300 bg-gray-50">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                          </div>
                          <input
                          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-50 b-2 border-0"
                          type="text"
                          id="search"
                          placeholder="Search a product..." autoComplete='off'/>
                      </div>
                  </div>
              </li>
              <li className="flex justify-between">
                    <div className="mx-auto flex  items-center gap-8 min-[320px]:max-md:flex-col min-[320px]:max-md:gap-10">
                      <a href="/products" className="text-xl font-montserrat font-bold hover:text-[#4762fc]">Products</a>
                      <button className="flex items-center gap-2 hover:text-[#4762fc] transition-colors" onClick={handleToggle}>
                          <i className="fa-solid fa-circle-user text-2xl"></i>
                          <p className="text-xl font-montserrat font-bold">Login</p>
                      </button>
                      {toggle ? <UserMenu/> : null}
                    </div>
              </li>
              <li className='nav-item flex justify-center items-center pb-2 min-[320px]:max-md:flex-col min-[320px]:max-md:gap-10'>
                  <button className="flex items-center"><i className="fa-solid fa-cart-shopping text-2xl hover:text-[#4762fc] transition-colors" onClick={handleOrdersToggle}></i>
                    {state.cart.length > 0 ? 
                    <div>
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{state.cart.length}</p>
                    </div>: null}
                  </button>
                  {toggleOrders ? <MyOrder/> : null}
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    </header>

  );
}

export default Header




