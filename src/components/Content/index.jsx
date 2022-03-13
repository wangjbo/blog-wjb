import React from 'react'
import { Router,useRoutes } from 'react-router-dom'

import Home from './Home'
import Practice from './Practice'
import routes from '../../routes'
import './index.css'

export default function Content() {

  const element = useRoutes(routes)
  return (
    <div className='contentBg'>
        {element}
    </div>
  )
}
