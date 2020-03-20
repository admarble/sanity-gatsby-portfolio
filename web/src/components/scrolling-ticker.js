import React from 'react'
import styles from './scrolling-ticker.module.css'

const ScrollingTicker = () => {
  return (
    <div className={styles.tickerWrap}>
      <div className={styles.ticker}>
        <div className={styles.tickerItem}>Antonio Marble Graphic Design &amp; Direction</div>
        <div className={styles.tickerItem}>Antonio Marble Graphic Design &amp; Direction</div>
        <div className={styles.tickerItem}>Antonio Marble Graphic Design &amp; Direction</div>
      </div>
    </div>
  )
}

// function scrollingTicker () {
//   return (
//     <div className={styles.tickerWrap}>
//       <div className={styles.ticker}>
//         <div className={styles.tickerItem}>Antonio Marble Graphic Design &amp; Direction &bull; </div>
//         <div className={styles.tickerItem}>Antonio Marble Graphic Design &amp; Direction &bull; </div>
//         <div className={styles.tickerItem}>Antonio Marble Graphic Design &amp; Direction &bull; </div>
//       </div>
//     </div>
//   )
// }

export default ScrollingTicker
