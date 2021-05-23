import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddingListTable from '../AddingListTable/AddingListTable';
import './FormContent.css';

const FormContent = () => {
    const { register, handleSubmit} = useForm();
    const [addList, setAddList] = useState([]);

    const onSubmit = (data, e) => {
        e.preventDefault();
        
        const formData ={
            id: new Date().getTime(),
            userInput: data,
            completed: false
        }

        setAddList([...addList].concat(formData))
        // setInput("");
        e.target.reset();
    }
    return (
        <div className="main">
            <div className="card p-3">
                <form action="" className="d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3 align-items-center ">
                        <div className="col-auto">
                            <label for="Name" className="col-form-label">Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" name="name" {...register('name')} className="form-control" required />
                        </div>
                        <div className="col-auto">
                            <label for="Email" className="col-form-label">Email</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" name="email" {...register('email')} className="form-control" required />
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