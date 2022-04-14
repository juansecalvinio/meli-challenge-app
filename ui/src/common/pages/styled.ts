import styled from 'styled-components';
import { theme } from '../theme';

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

export const ItemInfo = styled.span`
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

export const ItemDescription = styled.span`
  p {
    margin: 0;
    font-size: 1.8rem;
  }
`;

export const ItemPriceShipping = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 2rem;
`;

export const ItemLocation = styled.span`
  align-self: flex-start;
  padding-top: 4rem;
  padding-right: 3.2rem;

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`;