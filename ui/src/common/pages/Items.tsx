/**
 * Componente Items
 * -----------------
 * Muestra todos los items que devuelva el BFF, a partir del texto ingresado.
 */
import { useEffect, FC } from 'react'
import { connect } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import { animated, useSpring } from 'react-spring';
import ContentLoader from 'react-content-loader'
import { fetchItems } from '../../store/actions';
import iconFreeShipping from '../../assets/icon-shipping-2x.png';

import { FormatHelper } from '../../utils/FormatHelper';

import {
  ItemCategoriesContainer,
  ItemsCard,
  ItemsContainer,
  ItemsDescription,
  ItemsInfo,
  ItemsLocation,
  ItemsPriceShipping,
  LoadingContainer
} from './styled';
import NotFound from './NotFound';
import Breadcrumbs from '../components/Breadcrumbs';

interface ItemsProps {
  categories?: any,
  loading?: boolean,
  items?: any,
  textSearched?: string,
  fetchItems(query: any): any;
}

const Items: FC<ItemsProps> = (props) => {
  const {
    categories,
    loading,
    items,
    fetchItems
  } = props;
  
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Usa spring para generar una leve animación al cargar los elementos.
  const spring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 }
  });

  // Cada vez que se refresca la url, busca los datos del item.
  useEffect(() => {
    fetchItems(searchParams.get("search"));
  }, [location.key]);

  return (
    <ItemsContainer style={spring}>
      <ItemCategoriesContainer>
        {items.length > 0 ? (
          <Breadcrumbs sections={categories} />
        ) : null}
      </ItemCategoriesContainer>
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
        <animated.ul style={spring}>
          {items.map((item: any) => (
            <animated.li key={item.id} style={spring}>
              <Link to={`/items/${item.id}`} key={item.id}>
                <ItemsCard style={spring}>
                  <img src={item.picture} />
                  <ItemsInfo>
                    <ItemsPriceShipping style={spring}>
                      <p>{FormatHelper.instance.formatPrice(item.price.amount)}</p>
                      {!!item.free_shipping && (
                        <img src={iconFreeShipping} alt="free-shipping" />
                      )}
                    </ItemsPriceShipping>
                    <ItemsDescription style={spring}>
                      <p>{item.title}</p>
                    </ItemsDescription>
                  </ItemsInfo>
                  <ItemsLocation style={spring}>
                    <p>{item.location}</p>
                  </ItemsLocation>
                </ItemsCard>
              </Link>
            </animated.li>
          ))}
        </animated.ul>
      ) : (
        <NotFound />
      )}
    </ItemsContainer>
  )
}

// Mapea el state global de los reducer, a las propiedades del componente.
const mapStateToProps = (state: any) => {
  return {
    categories: state.items.categories,
    loading: state.main.fetching.status,
    items: state.items.items,
  }
}

// Mapea el dispatcher global de las actions, a las propiedades del componente.
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchItems: (query: any) => dispatch(fetchItems(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);