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