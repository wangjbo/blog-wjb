import React from 'react'
import './index.css'
import img1 from '../../../../assets/content/avator.jpg'
import { Space } from 'antd';
import Icon, { MailOutlined, QqOutlined,WechatOutlined } from '@ant-design/icons';

export default function Avator() {
  return (
    <div className='avator'>
      <div className='profile'>
        <img src={img1} alt="个人头像" />
      </div>
      <div className='status'>
        <div>
          电子信息
        </div>
        <div>
          图数据挖掘
        </div>
        <div>
          前端：react + redux + Antd
        </div>
        <div>
          后端：express + MongoDB
        </div>
        <div>
          <MailOutlined />&nbsp; 708873100@qq.com
        </div>
        <div className='division'>
          <div className='dash1'>
          </div>
          <div >
            社交媒体
          </div>
          <div className='dash2'>
          </div>
        </div>
        <ul className='socialMedia'>
          <li>
            <QqOutlined />
          </li>
          <li>
            <WechatOutlined />
          </li>
        </ul>
      </div>
      <div className='welcomeToVisit'>
        <div className='ip'>您的Ip： 210.32.203.245</div>
        <div className='adress'>您的地址： 浙江省 杭州市</div>
        <span>您好，现在是：3/9/2022, 9:04:18 PM。 累了一天了,我相信你一定会越来越强的!</span>
      </div>
    </div>
  )
}
