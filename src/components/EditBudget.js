import React, { useState } from "react";

const EditBudget = (props) => {
  const [value, setValue] = useState(props.budget);
  return (
    <>
      <input
        required
        type='number'
        min='0'
        className='form-control mr-3'
        id='name'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type='button'
        className='btn btn-primary'
        onClick={(e) => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
