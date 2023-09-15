/* eslint-disable no-undef */

/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";


const Course = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);


    useEffect(() =>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setAllCourse(data))
    }, [])
    console.log(allCourse);
    const handleSelectCourse = (course) =>{
      console.log(course);
      setSelectCourse([...selectCourse, course])
    }
    console.log(selectCourse);
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-12">Course Registration</h1>
        <div className=" flex justify-between mt-8">
            <div className="grid grid-cols-3 gap-4">
            {
                allCourse.map((course) => (
                    <div className="card w-80 bg-base-100 shadow-xl p-2">
                <figure className=""><img src={course.image} alt="" /></figure>
                <div className="card-body">
                   <h2 className="card-title text-xl font-medium">{course.course_name}</h2>
                   <p className="text-lg">{course.details}</p>
                   <div className="flex justify-between">
                    <p>Price: {course.price}</p>
                    <p>Credit: {course.credit_time}hrs</p>
                   </div>
                   <div className="card-actions justify-end">
                       <button onClick={() => handleSelectCourse(course)} className="btn btn-primary">Select</button>
                   </div>
                </div>
            </div>
                ))
            }
            </div>
            <div>
                <Cart selectCourse={selectCourse}></Cart>
            </div>
            
        </div>
        </div>
    );
};

export default Course;