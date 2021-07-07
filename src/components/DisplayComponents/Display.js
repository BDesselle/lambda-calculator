import React from "react";

const Display = ({ total }) => {
  const style_Display = {
    margin: 'auto',
    display: 'block',
    background: '#24292e',
    width: '375px',
    height: '90px',
    borderRadius: '50px',
    color: '#fff',
    fontSize: '55px',
    textAlign: 'center',
    padding: '5px',
  }

  return <div style={style_Display}>{total}</div>;
};

// Exporting the {Display} component using the `export` keyword
export default Display;