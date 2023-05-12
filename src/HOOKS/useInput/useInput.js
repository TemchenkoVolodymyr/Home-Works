import React, {useState} from 'react';

// Это хук, который дает нам возможность подставлять под каждый интуп свой value и делать его независимым
const useInput = (initialValue) => {

  const [value,setValue] = useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }
  return {
    value,onChange
  }

};

export default useInput;