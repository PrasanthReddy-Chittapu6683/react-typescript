import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
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
import { Counter } from './components/states/Counter';

import { ThemeContextProvider } from './components/context/ThemeContext'
import Box from './components/context/Box';

import { UserContextProvider } from './components/context/UserContext'
import UserDetails from './components/context/UserDetails';
import List from './components/generics/List';
import RandomNumber from './components/resctriction/RandomNumber';
import Toast from './components/templateliterals/Toast';
import CustomButton from './components/htmlElements/CustomButton';
import CustomInput from './components/htmlElements/CustomInput';


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
      <Greet isLoggedIn={true} name='Prasanth' messageCount={10}></Greet>
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

      <Counter></Counter>

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <UserDetails />
      </UserContextProvider>

      <List items={[{ id: 1, value: 'Thor' }, { id: 2, value: 'Iron Man' },
      { id: 3, value: 'Wonder Women' }]} onClick={(item) => alert(item)} />

      <RandomNumber value={10} isZero></RandomNumber>
      {/* Throws error :: 
       <RandomNumber value={10} isPositive isZero></RandomNumber>
      <RandomNumber value={10} isNegative isZero></RandomNumber> 
      */}

      <Toast toastPosition='center' />

      <CustomButton variant='primary' onClick={() => alert('Clicked !!!')}>
        {/* <div> Primary Button Text </div> */}
        Primary Button Text
      </CustomButton>
      <CustomInput variant='secondary' />
    </div>
  );
}

export default App;
