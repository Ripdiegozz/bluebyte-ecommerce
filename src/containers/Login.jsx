import React, {useRef} from 'react'

export const loginCard = () => {

    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(form.current);

        const data = {
            email: formData.get('email'),
            password: formData.get('password'),
            rememberUser: formData.get('rememberUser')
        }

        console.log(data)

    }

    const rememberUser = () => {


    }

    return (
        <section>
        <div className="px-0 py-20 mx-auto max-w-8xl sm:px-4">
            <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
            <h1 className="mb-4 text-2xl font-semibold text-left text-gray-900 text-center p-4">Log in to your account</h1>
            <form className="mb-8 space-y-4 flex flex-col items-center" ref={form}>
                <label className="block">
                    <span className="block mb-1 text-md font-medium text-gray-700">Email</span>
                    <input className="p-3 border-2 rounded-xl w-[100%]" type="email" placeholder="Ex. james@bond.com" inputMode="email" name='email' required />
                </label>
                <label className="block">
                    <span className="block mb-1 text-md font-medium text-gray-700">Password</span>
                    <input className="p-3 border-2 rounded-xl w-[100%]" type="password" placeholder="••••••••" name='password' required />
                </label>
                <input type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-6 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Login" onClick={handleSubmit}/>
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center">
                        <input id="remember_me" name="rememberUser" type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="/recover-password" className="text-indigo-400 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
            </form>
            <div className="space-y-8">
                <div className="text-center border-b border-gray-200 leading-[0]">
                <span className="p-2 text-md font-semibold tracking-wide text-gray-600 uppercase bg-white leading-[0]">Or</span>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                    <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                    </button>

                    <p>Dont have an account? <a href="/register" className='text-blue-700'>Sign Up!</a></p>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default loginCard

