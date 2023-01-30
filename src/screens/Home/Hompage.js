import React from 'react';
import HeaderComponent from '../../components/Header';
import ProductOverview from '../../components/ProductOverview';
import BestSelling from '../../components/BestSelling';
import TestimonialComponent from '../../components/Testimonials';
import Features from '../../components/Features';


const HomePage = () =>{
    return( 
        <div>
            <HeaderComponent />
            <ProductOverview />
            < BestSelling />
            <TestimonialComponent />
            <Features />
        </div>

    );
}

export default HomePage;