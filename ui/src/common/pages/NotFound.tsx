import React from 'react'
import { animated, useSpring } from 'react-spring';
import { VscError } from 'react-icons/vsc';
import { NotFoundContainer } from './styled';

const NotFound = () => {
  
  const spring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  })

  return (
    <NotFoundContainer style={spring}>
      <VscError />
      <h2>No se encontraron datos.</h2>
    </NotFoundContainer>
  )
}

export default NotFound;