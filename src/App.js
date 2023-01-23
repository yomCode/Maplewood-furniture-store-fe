import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./global.css";
import BackToTop from './components/BackToTopButton';
import Subcategory from './screens/Subcategory/Subcategory'
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './screens/Home/Hompage';
import ContactUs from './screens/ContactUs/ContactUs';
import Page404 from './screens/404Page/Page404';
import Product from './screens/Product/Product';
import SingleProduct from './screens/Product/SingleProduct';
import AccountDashboard from './screens/AccountDashboard/AccountDashboard';
import UserInformation from './components/UserInformation/UserInformation';
import FAQPage from './screens/FAQ/FAQPage';
import AddressBook from './components/AddressBook/AddressBook';
import FormSignUp from './screens/Signup/FormSignUp';
import FormLogin from './screens/Login/FormLogin';
import "react-toastify/dist/ReactToastify.css";

function App(){
    return(
        <React.Fragment>
            <Router>
                <NavBar />
                <Routes>
                    <Route index element={<HomePage />  } />
                    <Route path="/" element={<HomePage />} />
                    <Route path="contactus" element={ <ContactUs /> } />
                    <Route path="frequently-asked-questions" element={<FAQPage />} />

                    <Route path="/contactus" element={ <ContactUs /> } />
                    <Route path="/shop" element={<Product />} />
                    <Route path="/dashboard" element={<AccountDashboard />} />
                    <Route path='/accountInfo' element={<UserInformation />} />
                    <Route path='/address' element={<AddressBook />} />
                    <Route path="/signup" element={<FormSignUp />} />
                    <Route path="/login" element={<FormLogin />} />

                    <Route path="/shop" 
                        element={<Product 
                            title={ "Products" } 
                            url={"products"}
                            productUrlProp={`/products/paginated-all`}
                            isEditable={false}
                            isId={false}
                        />} 
                    />
                    <Route path="/shop/products/:id" element={<SingleProduct /> } />
                    
                    <Route path="favorites" 
                        element={<Product 
                            title={ "Subcategory" }
                            url={"favorites"}
                            displayCategories={false}
                            isEditable={true}
                            isId={false}
                        />} 
                    />
                    <Route path="favorites/:id" element={<SingleProduct />} />

                    <Route path="*" element={<Page404 />} />
                    <Route path='/accountInfo' element={<UserInformation />} />

                    <Route path="categories/viewByCategory/:id" element={<Subcategory 
                        title={"Subcategories"}
                        url={`/subcategory/viewByCategory`}
                    />} />

                    <Route path="categories/subcategories/:id/shop" element={<Product 
                            title={"Products"}
                            url={"products"}
                            productUrlProp={`/products/subcategory`}
                            isEditable={false}
                            isId={true}
                        />}
                    />
                    <Route path="categories/subcategories/:id/shop/products/:id" 
                           element={<SingleProduct /> } />

                </Routes>
                <BackToTop />  
                <Footer />     
            </Router>   
        </React.Fragment>  

    ); 
}

export default App;