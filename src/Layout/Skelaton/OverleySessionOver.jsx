import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OverleySessionOver = () => {
    const navigate = useNavigate()
    
  return (
    <>
    <div className="fixed font-['poppins'] inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4">Sesi Anda Telah Habis</h2>
        <p className="text-gray-700 mb-6">Silakan login kembali untuk melanjutkan.</p>
        <button
         onClick={()=>navigate("/login")}
          className="px-4 py-2 bg-[#252B48] text-white rounded-md  focus:outline-none"
        >
          Login
        </button>
      </div>
    </div>
    
    </>
  )
}
