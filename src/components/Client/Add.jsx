import React from "react";
import { Link } from "react-router-dom"   

// import FormLayout from "./Form";

const ClientAddComponent = () => {
  return(
    <div className="content-wrapper mt-3">
    <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                {/* <div className="col-sm-6">
                    <h4>Add Student</h4>
                </div> */}
            </div>
        </div>
    </section>
    
    <section className="content">
        <div className="container-fluid">
            <div className="card card-default">
                <div className="card-header">
                    <h3 className="card-title" style={{ textTransform: 'capitalize' }}>Add Client</h3>
                </div>
        
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <label for="course" className="form-label">Client Name</label>
                            <input type="text" name="course" className="form-control" id="" placeholder="name"></input>
                        </div>
                       
                        <div className="col-md-6">
                            <label for="course" className="form-label">Phone</label>
                            <input type="text" name="course" className="form-control" id="" placeholder="phone"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mt-2">
                            <label for="age" className="form-label">ID Number</label>
                            <input type="number" name="age" className="form-control" id="" placeholder="id number"></input>
                        </div>
                       
                        <div className="col-md-6 mt-2">
                            <label for="score" className="form-label">District</label>
                            <input type="text" name="score" className="form-control" id="" placeholder="district"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <label for="address" className="form-label">Address</label>
                            <textarea class="form-control" placeholder="address" row="3"></textarea>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button className="btn btn-warning">Submit</button>
                            <Link to="/client" className="btn btn-secondary" style={{margin: "5px"}}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </section>
</div>       
    )
};

export default ClientAddComponent;