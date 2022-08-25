import React from 'react'
import './Profile.css'
const Profile = ({person}) => {
  return (
   
    <div className='container'>
        <p>FULL NAME: <span style={{color:'black'}}>{person.fullName}</span></p>
        <p> BIO: <span style={{color:'black'}}>{person.bio}</span></p>
        <p> PROFESSION: <span style={{color:'black'}}>{person.profession}</span></p>
        <p> <img className='image' src={person.imgSrc} alt="profile"   /></p>
        
    
    </div>
  )
}

export default Profile