import React from 'react'

const OpenCards = () => {
    return (
        <>
            <div className="w-full mx-auto p-4">
                <div className="flex justify-around flex-col md:flex-row gap-6">
                    <div className="w-full max-w-md rounded-3xl bg-green-50 p-8 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-extrabold text-green-900 mb-6">Stay in the loop!</h2>
                            <p className="text-xl text-green-950 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="18" fill="#4B83F2" />
                                            <path d="M14 15C14 13.8954 14.8954 13 16 13H20C21.1046 13 22 13.8954 22 15V23C22 24.1046 21.1046 25 20 25H16C14.8954 25 14 24.1046 14 23V15Z" fill="#FBC8F3" />
                                            <path d="M14 19L18 17L22 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Lorem ipsum!</h3>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-md rounded-3xl bg-blue-50 p-8 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Learn something new!</h2>
                            <p className="text-xl text-blue-950 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
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
                    <div className="w-full max-w-md rounded-3xl bg-red-50 p-8 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl font-extrabold text-red-900 mb-6">Hot deals today!</h2>
                            <p className="text-xl text-red-950 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        </div>
                        <div className="bg-white rounded-3xl p-6 shadow-lg">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                        <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="18" fill="#EF4444" />
                                            <path d="M13 18L17 22L23 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Save now!</h3>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenCards