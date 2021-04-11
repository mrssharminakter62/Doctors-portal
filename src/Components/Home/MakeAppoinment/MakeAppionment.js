import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppionment.css'

const MakeAppionment = () => {
    return (
        <section className="make-appoinment" >
            <div className="container">
                <div className="row">
                <div className="col-md-5  d-none d-md-block">
                <img  src={doctor} alt=""/>
                </div>
                <div className="col-md-7 text-white py-5">
                    <h4 style={{color: '#1CC7C1'}}>APPIONMENT</h4>
                    <h1>Make an appionment<br/> Today </h1>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sapiente?.</p>
                    <button className="btn-primary">Learn More</button>
                </div> 
                </div>
          </div>
        </section>
    );
};

export default MakeAppionment;