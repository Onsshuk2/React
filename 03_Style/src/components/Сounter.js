
import React, { useState } from 'react';
import IncrementButton from './IncrementButton';  
function Counter() {
  const [count, setCount] = useState(0);  
  const handleClick = (increment) => {
    setCount(count + increment);  
  };

  return (
    <div className="counter">
      <h2>Лічильник: {count}</h2>
      <IncrementButton label="+10" increment={10} onClick={handleClick} />  {/* Кнопка +10 */}
      <IncrementButton label="-100" increment={-100} onClick={handleClick} />  {/* Кнопка -100 */}
      <IncrementButton label="+25" increment={25} onClick={handleClick} />  {/* Кнопка +25 */}
      <IncrementButton label="-5" increment={-5} onClick={handleClick} />  {/* Кнопка -5 */}
    </div>
  );
}

export default Counter;

