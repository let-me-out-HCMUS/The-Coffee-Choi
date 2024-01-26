import React from 'react'
import BlogList from './BlogList'
import blogs from '../../../mocks/Blog/coffeeholic'

const BlogHome = () => {
  return (
    <div className="bg-orange-50 px-5">
        <div className='w-full text-center py-8 font-bold text-2xl'>Chuyện Nhà</div>
        <BlogList title="Coffeeholic" blogs={blogs} />
        <BlogList title="Teaholic" blogs={blogs} />
        <BlogList title="Blog" blogs={blogs} />
    </div>
  )
}

export default BlogHome