import styled from 'styled-components';
import { theme } from '../../theme';

export const UlBreadcrumbs = styled.ul`
  background-color: ${theme.colors.smoke} !important;
  padding: 1rem;
  list-style: none;
`;

export const LiBreadcrumbs = styled.li`
  display: inline;
  font-size: 1.4rem;
  font-weight: 300;
  padding-right: 0.5rem;

  svg {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0.5rem;
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: text-top;
  }

  &:last-child {
    font-weight: bold;

    svg {
      display: none;
    }
  }
`;