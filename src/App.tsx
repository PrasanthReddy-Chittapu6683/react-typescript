import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypingProps1 from './components/TypingProps1';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import ButtonComponent from './components/ButtonComponent';
import Input from './components/Input';
import { Container } from './components/container';
import LoggedIn from './components/states/LoggedIn';
import User from './components/states/User';

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
      <Status status='loading'></Status>
      <Heading>
        Placeholder tp pass childer as a Props
      </Heading>
      <Oscar>
        <Heading>
          Passing Header Component as Props
        </Heading>
      </Oscar>
      <ButtonComponent handleButtonEventClick={(event, id) => {
        alert(`Event Button clicked ${event} - ID - ${id}`)
      }} handleButtonClick={() => {
        alert('Button Clicked')
      }} />

      <Input value='Text' onChangeHandler={(event) => {
        alert(`Change Event - ${event.target.value}`)
      }} />


      <Container styles={{ border: '1px solid red', padding: '1rem', backgroundColor: 'red' }} />

      <LoggedIn></LoggedIn>
      <User ></User>

    </div>
  );
}

export default App;
