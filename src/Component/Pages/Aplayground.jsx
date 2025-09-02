import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Aplayground = () => {
  return (
    <>
      <div className="w-full  mx-auto p-4 mt-14 md:mt-24">

        <div className='w-full rounded-2xl  bg-blue-50 p-4 mb-6 m-auto'>

          <Outlet />
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-around m-auto gap-6">
          <NavLink to='BMIcalc'>
            <div className="w-full max-w-md rounded-3xl bg-blue-50 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Learn something new!</h2>
                <p className="text-md text-blue-950 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
              <div className="bg-white rounded-3xl p-2 shadow-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#3B82F6" />
                        <path d="M18 12V24" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 18H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Grow skills!</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,</p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>

        </div>
      </div>
    </>
  )
}

export default Aplayground