import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
{stats.map((stats) => (
  <div key={stats.id} className={`flex-1 flex justify-start items-center m-3 flex-row`}>
    <h4 className='font-poppins font-semibold text-[30px] leading-[43px] xs:text-[40px] text-white xs:leading-[53px]'>
      {stats.value}
    </h4>
    <p className='font-poppins font-normal text-[15px] leading-[21px] xs:text-[20px] text-gradient ml-3 uppercase xs:leading-[26px]'>{stats.title}</p>
  </div>
))}
    </section>
  )
}

export default Stats
