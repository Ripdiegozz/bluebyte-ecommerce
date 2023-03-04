import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import getUserCart from '../hooks/useGetUserCart'

function Checkout() {

  const { removeFromCart } = useContext(AppContext)

    const handleRemove = (item) => {
        removeFromCart(item)
  }

  const items = getUserCart()

  const totalOrder = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const total = items.reduce(reducer, 0)
    return total
}

  return (
<section>
  <h1 className="sr-only">Checkout</h1>

  <div className="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
    <div className="py-12 bg-gray-50 md:py-24">
      <div className="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
        <div className="flex items-center">
          <span className="w-10 h-10 bg-blue-700 rounded-full"></span>

          <h2 className="ml-4 font-medium text-gray-900">Bluebyte</h2>
        </div>

        <div>
          <p className="text-2xl font-medium tracking-tight text-gray-900">
            ${totalOrder()}
          </p>

          <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
          <div className="flow-root">
            <ul className="-my-4 divide-y divide-gray-100">
              {
                items.map(item => 
                  <div className="md:flex items-center py-8 border-t border-gray-200" key={item.id}>
                    <div className="w-1/4">
                    <img src={item.images[0]} alt={item.title} className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="md:pl-3 md:w-3/4 w-full">
                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">ID: {item.id}</p>
                    <div className="flex items-center justify-between w-full pt-1 text-black">
                        <p className="text-base font-black leading-none text-gray-800">{item.title}</p>
                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        </select>
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
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="py-12 bg-white md:py-24">
      <div className="max-w-lg px-4 mx-auto lg:px-8">
        <form className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div className="col-span-3">
            <label
              htmlFor="LastName"
              className="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input
              type="tel"
              id="Phone"
              className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700">
              Card Details
            </legend>

            <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
              <div>
                <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                <input
                  type="text"
                  id="CardNumber"
                  placeholder="Card Number"
                  className="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex -space-x-px">
                <div className="flex-1">
                  <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>

                  <input
                    type="text"
                    id="CardExpiry"
                    placeholder="Expiry Date"
                    className="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                  <input
                    type="text"
                    id="CardCVC"
                    placeholder="CVC"
                    className="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700">
              Billing Address
            </legend>

            <div className="mt-1 -space-y-px bg-white rounded-md shadow-sm">
              <div>
                <label htmlFor="Country" className="sr-only">Country</label>

                <select
                  id="Country"
                  className="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                >
                  <option>England</option>
                  <option>Wales</option>
                  <option>Scotland</option>
                  <option>France</option>
                  <option>Belgium</option>
                  <option>Japan</option>
                </select>
              </div>

              <div>
                <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>

                <input
                  type="text"
                  id="PostalCode"
                  placeholder="ZIP/Post Code"
                  className="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </fieldset>

          <div className="col-span-6">
            <button
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default Checkout