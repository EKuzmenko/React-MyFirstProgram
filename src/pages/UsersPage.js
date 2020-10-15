import React, {useState} from 'react';
import UsersContent from '../components/UsersContent';
import UsersMenu from '../components/UsersMenu';
import UsersModal from '../components/UsersModal';

function UsersPage() {
  const [isVisible2, setIsVisible2]=useState(false)
  const[counter2, setCounter2]=useState(0)

  return (
  
  <div className="users-page">  
    <h2>Users Page</h2> 
      <UsersMenu 
        counter2={counter2}
        setCounter2={setCounter2}
        isVisible2={isVisible2}
        setIsVisible2={setIsVisible2}
      />
      <UsersContent 
        counter2={counter2} 
      />
      <UsersModal 
        isVisible2={isVisible2}
        setIsVisible2={setIsVisible2}
      />
    </div>
  )
}


export default UsersPage;
