import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { CarryOutOutlined, FireOutlined, CommentOutlined } from '@ant-design/icons';
import { MyListAction } from '../../../../redux/action/MyList';
import TagDiv from '../../../TagDiv'
import { STYLEOFWEBPACK, STYLEOFREACT } from '../../../../constant'
import './index.css'
import listImg from '../../../../assets/testList/header_icon.png'

const MyList = ({ he, add }) => {
  useEffect(() => {
    // console.log('@@@', he);
    return () => {

    }
  }, [])

  const tagArr = [
    { id: '001', tag: 'webpack', style: STYLEOFWEBPACK },
    { id: '002', tag: 'webpack', style: STYLEOFREACT },
  ]

  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>我是 title</div>
        <div className='subTitle'>
          <div className='timestamp'><CarryOutOutlined />
            <span>
              3/10/2022
            </span>
          </div>
          <div className='tag'>
            {
              tagArr.map((tagObj) => {
                return <TagDiv key={tagObj.id} tag={tagObj.tag} style={tagObj.style}></TagDiv>
              })
            }
          </div>
          <div className='numberOfVisit'><FireOutlined className='fire' />
            <span>
              1123
            </span>
          </div>
          <div className='commentNumber'><CommentOutlined className='comment' />
            <span>
              {he}
            </span>
          </div>
        </div>
      </div>
      <div className='content'>
        <img src={listImg} />
      </div>
      <div className='footer'>
        <span>
          现在的网页当中，图片也算是占据了很重要的一部分地位。 “一图胜千言”，一张图片有时候可能比一大段话更容易让用户理解和留下记忆。但是图片也会因为路径错误、资源不存在、网络原因等加载失败，从而导致用户看到一张裂开的图，而且会使整个界面都产生一种不好的感觉。
        </span>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    he: state.MyList,
  }), {
  add: MyListAction
})(MyList)