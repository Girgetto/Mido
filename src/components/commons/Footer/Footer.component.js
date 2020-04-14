import React from 'react'

const d = new Date()
const n = d.getFullYear()

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p>© {n} Remida</p>
    </div>
  )
}

export default Footer
