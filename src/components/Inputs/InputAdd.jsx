import React, { useRef } from 'react';

const InputAdd = (props) => {
  return (
    <input className='w-full px-4 py-1 border rounded-[50px] ' 
    value={props.value}
    onChange={(e) => {props.mudar(e)}} 
    type={props.type} placeholder={props.placeholder}/>
  );
};

export default InputAdd;