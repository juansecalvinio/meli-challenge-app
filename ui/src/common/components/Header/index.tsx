import React, { useEffect, useState, FC } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-ml-2x.png';
import iconSearch from '../../../assets/icon-search-2x.png';

import { Container, InputWrapper, Wrapper } from './styled';

const Header = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <img src={logo} alt="logo-ML" width="50" />
        </Link>
        <InputWrapper>
          <input 
            type="text" 
            placeholder="Nunca dejes de buscar" 
            value={value}
            onChange={handleInputChange} 
            />
          <Link to={`/items?search=${value}`}>
            <img src={iconSearch} alt="icon-search" width="18" />
          </Link>
        </InputWrapper>
      </Wrapper>
    </Container>
  )
}

export default Header;