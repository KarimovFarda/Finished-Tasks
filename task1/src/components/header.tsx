import React from "react"

export const Header = () => {
    return (
        <div className="header">
            <div className="headerElements">
          <a href="https://www.expressbank.az/" style={{margin:"0"}}>
          <img src="images/logo.svg" alt="" />
          </a>
            <a href="#example">
                <img src="images/call.svg" alt="" />
                132
            </a>
            <input type="search" placeholder="Search" />
            <div className="header-icons">
                <img src="images/icon1.svg" alt="" />
                <img src="images/icon2.svg" alt="" />
                <img src="images/icon3.svg" alt="" />
                <span></span>
                <img src="images/icon4.svg" alt="" />
                <img src="images/icon5.svg" alt="" />
                <img src="images/icon6.svg" alt="" />
                <div>
                <img src="images/icon7.svg" alt="" />
                <span>9</span>
                </div>

            </div>
        <div>
            
        </div>
            <div className="userDetails">
                <p>Ilya Davidoff</p>
                <span>Apple INC, Admin</span>
            </div>
            <img src="images/singout.svg" alt="" />

            </div>
        </div>
    )
}


export default Header