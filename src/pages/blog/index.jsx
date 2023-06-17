import BlogCard from '@/components/lib/BlogCard'
import Layout from '@/components/layout'
import React from 'react'

const Blogs = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Layout title={'Blogs'}>
        <div className='container  mx-auto '>
          <h1 className='container text-3xl pt-36 flex justify-center pb-16 max-sm:pt-14 max-sm:pb-14'>
            Blogs
          </h1>
          <div className='flex flex-col max-sm:mx-3'>
            <div
              className={'grid w-full xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mb-10 '}
            >
              <BlogCard
                title={'Web Design Done Well: Delightful Data Visualization Examples'}
                span={'UI/UX DESIGN'}
              />
              <BlogCard
                title={'Web Design Done Well: Delightful Data Visualization Examples'}
                span={'UI/UX DESIGN'}
              />
              <BlogCard
                title={'Web Design Done Well: Delightful Data Visualization Examples'}
                span={'UI/UX DESIGN'}
              />
            </div>
            <div className={'grid w-full xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7'}>
              <BlogCard
                title={'Web Design Done Well: Delightful Data Visualization Examples'}
                span={'UI/UX DESIGN'}
              />
              <BlogCard
                title={'Web Design Done Well: Delightful Data Visualization Examples'}
                span={'UI/UX DESIGN'}
              />
              <BlogCard
                title={'Web Design Done Well: Delightful Data Visualization Examples'}
                span={'UI/UX DESIGN'}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default Blogs
