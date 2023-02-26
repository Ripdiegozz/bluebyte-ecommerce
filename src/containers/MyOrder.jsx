import React, {useContext} from 'react'
import AppContext from '../context/AppContext'


function MyOrder() {
  
    const { state } = useContext(AppContext)

    const totalOrder = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price

        const total = state.cart.reduce(reducer, 0)

        return total
    }

    const { removeFromCart } = useContext(AppContext)

    const handleRemove = (item) => {
        removeFromCart(item)
    }

  return (
    <div className="absolute rounded-b z-20 top-[5rem] right-0 min-[320px]:max-md:static">
        <div className="shadow-xl w-64 bg-gray-700">
            {state.cart.map( item =>    

                <div className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100 dark:bg-gray-700 dark:divide-gray-600 dark:text-white hover:bg-gray-800" key={item.id}>
                    <div className="p-2 w-12"><img src={item.images} alt={item.title}/>
                    </div>
                    <div className="flex-auto text-sm w-32">
                        <div className="font-bold">{item.title}</div>
                        <div className="text-gray-400">Id: {item.id}</div>
                    </div>
                    <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700" onClick={() => handleRemove(item)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        ${item.price}
                    </div>
                </div>
            )}
        </div>
        <div className="p-4 justify-center flex bg-white dark:bg-gray-700 dark:divide-gray-600 dark:text-white hover:bg-gray-800">
            <a href='/checkout' className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 
            border duration-200 ease-in-out border-teal-600 transition"
            >
                Checkout ${totalOrder()}
            </a>
        </div>
    </div>
  )
}

export default MyOrder  