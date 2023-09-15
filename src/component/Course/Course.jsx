/* eslint-disable no-undef */

/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";
import {  FaDollarSign } from 'react-icons/fa';
import { LuBookOpen  } from 'react-icons/lu';



const Course = () => {
    const [allCourse, setAllCourse] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    const [hoursRemaining, setHoursRemaining] = useState(20);
    const [totalHours, setTotalHours] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() =>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setAllCourse(data))
    }, [])
    
    const handleSelectCourse = (course) =>{
      const isCourse = selectCourse.find((item) => item.id == course.id); 
      
      let hours = course.credit_time;
      let price = course.price;
      
      if(isCourse){
        return alert("Already Select");
      }
      else{

        selectCourse.forEach((item) => {
            hours = hours + item.credit_time;
            price = price + item.price;

        }); 
        const hourRemaining = 20 - hours;

        if(hours > 20){
          return alert('Sorry')
        }
        else{
            setTotalPrice(price);
            setTotalHours(hours);
            setHoursRemaining(hourRemaining);
            setSelectCourse([...selectCourse, course]);
        }
      }
      
    }
   
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-12">Course Registration</h1>
        <div className=" flex justify-around mt-8 ">
            <div className="grid grid-cols-3 gap-4 ">
            {
                allCourse.map((course) =>  (
                    <div className="card w-full bg-base-100 shadow-xl">
                <figure className="rounded-lg ,"><img src={course.image} alt="" /></figure>
                <div className="card-body">
                   <h2 className="card-title text-lg font-medium ">{course.course_name}</h2>
                   <p className="text-sm font-normal">{course.details}</p>
                   <div className="flex justify-between">
                    <div className="flex">
                        <p className="mt-1"><FaDollarSign></FaDollarSign></p>
                        <p className="ml-3 text-base font-normal">Price: {course.price}</p>
                    </div>
                    <div className="flex">
                      <p className="mt-1"><LuBookOpen></LuBookOpen></p>
                      <p className="ml-3 text-base font-normal">Credit: {course.credit_time}hrs</p>
                    </div>
                   </div>
                   <div className="card-actions justify-center ">
                       <button onClick={() => handleSelectCourse(course)} className="btn btn-primary w-full mb-0">Select</button>
                   </div>
                </div>
            </div>
                ))
            }
            </div>
            <div>
                <Cart 
                selectCourse={selectCourse}
                hoursRemaining={hoursRemaining}
                totalHours={totalHours}
                totalPrice={totalPrice}
                ></Cart>
            </div>
            
        </div>
        </div>
    );
};

export default Course;