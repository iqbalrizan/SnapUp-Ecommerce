import React from 'react'
import "./Menu.scss"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"


const Menu = () => {
  return (
    <div className='menu'>
        <div className="container">
            <div className="menuwrapper">
                    <div className="menuitem">
                    <img src={icon1} alt="" />
                    <p>Mega Sale</p>
                    </div>
                    <div className="menuitem">
                    <img src={icon2} alt="" />
                    <p>Cash on Delivery</p>
                    </div>
                    <div className="menuitem">
                    <img src={icon3} alt="" />
                    <p>Fashion</p>
                    </div>
                    <div className="menuitem">
                    <img src={icon4} alt="" />
                    <p>Electronics</p>
                    </div>
                    <div className="menuitem">
                    <img src={icon5} alt="" />
                    <p>ShopeeMall</p>
                    </div>
                    <div className="menuitem">
                    <img src={icon6} alt="" />
                    <p>Discounts</p>
                    </div>

            </div>
        </div>


    </div>
  )
}

export default Menu