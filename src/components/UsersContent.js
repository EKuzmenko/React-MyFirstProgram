import React from 'react';

function UsersContent(props) {
  const{counter2}=props
  
  return (
    <div>
      <h3>Content</h3>
      Counter value: {counter2}
    </div>
  )
}

export default UsersContent;
