
import './App.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import ProductSingle from './pages/ProductSingle/ProductSingle';
import CategoryProduct from './pages/CategoryProduct/CategoryProduct';
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/product/:id" element = {<ProductSingle />} />
            
            <Route path = "/category/:category" element = {<CategoryProduct />} />
            <Route path = "/cart" element = {<Cart />} />
            <Route path = "/search/:searchTerm" element = {<Search />} />


        </Routes>
        
        
        
        <Footer />
        </BrowserRouter>





      </Provider>
    </div>
  );
}

export default App;
