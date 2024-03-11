import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
{/* <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"> */}
{/* <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script> */}
{/* <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> */}


const Receipt = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <address>
                                <strong>DOCEASE Heathcare</strong>
                                <br />
                                2135 Sunset Blvd
                                <br />
                                Los Angeles, CA 90026
                                <br />
                                <abbr title="Phone">P:</abbr> (213) 484-6829
                            </address>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                            <p>
                                <em>Date: 25st January, 2024</em>
                            </p>
                            <p>
                                <em>Receipt #: 34522677W</em>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <h1>Receipt</h1>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th className="text-center">Patient Full Name</th>
                                    <th className="text-center">Doctor Full Name</th>
                                    <th className="text-center">Date</th>
                                    <th className="text-center">Slot</th>
                                    <th className="text-center">Price</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="col-md-9"><em>Pediatrics Department</em></td>
                                    <td className="col-md-1" style={{ textAlign: 'center' }}> Le Thi Thanh Phuong </td>
                                    <td className="col-md-1 text-center">Le Hai Yen</td>
                                    <td className="col-md-1 text-center">1/30/2024</td>
                                    <td className="col-md-1 text-center">2</td>
                                    <td className="col-md-1 text-center">300,000</td>
                                </tr>
                                
                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td className="text-right"><h4><strong>Total: </strong></h4></td>
                                    <td className="text-center text-danger"><h4><strong>300,000</strong></h4></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-success btn-lg btn-block">
                            Pay Now   <span className="glyphicon glyphicon-chevron-right"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Receipt;
