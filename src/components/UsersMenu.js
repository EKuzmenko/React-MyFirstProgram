import React from 'react';

function UsersMenu(props) {
  const{counter2, setCounter2, setIsVisible2}=props

  return (
    <div>
      <h3>Menu component</h3>
      <button onClick={()=>setCounter2(counter2 +5)}>
        add +5
      </button><br/>
      <button onClick={()=>setIsVisible2(true)}>
        open modal window
      </button>
    </div>
  );
}

export default UsersMenu;
