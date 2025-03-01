import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseFilter from '../component/CourseFilter'
import Navbar from './../component/Navbar';



const CourseList = () => {
  return (
    <div className='px-6 md:px-4 xl:px-4 2xl:px-0'>
        <div className='mt-8'>
            <Navbar />

        </div>
        <div className='container mx-auto mt-24 flex items-center gap-x-2'>
            <Link to={'/'} className='flex gap-x-2'>
                <HomeIcon className='size-6' />
                <span className='text-md font-medium'>Home</span>
            </Link>
            <ChevronRightIcon className='size-6' />
            <span className='text-md font-medium'>Courses</span>
        </div>
        
        <section className="relative w-full mb-24">
  {/* Mobile Filter (Dropdown from Top) */}
  

  <div className="">
    {/* Desktop Filter (Left Sidebar) */}
    <div className="">
      <CourseFilter />
    </div>

    {/* Course Cards Grid */}
    <div className="">
      
    </div>
  </div>
</section>

    </div>
  )
}

export default CourseList
