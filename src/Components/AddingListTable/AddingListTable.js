import React from 'react';

const AddingListTable = ({ addList, setAddList }) => {

    return (
        <div className="adding-list">
            <div className="card p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        addList.map(userData =>
                            <tbody>
                                <tr>
                                    <th>{userData.name}</th>
                                    <th>{userData.email}</th>
                                    <th>
                                        <button className="btn btn-danger">Delete</button>
                                    </th>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AddingListTable;