import React from 'react'

// Renders top banner in topics page

export default function TopBanner({title, image}) {
  return (
    <div>
        <div className="title-banner" style={{backgroundImage: `url(${image})`}}>
            <h1 className="banner-text">{title}</h1>
        </div>
    </div>
  )
}
