/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";
import {  FiDollarSign } from 'react-icons/fi';
import { LuBookOpen  } from 'react-icons/lu';
import Swal from 'sweetalert2/src/sweetalert2.js'



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
        return Swal.fire(
            'Already Select'
          )
      }
      else{

        selectCourse.forEach((item) => {
            hours = hours + item.credit_time;
            price = price + item.price;

        }); 
        const hourRemaining = 20 - hours;

        if(hours > 20){
          return Swal.fire(
            'Sorry, you can not add credit hour',
            'Your credit hour gater than 20 and your credit remaining hour less than 0'
          )
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
            <h1 className="text-3xl text-center font-bold mt-6">Course Registration</h1>
        <div className=" flex justify-around mt-10 ">
            <div className="grid grid-cols-3 gap-4 ">
            {
                allCourse.map((course) =>  (
                    <div className="card w-full bg-base-100 shadow-xl p-6">
                <figure className="rounded-lg "><img src={course.image} alt="" /></figure>
                <div className="mt-4">
                   <h2 className="card-title text-lg font-semibold text-left">{course.course_name}</h2>
                   <p className="text-base font-normal text-left mt-3">{course.details}</p>
                   <div className="flex mt-5">
                    <div className="flex mr-16">
                        <p className="mt-1"><FiDollarSign></FiDollarSign></p>
                        <p className="ml-4 text-base font-medium">Price: {course.price}</p>
                    </div>
                    <div className="flex">
                      <p className="mt-1"><LuBookOpen></LuBookOpen></p>
                      <p className="ml-4 text-base font-medium">Credit: {course.credit_time}hr</p>
                    </div>
                   </div>
                   <div className="card-actions justify-center mt-4 ">
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