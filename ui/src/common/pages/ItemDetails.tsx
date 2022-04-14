import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router';
import { fetchItemById } from '../../store/actions';
import { 
  ItemButtonSale,
  ItemDescription,
  ItemDetailsContainer,
  ItemDetailsWrapper,
  ItemImage,
  ItemImageDescription,
  ItemTitlePrice
} from './styled';

import { FormatHelper } from '../../utils/FormatHelper';

const ItemDetails = (props: any) => {
  const { 
    fetchItemById,
    loading,
    item
  } = props;

  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    fetchItemById(id);
  }, [location.key]);

  return (
    <ItemDetailsContainer>
      {loading ? (
        <h4>Cargando...</h4>
      ) : item.hasOwnProperty('title') ? (
        <ItemDetailsWrapper>
          <ItemImageDescription>
            <ItemImage src={item.picture} alt="item-picture" />
            <ItemDescription>
              <h4>Descripción del producto</h4>
              <p>{item.description}</p>
            </ItemDescription>
          </ItemImageDescription>
          <ItemTitlePrice>
            <p>
              {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos
            </p>
            <h4>{item.title}</h4>
            <h2>{FormatHelper.instance.formatPrice(item.price.amount)}</h2>
            <ItemButtonSale>Comprar</ItemButtonSale>
          </ItemTitlePrice>
        </ItemDetailsWrapper>
      ) : (
        <h4>{id}</h4>
      )}
    </ItemDetailsContainer>
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