import React from 'react'

const Footer = ({address,hours}) => {
  return (
    <footer>
      <p>{address}</p>
      <p>{hours}</p>
      {/* 주소와 시간 나오게 하기 */}
    </footer>
  )
}

export default Footer