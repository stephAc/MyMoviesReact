import React from 'react';

const style = {
  borderRadius: '50%',
  height: '50px',
  width: '50px',
  border: 'none',
  boxShadow: '0px 0px 10px 4px rgba(119, 119, 119, 0.75)',
  opacity: '0.5',
  right: '50px',
  bottom: '50px',
  position: 'fixed',
  diplay: 'none',
};

export default () => (
  <button style={style} type="button" onClick={topFunction} id="returnTopBtn">
    >>
  </button>
);

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera);
};