import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'
import logo from '../images/logo.svg'
import infoIcon from '../images/ui/info.svg'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>
          <img className={styles.myLogoWeb} src={logo} alt={siteTitle}/>
        </Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
<Link to='/archive/'><img className={styles.infoIcon} src={infoIcon} alt='about' /></Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
