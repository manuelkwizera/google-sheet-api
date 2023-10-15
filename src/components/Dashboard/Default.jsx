import React from "react";
import { Link } from "react-router-dom"   

// import FormLayout from "./Form";

const Dashboard = () => {
  return(
        <div className="content-wrapper mt-3">
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
                                            <Link to="/create-loan" type="button" class="btn btn-primary" style={{float: "right"}}>Add Loan</Link>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="card-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
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

export default Manage_Loan;