import React from 'react';

const MyPara = (props) => {
    console.log('para running')
  return <p>{props.show ? 'a new paragraph' : ''}</p>;
};

export default MyPara;
