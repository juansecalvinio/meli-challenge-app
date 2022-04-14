import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { fetchItemById } from '../../store/actions';

const ItemDetails = (props: any) => {
  const { 
    fetchItemById,
    loading,
    item
  } = props;

  const { id } = useParams();

  useEffect(() => {
    fetchItemById(id);
  }, [])

  return (
    <div>
      {loading ? (
        <h4>Cargando...</h4>
      ) : item.hasOwnProperty('title') ? (
        <h4>{item.title}</h4>
      ) : (
        <h4>{id}</h4>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.main.fetching.status,
    item: state.items.item
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchItemById: (id: any) => dispatch(fetchItemById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);