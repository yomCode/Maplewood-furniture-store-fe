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
import AddressBook from './components/AddressBook/AddressBook';
import FormSignUp from './screens/Signup/FormSignUp';

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
                    <Route path="/shop" element={<Product />} />
                    <Route path="/product" element={<SingleProduct />} />
                    <Route path='/accountInfo' element={<UserInformation />} />
                    <Route path='/address' element={<AddressBook />} />
                     <Route path="/signup" element={<FormSignUp />} />
                </Routes>
                <BackToTop />  
                <Footer />     
            </Router>   
        </React.Fragment>  

    ); 
}

export default App;