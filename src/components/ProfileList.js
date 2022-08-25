import React from 'react'
import Profile from "./Profile"
import './Profile.css'


const ProfileList= ({persons}) => {
 

  return (
    <div>
      <div className='card'>
      {persons.map((person) => (
         
           <Profile
            person={person}
        
           /> ))}

          </div>
 
          </div>
        );
      };

export default ProfileList