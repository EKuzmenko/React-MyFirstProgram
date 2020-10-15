import React, {useState, useEffect} from 'react';
import AboutContent from '../components/AboutContent';
import AboutMenu from '../components/AboutMenu';
import AboutModal from '../components/AboutModal';

function AboutPage() {
  const [isVisible, setIsVisible]=useState(false)
  const[counter, setCounter]=useState(0)

  const[counterFunc, setCounterFunc]=useState(0)
  const[modalFunc, setModalFunc]=useState(0)

  useEffect(()=>{

    if (isVisible){
      setCounter(0)
      //setModalFunc(modalFunc+1)
    }
    if(counter>=10){
      setIsVisible(true)
      //setCounterFunc(counterFunc+1)
    }
  },[isVisible,counter])

  // useEffect(()=>{
  //   if (!isVisible){
  //      setCounter(0)
  //   }
  // },[isVisible])

  // useEffect(()=>{
  //   if(counter>=10){
  //     setIsVisible(true)}
  // },[counter])

  return (
    <div className="about-page">    
    <h2>About Page</h2> 
      <AboutMenu 
        counter={counter}
        setCounter={setCounter}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <AboutContent 
        counter={counter} 
      />
      <AboutModal 
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        counterFunc={counterFunc}
        setCounterFunc={setCounterFunc}
        modalFunc={modalFunc}
        setModalFunc={setModalFunc}
      />
      
    </div>
  );
}

export default AboutPage;
