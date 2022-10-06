import React from 'react'
import Navigation from './Navigation'
import Title from './Title'

function Header({title}) {
  return (
    <>
        <Navigation/>
        <Title title={title}/>
    </>
  )
}

export default Header