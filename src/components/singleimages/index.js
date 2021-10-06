import React, { useState } from 'react'
import { useEffect } from 'react';
import { UpOutlined, DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import InnerImageZoom from 'react-inner-image-zoom';
import { uploadFileUrl } from '../../lib/constant';

let id = 0;

export const ImagePreview = ({ productData, moreImage }) => {
  console.log("productData", productData)
  console.log("moreImage", moreImage)

  const [previewImage, setPreviewImage] = useState(null);
  const [images, setImages] = useState([])

  const init = (imagesData) => {
    const images = imagesData.split(',');
    if (images[0])
      setPreviewImage(images[0])
    else
      setPreviewImage("")
    setImages(images)
  }
  useEffect(() => {
    if (productData && productData.images) {
      init(productData.images)
    }
  }, [productData])

  useEffect(() => {
    if (moreImage) {
      if (moreImage.length) {
        init(moreImage)
      } else init(productData.images)
    } else init(productData.images)
  }, [moreImage])

  function scrollParentToChild(parent, child) {

    // Where is the parent on page
    var parentRect = parent.getBoundingClientRect();
    // What can you see?
    var parentViewableArea = {
      height: parent.clientHeight,
      width: parent.clientWidth
    };

    // Where is the child
    var childRect = child.getBoundingClientRect();
    // Is the child viewable?
    var isViewable = (childRect.top >= parentRect.top) && (childRect.top <= parentRect.top + parentViewableArea.height);

    // if you can't see the child try to scroll parent
    if (!isViewable) {
      // scroll by offset relative to parent
      parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top
    }

  }
  const scrollDown = () => {
    id = images.length - 1
    var randomParent = document.getElementById('parent');
    var randomSubParent = document.getElementById(`child${id}`);
    scrollParentToChild(randomParent, randomSubParent)
  }

  const scrollUp = () => {
    id = 0
    var randomParent = document.getElementById('parent');
    var randomSubParent = document.getElementById(`child${id}`);
    scrollParentToChild(randomParent, randomSubParent)
  }
  const [height, setHeight] = useState(0);
  function rafAsync() {
    return new Promise(resolve => {
      requestAnimationFrame(resolve); //faster than set time out
    });
  }

  async function checkElement(selector) {
    let querySelector = null;
    while (querySelector === null) {
      await rafAsync();
      querySelector = document.querySelectorAll(selector);
    }
    return querySelector;
  }
  useEffect(() => {
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('parent1').scrollLeft += 40;
    };
    buttonLeft.onclick = function () {
      document.getElementById('parent1').scrollLeft -= 40;
    };

    if (height === 0) {

      checkElement('.cs-get-width') //use whichever selector you want
        .then((element) => {
          var { height } = element[0].getBoundingClientRect();
          setHeight(height);
        });
    }
  }, [height, images])

  return (
    <div className="d ai-center">
      <div className="display-column ai-center jc-sb cs-not-for-mobile" style={{ height: height ? height : 300, }}>
        <div className="no-scroll-bar" id="parent" style={{ overflow: 'auto', position: 'relative' }}>
          {
            images.map((image, idx) => image &&
              <div className="image-preview" id={`child${idx}`} key={idx}>
                <img onClick={() => setPreviewImage(image)}
                  style={{ height: '100%' }}
                  src={uploadFileUrl + image} alt={productData && productData.name} />
              </div>
            )
          }
          <div id={`child${images.length - 1}`}  >
          </div>
        </div>
        <div className="d jc-se ai-center">
          <UpOutlined onClick={scrollUp} className="icon-wrapper-dark mr-5" />
          <DownOutlined onClick={scrollDown} className="icon-wrapper-dark" />
        </div>
      </div>
      <div className="cs-not-for-mobile ml-10 cs-get-width " style={{ border: '1px solid rgba(0, 0, 0, 0.233)' }}>
        <InnerImageZoom width={500} zoomScale={2} alt={productData && productData.name} src={uploadFileUrl + (previewImage || images[0])} zoomSrc={uploadFileUrl + (previewImage || images[0])} />
      </div>
      <div className="cs-only-for-mobile display-column ml-10" >
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.233)' }}>
          <InnerImageZoom width={'100%'} zoomScale={2} alt={productData && productData.name} src={uploadFileUrl + (previewImage || images[0])} zoomSrc={uploadFileUrl + (previewImage || images[0])} />
        </div>
        <div className="d ai-center jc-sb cs-only-for-mobile mt-20" style={{ maxWidth: window.innerWidth - 100 }} >
          <LeftOutlined onClick={scrollUp} id="slideLeft" className="icon-wrapper-dark-small mr-5" />
          <div className="d no-scroll-bar" id="parent1"
            style={{ overflow: 'auto', position: 'relative' }}>
            {
              images.map((image, idx) => image &&
                <div className="image-preview mr-5" id={`child${idx}`} key={idx}>
                  <img onClick={() => setPreviewImage(image)}
                    style={{ height: '100%' }}
                    src={uploadFileUrl + image} alt={productData && productData.name} />
                </div>
              )
            }
            <div id={`child${images.length - 1}`}  >
            </div>
          </div>
          <RightOutlined onClick={scrollDown} id="slideRight" className="icon-wrapper-dark-small ml-5" />
        </div>
      </div>
    </div>
  )
}