/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({selectCourse, hoursRemaining, totalHours, totalPrice}) => {
    
    return (
        <div className="card w-72 bg-base-100 shadow-xl p-2 ml-8">
            <h3 className="text-lg text-blue-600">Credit Hours Remaining {hoursRemaining} hr</h3>
            <hr className="mt-4"></hr>
            <h1 className="text-xl font-medium mt-4 ">Course Name</h1>
            {
                selectCourse.map((course) => (
                    <li>{course.course_name}</li>
                ))
            }
            <hr className="mt-4"></hr>
            <h3 className="mt-4 text-base font-medium">Total Credit Hours: {totalHours}</h3>
            <hr className="mt-4"></hr>
            <h3 className="mt-3 font-medium text-base">Total Price: {totalPrice} USD</h3>
        </div>
    );
};

export default Cart;