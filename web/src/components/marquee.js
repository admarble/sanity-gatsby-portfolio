import React from 'react'
import MarqueeText from 'react-marquee-text-component'

class MarqueeSlide extends React.Component {
  render () {
    const text = 'Antonio Marble Graphic Design &amp; Direction &bull;'
    return (
      <MarqueeText text={text} />
    )
  }
}

export default MarqueeSlide
