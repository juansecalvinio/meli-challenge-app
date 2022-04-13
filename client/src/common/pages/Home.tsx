import React, { useEffect, useState, FC } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTextSearched } from '../../store/actions';

const Home = (props: any) => {

  const { setTextSearched } = props;

  const [value, setValue] = useState("");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
    setTextSearched(e.target.value);
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Ingrese el producto..." 
        value={value}
        onChange={handleInputChange} 
      />
      <Link to={`/items?search=${value}`}>Buscar items</Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTextSearched: (value: string) => dispatch(setTextSearched(value))
  }
}

export default connect(null, mapDispatchToProps)(Home);