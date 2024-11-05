import React from 'react';

const HelloComponent = ({ name, children }) => {
  return (
    <>
      {children} {name}
    </>
  );
};

export default HelloComponent;