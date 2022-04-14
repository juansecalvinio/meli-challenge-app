import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './common/pages/Home';
import Items from './common/pages/Items';
import ItemDetails from './common/pages/ItemDetails';
import Layout from './common/components/Layout';
import store from './store';
import { theme } from './common/theme';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  html, body, #root {
    font-family: 'Arial', sans-serif;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.smoke};
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" key="home" element={<Home />} />
            <Route path="/items" key="items" element={<Items />} />
            <Route path="/items/:id" key="items-details" element={<ItemDetails />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
