import React from 'react';
import dental from '../../../images/dentalCare.png'

const FeaturedDetail = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5 ">
          <div className="container mb-5 ">
            <div className="row mb-5">
            <div className="col-md-5 mb-4 m-md-0">
                <img className="img-fluid" src={dental} alt=""/>
            </div>
            <div className="col-md-7 align-self-center">
                <h2>Exceptional Dental <br/> Care, on Your Terms </h2>
                <p className="text-secondary my-5" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora adipisci a deleniti cupiditate maxime expedita minima corporis aliquid labore delectus.</p>
                <button className="btn-brand">Learn More</button>
            </div> 
            </div>
          </div>
        </section>
    );
};

export default FeaturedDetail;