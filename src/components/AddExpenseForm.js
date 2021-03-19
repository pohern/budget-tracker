import React, { useState } from 'react';

const AddExpenseForm = () => {
    const [name, setName] = useState('')
    const [cost, setCost] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        alert('name ' + name + ' cost ' + cost)
    }

    return (
      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='col-sm'>
            <label for='name'>Name</label>
            <input
              required='required'
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className='col-sm'>
            <label for='cost'>Cost</label>
            <input
              required='required'
              type='text'
              className='form-control'
              id='cost'
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            ></input>
          </div>
          <div className='col-sm'>
            <button type='submit' className='btn btn-primary'>
              Save
            </button>
          </div>
        </div>
      </form>
    );
}
 
export default AddExpenseForm;