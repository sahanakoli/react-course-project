/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({selectCourse, hoursRemaining, totalHours, totalPrice}) => {
    
    return (
        <div className="card w-72 bg-base-100 shadow-xl p-4 ml-8">
            <h3 className="text-lg text-blue-600 text-left font-bold">Credit Hour Remaining {hoursRemaining} hr</h3>
            <hr className="mt-4"></hr>
            <h1 className="text-xl font-bold mt-4 text-left">Course Name</h1>
            <ol className="list-decimal ml-6">
            {
                selectCourse.map((course) => (
                    <li className="text-left mt-2">{course.course_name}</li>
                ))
            }
            </ol>
            <hr className="mt-4"></hr>
            <h3 className="mt-4 text-base font-medium text-left">Total Credit Hour: {totalHours}</h3>
            <hr className="mt-4"></hr>
            <h3 className="mt-4 font-medium text-base text-left">Total Price: {totalPrice} USD</h3>
        </div>
    );
};

export default Cart;