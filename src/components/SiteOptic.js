import React from 'react'
import '../index.css'
import iconOne from '../images/features-icon-1.png'
import iconTwo from '../images/features-icon-2.png'
import iconThree from '../images/features-icon-3.png'
const SiteOptic = () => {
  return (
    <section className='site-optic'>
      <div className='container'>
        <div className='item-cont'>
          <div className='cards'>
            <span>01</span>
            <img src={iconOne} alt='icon-one' />
            <h2 className='text-center'>Trend Analysis</h2>
            <p className='text-center'>
              Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
              consectetur diam.
            </p>
            <a href='/' className='btn-primary text-center'>
              Read More
            </a>
          </div>
          <div className='cards'>
            <span>02</span>
            <img src={iconTwo} alt='icon-one' />
            <h2>Trend Analysis</h2>
            <p>
              Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
              consectetur diam.
            </p>
            <a href='/' className='btn-primary'>
              Discover More
            </a>
          </div>
          <div className='cards'>
            <span>03</span>
            <img src={iconThree} alt='icon-one' />
            <h2>Trend Analysis</h2>
            <p>
              Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
              consectetur diam.
            </p>
            <a href='/' className='btn-primary'>
              More Detail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteOptic
