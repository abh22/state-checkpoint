// import logo from './logo.svg';
import './App.css';
import { Component } from "react";



import ProfileList from './components/ProfileList';
import mypic from './images/me.jpg'
class App extends Component{
 
state={
  persons:[{
fullName: 'Farah abdelhedi',
profession:'Student',
bio: 'I am learning React js',
imgSrc: mypic,
shows:true
  },
  
  {fullName: 'Anes hadj khalifa',
  profession:'Student',
  bio: 'I am learning HTML/CSS',
  // imgSrc: ,
  shows:true
  },
  
  {fullName: 'Nacer Mediouni',
  profession:'Instructor',
  bio: 'I am a part time Instructor and a full time front-end developer',
  // imgSrc: ,
  shows:false
  },
  {fullName: 'Farah',
  profession:'Student',
  bio: 'I am learning Vanilla JS',
  imgSrc: mypic,
  shows:false
  }
],
count:0,
 intervalId: 0 
};
handleShow = (fullName) => {
  this.setState({
    persons: this.state.persons.filter((person) => {
      return person.shows === true;
    }),
  });
};
componentDidMount() {
  const newIntervalId = setInterval(() => {
    this.setState(prevState => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  }, 1000);

  this.setState(prevState => {
    return {
      ...prevState,
      intervalId: newIntervalId,
    };
  });
}


render(){
  return (
  <div className='App'>

    <div className='App-header'> React State Checkpoint-Class Component
    </div>
    <button onClick={() =>this.handleShow(this.state.fullName)}>show</button>
  <div>
<ProfileList persons={this.state.persons}
/>
    </div>
    <field>The component has been rendered for {this.state.count} seconds</field>
    </div>)
 
}


}

export default App;
