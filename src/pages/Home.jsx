import Hero from '../component/Hero'
import CourseSec from '../component/CourseSec'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import BlogCard from '../component/BlogCard'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data'

const Home = () => {
  return (
    <div className='w-full h-full relative'>
      <Hero />
      <CourseSec />
      {/* blog */}
      <section className='container mx-auto w-full min-h-[50vh] pt-12 mb-24  px-6'>
        <div className='flex  items-center justify-between pb-16 '>
          <h1 className='text-5xl/[0.9] font-medium '>Blog</h1>
          <Link to={'/AllBlogs'}>
            <div className='relative flex items-center justify-center'>
              <div className='blob1 w-16 h-16'></div>
              <div className='blob2 w-15 h-15'></div>
              <ArrowUpRightIcon className='w-8 h-8 cursor-pointer ' />
            </div>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
        </div>
      </section>

    </div>

  )
}

export default Home
