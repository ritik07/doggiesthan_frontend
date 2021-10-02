import React from 'react'
import { AppController } from '../../appController/AppController'
import BlogsComp from '../../components/blogs'

const index = ({ history }) => {
  return (
    <AppController history={history}>
      <div>
        <BlogsComp history={history} />
      </div>
    </AppController>
  )
}

export default index
