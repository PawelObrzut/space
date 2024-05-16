import React from 'react'

type Props = {
  webpSrc: string,
  pngSrc: string,
  alt: string
}

const Picture = ({webpSrc, pngSrc, alt}: Props) => {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={pngSrc} alt={alt} />
    </picture>

  )
}

export default Picture