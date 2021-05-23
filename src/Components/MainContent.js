import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className="main">
            <div className="card p-3">
                <form action="" className="d-flex justify-content-center">
                    <div className="row g-3 align-items-center ">
                        <div className="col-auto">
                            <label for="Name" className="col-form-label">Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-auto">
                            <label for="Email" className="col-form-label">Email</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" required />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success">ADD ME</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="card p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Atiqur Rahman</th>
                            <th>Atiq.juwel91@gmail.com</th>
                            <th>
                                <button className="btn btn-danger">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MainContent;