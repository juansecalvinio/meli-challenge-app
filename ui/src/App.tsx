/**
 * Componente principal de la aplicación
 */
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './common/pages/Home';
import Items from './common/pages/Items';
import ItemDetails from './common/pages/ItemDetails';
import Layout from './common/components/Layout';
import store from './store';
import { theme } from './common/theme';

// Crea el globalStyle para poder resetear estilos globales.
const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    font-family: 'Be Vietnam Pro', sans-serif;
    box-sizing: border-box;
  }
  html {
    height: 100vh;
  }
  body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.smoke};
  }
`;

/**
 * Componente App
 * - Utiliza el Provider de todo el estado de la aplicación con Redux
 * - Utiliza el Router para controlar todas las rutas de la aplicación
 * - El componente Layout es un contenedor para que cada ruta se renderice por debajo del Header.
 * - El Routes valida cada ruta y la asigna a su componente determinado.
 * @returns JSX Component
 */
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
