import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router';
import ContentLoader from 'react-content-loader'
import { useSpring } from 'react-spring';
import { fetchItemById } from '../../store/actions';
import { 
  ItemButtonSale,
  ItemCategoriesContainer,
  ItemDescription,
  ItemDetailsContainer,
  ItemDetailsWrapper,
  ItemImage,
  ItemImageDescription,
  ItemTitlePrice,
  LoadingContainer
} from './styled';

import { FormatHelper } from '../../utils/FormatHelper';
import NotFound from './NotFound';
import Breadcrumbs from '../components/Breadcrumbs';

const ItemDetails = (props: any) => {
  const {
    categories,
    fetchItemById,
    loading,
    item
  } = props;

  const location = useLocation();
  const { id } = useParams();

  const spring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  useEffect(() => {
    fetchItemById(id);
  }, [location.key]);

  return (
    <ItemDetailsContainer style={spring}>
      <ItemCategoriesContainer>
        {item.hasOwnProperty('id') ? (
          <Breadcrumbs sections={categories} />
        ) : null}
      </ItemCategoriesContainer>
      {loading ? (
        <LoadingContainer>
          <ContentLoader
              backgroundColor="#f0f0f0"
              foregroundColor="#dedede"
              viewBox="0 0 1100 1100"
            >
              <rect x="30" y ="30" width="680" height="500" />
              <rect x="30" y ="580" width="680" height="150" />
              <rect x="750" y ="30" width="250" height="30" />
              <rect x="750" y ="80" width="250" height="30" />
              <rect x="750" y ="130" width="250" height="50" />
            </ContentLoader>
        </LoadingContainer>
      ) : item.hasOwnProperty('id') ? (
        <ItemDetailsWrapper style={spring}>
          <ItemImageDescription>
            <ItemImage style={spring} src={item.picture} alt="item-picture" />
            <ItemDescription>
              <h4>Descripción del producto</h4>
              <p>{item.description}</p>
            </ItemDescription>
          </ItemImageDescription>
          <ItemTitlePrice style={spring}>
            <p>
              {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos
            </p>
            <h4>{item.title}</h4>
            <h2>{FormatHelper.instance.formatPrice(item.price.amount)}</h2>
            <ItemButtonSale>Comprar</ItemButtonSale>
          </ItemTitlePrice>
        </ItemDetailsWrapper>
      ) : (
        <NotFound />
      )}
    </ItemDetailsContainer>
  )
}

const mapStateToProps = (state: any) => {
  return {
    categories: state.items.categories,
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