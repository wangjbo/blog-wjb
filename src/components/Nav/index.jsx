import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { Row, Col, Divider, Menu } from 'antd';
import { HomeOutlined, EditOutlined,LineChartOutlined,BookOutlined,LikeOutlined,WechatOutlined } from '@ant-design/icons';
import './index.css'
import img1 from '../../assets/nav/header_icon.png'




export default function Nav({ history }) {


  const navArr = [
    { id: '001', name: '首页', to: '/home' },
    { id: '002', name: '实战', to: '/practice' },
    { id: '003', name: '文章分类', to: '/articlesClassfication' },
    { id: '004', name: '时间轴', to: '/timeline' },
    { id: '005', name: '代码人生', to: '/codelife' },
    { id: '006', name: '关于', to: '/about' },
  ]

  return (
    <>
      <div className='nav-pc theme-color'> 
        <div className='nav-content'>
          {navArr.map((item, index) => (
            <NavLink
              className='nav-btn'
              // activeClassName="theme-color-btn"
              to={item.to}
              key={item.id}
            >
              {item.id === '001'?  <HomeOutlined className='icon'/> : ''}
              {item.id === '002'?  <EditOutlined   className='icon'/> : ''}
              {item.id === '004'?  <LineChartOutlined  className='icon'/> : ''}
              {item.id === '003'?  <BookOutlined  className='icon'/> : ''}
              {item.id === '005'?  <LikeOutlined   className='icon'/> : ''}
              {item.id === '006'?  <WechatOutlined  className='icon'/> : ''}
              {item.name }

            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

// export default (
//   connect(
//     state => ({

//     }),
//     {}
//   )(Nav)
// )