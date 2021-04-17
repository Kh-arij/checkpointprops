import React from 'react'

function Profile(props) {
  
    const {fullName,profession,image,bio,handleName}  = props ;
    return (
        <div>
          <form>
  <div className="form-group">
    <h1 className="text-danger"> {fullName} </h1>
   
 
  </div>
  <div className="form-group">

    <img src={image}   style={{width:'400px',height:'400px',borderRadius:'10%'}} alt="profile" />
  </div>
  <br/>
  <label style={{color:'red',fontSize:'2rem',textTransform:'uppercase'}}> {profession} </label>
  
<br/>
  <button
     onClick={()  =>handleName("Arij Khaldi") }
  
  type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Profile
