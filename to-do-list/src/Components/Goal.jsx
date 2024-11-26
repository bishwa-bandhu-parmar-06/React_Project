import React from 'react'
import "../styles/goal.css"
const Goal = ({title, description, deleteGoal, index,editGoal}) => {
  return (
    <div className='task'>
        <div className="text">
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </div>

        <div className="edit">
            <button onClick={() =>deleteGoal(index)}>❌</button>
            <button onClick={editGoal}>✎</button>
        </div>
    </div>
  )
}

export default Goal