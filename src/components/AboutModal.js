import React from 'react';

function AboutModal(props) {
  const { isVisible, setIsVisible } = props;
  const { counterFunc} = props;
  const { modalFunc } = props;
  
  if (isVisible) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          Модальное окно на About Page <br />
          <button onClick={() => setIsVisible(false)}>
            Close
            </button>
          <br />
          Function Counter: {counterFunc}<br />
          Function Modal is Visible: {modalFunc}<br />
        </div>
      </div>
    )
  }
  else {
    return null
  }
}

export default AboutModal;
