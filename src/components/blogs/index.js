import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import CoverImg from '../../pages/coverimg'
import blog from '../../static/images/coverpic/blog.jpeg'
import coverpic from '../../static/images/coverpic/coverpic.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { ImageUrl } from '../../lib/constant'

const BlogsComp = () => {

  const [data, setData] = useState([]);
  const [allImages, setAllImages] = useState([]);

  const allData = useSelector(state => state.allData);

  useEffect(() => {
    if (allData.blogData.length) {
      setData(allData.blogData)
      if (allData.blogData[0].images)
        setAllImages(allData.blogData[0].images.split(','))
    }
  }, [allData])

  return (
    data ?
      <div>
        <CoverImg coverName={"Blogs"} />
        <div className="cs-web-container">
          <div>
            {data.map((data, index) => {
              return (
                <Row>
                  <Col xl={10} className="cs-bp-80">
                    <img src={`${ImageUrl}/${data.images.split(',')[0]}`} className="cs-w-100 frz-br-8" />
                    <div className="cs-font-instyle cs-font-32 cs-tp-10">
                      {data.title}
                    </div>
                    <div className="cs-tp-10 cs-lp-5">
                      {data.date}
                    </div>

                    <div className="cs-tp-20 cs-font-20">
                      {data.description}
                    </div>
                  </Col>
                </Row>
              )
            })}
          </div>
        </div>
      </div>
      :
      <div>
        NO DATA FOUND
      </div>
  )
}

export default BlogsComp
