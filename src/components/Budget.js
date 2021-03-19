import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'
import ViewBudget from './ViewBudget'
import EditBudget from './EditBudget'

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext)

    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(true)
    }

    

    return ( 
        <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                <EditBudget /> 
            ) : (
                <ViewBudget handleEditClick={handleEditClick} budget={budget}/>
            )}
        </div>
     );
}
 
export default Budget;