import React, { useState } from 'react';
import AddingListTable from '../AddingListTable/AddingListTable';
import './FormContent.css';

const FormContent = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [addList, setAddList] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        
        const formData ={
            id: new Date().getTime(),
            name: input1,
            email: input2,
            completed: false
        }

        setAddList([...addList].concat(formData))
        setInput1('');
        setInput2('');
    }
    return (
        <div className="main">
            <div className="card p-3">
                <form action="" className="d-flex justify-content-center" onSubmit={handleSubmit}>
                    <div className="row g-3 align-items-center ">
                        <div className="col-auto">
                            <label for="Name" className="col-form-label">Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" name="name" onChange={(e)=> setInput1(e.target.value)} value={input1} className="form-control" required />
                        </div>
                        <div className="col-auto">
                            <label for="Email" className="col-form-label">Email</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" name="email" onChange={(e)=> setInput2(e.target.value)} value={input2} className="form-control" required />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success">ADD ME</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="addListCard">
                <AddingListTable addList={addList} setAddList={setAddList}></AddingListTable>
            </div>
        </div>
    );
};

export default FormContent;