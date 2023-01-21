import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackToTop from './components/BackToTopButton';
import Favorites from './screens/Favorite/Favorites';
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './screens/Home/Hompage';
import ContactUs from './screens/ContactUs/ContactUs';
import Page404 from './screens/404Page/Page404';
import Product from './screens/Product/Product';
import SingleProduct from './screens/Product/SingleProduct';
import UserInformation from './components/UserInformation/UserInformation';

function App(){
    return(
        <React.Fragment>
            <Router>
                <NavBar />
                <Routes>
                    <Route index element={<HomePage />  } />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contactus" element={ <ContactUs /> } />
                    <Route path="/favorites" element={<Favorites />} />
<<<<<<< HEAD
                    <Route path="/shop" element={<Product />}>
                        <Route path="/shop/product" element={<SingleProduct /> } />
                    </Route>
                    <Route path="*" element={<Page404 />} />
=======
                    <Route path="/shop" element={<Product />} />
                    <Route path="/product" element={<SingleProduct />} />
                    <Route path='/accountInfo' element={<UserInformation />} />

>>>>>>> 873e060cadd5a9e2a3897bd5328d7dd34cd165a1
                </Routes>
                <BackToTop />  
                <Footer />     
            </Router>   
        </React.Fragment>  
    ); 
}

export default App;