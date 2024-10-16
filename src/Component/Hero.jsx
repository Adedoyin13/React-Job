import React from 'react'

const Hero = ({title = 'Become a React Dev Today!', subtitle = 'Find the React Job that fits your skill set.'}) => {
  return (
    <section className='bg-indigo-700 py-20 mb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className="text-center">
                <h1 className='text-4xl font-extrabold text-white sm:5xl md:text-6xl '>
                  {/* Become a React Dev Today! */}
                  {title}
                  </h1>
                <p className='my-4 text-xl text-white'>
                  {/* Find the React Job that fits your skill set. */}
                  {subtitle}
                  </p>
            </div>
        </div>
    </section>
  )
}

export default Hero