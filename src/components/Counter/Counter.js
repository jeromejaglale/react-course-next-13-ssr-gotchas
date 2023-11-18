'use client';
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  // on client, on page load, get count from local storage
  React.useEffect(() => {
    const savedCount = window.localStorage.getItem('saved-count');

    if(savedCount === null) {
      return;
    }
    
    setCount(Number(savedCount));
  }, []);

    // whenever count is changed, update local storage accordingly
  React.useEffect(() => {
    window.localStorage.setItem('saved-count', count);
  }, [count]);

  return (
    <button
      className="count-btn"
      onClick={() => {
          const nextCount = count + 1;
          setCount(nextCount);
        }
      }  
    >
      Count: {count}
    </button>
  );

}

export default Counter;
