
import React from 'react';

function IncrementButton({ label, increment, onClick }) {
  return (
    <button onClick={() => onClick(increment)}>{label}</button>
  );
}

export default IncrementButton;
