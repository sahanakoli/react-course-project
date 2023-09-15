/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({selectCourse}) => {
    console.log(selectCourse);
    return (
        <div className="  ">
            
            <h1 className="text-3xl font-medium underline ">Course Name</h1>
            {
                selectCourse.map((course) => (
                    <li>{course.course_name}</li>
                ))
            }
        </div>
    );
};

export default Cart;