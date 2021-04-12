import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-4 pr5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor </h5>

                <form 
                // onSubmit={handleSubmit}
                >

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" placeholder="Enter email"/>
                       
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" placeholder="Enter Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange}  type="file" class="form-control" placeholder="picture"/>
                    </div>

                       
                        <button onChange={handleChange} type="submit" class="btn btn-primary">Submit</button>
                    </form>
               </div>
        </section>
    );
};

export default AddDoctor;