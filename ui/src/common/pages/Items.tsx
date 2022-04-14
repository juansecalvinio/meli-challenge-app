import React, { useState, useEffect, FC } from 'react'
import { connect } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import { fetchItems } from '../../store/actions';
import iconFreeShipping from '../../assets/icon-shipping-2x.png';

import {
  ItemsCard,
  ItemsContainer,
  ItemDescription,
  ItemInfo,
  ItemLocation,
  ItemPriceShipping
} from './styled';

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
    fetchItems
  } = props;

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!!searchParams.get("search")) fetchItems(searchParams.get("search"));
  }, [location.key]);

  return (
    <ItemsContainer>
      {loading ? (
        <h2>Cargando...</h2>
      ) : items.length > 0 ? (
        <ul>
          {items.map((item: any) => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`} key={item.id}>
                <ItemsCard>
                  <img src={item.picture} />
                  <ItemInfo>
                    <ItemPriceShipping>
                      <p>$ {item.price.amount}</p>
                      {!!item.free_shipping && (
                        <img src={iconFreeShipping} alt="free-shipping" />
                      )}
                    </ItemPriceShipping>
                    <ItemDescription>
                      <p>{item.title}</p>
                    </ItemDescription>
                  </ItemInfo>
                  <ItemLocation>
                    <p>{item.location}</p>
                  </ItemLocation>
                </ItemsCard>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2>No se encontraron datos.</h2>
      )}
    </ItemsContainer>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.main.fetching.status,
    items: state.items.items,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchItems: (query: any) => dispatch(fetchItems(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);