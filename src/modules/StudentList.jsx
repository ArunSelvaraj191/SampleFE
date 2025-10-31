import { useState } from "react";

const StudentList = () => {
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState({ student_name: "", student_age: "" });
  // const handleChangeName = (event) => {
  //   console.log("Name :", event.target.value);
  // };
  // const handleChangeAge = (event) => {
  //   console.log("Age : ", event.target.value);
  // };
  const handleChange = (event) => {
    console.log("Common Fn :", event.target.name, event.target.value);
    setStudent({ ...student, [event.target.name]: event.target.value });
  };
  const handleStudent = () => {
    console.log("student :::", student);
    setStudentList([...studentList, student]);
  };
  console.log("studentList ::", studentList.length);
  return (
    <div>
      <div>
        <h1>Student List Component</h1>
        <div>
          <input
            name="student_name"
            type="text"
            placeholder="Enter Student Name"
            // onChange={handleChangeName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="student_age"
            type="number"
            placeholder="Enter Student Age"
            // onChange={handleChangeAge}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleStudent}>Add Student</button>
      </div>
      {studentList?.length > 0 &&
        studentList.map((student, index) => {
          return (
            <div key={index}>
              Name : {student.student_name} , Age : {student.student_age}
            </div>
          );
        })}
    </div>
  );
};

export default StudentList;
