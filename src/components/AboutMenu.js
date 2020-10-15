import React from 'react';

function AboutMenu(props) {
  const{counter, setCounter, setIsVisible}=props

  return (
    <div>
      <h3>Menu component</h3>
      <button onClick={()=>setCounter(counter +1)}>
        add +1
      </button><br/>
      <button onClick={()=>setIsVisible(true)}>
        open modal window
      </button>
      
    </div>
  );
}

export default AboutMenu;
