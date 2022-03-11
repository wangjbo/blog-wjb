import React, { useEffect } from 'react'
import { styleArr } from '../../constant';

export default function TagDiv(props) {
  useEffect(()=>{
  },[])  

  const {tag,style} = props


  return (
    <div style={styleArr[style]}>
        {/* 根据props的属性来定义tag */}
        <div className='' >
            {tag}
        </div>
    </div>
  )
}
