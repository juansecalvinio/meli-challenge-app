import styled from 'styled-components';
import { animated } from 'react-spring';
import { theme } from '../theme';

/**
 * Items list components
 */

export const ItemsContainer = styled(animated.section)`
  height: 100%;
  
  ul {
    background-color: ${theme.colors.white};
    border-radius: 0.4rem;
    list-style: none;
    padding: 1rem;
    
    li {
      a, a:active, a:visited {
        color: ${theme.colors.dark};
        text-decoration: none;
      }
    }

    li:last-child a div {
      border-bottom: none;
    }
  }

`;

export const ItemCategoriesContainer = styled.span`
  p {
    color: ${theme.colors.gray};
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
  }
`;

export const ItemsCard = styled(animated.div)`
  border-bottom: 1px solid ${theme.colors.smoke};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.6rem;
  box-sizing: border-box;

  img {
    width: 18rem;
    border-radius: 0.4rem;
    padding: 1.6rem;
  }
`;

export const ItemsInfo = styled.span`
  flex: 1;
  align-self: flex-start;
  padding: 1.6rem;

  p {
    margin: 0;
    font-size: 2.5rem;
  }

  img {
    width: 1.8rem;
  }
`;

export const ItemsDescription = styled(animated.span)`
  p {
    margin: 0;
    font-size: 1.8rem;
  }
`;

export const ItemsPriceShipping = styled(animated.span)`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 2rem;
`;

export const ItemsLocation = styled(animated.span)`
  align-self: flex-start;
  padding-top: 4rem;
  padding-right: 3.2rem;

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;

export const LoadingContainer = styled.div`
  background-color: ${theme.colors.white};
  height: 100%;
  padding: 1.6rem;
`;

/**
 * Item Details components
 */

export const ItemDetailsContainer = styled(animated.section)`
  border-radius: 0.4rem;
  height: 100%;
`;

export const ItemDetailsWrapper = styled(animated.div)`
  background-color: ${theme.colors.white};
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 3.2rem;
  margin-bottom: 3.2rem;
`;

export const ItemImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  max-width: 100%;
`;

export const ItemImage = styled(animated.img)`  
  max-width: 68rem;
  margin: 0 auto;
  margin-bottom: 3.6rem;
`;

export const ItemDescription = styled.div`
  margin-top: 8rem;
  text-align: left;

  h4 {
    margin: 0;
    margin-bottom: 2.6rem;
    font-size: 2.8rem;
    font-weight: 300;
  }

  p {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 100;
  }
`;

export const ItemTitlePrice = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-width: 100%;

  p {
    color: ${theme.colors.dark};
    font-size: 1.4rem;
    font-weight: 200;
    margin: 0;
  }

  h2 {
    color: ${theme.colors.dark};
    font-size: 4.6rem;
    font-weight: 400;
    margin-top: 3.2rem;
  }

  h4 {
    color: ${theme.colors.dark};
    font-size: 2.4rem;
    font-weight: 400;
    margin: 0;
    margin-top: 1.6rem;
  }
`;

export const ItemButtonSale = styled.button`
  background-color: ${theme.colors.blue};
  border: none;
  border-radius: 0.4rem;
  color: ${theme.colors.white};
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1.6rem;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
  }
`;

/**
 * Not Found page components
 */

export const NotFoundContainer = styled(animated.section)`
  background-color: ${theme.colors.white};
  border-radius: 0.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem;

  svg {
    width: 15rem;
    height: 15rem;
    fill: ${theme.colors.lightgray};
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 300;
  }
`;