import React from 'react'
import Hero from '../Component/Hero'
import HomeCard from '../Component/HomeCard'
import JobListings from '../Component/JobListings'
import ViewAllJobs from '../Component/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <HomeCard/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage