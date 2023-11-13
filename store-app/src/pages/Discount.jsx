import React from 'react'
//? Components
import Button from '../components/Button';
// Iocns
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6' 

const Discount = () => {
  return (
    <section id="discount">
        <div className="d1-text">
          <h2>Get 25% Off On Your First Purchase!</h2>
          <Button
            className="secondary"
            text="SHOP NOW"
            icon={<FaCartShopping />}
            path={"/Everything"}
          />
        </div>
        <div className="d2-text">
          <h3>Try It For Free. No Registration Needed.</h3>
          <FaCaretDown size={32} className="FaCaretDown" />
        </div>
      </section>
  )
}

export default Discount