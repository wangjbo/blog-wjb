import React from 'react'
import './index.css'
import MyList from './MyList'

export default function BlogData() {

  let listArr = [
    { id: '001', title: 'page1', content: 'this is page 1' },
    { id: '002', title: 'page2', content: 'this is page 2' },
    { id: '003', title: 'page3', content: 'this is page 3' },
    { id: '004', title: 'page4', content: 'this is page 4' },
    { id: '005', title: 'page4', content: 'this is page 5' },
    { id: '006', title: 'page4', content: 'this is page 6' },
    { id: '007', title: 'page4', content: 'this is page 7' },
  ]

  return (
    <div className='BlogData'>
      博客日志
      {
        listArr.map((listObj) => {
          return <MyList key={listObj.id}></MyList>
        })
      }
    </div>
  )
}
