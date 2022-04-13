import React, { useState, useEffect, FC } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../../store/actions';

interface ItemsProps {
  loading?: boolean,
  items?: any,
  textSearched?: string,
  fetchItems(query: any): any;
}

const Items: FC<ItemsProps> = (props) => {
  const {
    loading,
    items,
    textSearched,
    fetchItems
  } = props;

  useEffect(() => {
    fetchItems(textSearched);
  }, [])

  return (
    <div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : !!items ? (
        <ul>
          {items.map((item: any) => (
            <li><Link to={`/items/${item.id}`}>{item.title}</Link></li>
          ))}
        </ul>
      ) : (
        <h2>No se encontraron datos.</h2>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.main.fetching.status,
    items: state.items.items,
    textSearched: state.items.textSearched
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchItems: (query: any) => dispatch(fetchItems(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);