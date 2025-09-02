import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen ">
                <div className="relative w-24 h-24">
                    {/* Outer Half-Circle */}
                    <div className=" border-t-4 border-r-4 border-transparent border-t-blue-500 border-r-blue-500 origin-center rotate-45
    absolute inset-0 rounded-full    border-b-transparent border-l-transparent animate-spin" />

                    {/* Inner Half-Circle (Opposite Spin) */}
                    <div className="absolute inset-4 rounded-full border-t-4 border-r-4 border-blue-500 border-b-transparent border-l-transparent animate-[spin_1s_linear_reverse_infinite]" />
                </div>
            </div>
        </>
    )
}

export default Loader