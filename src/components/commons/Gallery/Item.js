import React from 'react'
import { Item } from 'react-photoswipe-gallery'

const MyItem = ({ src }) => {
  return (
    <Item original={src} thumbnail={src} width="1024" height="768">
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src={src}
          alt={src}
          width="auto"
          height="240"
        />
      )}
    </Item>
  )
}

export default MyItem
