import React from "react";
import { Link } from "react-router-dom"   

// import FormLayout from "./Form";

const DepositViewComponent = () => {
  return(
        <div className="content-wrapper mt-3">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h3>Manage Deposits</h3>
                        </div>
                        {/* <div className="col-sm-6">
                            <Link to="" type="button" class="btn btn-primary" style={{float: "right"}}>Add Student</Link>
                        </div> */}
                    </div>
                </div>
            </section>
    
            <section className="content mt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        {/* <div className="col-md-6">
                                            <h3 className="card-title">
                                                Students
                                            </h3>  
                                        </div> */}
                                        <div className="col-md-12">
                                            <Link to="/add-deposit" type="button" class="btn btn-primary" style={{float: "right"}}>Add Deposit</Link>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                            <th scope="col" width="5%">#</th>
                                            <th scope="col" width="25%">Client Name</th>
                                            <th scope="col" width="25%">Diposited Amount</th>
                                            <th scope="col" width="25%">Loan Balance</th>
                                            <th scope="col" width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>5000</td>
                                                <td>10000</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" style={{ fontSize: '10px' }}><i className="fa fa-pencil"  style={{ fontSize: '15px' }}></i></button>
                                                    <button type="button" className="btn btn-danger" style={{marginLeft: "5px",  fontSize: '10px'}}><i className="fa fa-trash" style={{ fontSize: '15px' }}></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>8000</td>
                                                <td>20000</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" style={{ fontSize: '10px' }}><i className="fa fa-pencil"  style={{ fontSize: '15px' }}></i></button>
                                                    <button type="button" className="btn btn-danger" style={{marginLeft: "5px",  fontSize: '10px'}}><i className="fa fa-trash" style={{ fontSize: '15px' }}></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>6000</td>
                                                <td>0</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" style={{ fontSize: '10px' }}><i className="fa fa-pencil"  style={{ fontSize: '15px' }}></i></button>
                                                    <button type="button" className="btn btn-danger" style={{marginLeft: "5px",  fontSize: '10px'}}><i className="fa fa-trash" style={{ fontSize: '15px' }}></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>    
    )
};

export default DepositViewComponent;