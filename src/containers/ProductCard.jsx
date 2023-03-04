import React, {useContext, useState} from 'react'
import AppContext from '../context/AppContext';
import useGetUserCart from "../hooks/useGetUserCart"

const productCard = (props)  => {
  
  const { addToCart, state } = useContext(AppContext);

  const [added, setAdded] = useState(false)

  const items = useGetUserCart();

  state.cart = items;

	const handleClick = item => {
		added ? removeFromCart(item) : addToCart(item);
    setAdded(!added);
	}


  return (
<a href='#' className="relative block overflow-hidden group w-[25%] border-2 p-2 rounded-lg min-[320px]:max-md:w-[75%]">
  <button
    className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src={props.images}
    alt={props.id}
    className="object-fit w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative p-6 flex flex-col gap-3 min-[320px]:max-md:gap-4">

    <h3 className="mt-4 text-lg font-medium text-gray-900">{props.title}</h3>

    <p className="mt-1.5 text-md text-gray-700">${props.price}</p>

    <button
      className={"block w-full p-4 text-sm text-white font-medium transition bg-[#4762fc] rounded hover:scale-105" + (added ? " bg-red-700" : null)} onClick={() => handleClick(props)}
    >
       {added ? <p>Delete from cart</p> : <p>Add to cart</p> }
    </button>
  </div>
</a>
  )
}

export default productCard