import {  useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AllBlogPosts } from '../../data';
import BlogCard from '../component/BlogCard';
import Navbar from '../component/Navbar';

const BlogList = () => {
  const [visiblePosts, setVisiblePosts] = useState(AllBlogPosts.slice(0, 8));
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = () => {
    setTimeout(() => {
      const currentLength = visiblePosts.length;
      const nextPosts = AllBlogPosts.slice(currentLength, currentLength + 4);

      if (nextPosts.length === 0) {
        setHasMore(false);
      }

      setVisiblePosts((prev) => [...prev, ...nextPosts]);
    }, 1000); // Simulated loading delay
  };

  return (
    <section className='container mx-auto px-6 md:px-8'>
      <div className='pt-12'>
        <Navbar />
      </div>
      <div className='flex items-center justify-center pt-24 pb-32'>
        <h1 className='text-4xl/[1.2] lg:text-5xl font-semibold text-balance text-center'>
          A blog is a voice, not just a place to write.
        </h1>
      </div>

      <div>
        <h1 className='text-3xl/[0.9] font-semibold pb-12'>All Blog Posts</h1>

        <InfiniteScroll
          dataLength={visiblePosts.length}
          next={loadMorePosts}
          hasMore={hasMore}
          loader={<h4 className='text-center py-4 font-semibold py-12'>Loading more posts...</h4>}
          endMessage={<p className='text-center py-4 font-semibold py-12'>No more posts to show</p>}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
            {visiblePosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default BlogList;
