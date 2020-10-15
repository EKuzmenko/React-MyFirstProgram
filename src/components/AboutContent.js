import React from 'react';

function AboutContent(props) {
  const{counter}=props
  
  return (
    <div>
      <h3>Content</h3>
      Counter value: {counter}
    </div>
  )
}

export default AboutContent;
