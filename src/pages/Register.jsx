import React from 'react'
import Layout from '../components/Layout'


function Register() {
  return ( 
    <Layout>
<section className="pt-8 pb-4 pb-24 mx-auto max-w-7xl">
  <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
    <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Create your Free Account</h1>
    <p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
      Already have an account?
      <a href="/login" className="text-blue-700 hover:text-blue-900">Sign in</a>
    </p>
    <form className="mt-8 space-y-4">
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">Name</span>
        <input className="p-3 border-2 rounded-xl w-[75%]" type="text" placeholder="Your full name" required />
      </label>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
        <input className="p-3 border-2 rounded-xl w-[75%]" type="email" placeholder="Ex. james@bond.com" inputMode="email" required />
      </label>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
        <input className="p-3 border-2 rounded-xl w-[75%]" type="password" placeholder="••••••••" required />
      </label>
      <label className="block">
        <span className="block mb-1 text-xs font-medium text-gray-700">Confirm Password</span>
        <input className="p-3 border-2 rounded-xl w-[75%]" type="password" placeholder="••••••••" required />
      </label>
      <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Sign Up" />
    </form>

    <p className="my-5 text-xs font-medium text-center text-gray-700">
      By clicking "Sign Up" you agree to our
      <a href="#" className="text-blue-700 hover:text-blue-900">Terms of Service</a>
      and
      <a href="#" className="text-blue-700 hover:text-blue-900">Privacy Policy</a>.
    </p>
  </div>
</section>


    </Layout>
  )
}

export default Register