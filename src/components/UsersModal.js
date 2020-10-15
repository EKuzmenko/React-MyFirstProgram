import React from 'react';

function UsersModal(props) {
  const { isVisible2, setIsVisible2 } = props;

    if (isVisible2) {
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
            Модальное окно на Users Page<br />
            <button onClick={()=>setIsVisible2(false)}>
              Close
            </button>
          </div>
        </div>
      )
    }
    else {
      return null
    }
}

export default UsersModal;
