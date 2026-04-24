import React from 'react'
function Props({ name, rollno, course }) {
  return (
    <>
      <h2>{name}</h2>
      <h3>{rollno}</h3>
      <h3>{course}</h3>
    </>
  );
}

export default Props;