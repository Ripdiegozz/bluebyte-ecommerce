import React from 'react'

function featuringLayout(props) {
  return (
<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
        <div className="max-w-md mx-auto text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Electronics</h2>

            <p className="mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              rerum quam amet provident nulla error!
            </p>
          </header>

          <a
            href="#"
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href={props.Url} className="block group">
              <img
                src={props.image}
                alt={props.title}
                className="object-fit w-full rounded aspect-square"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  {props.name}
                </h3>

                <p className="mt-1 text-sm text-gray-700">${props.price}</p>
              </div>
            </a>
          </li>

          <li>
            <a href={props.UrlTwo} className="block group">
              <img
                src={props.imageTwo}
                alt={props.titleTwo}
                className="object-fit w-full rounded aspect-square"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  {props.nameTwo}
                </h3>

                <p className="mt-1 text-sm text-gray-700">${props.priceTwo}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

  )
}

export default featuringLayout