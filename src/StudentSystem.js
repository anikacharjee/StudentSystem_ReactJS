import React, {useState} from 'react';

const StudentSystem = () => {
  //State to store the list of students
  const [students, setStudents] = useState([
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'John Smith'},
    {id: 3, name: 'Jane Johnson'}
  ]);

  //State to track the name of the new student being added to the list
  const [newStudentName, setNewStudentName] = useState('');

  //function to handle a new student to the list
  const handleAddStudent = () => {
    if(newStudentName.trim() === '') return;

    //create a new student object with a unique id
    const newStudent = {
      id: new Date().getTime(),
      name: newStudentName,
    };

    //Update the state with the new student added to the list
    setStudents([...students, newStudent]);

    //Clear the input field for the next new student to be added in the list
    setNewStudentName('');
  };

  //JSX structure
  return(
    <div>
      <h1> Student Management System </h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <div style={{ position: 'relative', margin: '20px' }}>
        <input type="text" placeholder="Enter Student Name" value={newStudentName}
        onChange={(e) => setNewStudentName(e.target.value)}
        style={{
          width: '200px',
          padding: '10px',
          marginBottom: '10px',
        }}
        />
         <span style={{ margin: '0 5px'}}></span>
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
    </div>
  );
};

export default StudentSystem;