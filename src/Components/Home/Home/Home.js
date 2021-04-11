import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedDetail from '../FeaturedDetail/FeaturedDetail';
import Header from '../Header/Header';
import MakeAppionment from '../MakeAppoinment/MakeAppionment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedDetail></FeaturedDetail>
            <MakeAppionment></MakeAppionment>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;