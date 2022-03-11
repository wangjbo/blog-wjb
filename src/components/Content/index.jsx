import React from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData'
import './index.css'

export default function Content() {
  return (
    <div className='contentBg'>
        <BlogData/>
        <BlogCard/>
    </div>
  )
}
