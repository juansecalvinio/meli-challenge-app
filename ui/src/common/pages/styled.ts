import styled from 'styled-components';
import { theme } from '../theme';

/**
 * Items list components
 */

export const ItemsContainer = styled.section`
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

export const ItemsCard = styled.div`
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

export const ItemsDescription = styled.span`
  p {
    margin: 0;
    font-size: 1.8rem;
  }
`;

export const ItemsPriceShipping = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 2rem;
`;

export const ItemsLocation = styled.span`
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

export const ItemDetailsContainer = styled.section`
  border-radius: 0.4rem;
  height: 100%;
  `;

export const ItemDetailsWrapper = styled.div`
  background-color: ${theme.colors.white};
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 3.2rem;
  margin-bottom: 3.2rem;
`;

export const ItemImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 100%;
`;

export const ItemImage = styled.img`  
  max-width: 68rem;

`;

export const ItemDescription = styled.div`
  margin-top: 8rem;

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

export const ItemTitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  max-width: 100%;

  p {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 200;
  }

  h2 {
    margin-top: 3.2rem;
    font-size: 4.6rem;
    font-weight: 300;
  }

  h4 {
    margin: 0;
    margin-top: 1.6rem;
    font-size: 2.4rem;
    font-weight: 300;
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
`;