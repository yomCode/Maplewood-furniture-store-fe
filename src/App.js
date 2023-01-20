import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackToTop from './components/BackToTopButton';
import Footer from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import HomePage from './screens/Home/Hompage';
import ContactUs from './screens/ContactUs/ContactUs';

function App(){
    return(
        <React.Fragment>
            <Router>
                <NavBar />
                <Routes>
                    <Route index element={<HomePage />  } />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/c" element={ <ContactUs /> } />

                </Routes>
                <BackToTop />  
                <Footer />     
            </Router>   
        </React.Fragment>  
    ); 
}

export default App;