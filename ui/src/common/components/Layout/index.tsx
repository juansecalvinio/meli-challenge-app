/**
 * Componente Layout
 * ------------------
 * - Es la estructura del frontend.
 * - El SectionContainer encapsula a {children} 
 * que van a ser los componentes que se rendericen en cada ruta.
 */
import Header from '../Header';
import { SectionContainer } from './styled';

const Layout = ({ children }: any): any => {
  return (
    <>
      <Header />
      <SectionContainer>
        {children}
      </SectionContainer>
    </>
  )
}

export default Layout;