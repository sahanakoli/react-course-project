# Project Features
- Users can selected the course.
- Users can selected more than one course.But users one course can not be selected more than once.
- The selected course name will see in at cart.
- Users can selected maximum 20 credit hour.
- Credit hour and credit remaining hour will see in at cart.

# The state management of my project
I have used state in my project.At first,i used useEffect. I fetch the fake data using the useEffect.
Then shows the project data in website. Then i used useState to set the data.UseState takes two initial value.First hold current value and second setState value to trigger a re-render of the component. Called the all data with useState and took an empty array as the initial value.I have set the fetch data using useState. Shows the set data using map and forEach method. Again set the credit hours, price and remaining hours data with two initial value using useState.Then shows the credit hours, price and remaining hours data in cart. This is how i have done the state management in my project.