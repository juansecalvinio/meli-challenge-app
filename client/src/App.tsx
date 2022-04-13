import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './common/pages/Home';
import Items from './common/pages/Items';
import ItemDetails from './common/pages/ItemDetails';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" key="home" element={<Home />} />
          <Route path="/items" key="items" element={<Items />} />
          <Route path="/items/:id" key="items-details" element={<ItemDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
