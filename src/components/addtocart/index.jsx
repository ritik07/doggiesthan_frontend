import React, { useEffect, useState } from 'react'
import { Button, Input, Popover, Menu, Badge, Avatar } from "antd";
import publicIp from "public-ip";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../elements/api/cart';
import { updateUserCartAction } from '../../redux/actions/allData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const AddToCart = ({ history, productId }) => {
  const [data, setData] = useState(0);
  const getClientIp = async () => await publicIp.v4({
    fallbackUrls: ["https://ifconfig.co/ip"]
  });

  const dispatch = useDispatch();
  const allData = useSelector(state => state.allData)
  const [id, setId] = useState(null)
  const init = () => {
    if (allData.userCart.length) {
      if (allData.userCart.filter(data => data.productId === productId)[0]) {
        setData(allData.userCart.filter(data => data.productId === productId)[0]["quantity"])
        setId(allData.userCart.filter(data => data.productId === productId)[0]["id"])

      }
    }
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (allData.userCart.length) {
      init()
    }
  }, [allData])

  const addTo = async (positive) => {
    let ip = await getClientIp();
    let res = await setCart({
      parentId: ip,
      productId: productId,
      id: id,
      quantity: positive ? (parseInt(data) + 1) : (parseInt(data) - 1),
      action: parseInt(data) === 0 && id === null ? "INSERT" : parseInt(data) === 1 && id !== null && !positive ? "DELETE" : "UPDATE"
    });
    if (res.status === "1")
      dispatch(updateUserCartAction(ip, true))
  }

  return (
    data !== 0 ?
      <div className="cs-dis-flex cs-tp-15 cs-bp-20">
        <div className="cs-dis-flex cs-vt-center" onClick={() => addTo(true)}>
          <FontAwesomeIcon icon={faPlusCircle} className="cs-font-22" />
        </div>
        <div className="cs-dis-flex cs-vt-center cs-lp-10 cs-rp-10">
          {data}
        </div>
        <div className="cs-dis-flex cs-vt-center" onClick={() => addTo(false)}>
          <FontAwesomeIcon icon={faMinusCircle} className="cs-font-22" />
        </div>
      </div>
      : <div className="cs-dis-flex cs-tp-15 cs-bp-20" onClick={() => addTo(true)}>
        <Badge count={data} style={{ backgroundColor: "#07bc0c" }} offset={[0, 0]}>
          <div className="cs-product-card-addtocart cs-pointer">
            Add to Cart
          </div>
        </Badge>
      </div>
  )
}

export default AddToCart
