import React, {useContext, useState} from 'react'
import AppContext from '../context/AppContext'
import getUserCart from '../hooks/useGetUserCart';

function MyOrder() {
  
    const { state } = useContext(AppContext)

    const [toggleOrders, setToggleOrders] = useState(true);

    const totalOrder = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const total = state.cart.reduce(reducer, 0)
        return Math.round(total) 
    }

    const items = getUserCart()
    state.cart = items

    const { removeFromCart } = useContext(AppContext)

    const handleRemove = (item) => {
        removeFromCart(item)
    }

    const handleOrdersToggle = () => {
        setToggleOrders(!toggleOrders)
    }

  return (
    <div className={!toggleOrders ? 'hidden' : null}>
        <div className="w-full h-full bg-black bg-opacity-50 top-0 right-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
            <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
            <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p className="text-sm pl-2 leading-none" onClick={() => handleOrdersToggle()}>Back</p>
                </div>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
                {state.cart.map( item =>    
                    <div className="md:flex items-center py-8 border-t border-gray-200" key={item.id}>
                    <div className="w-1/4">
                    <img src={item.image} alt={item.title} className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="md:pl-3 md:w-3/4 w-full">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 py-4">ID: {item.id}</p>
                    <div className="flex items-center justify-between w-full pt-1 text-black">
                        <p className="text-base font-black leading-none text-gray-800">{item.title}</p>
                    </div>
                    <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={ () => handleRemove(item)}>Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">${item.price}</p>
                    </div>
                    </div>
                </div>
                )}
                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen    px-14 py-20 justify-between overflow-y-auto">
                    <div className='bg-gray-200 p-6'>
                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                    <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800">Subtotal</p>
                        <p className="text-base leading-none text-gray-800">${totalOrder()}</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">Shipping</p>
                        <p className="text-base leading-none text-gray-800">$30</p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">Tax</p>
                        <p className="text-base leading-none text-gray-800">$35</p>
                    </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="flex w-full items-center pb-6 pt-6 justify-between lg:pt-20">
                            <p className="text-2xl leading-normal text-gray-800 pb-6 pt-6">Total</p>
                            <p className="text-2xl font-bold leading-normal text-right text-gray-800">${totalOrder() + 35 + 30}</p>
                        </div>
                        <a href="/checkout" className="w-[50%] w-full p-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white text-center">
                        Checkout
                        </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default MyOrder  