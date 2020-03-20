import React, {useState} from 'react'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'

const MoveStuffAround = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible)
  }
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker>
          {({index}) => (
            <>
              <h1 style={{whiteSpace: 'nowrap', overflow: 'hidden'}}> Antonio Marble Graphic Design &amp; Direction -----&rsaquo;</h1>
            </>
          )}
        </Ticker>
      )}
    </PageVisibility>
  )
}

export default MoveStuffAround
