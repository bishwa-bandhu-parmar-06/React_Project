import React, { useEffect, useState } from 'react'
import Goal from './Goal'
import "../styles/home.scss"

const Home = () => {

  const initialArray = localStorage.getItem("goals")?JSON.parse(localStorage.getItem("goals")) : [];
  const [goals, setGoals] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);  // New state to check if editing
  const [currentIndex, setCurrentIndex] = useState(null);  // New state to track the goal index being edited
  // console.log([...goals])
  const submitHandler = (e) => {
    e.preventDefault();

    if (isEditing && currentIndex !== null) {
      // Update the existing goal
      const updatedGoals = goals.map((goal, index) => 
        index === currentIndex ? { title, description } : goal
      );
      setGoals(updatedGoals);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      // Add a new goal
      setGoals([...goals, { title, description }]);
    }

    setTitle("");
    setDescription("");

    // localStorage.setItem("goals",JSON.stringify(goals));
  };
  const deleteGoal = (index) => {
    const filteredArr = goals.filter((val, i) => {
      return i !== index;
    })
    // console.log(filteredArr);
    setGoals(filteredArr);
  };

  const editGoal = (index) => {
    const goalToEdit = goals[index];
    setTitle(goalToEdit.title);
    setDescription(goalToEdit.description);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    localStorage.setItem("goals",JSON.stringify(goals));
  },[goals])

  return (
    <>
        <h1 className='heading'>Daily Goals </h1>
        <form className="box" onSubmit={submitHandler}>
          <input type="text" placeholder='Enter today goal title....' className='inputbox' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <textarea type="textarea" placeholder='Enter today goal Description....' className='descriptionbox' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button type='submit' className='subbtn'>{isEditing ? "Update Goal" : "Add Goal"}</button>
        </form>
        
        {goals.map((item, index) =>{
            return(
              <Goal key={index} title={item.title} description={item.description}
              deleteGoal={deleteGoal}
              index={index}
              editGoal={() => editGoal(index)}
              />
            )
          })
        }

    </>
  )
}

export default Home