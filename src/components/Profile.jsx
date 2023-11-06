import React, { useContext } from 'react'
import { ProfileContext } from '../App';


    // Use the useContext hook to access the profileName state variable and its setter function from the context.
    function Profile() {
        const {profileName , setprofileName} = useContext(ProfileContext);


    // updates the profileName state variable with the entered value using the setter function.
    const profileNameHandler = (event) => {
        console.log(event.target.value);
        setprofileName(event.target.value);
    }


  return (
    <div>
        <h2> Profile Name : {profileName} </h2>

        {/* Render an input field where users can enter their profile name,  */}

        {/* with its value set to the profileName state variable. */}

        {/* Add an onChange event handler to the input field */}

        <input placeholder='Enter Your Profile Name' value = {profileName} onChange={profileNameHandler}
         />

    </div>
  )
}

export default Profile