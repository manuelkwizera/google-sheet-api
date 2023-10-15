import React from "react";
import { Link } from "react-router-dom"   

// import FormLayout from "./Form";

const CreateLoan = () => {
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
                    <h3 className="card-title" style={{ textTransform: 'capitalize' }}>Add Loan</h3>
                </div>
        
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="course" className="form-label">Client Name</label>
                                <select className="form-control select2" style={{ width: "100%" }}>
                                    <option selected="selected" disabled>Select</option>
                                    <option>Alaska</option>
                                    <option>California</option>
                                    <option>Delaware</option>
                                    <option>Tennessee</option>
                                    <option>Texas</option>
                                    <option>Washington</option>
                                </select>
                            </div>
                        </div>
                       
                        <div className="col-md-6">
                            <label for="course" className="form-label">Phone</label>
                            <input type="text" name="course" className="form-control" id="" placeholder="phone"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mt-2">
                            <label for="age" className="form-label">Amount</label>
                            <input type="number" name="age" className="form-control" id="" placeholder="amount"></input>
                        </div>
                       
                        <div className="col-md-6 mt-2">
                            <label for="score" className="form-label">Intrest</label>
                            <input type="number" name="score" className="form-control" id="" placeholder="intrest"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mt-2">
                            <label for="age" className="form-label">Date</label>
                            <input type="date" name="age" className="form-control" id="" placeholder="amount"></input>
                        </div>
                       
                        <div className="col-md-6 mt-2">
                            <label for="course" className="form-label">Payment Frequency</label>
                            <select className="form-control select2" style={{ width: "100%" }}>
                                <option selected="selected" disabled>Select</option>
                                <option>Montly</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button className="btn btn-warning">Submit</button>
                            <Link to="/manage-loan" className="btn btn-secondary" style={{margin: "5px"}}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </section>
</div>       
    )
};

export default CreateLoan;