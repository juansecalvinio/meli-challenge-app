import React, { useState, useEffect, FC } from 'react'
import { connect } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import ContentLoader from 'react-content-loader'
import { fetchItems } from '../../store/actions';
import iconFreeShipping from '../../assets/icon-shipping-2x.png';

import { FormatHelper } from '../../utils/FormatHelper';

import {
  ItemsCard,
  ItemsContainer,
  ItemsDescription,
  ItemsInfo,
  ItemsLocation,
  ItemsPriceShipping,
  LoadingContainer
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
    fetchItems(searchParams.get("search"));
  }, [location.key]);

  return (
    <ItemsContainer>
      {loading ? (
        <LoadingContainer>
          {[1,2,3,4].map((index) => (
            <ContentLoader
              width="100%"
              height={200}
              backgroundColor="#f0f0f0"
              foregroundColor="#dedede"
              viewBox="0 0 1100 200"
              key={index}
            >
              <rect x="30" y ="30" width="200" height="200" />
              <rect x="250" y ="30" width="250" height="40" />
              <rect x="250" y ="80" width="500" height="40" />
              <rect x="900" y ="30" width="150" height="40" />
            </ContentLoader>
          ))}
        </LoadingContainer>
      ) : items.length > 0 ? (
        <ul>
          {items.map((item: any) => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`} key={item.id}>
                <ItemsCard>
                  <img src={item.picture} />
                  <ItemsInfo>
                    <ItemsPriceShipping>
                      <p>{FormatHelper.instance.formatPrice(item.price.amount)}</p>
                      {!!item.free_shipping && (
                        <img src={iconFreeShipping} alt="free-shipping" />
                      )}
                    </ItemsPriceShipping>
                    <ItemsDescription>
                      <p>{item.title}</p>
                    </ItemsDescription>
                  </ItemsInfo>
                  <ItemsLocation>
                    <p>{item.location}</p>
                  </ItemsLocation>
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