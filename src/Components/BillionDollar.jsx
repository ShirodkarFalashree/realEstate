import React from 'react'
import photo from '../assets/pictures/asset 9.jpeg'
const BillionDollar = () => {
  return (
   <div className="w-full h-[11800pxx] grid grid-cols-2">
  <div className="border border-black">
    <img src={photo} alt="" />
  </div>
  <div className="border border-black bg-white text-center">
    <h1 className='text-[76.8px] font-hero pt-40 px-20 leading-20'>The 9 Billion Dollar Woman  </h1>
    <p className='text-[16px] leading-8 px-16 font-basic mt-5'>With over $9 Billion in sales, Jade Mills has developed a global reputation as the top Los Angeles & Beverly Hills real estate agent. She is ranked as the #1 Agent Worldwide for Coldwell Banker. Due to her expertise in the Beverly Hills real estate market and her integrity, loyalty & professionalism, Jade is sought out by A-list celebrities, tech founders, and business leaders. Jade is frequently featured as a luxury real estate expert on national media and appears as a keynote speaker at real estate conferences around the globe. Contact Jade Mills to sell & find houses, gated estates, condos, mansions & luxury homes for sale in Beverly Hills, Malibu, Holmby Hills, Bel Air & more.</p>
   <button className="bg-black font-basic text-[12px] mt-3 text-white px-11 py-6 cursor-pointer transition">
          GET TO KNOW JADE →
        </button>
  </div>
</div>

  )
}

export default BillionDollar