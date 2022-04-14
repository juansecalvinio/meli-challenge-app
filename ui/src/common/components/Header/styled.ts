import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.header`
  background-color: ${theme.colors.yellow};
  height: 5rem;
  width: 100%;
  padding: 0.5rem;
`;

export const Wrapper = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const InputWrapper = styled.span`
  flex: 1;
  display: flex;
  width: 100%;
  padding: 1rem;
  padding-left: 2.5rem;

  a {
    background-color: ${theme.colors.smoke};
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    
    img {
      max-inline-size: 100%;
      vertical-align: middle;
    }
  }

  input {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border: none;
    font-size: 1.8rem;
    width: 100%;
    padding: 0.9rem;
  }
`;