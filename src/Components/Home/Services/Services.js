import React from 'react';
import fluride from '../../../images/fluride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData = [
{
    name: 'Fluride Treatment',
    img: fluride
},
{
    name: 'Cavity Filling',
    img: cavity
},
{
    name: 'Teet Whitening',
    img: whitening
}

]

const Services = () => {
    return (
    <section className="services-container mt-5">
      <div className="text-center">
      <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
      <h1>Services  We Provide</h1>
      </div>
      <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
          {
           serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
      }
     
          </div>
      </div>
    </section>
    );
};

export default Services;