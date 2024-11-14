import React from 'react';

const GridSection = ({ children }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh", width: "100%" }}>
      {children}
    </div>
  );
};

export default GridSection;
