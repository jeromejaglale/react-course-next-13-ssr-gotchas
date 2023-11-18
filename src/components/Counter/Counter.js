'use client';
import React from 'react';
import Spinner from '../Spinner';

function Counter() {
  const [count, setCount] = React.useState(null);

  // on client, on page load, get count from local storage
  React.useEffect(() => {
    const savedCount = window.localStorage.getItem('saved-count');
    
    setCount(savedCount ? Number(savedCount) : 0);
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
      Count: {' '}
      {typeof count === 'number' ? count : <Spinner />}
    </button>
  );

}

export default Counter;
