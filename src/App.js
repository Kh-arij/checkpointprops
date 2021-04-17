import './App.css';
import Profile from './profile/component/Profile';
import profileimg from './images/profile.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

var name = "Arij Khaldi"

function App() {
  const  handleName = (name)  => {
    alert("this is ",name)
  }

  return (
    <div className="App">
      

   <Profile   
       bio="any thing"
     fullName="Arij Khaldi"
     profession="full stack MERN"
     image={profileimg}
     handleName={handleName}
   />

            
    </div>
  );
}

export default App;
