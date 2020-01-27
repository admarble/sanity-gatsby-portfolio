import React from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'
import Clock from 'react-live-clock'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          <p>© {new Date().getFullYear()}, Antonio Marble</p>
        </div>
        <div className={styles.clock}>
          <Clock format='HH:mm:ss' ticking interval={1000} />
        </div>
      </div>
    </footer>
  </>
)

export default Layout
