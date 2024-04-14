// Write your code here

import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-icon-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="modal-container">
              <button
                type="button"
                className="close-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size="30" color="#616e7c" />
              </button>
              <ul className="nav-link-list">
                <li className="nav-link-item">
                  <Link to="/" onClick={() => close()}>
                    <AiFillHome size="36" />
                    <p className="nav-link-content">Home</p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => close()}>
                    <BsInfoCircleFill size="32" />
                    <p className="nav-link-content">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
