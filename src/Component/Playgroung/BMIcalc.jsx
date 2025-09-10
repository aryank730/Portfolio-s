import React, { useState } from 'react'

const BMIcalc = () => {

    const [height, setHeight] = useState("")
    const [waight, setWaight] = useState("")
    const [bmi, setBmi] = useState("")
    const [message, setMessage] = useState("")

    const calcBmi = (e) => {
        e.preventDefault();

        if (!height || !waight) {
            setMessage("Please Enter Height and Waight Both")
            return;
        }

        const heightinMeter = height / 100;
        const bmiValue = (waight / (heightinMeter * heightinMeter)).toFixed(2);
        setBmi(bmiValue)

        if (bmiValue < 18.5) {
            setMessage("Under-Weight")
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9 ) {
            setMessage("prefect BMI")
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            setMessage("Over_weight")
        } else {
            setMessage("observation")
        }
    }

    return (
        <>
            <form className='bg-white p-4 mt-24 rounded-2xl justify-center align-center'>
                <label htmlFor='high'>Height (cm):</label> 
                <input   id='high' className='p-2 border-black bg-gray-50 outline-blue-400 m-4' type="text" onChange={(e) => setHeight(e.target.value)} value={height} placeholder='Enter you Height' /><br />
                
                <label htmlFor='wigh'>Weight (KG):</label>
                <input id='wigh' className='p-2 border-black bg-gray-50 outline-blue-400 m-4' type="text" onChange={(e) => setWaight(e.target.value)} value={waight} placeholder='Enter Your Waight' /> <br />
                <button className='bg-gray-300 p-2 rounded-lg align-center hover:bg-gray-500 hover:text-white duration-350' onClick={calcBmi}>Calculate BMI</button>

                {bmi && (
                    <div className='bg-emerald-50 text-center w-auto m-2 rounded-lg'>
                         {/* BMI Graph */}
        <svg width="200" height="200" viewBox="0 0 200 200" className='mx-auto my-4'>
            <circle
                cx="100"
                cy="100"
                r="90"
                stroke="#e5e7eb"
                strokeWidth="20"
                fill="none"
            />
            <circle
                cx="100"
                cy="100"
                r="90"
                stroke={getBmiColor(bmi)}
                strokeWidth="20"
                fill="none"
                strokeDasharray={`${(bmi / 40) * 565}, 565`} 
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
            />
            <text x="100" y="110" textAnchor="middle" fontSize="16" fill="#333">
                BMI
            </text>
        </svg>

        
                        <h3>BMI : {bmi}</h3>
                        <div>You are : {message}</div>
                    </div>
                )}
            </form>
        </>
    )
}

export default BMIcalc