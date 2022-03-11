import React from 'react'
import './index.css'

export default function Footer() {
  return (
    <div className='footeContent'>
      <div>
        <span>
          本系统由
          <span className='skill'>
            React+Node+Antd Design
          </span>
          联合驱动
        </span>
      </div>
      <div>
        <span>
          COS对象存储
        </span>
      </div>
    </div>
  )
}