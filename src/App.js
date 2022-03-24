import React from 'react';
import {Routes, Route} from 'react-router-dom'
import "./styles/app.scss";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Burger from './components/navigation/Burger';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import BuyNow from './components/buyNow/BuyNow';



function App() {
  return (
    <>
      {/* <BuyNow /> */}
      <Burger />
      {/* <Menu /> */}
      <Header/>
      <Layout>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "/courses" element = {<CoursesPage />} />
          <Route path = "/cours" element = {<CoursePage />} />
        </Routes>
      </Layout>
      <Footer />

    </> 
  );
}

export default App;
