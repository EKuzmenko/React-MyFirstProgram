import React from 'react';
import page_404 from '../../src/img/page_404.png';
import {
  useLocation
} from "react-router-dom";

function Nomatch() {
  let location = useLocation();

  return (
    <div>
      <h2>
          Упс.... Страницы <code>{location.pathname} не найдено.</code>
      </h2>
      <div className="page_404Div">
      <img src={page_404} className="page_404" alt='page 404'/>
      </div>
    </div>
  );
}

export default Nomatch;
