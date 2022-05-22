import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypingProps1 from './components/TypingProps1';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personNameDetails = {
    fName: 'Prasanth',
    lName: 'CV'
  }
  const nameList = [
    {
      fName: 'Prasanth',
      lName: 'CV'
    },
    {
      fName: 'John',
      lName: 'D'
    },
    {
      fName: 'Clark',
      lName: 'Kent'
    }
  ]
  return (
    <div className="App">
      <TypingProps1 isLoggedIn={true} name='Prasanth' messageCount={10}></TypingProps1>
      <Person personObject={personNameDetails}></Person>
      <PersonList names={nameList}></PersonList>
    </div>
  );
}

export default App;
