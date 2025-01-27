import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import ProductPage from './page/ProductPage';
import BookmarkPage from './page/BookmarkPage';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/products/list' element={<ProductPage/>}/>
        <Route path='/bookmark' element={<BookmarkPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
