import React from "react";
import { Link } from "react-router-dom"   

// import FormLayout from "./Form";

const DepositAddComponent = () => {
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
                    <h3 className="card-title" style={{ textTransform: 'capitalize' }}>Add Deposit</h3>
                </div>
        
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
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
                       
                        <div className="col-md-6">
                            <label for="course" className="form-label">Amount</label>
                            <input type="text" name="course" className="form-control" id="" placeholder="amount"></input>
                        </div>
                    </div>

                   
                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <label for="address" className="form-label">Comment</label>
                            <textarea class="form-control" placeholder="address" row="3"></textarea>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <button className="btn btn-warning">Submit</button>
                            <Link to="/deposit" className="btn btn-secondary" style={{margin: "5px"}}>Back</Link>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    </section>
</div>       
    )
};

export default DepositAddComponent;